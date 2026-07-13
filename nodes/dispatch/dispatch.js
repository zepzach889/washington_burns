/* ═══════════════════════════════════════════════════════════════
   DISPATCH — Layer 3 live client
   Login illusion, device-local session, compose + post, and the
   merge of real posts (from the Signalworks service) into the
   daily generated feed. Loads AFTER content.js.

   The service URL below is read-safe. The account key is NEVER
   stored here — it lives only in the service and is typed by the
   user at login.
   ═══════════════════════════════════════════════════════════════ */

const DP_LIVE = {
  URL: 'https://script.google.com/macros/s/AKfycbzi8LiX2AUYC41FLGcdss6f6XqbjIJsKPgDPNA5O5O00EYvf9SsyEGubWyuH4un26NFHA/exec',
  SESSION_KEY: 'dispatch_session_v1'
};

/* ── SESSION (device-local) ─────────────────────────────────── */
/* Stores handle, display name, and key so a user stays "logged in"
   on this device. Key is kept only to auto-fill posting; it never
   leaves the device except in a post request the user initiates. */

function dpSession() {
  try { return JSON.parse(localStorage.getItem(DP_LIVE.SESSION_KEY) || 'null'); }
  catch (e) { return null; }
}
function dpSetSession(s) {
  try { localStorage.setItem(DP_LIVE.SESSION_KEY, JSON.stringify(s)); } catch (e) {}
}
function dpClearSession() {
  try { localStorage.removeItem(DP_LIVE.SESSION_KEY); } catch (e) {}
}

/* Resolve a handle against the fictional cast: known handles adopt
   the persona (display name, colour, verification). Unknown handles
   become new civilians with a generated colour. */
function dpResolveIdentity(handle, fallbackName) {
  const clean = String(handle || '').replace(/[^A-Za-z0-9_]/g, '');
  const cast = (typeof DP_CAST !== 'undefined') ? DP_CAST[clean] : null;
  if (cast) {
    return { handle: clean, name: cast.n, color: cast.c, verified: !!cast.v, dl: cast.dl || null, cast: true };
  }
  return { handle: clean, name: (fallbackName || clean), color: dpColorFor(clean), verified: false, dl: null, cast: false };
}
function dpColorFor(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360;
  return 'hsl(' + h + ', 42%, 42%)';
}

/* ── HEADER STATES ──────────────────────────────────────────── */

function dpRenderHeader() {
  const loginEl = document.querySelector('.dp-login');
  const postBtn = document.querySelector('.dp-postbtn');
  const pubbar = document.querySelector('.dp-pubbar-inner');
  const s = dpSession();

  if (s && s.handle) {
    const id = dpResolveIdentity(s.handle, s.name);
    if (loginEl) {
      const purl = dpBase() + '/nodes/dispatch/profile.html?handle=' + encodeURIComponent(id.handle);
      loginEl.outerHTML =
        '<div class="dp-userchip" id="dp-userchip">' +
          '<a class="dp-userchip-link" href="' + purl + '">' +
            '<span class="dp-userchip-av" style="background:' + id.color + ';">' + id.name.charAt(0).toUpperCase() + '</span>' +
            '<span class="dp-userchip-handle">+' + id.handle + '</span>' +
          '</a>' +
          '<span class="dp-userchip-logout" onclick="dpLogout()">Log out</span>' +
        '</div>';
    }
    if (postBtn) { postBtn.setAttribute('href', 'javascript:void(0)'); postBtn.onclick = dpOpenCompose; }
    if (pubbar) {
      pubbar.innerHTML = 'Posting as <b>+' + id.handle + '</b>' +
        (id.cast ? ' \u00b7 <span style="opacity:.8;">' + id.name + (id.verified ? ' \u2713' : '') + '</span>' : '') +
        ' \u2014 your posts appear in the live feed.';
    }
  } else {
    if (loginEl) { loginEl.setAttribute('href', 'javascript:void(0)'); loginEl.onclick = dpOpenLogin; }
    if (postBtn) { postBtn.setAttribute('href', 'javascript:void(0)'); postBtn.onclick = dpOpenLogin; }
  }
}

function dpLogout() { dpClearSession(); location.reload(); }

/* ── LOGIN MODAL ────────────────────────────────────────────── */

function dpOpenLogin() {
  dpModal(
    '<div class="dp-modal-title">Log in to Dispatch</div>' +
    '<div class="dp-modal-sub">Enter a handle and your account key. Cast handles adopt their persona automatically.</div>' +
    '<label class="dp-field-label">Handle</label>' +
    '<div class="dp-handle-wrap"><span class="dp-handle-sigil">+</span><input class="dp-input dp-input-handle" id="dp-in-handle" placeholder="yourhandle" autocomplete="off" spellcheck="false"></div>' +
    '<label class="dp-field-label">Display name <span class="dp-field-hint">(ignored for cast handles)</span></label>' +
    '<input class="dp-input" id="dp-in-name" placeholder="Your Name" autocomplete="off">' +
    '<label class="dp-field-label">Account key</label>' +
    '<input class="dp-input" id="dp-in-key" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="off">' +
    '<div class="dp-modal-error" id="dp-login-error"></div>' +
    '<button class="dp-modal-btn" id="dp-login-go" onclick="dpDoLogin()">Log in</button>',
    function afterOpen() {
      const h = document.getElementById('dp-in-handle');
      if (h) h.focus();
      // live preview of cast recognition
      if (h) h.addEventListener('input', function() {
        const nameField = document.getElementById('dp-in-name');
        const id = dpResolveIdentity(h.value, '');
        if (id.cast && nameField) { nameField.value = id.name; nameField.disabled = true; }
        else if (nameField) { nameField.disabled = false; }
      });
    }
  );
}

