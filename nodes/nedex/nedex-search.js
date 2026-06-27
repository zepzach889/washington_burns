
function initNdxSearch() {
  if (typeof NEDEX_ARTICLES === 'undefined') return;

  var inputEl = document.querySelector('.ndx-search');
  var btnEl   = document.querySelector('.ndx-search-btn');
  if (!inputEl) return;

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
