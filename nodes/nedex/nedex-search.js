// nedex-search.js — shared search logic for all Nedex pages
// Requires nedex_index.js to be loaded first

(function() {
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
      dropdown.innerHTML = `<div class="ndx-search-no-results">No results for "${query}"</div>`;
    } else {
      dropdown.innerHTML = results.map(r => `
        <a class="ndx-search-result" href="${r.file}">
          <div class="ndx-search-result-title">${highlight(r.title, query)}</div>
          <div class="ndx-search-result-blurb">${highlight(r.blurb, query)}</div>
          <div class="ndx-search-result-cats">${r.categories.slice(0,3).join(' · ')}</div>
        </a>
      `).join('');
    }
    dropdown.classList.add('open');
  }

  function initSearch(inputEl, btnEl) {
    if (!inputEl) return;

    // Create dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'ndx-search-results';
    inputEl.parentNode.appendChild(dropdown);

    // Input handler
    inputEl.addEventListener('input', function() {
      const q = this.value.trim();
      if (q.length < 2) { dropdown.classList.remove('open'); return; }
      renderResults(search(q), q, dropdown);
    });

    // Enter key
    inputEl.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const q = this.value.trim();
        if (q.length >= 2) renderResults(search(q), q, dropdown);
      }
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        this.blur();
      }
    });

    // Button click
    if (btnEl) {
      btnEl.addEventListener('click', function() {
        const q = inputEl.value.trim();
        if (q.length >= 2) renderResults(search(q), q, dropdown);
      });
    }

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!inputEl.parentNode.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  }

  // Wait for DOM then init all search bars on the page
  document.addEventListener('DOMContentLoaded', function() {
    // Header search bar
    const headerInput = document.querySelector('.ndx-search');
    const headerBtn   = document.querySelector('.ndx-search-btn');
    if (headerInput) initSearch(headerInput, headerBtn);
  });
})();
