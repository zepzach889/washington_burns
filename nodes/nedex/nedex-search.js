// nedex-search.js — shared search logic for all Nedex pages
// Requires nedex_index.js to be loaded first

function initNdxSearch() {
  if (typeof NEDEX_ARTICLES === 'undefined') return;

  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp('(' + escaped + ')', 'gi'),
      '<span class="ndx-search-result-highlight">$1</span>');
  }

  function search(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return NEDEX_ARTICLES.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.blurb.toLowerCase().includes(q) ||
      a.categories.some(c => c.toLowerCase().includes(q))
    ).slice(0, 8);
  }

  function renderResults(results, query, dropdown) {
    if (results.length === 0) {
      dropdown.innerHTML = '<div class="ndx-search-no-results">No results for &ldquo;' + query + '&rdquo;</div>';
    } else {
      dropdown.innerHTML = results.map(function(r) {
        return '<a class="ndx-search-result" href="' + r.file + '">' +
          '<div class="ndx-search-result-title">' + highlight(r.title, query) + '</div>' +
          '<div class="ndx-search-result-blurb">' + highlight(r.blurb, query) + '</div>' +
          '<div class="ndx-search-result-cats">' + r.categories.slice(0,3).join(' · ') + '</div>' +
          '</a>';
      }).join('');
    }
    dropdown.classList.add('open');
  }

  var inputEl = document.querySelector('.ndx-search');
  var btnEl   = document.querySelector('.ndx-search-btn');
  if (!inputEl) return;

  // Create dropdown
  var dropdown = document.createElement('div');
  dropdown.className = 'ndx-search-results';
  inputEl.parentNode.appendChild(dropdown);

  inputEl.addEventListener('input', function() {
    var q = this.value.trim();
    if (q.length < 2) { dropdown.classList.remove('open'); return; }
    renderResults(search(q), q, dropdown);
  });

  inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var q = this.value.trim();
      if (q.length >= 2) renderResults(search(q), q, dropdown);
    }
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      this.blur();
    }
  });

  if (btnEl) {
    btnEl.addEventListener('click', function() {
      var q = inputEl.value.trim();
      if (q.length >= 2) renderResults(search(q), q, dropdown);
    });
  }

  document.addEventListener('click', function(e) {
    if (!inputEl.parentNode.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
}

// Run immediately — no DOMContentLoaded needed since script loads after DOM
initNdxSearch();