function dpDoLogin() {
  const handle = document.getElementById('dp-in-handle').value.replace(/[^A-Za-z0-9_]/g, '');
  const name = document.getElementById('dp-in-name').value.trim();
  const key = document.getElementById('dp-in-key').value;
  const errEl = document.getElementById('dp-login-error');
  const btn = document.getElementById('dp-login-go');

  if (!handle) { errEl.textContent = 'Enter a handle.'; return; }
  const id = dpResolveIdentity(handle, name);
  if (!id.cast && !name) { errEl.textContent = 'Enter a display name for a new handle.'; return; }
  if (!key) { errEl.textContent = 'Enter your account key.'; return; }

  btn.disabled = true; btn.textContent = 'Checking\u2026'; errEl.textContent = '';

  fetch(DP_LIVE.URL + '?action=verify&key=' + encodeURIComponent(key))
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data && data.ok) {
        dpSetSession({ handle: id.handle, name: id.name, key: key });
        dpCloseModal();
        location.reload();
      } else {
        btn.disabled = false; btn.textContent = 'Log in';
        errEl.textContent = 'Account key not recognized.';
      }
    })
    .catch(function() {
      btn.disabled = false; btn.textContent = 'Log in';
      errEl.textContent = 'Could not reach Dispatch. Try again.';
    });
}

/* ── COMPOSE MODAL ──────────────────────────────────────────── */

function dpOpenCompose() {
  const s = dpSession();
  if (!s) { dpOpenLogin(); return; }
  const id = dpResolveIdentity(s.handle, s.name);
  dpModal(
    '<div class="dp-compose-as">' +
      '<span class="dp-userchip-av" style="background:' + id.color + ';">' + id.name.charAt(0).toUpperCase() + '</span>' +
      '<span><span class="dp-dname">' + id.name + '</span>' + (id.verified ? '<span class="dp-check">\u2713</span>' : '') +
      '<br><span class="dp-meta">+' + id.handle + '</span></span>' +
    '</div>' +
    '<textarea class="dp-compose-text" id="dp-compose-text" maxlength="400" placeholder="Post to the feeds\u2026"></textarea>' +
    '<div class="dp-compose-row">' +
      '<input class="dp-input dp-compose-img" id="dp-compose-img" placeholder="image filename (optional)" autocomplete="off">' +
      '<span class="dp-compose-count" id="dp-compose-count">400</span>' +
    '</div>' +
    '<div class="dp-modal-error" id="dp-compose-error"></div>' +
    '<button class="dp-modal-btn" id="dp-compose-go" onclick="dpDoPost()">Post</button>',
    function afterOpen() {
      const t = document.getElementById('dp-compose-text');
      const c = document.getElementById('dp-compose-count');
      if (t) { t.focus(); t.addEventListener('input', function() { c.textContent = 400 - t.value.length; }); }
    }
  );
}

function dpDoPost() {
  const s = dpSession();
  if (!s) { dpOpenLogin(); return; }
  const id = dpResolveIdentity(s.handle, s.name);
  const text = document.getElementById('dp-compose-text').value.trim();
  const img = document.getElementById('dp-compose-img').value.trim();
  const errEl = document.getElementById('dp-compose-error');
  const btn = document.getElementById('dp-compose-go');

  if (!text) { errEl.textContent = 'Write something first.'; return; }
  btn.disabled = true; btn.textContent = 'Posting\u2026'; errEl.textContent = '';

  fetch(DP_LIVE.URL, {
    method: 'POST',
    body: JSON.stringify({ key: s.key, name: id.name, handle: id.handle, text: text, img: img })
  })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data && data.ok) {
        dpCloseModal();
        dpLoadLive(true);
      } else {
        btn.disabled = false; btn.textContent = 'Post';
        errEl.textContent = (data && data.error === 'bad key') ? 'Your session key was rejected. Log out and back in.' : 'Post failed. Try again.';
      }
    })
    .catch(function() {
      btn.disabled = false; btn.textContent = 'Post';
      errEl.textContent = 'Could not reach Dispatch. Try again.';
    });
}

/* ── LIVE POST FETCH + MERGE ────────────────────────────────── */
/* Live posts render as real cards and are merged into the feed by
   recency. Because generated posts use "Nm/Nh ago" relative times,
   live posts within the last ~18h interleave by their real age;
   older ones sort to the bottom. */

function dpProfileUrlLive(handle) {
  const base = (typeof dpBase === 'function') ? dpBase() : '/washington_burns';
  return base + '/nodes/dispatch/profile.html?handle=' + encodeURIComponent(String(handle).replace(/[^A-Za-z0-9_]/g, ''));
}

