// Waymark NANet Router
// Maps in-universe NANet addresses to GitHub Pages paths

const ROUTES = {
  'nan.waymark.biz.usa':                      '/',
  'nan.franklin-ob.pr.usa':                   '/nodes/franklin-observer/',
  'nan.abnnews.pr.usa':                       '/nodes/abn/',
  'nan.csn.pr.usa':                           '/nodes/csn/',
  'nan.linkvid.pr.usa':                       '/nodes/linkvid/',
  'nan.linkvid.pr.usa/films':                 '/nodes/linkvid/films.html',
  'nan.linkvid.pr.usa/series':                '/nodes/linkvid/series.html',
  'nan.nedex.org.nau':                        '/nodes/nedex/',
  'nan.nedex.org.nau/browse':                 '/nodes/nedex/nedex_browse.html',
  'nan.nedex.org.nau/categories':             '/nodes/nedex/nedex_categories.html',
  'nan.nedex.org.nau/austria-hungary':        '/nodes/nedex/austria-hungary.html',
  'nan.nedex.org.nau/california':             '/nodes/nedex/california.html',
  'nan.nedex.org.nau/canada':                 '/nodes/nedex/canada.html',
  'nan.nedex.org.nau/thuringia':              '/nodes/nedex/thuringia.html',
  'nan.nedex.org.nau/argentina':              '/nodes/nedex/argentina.html',
  'nan.nedex.org.nau/spain':                  '/nodes/nedex/spain.html',
  'nan.nedex.org.nau/bio-abraham-lincoln':          '/nodes/nedex/bio-abraham-lincoln.html',
  'nan.nedex.org.nau/kingdom-of-france':            '/nodes/nedex/kingdom-of-france.html',
  'nan.nedex.org.nau/uniong-of-german-states':      '/nodes/nedex/union-of-german-states.html',
  'nan.nedex.org.nau/nations-of-south-america':     '/nodes/nedex/nations-of-south-america.html',
  'nan.nedex.org.nau/persia':                 '/nodes/nedex/persia.html',
  'nan.nedex.org.nau/monarchs-uk':            '/nodes/nedex/monarchs-uk.html',
  'nan.nedex.org.nau/prussia':                '/nodes/nedex/prussia.html',
  'nan.nedex.org.nau/china':                  '/nodes/nedex/china.html',
  'nan.nedex.org.nau/africa':                 '/nodes/nedex/africa.html',
  'nan.nedex.org.nau/australia':              '/nodes/nedex/australia.html',
  'nan.nedex.org.nau/south-africa':           '/nodes/nedex/south-africa.html',
  'nan.nedex.org.nau/southeast-asia':         '/nodes/nedex/southeast-asia.html',
  'nan.nedex.org.nau/hanover':                '/nodes/nedex/hanover.html',
  'nan.nedex.org.nau/ireland':                '/nodes/nedex/ireland.html',
  'nan.nedex.org.nau/brazil':                 '/nodes/nedex/brazil.html',
  'nan.nedex.org.nau/united-kingdom':         '/nodes/nedex/united-kingdom.html',
  'nan.nedex.org.nau/choson':                 '/nodes/nedex/choson.html',
  'nan.nedex.org.nau/japan':                  '/nodes/nedex/japan.html',
  'nan.nedex.org.nau/nau':                    '/nodes/nedex/nau.html',
  'nan.nedex.org.nau/italy':                  '/nodes/nedex/italy.html',
  'nan.nedex.org.nau/monarchs-hawaii':        '/nodes/nedex/monarchs-hawaii.html',
  'nan.nedex.org.nau/austria-hungary':        '/nodes/nedex/austria-hungary.html',
  'nan.nedex.org.nau/bio-mahmud-3':           '/nodes/nedex/bio-mahmud-3.html',
  'nan.nedex.org.nau/india':                  '/nodes/nedex/india.html',
  'nan.nedex.org.nau/bio-karahan':            '/nodes/nedex/bio-karahan.html',
  'nan.nedex.org.nau/ottoman-empire':         '/nodes/nedex/ottoman-empire.html',
  'nan.nedex.org.nau/bio-sahin':              '/nodes/nedex/bio-sahin.html',
  'nan.nedex.org.nau/colombia':               '/nodes/nedex/colombia.html',
  'nan.nedex.org.nau/central-america':        '/nodes/nedex/central-america.html',
  'nan.nedex.org.nau/mexico':                 '/nodes/nedex/mexico.html',
  'nan.nedex.org.nau/ugr':                    '/nodes/nedex/german_republic.html',
  'nan.nedex.org.nau/hawaii':                 '/nodes/nedex/hawaii.html',
  'nan.nedex.org.nau/texas':                  '/nodes/nedex/texas.html',
  'nan.nedex.org.nau/history-of-texas':       '/nodes/nedex/history-of-texas.html',
  'nan.nedex.org.nau/history-of-canada':      '/nodes/nedex/history-of-canada.html',
  'nan.nedex.org.nau/history-of-ireland':     '/nodes/nedex/history-of-ireland.html',
  'nan.nedex.org.nau/history-of-california':  '/nodes/nedex/history-of-california.html',
  'nan.nedex.org.nau/history-of-mexico':      '/nodes/nedex/history-of-mexico.html',
  'nan.nedex.org.nau/history-of-spain':       '/nodes/nedex/history-of-spai .html',
  'nan.nedex.org.nau/history-of-austria-hungary':       '/nodes/nedex/history-of-austria-hungary.html',
  'nan.nedex.org.nau/history-of-the-united-kingdom':    '/nodes/nedex/history-of-the-united-kingdom.html',
  'nan.nedex.org.nau/istanbul-accord-1919':   '/nodes/nedex/istanbul-accord-1919.html',
  'nan.nedex.org.nau/jeffersonian-constitutional-alliance':          '/nodes/nedex/jefferson-constitutional-alliance.html',

  'nan.nedex.org.nau/congress-hall':          '/nodes/nedex/congress-hall.html',
  'nan.nedex.org.nau/constitution-1861':      '/nodes/nedex/constitution-1861.html',
  'nan.nedex.org.nau/democratic-party':       '/nodes/nedex/democratic-party.html',
  'nan.nedex.org.nau/federalist-party':       '/nodes/nedex/federalist-party.html',
  'nan.nedex.org.nau/fourteenth-amdentment-1787':       '/nodes/nedex/fourteenth-amendment-1787.html',
  'nan.nedex.org.nau/fifteenth-amdentment-1787':        '/nodes/nedex/fifteenth-amendment-1787.html',
  'nan.nedex.org.nau/first-capital-park':     '/nodes/nedex/first-capital-park.html',
  'nan.nedex.org.nau/franklin-dw':               '/nodes/nedex/franklin-dw.html',
  'nan.nedex.org.nau/global-war':             '/nodes/nedex/global-war.html',
  'nan.nedex.org.nau/governor-general-canada':          '/nodes/nedex/governor-general-canada.html',
  'nan.nedex.org.nau/grand-compromise-1817':  '/nodes/nedex/grand-compromise-1817.html',
  'nan.nedex.org.nau/great-european-war':     '/nodes/nedex/great-european-war.html',
  'nan.nedex.org.nau/monarchs-austria-hungary':         '/nodes/nedex/monarchs-austria-hungary.html',
  'nan.nedex.org.nau/monarchs-kingdom-of-austria':      '/nodes/nedex/monarchs-kingdom-of-austria.html',
  'nan.nedex.org.nau/russia':                 '/nodes/nedex/russia.html',
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
  'nan.nedex.org.nau/colin-beck':             '/nodes/nedex/colin-beck.html',
  'nan.nedex.org.nau/alexander-fleak':        '/nodes/nedex/alexander-fleak.html',
  'nan.nedex.org.nau/peter-landon':           '/nodes/nedex/peter-landon.html',
  'nan.nedex.org.nau/cornelius-roosevelt-ii': '/nodes/nedex/cornelius-roosevelt-ii.html',
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
  'nan.div814.gov.usa/wbt_cinema_bible':      '/nodes/ref/wbt_cinema_bible_v8',
  'nan.div814.gov.usa/wbt_music_bible':       '/nodes/ref/wbt_music_bible',
  'nan.div814.gov.usa/wbt_reference':         '/nodes/ref/wbt_reference',
  'nan.div814.gov.usa/wbt_space_history':     '/nodes/ref/wbt_space_history_3',
  'nan.div814.gov.usa/wbt_sports_history':    '/nodes/ref/wbt_sports_history',
  'nan.div814.gov.usa/wbt_sports_olympics':   '/nodes/ref/wbt_sports_olympics',
  'nan.div814.gov.usa/wbt_sports_teams':      '/nodes/ref/wbt_sports_teams',
  'nan.div814.gov.usa/wbt_tech_media_reference':   '/nodes/ref/wbt_tech_media_reference',

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
    wrap.style.borderColor = 'var(--red)';
    wrap.style.boxShadow = '0 0 0 3px rgba(163,45,45,0.10)';
    const input = document.getElementById('wm-address-input');
    if (input) {
      input.style.color = 'var(--red)';
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
