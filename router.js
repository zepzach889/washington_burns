// Waymark NANet Router
// Maps in-universe NANet addresses to GitHub Pages paths

const ROUTES = {
  'nan.waymark.biz.usa':              '/',
  'nan.franklin-ob.pr.usa':           '/nodes/franklin-observer/',
  'nan.usrc.gov.usa':                 '/nodes/usrc/',
  'nan.assembly.nau':                 '/nodes/assembly/',
  'nan.nedex.org.nau':                '/nodes/nedex/',
  'nan.nedex.org.nau/california':     '/nodes/nedex/california.html',
  'nan.nedex.org.nau/uer':            '/nodes/nedex/uer.html',
  'nan.nedex.org.nau/hugo-brandt':    '/nodes/nedex/hugo-brandt.html',
  'nan.washingtonhouse.gov.usa':      '/nodes/washington-house/',
  'nan.mususa.edu.usa':               '/nodes/amhistory/',
  'nan.abnnews.pr.usa':               '/nodes/abn/',
  'nan.fps.gov.usa':                  '/nodes/fps/',
};

const PATH_TO_ADDRESS = {};
for (const [addr, path] of Object.entries(ROUTES)) {
  PATH_TO_ADDRESS[path] = addr;
}

// Auto-detect base path for GitHub Pages subdirectory deployments
// e.g. https://user.github.io/washington_burns/ → base = '/washington_burns'
function getBase() {
  if (window.WM_BASE !== undefined) return window.WM_BASE;
  const parts = window.location.pathname.split('/');
  // If deployed at a subdirectory (GitHub Pages project site), first segment is the repo name
  if (parts.length > 1 && parts[1] !== '') {
    return '/' + parts[1];
  }
  return '';
}

function navigate(rawInput) {
  let input = rawInput.trim().replace(/^link:\/\//, '').replace(/\/$/, '');
  if (ROUTES[input]) {
    const base = getBase();
    window.location.href = base + ROUTES[input];
    return;
  }
  showNotFound(input);
}

function showNotFound(address) {
  const wrap = document.getElementById('wm-address-wrap');
  if (wrap) {
    wrap.style.borderColor = '#A32D2D';
    wrap.style.boxShadow = '0 0 0 3px rgba(163,45,45,0.10)';
    const input = document.getElementById('wm-address-input');
    if (input) {
      input.style.color = '#A32D2D';
      setTimeout(() => {
        input.value = 'link://' + address;
        input.style.color = '';
        wrap.style.borderColor = '';
        wrap.style.boxShadow = '';
      }, 1800);
    }
  }
}

function initAddressBar(currentAddress) {
  const input = document.getElementById('wm-address-input');
  if (!input) return;
  input.value = 'link://' + currentAddress;
  input.addEventListener('focus', function () { this.select(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') navigate(this.value);
    if (e.key === 'Escape') { this.value = 'link://' + currentAddress; this.blur(); }
  });
  const goBtn = document.getElementById('wm-go-btn');
  if (goBtn) goBtn.addEventListener('click', () => navigate(input.value));
}