let _dpLiveCache = null;

function dpLoadLive(force) {
  const feedEl = document.getElementById('dp-feed');
  if (!feedEl) return;
  fetch(DP_LIVE.URL)
    .then(function(r) { return r.json(); })
    .then(function(data) {
      _dpLiveCache = (data && data.posts) ? data.posts : [];
      dpMergeLive();
    })
    .catch(function() { /* offline: generated feed stands alone */ });
}

function dpMergeLive() {
  const feedEl = document.getElementById('dp-feed');
  if (!feedEl || !_dpLiveCache || !_dpLiveCache.length) return;
  const now = Date.now();

  // Remove any previously injected live cards, then re-inject.
  feedEl.querySelectorAll('.dp-card-live').forEach(function(n) { n.remove(); });

  _dpLiveCache.forEach(function(p) {
    const id = dpResolveIdentity(p.handle, p.name);
    const ageMin = Math.max(1, Math.round((now - p.ts) / 60000));
    const card = document.createElement('div');
    card.className = 'dp-card dp-card-live';
    card.setAttribute('data-age', ageMin);
    const purl = dpProfileUrlLive(id.handle);
    card.innerHTML =
      '<div class="dp-row1">' +
        '<a class="dp-plink dp-av" href="' + purl + '" style="background:' + id.color + ';">' + id.name.charAt(0).toUpperCase() + '</a>' +
        '<div class="dp-who"><a class="dp-plink dp-dname" href="' + purl + '">' + dpTextSafe(id.name) + '</a>' +
          (id.verified ? '<span class="dp-check">\u2713</span>' : '') + '<br>' +
          (id.dl ? '<a class="dp-plink dp-dateline" href="' + purl + '">+' + id.handle.toUpperCase() + '</a><span class="dp-dateline"> \u00b7 ' + id.dl + '</span> <span class="dp-meta">\u00b7 ' + dpAgeLabel(ageMin) + '</span>'
                 : '<a class="dp-plink dp-meta" href="' + purl + '">+' + id.handle + '</a><span class="dp-meta"> \u00b7 ' + dpAgeLabel(ageMin) + '</span>') +
        '</div></div>' +
      '<div class="dp-text">' + dpTextSafe(p.text) + '</div>' +
      (p.img ? dpPhoto(p.img) : '') +
      '<div class="dp-actions"><span class="dp-relay">\u21bb Relay 0</span><span class="dp-nod">Nod 0</span><span class="dp-reply">Reply 0</span></div>';

    // insert by age among existing cards
    const cards = Array.prototype.slice.call(feedEl.children);
    let placed = false;
    for (let i = 0; i < cards.length; i++) {
      const other = dpCardAge(cards[i]);
      if (ageMin <= other) { feedEl.insertBefore(card, cards[i]); placed = true; break; }
    }
    if (!placed) feedEl.appendChild(card);
  });
}

function dpCardAge(card) {
  if (card.hasAttribute('data-age')) return parseInt(card.getAttribute('data-age'), 10);
  // The time label lives in a .dp-meta span, but handle links also carry
  // .dp-meta — so scan every .dp-meta, skip the handle labels (they begin
  // with "+"), and take the first that parses as a relative time.
  const metas = card.querySelectorAll('.dp-meta');
  for (let i = 0; i < metas.length; i++) {
    const txt = metas[i].textContent;
    if (txt.trim().charAt(0) === '+') continue;
    const m = txt.match(/(\d+)\s*([mhd])\b/);
    if (m) {
      if (m[2] === 'd') return parseInt(m[1], 10) * 1440;
      if (m[2] === 'h') return parseInt(m[1], 10) * 60;
      return parseInt(m[1], 10);
    }
  }
  return 99999;
}

function dpAgeLabel(min) {
  if (min < 60) return min + 'm';
  if (min < 1440) return Math.round(min / 60) + 'h';
  return Math.round(min / 1440) + 'd';
}

function dpTextSafe(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ── MODAL PLUMBING ─────────────────────────────────────────── */

function dpModal(innerHtml, afterOpen) {
  dpCloseModal();
  const overlay = document.createElement('div');
  overlay.className = 'dp-modal-overlay';
  overlay.id = 'dp-modal-overlay';
  overlay.innerHTML =
    '<div class="dp-modal" onclick="event.stopPropagation()">' +
      '<span class="dp-modal-close" onclick="dpCloseModal()">\u00d7</span>' +
      innerHtml +
    '</div>';
  overlay.onclick = dpCloseModal;
  document.body.appendChild(overlay);
  document.addEventListener('keydown', dpEscClose);
  if (afterOpen) afterOpen();
}
function dpCloseModal() {
  const o = document.getElementById('dp-modal-overlay');
  if (o) o.remove();
  document.removeEventListener('keydown', dpEscClose);
}
function dpEscClose(e) { if (e.key === 'Escape') dpCloseModal(); }

/* ── INIT ───────────────────────────────────────────────────── */

function dpInitLive() {
  dpRenderHeader();
  dpLoadLive();
}
