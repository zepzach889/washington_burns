// nedex-search.js — injects its own styles to avoid CSS conflicts

function initNdxSearch() {
  if (typeof NEDEX_ARTICLES === 'undefined') return;

  var inputEl = document.querySelector('.ndx-search');
  var btnEl   = document.querySelector('.ndx-search-btn');
  if (!inputEl) return;

  // Inject dropdown styles directly — bypasses shared.css conflicts
  var style = document.createElement('style');
  style.textContent = [
    '.ndx-search-drop {',
    '  position: absolute !important;',
    '  top: 100% !important;',
    '  left: 0 !important;',
    '  right: 0 !important;',
    '  margin-top: 6px !important;',
    '  background: #ffffff !important;',
    '  border-radius: 8px !important;',
    '  box-shadow: 0 8px 32px rgba(0,0,0,0.25) !important;',
    '  z-index: 99999 !important;',
    '  max-height: 400px !important;',
    '  overflow-y: auto !important;',
    '  overflow-x: hidden !important;',
    '  display: none !important;',
    '  border: 1px solid #d0c0a0 !important;',
    '  width: 100% !important;',
    '  box-sizing: border-box !important;',
    '}',
    '.ndx-search-drop.open { display: block !important; }',
    '.ndx-search-drop a {',
    '  display: block !important;',
    '  padding: 10px 14px !important;',
    '  border-bottom: 1px solid #f0ece4 !important;',
    '  text-decoration: none !important;',
    '  color: #202020 !important;',
    '  background: #fff !important;',
    '}',
    '.ndx-search-drop a:hover { background: #fbf6ef !important; }',
    '.ndx-search-drop a:last-child { border-bottom: none !important; }',
    '.ndx-drop-title { font-family: "DM Serif Display", serif !important; font-size: 14px !important; font-weight: normal !important; color: #202020 !important; margin-bottom: 2px !important; display: block !important; }',
    '.ndx-drop-blurb { font-size: 11px !important; color: #666 !important; display: block !important; line-height: 1.4 !important; }',
    '.ndx-drop-cats  { font-size: 10px !important; color: #c87820 !important; display: block !important; margin-top: 2px !important; }',
    '.ndx-drop-none  { padding: 16px 14px !important; color: #aaa !important; font-style: italic !important; font-size: 13px !important; text-align: center !important; display: block !important; }',
    '.ndx-drop-hi    { font-weight: bold !important; color: #c87820 !important; }',
  ].join('\n');
  document.head.appendChild(style);

  // Make sure the search wrap is positioned
  var wrap = inputEl.closest('.ndx-search-wrap') || inputEl.parentNode;
  wrap.style.position = 'relative';

  // Create dropdown
  var dropdown = document.createElement('div');
  dropdown.className = 'ndx-search-drop';
  wrap.appendChild(dropdown);

  function hi(text, q) {
    if (!q) return text;
    var esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp('(' + esc + ')', 'gi'), '<span class="ndx-drop-hi">$1</span>');
  }

  function doSearch(q) {
    if (!q || q.length < 2) { dropdown.classList.remove('open'); return; }
    var ql = q.toLowerCase();
    var results = NEDEX_ARTICLES.filter(function(a) {
      return a.title.toLowerCase().includes(ql) ||
             a.blurb.toLowerCase().includes(ql) ||
             a.categories.some(function(c) { return c.toLowerCase().includes(ql); });
    }).slice(0, 8);

    if (results.length === 0) {
      dropdown.innerHTML = '<span class="ndx-drop-none">No results for &ldquo;' + q + '&rdquo;</span>';
    } else {
      dropdown.innerHTML = results.map(function(r) {
        return '<a href="' + r.file + '">' +
          '<span class="ndx-drop-title">' + hi(r.title, q) + '</span>' +
          '<span class="ndx-drop-blurb">' + hi(r.blurb, q) + '</span>' +
          '<span class="ndx-drop-cats">'  + r.categories.slice(0,3).join(' · ') + '</span>' +
          '</a>';
      }).join('');
    }
    dropdown.classList.add('open');
  }

  inputEl.addEventListener('input', function() { doSearch(this.value.trim()); });
  inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doSearch(this.value.trim());
    if (e.key === 'Escape') { dropdown.classList.remove('open'); this.blur(); }
  });
  if (btnEl) btnEl.addEventListener('click', function() { doSearch(inputEl.value.trim()); });
  document.addEventListener('click', function(e) {
    if (!wrap.contains(e.target)) dropdown.classList.remove('open');
  });
}

initNdxSearch();
