// Waymark NANet Router
// Maps in-universe NANet addresses to GitHub Pages paths

const ROUTES = {
  'nan.waymark.biz.usa':                      '/',
  'nan.franklin-ob.pr.usa':                   '/nodes/franklin-observer/',
  'nan.abnnews.pr.usa':                       '/nodes/abn/',
  'nan.nedex.org.nau':                        '/nodes/nedex/',
  'nan.nedex.org.nau/browse':                 '/nodes/nedex/nedex_browse.html',
  'nan.nedex.org.nau/categories':             '/nodes/nedex/nedex_categories.html',
  'nan.nedex.org.nau/california':             '/nodes/nedex/california.html',
  'nan.nedex.org.nau/canada':                 '/nodes/nedex/canada.html',
  'nan.nedex.org.nau/central-america':        '/nodes/nedex/central-america.html',
  'nan.nedex.org.nau/mexico':                 '/nodes/nedex/mexico.html',
  'nan.nedex.org.nau/ugr':                    '/nodes/nedex/german_republic.html',
  'nan.nedex.org.nau/hawaii':                 '/nodes/nedex/hawaii.html',
  'nan.nedex.org.nau/texas':                  '/nodes/nedex/texas.html',
  'nan.nedex.org.nau/hist_of_tex':            '/nodes/nedex/hist_of_texas.html',
  'nan.nedex.org.nau/list_of_pres_tex':       '/nodes/nedex/list_of_pres_tex.html', 
  'nan.nedex.org.nau/uer':                    '/nodes/nedex/uer.html',
  'nan.nedex.org.nau/list_of_pres_usa':       '/nodes/nedex/list_of_pres_usa.html',
  'nan.nedex.org.nau/george-washington':      '/nodes/nedex/george-washington.html',
  'nan.nedex.org.nau/john-adams':             '/nodes/nedex/john-adams.html',
  'nan.nedex.org.nau/thomas-jefferson':       '/nodes/nedex/thomas-jefferson.html',
  'nan.nedex.org.nau/james-madison':          '/nodes/nedex/james-madison.html',
  'nan.nedex.org.nau/william-crawford':       '/nodes/nedex/william-crawford.html',
  'nan.nedex.org.nau/henry-clay':             '/nodes/nedex/henry-clay.html',
  'nan.nedex.org.nau/alexander-hamilton-jr':  '/nodes/nedex/alexander-hamilton-jr.html',
  'nan.nedex.org.nau/john-c-calhoun':         '/nodes/nedex/john-c-calhoun.html',
  'nan.nedex.org.nau/giles-brandon':          '/nodes/nedex/giles-brandon.html',
  'nan.nedex.org.nau/victor-yates':           '/nodes/nedex/victor-yates.html',
  'nan.nedex.org.nau/wilbur-haines':          '/nodes/nedex/wilbur-haines.html',
  'nan.nedex.org.nau/robert-lee':             '/nodes/nedex/robert-lee.html',
  'nan.nedex.org.nau/james-hawthorne':        '/nodes/nedex/james-hawthorne.html',
  'nan.nedex.org.nau/hugo-brandt':            '/nodes/nedex/hugo-brandt.html',
  'nan.nedex.org.nau/john-p-quincy':          '/nodes/nedex/john-p-quincy.html',
  'nan.nedex.org.nau/bradley-kinder':         '/nodes/nedex/bradley-kinder.html',
  'nan.nedex.org.nau/horace-littlefield':     '/nodes/nedex/horace-littlefield.html',
  'nan.nedex.org.nau/theodore-drake':         '/nodes/nedex/theodore-drake.html',
  'nan.nedex.org.nau/leeland-rowling':        '/nodes/nedex/leeland-rowling.html',
  'nan.usrc.gov.usa':                         '/nodes/usrc/',
  'nan.assembly.nau':                         '/nodes/assembly/',
  'nan.washingtonhouse.gov.usa':              '/nodes/washington-house/',
  'nan.washingtonhouse.gov.usa/presidents':   '/nodes/washington-house/wh_presidents.html',
  'nan.mususa.edu.usa':                       '/nodes/amhistory/',
  'nan.mususa.edu.usa/archives':              '/nodes/amhistory/archives.html',
  'nan.mususa.edu.usa/doc-declaration':       '/nodes/amhistory/doc-declaration.html',
  'nan.mususa.edu.usa/doc-constitution-1787': '/nodes/amhistory/doc-constitution-1787.html',
  'nan.mususa.edu.usa/doc-constitution-1861': '/nodes/amhistory/doc-constitution-1861.html',
  'nan.fps.gov.usa':                          '/nodes/fps/',
  'nan.div814.gov.usa':                       '/nodes/ref/',
  'nan.div814.gov.usa/stories':               '/nodes/ref/stories',
  'nan.div814.gov.usa/nedex-builder':         '/nodes/ref/nedex-builder',
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
