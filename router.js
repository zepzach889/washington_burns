// Waymark NANet Router
// Maps in-universe NANet addresses to GitHub Pages paths

const ROUTES = {

  // ════════════════════════════════════════════════════════
  // WAYMARK (homepage)
  // ════════════════════════════════════════════════════════
  'nan.waymark.biz.usa':                      '/',

  // ════════════════════════════════════════════════════════
  // NEWS & MEDIA
  // ════════════════════════════════════════════════════════
  'nan.franklin-ob.pr.usa':                   '/nodes/franklin-observer/',
  'nan.abnnews.pr.usa':                       '/nodes/abn/',
  'nan.csn.pr.usa':                           '/nodes/csn/',
  'nan.linkvid.pr.usa':                       '/nodes/linkvid/',
  'nan.linkvid.pr.usa/films':                 '/nodes/linkvid/films.html',
  'nan.linkvid.pr.usa/series':                '/nodes/linkvid/series.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Site pages
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau':                        '/nodes/nedex/',
  'nan.nedex.org.nau/browse':                 '/nodes/nedex/nedex_browse.html',
  'nan.nedex.org.nau/categories':             '/nodes/nedex/nedex_categories.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Countries & nations
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/africa':                 '/nodes/nedex/africa.html',
  'nan.nedex.org.nau/argentina':              '/nodes/nedex/argentina.html',
  'nan.nedex.org.nau/australia':              '/nodes/nedex/australia.html',
  'nan.nedex.org.nau/austria-hungary':        '/nodes/nedex/austria-hungary.html',
  'nan.nedex.org.nau/brazil':                 '/nodes/nedex/brazil.html',
  'nan.nedex.org.nau/california':             '/nodes/nedex/california.html',
  'nan.nedex.org.nau/canada':                 '/nodes/nedex/canada.html',
  'nan.nedex.org.nau/central-america':        '/nodes/nedex/central-america.html',
  'nan.nedex.org.nau/china':                  '/nodes/nedex/china.html',
  'nan.nedex.org.nau/choson':                 '/nodes/nedex/choson.html',
  'nan.nedex.org.nau/colombia':               '/nodes/nedex/colombia.html',
  'nan.nedex.org.nau/hawaii':                 '/nodes/nedex/hawaii.html',
  'nan.nedex.org.nau/india':                  '/nodes/nedex/india.html',
  'nan.nedex.org.nau/ireland':                '/nodes/nedex/ireland.html',
  'nan.nedex.org.nau/italy':                  '/nodes/nedex/italy.html',
  'nan.nedex.org.nau/japan':                  '/nodes/nedex/japan.html',
  'nan.nedex.org.nau/mexico':                 '/nodes/nedex/mexico.html',
  'nan.nedex.org.nau/nations-of-south-america': '/nodes/nedex/nations-of-south-america.html',
  'nan.nedex.org.nau/ottoman-empire':         '/nodes/nedex/ottoman-empire.html',
  'nan.nedex.org.nau/persia':                 '/nodes/nedex/persia.html',
  'nan.nedex.org.nau/russia':                 '/nodes/nedex/russia.html',
  'nan.nedex.org.nau/south-africa':           '/nodes/nedex/south-africa.html',
  'nan.nedex.org.nau/southeast-asia':         '/nodes/nedex/southeast-asia.html',
  'nan.nedex.org.nau/spain':                  '/nodes/nedex/spain.html',
  'nan.nedex.org.nau/texas':                  '/nodes/nedex/texas.html',
  'nan.nedex.org.nau/uer':                    '/nodes/nedex/uer.html',
  'nan.nedex.org.nau/ugr':                    '/nodes/nedex/german_republic.html',
  'nan.nedex.org.nau/united-kingdom':         '/nodes/nedex/united-kingdom.html',
  'nan.nedex.org.nau/united-states':          '/nodes/nedex/united-states.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Historical & defunct states
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/hanover':                '/nodes/nedex/hanover.html',
  'nan.nedex.org.nau/kingdom-of-france':      '/nodes/nedex/kingdom-of-france.html',
  'nan.nedex.org.nau/prussia':                '/nodes/nedex/prussia.html',
  'nan.nedex.org.nau/thuringia':              '/nodes/nedex/thuringia.html',
  'nan.nedex.org.nau/union-of-german-states': '/nodes/nedex/union-of-german-states.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Supranational organizations
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/global-peace-council':   '/nodes/nedex/global-peace-council.html',
  'nan.nedex.org.nau/nau':                    '/nodes/nedex/nau.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Landmarks, locations & geography
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/congress-hall':          '/nodes/nedex/congress-hall.html',
  'nan.nedex.org.nau/first-capital-park':     '/nodes/nedex/first-capital-park.html',
  'nan.nedex.org.nau/franklin-dw':            '/nodes/nedex/franklin-dw.html',
  'nan.nedex.org.nau/provinces-of-canada':    '/nodes/nedex/provinces-of-canada.html',
  'nan.nedex.org.nau/washington-house':       '/nodes/nedex/washington-house.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Political parties
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/democratic-party':       '/nodes/nedex/democratic-party.html',
  'nan.nedex.org.nau/federalist-party':       '/nodes/nedex/federalist-party.html',
  'nan.nedex.org.nau/jeffersonian-constitutional-alliance': '/nodes/nedex/jeffersonian-constitutional-alliance.html',
  'nan.nedex.org.nau/political-parties-usa':  '/nodes/nedex/political-parties-usa.html',
  'nan.nedex.org.nau/social-progressive-alliance': '/nodes/nedex/social-progressive-alliance.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — National histories
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/history-of-austria-hungary':       '/nodes/nedex/history-of-austria-hungary.html',
  'nan.nedex.org.nau/history-of-california':  '/nodes/nedex/history-of-california.html',
  'nan.nedex.org.nau/history-of-canada':      '/nodes/nedex/history-of-canada.html',
  'nan.nedex.org.nau/history-of-ireland':     '/nodes/nedex/history-of-ireland.html',
  'nan.nedex.org.nau/history-of-mexico':      '/nodes/nedex/history-of-mexico.html',
  'nan.nedex.org.nau/history-of-spain':       '/nodes/nedex/history-of-spain.html',
  'nan.nedex.org.nau/history-of-texas':       '/nodes/nedex/history-of-texas.html',
  'nan.nedex.org.nau/history-of-the-united-kingdom':    '/nodes/nedex/history-of-the-united-kingdom.html',
  'nan.nedex.org.nau/history-of-the-united-states':     '/nodes/nedex/history-of-the-united-states.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Wars & conflicts
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/choson-war':             '/nodes/nedex/choson-war.html',
  'nan.nedex.org.nau/first-mexican-war':      '/nodes/nedex/first-mexican-war.html',
  'nan.nedex.org.nau/global-war':             '/nodes/nedex/global-war.html',
  'nan.nedex.org.nau/great-european-war':     '/nodes/nedex/great-european-war.html',
  'nan.nedex.org.nau/matanzas-war':           '/nodes/nedex/matanzas-war.html',
  'nan.nedex.org.nau/second-mexican-war':     '/nodes/nedex/second-mexican-war.html',
  'nan.nedex.org.nau/war-between-the-states': '/nodes/nedex/war-between-the-states.html',
  'nan.nedex.org.nau/war-of-balkan-liberation': '/nodes/nedex/war-of-balkan-liberation.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Treaties & constitutional documents
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/constitution-1787':      '/nodes/nedex/constitution-1787.html',
  'nan.nedex.org.nau/constitution-1861':      '/nodes/nedex/constitution-1861.html',
  'nan.nedex.org.nau/first-amendment-1861':   '/nodes/nedex/first-amendment-1861.html',
  'nan.nedex.org.nau/second-amendment-1861':  '/nodes/nedex/second-amendment-1861.html',
  'nan.nedex.org.nau/third-amendment-1861':   '/nodes/nedex/third-amendment-1861.html',
  'nan.nedex.org.nau/fourth-amendment-1861':  '/nodes/nedex/fourth-amendment-1861.html',
  'nan.nedex.org.nau/fifth-amendment-1861':   '/nodes/nedex/fifth-amendment-1861.html',
  'nan.nedex.org.nau/thirteenth-amendment-1787': '/nodes/nedex/thirteenth-amendment-1787.html',
  'nan.nedex.org.nau/fourteenth-amendment-1787': '/nodes/nedex/fourteenth-amendment-1787.html',
  'nan.nedex.org.nau/fifteenth-amendment-1787':  '/nodes/nedex/fifteenth-amendment-1787.html',
  'nan.nedex.org.nau/sixteenth-amendment-1787':  '/nodes/nedex/sixteenth-amendment-1787.html',
  'nan.nedex.org.nau/grand-compromise-1817':  '/nodes/nedex/grand-compromise-1817.html',
  'nan.nedex.org.nau/istanbul-accord-1919':   '/nodes/nedex/istanbul-accord-1919.html',
  'nan.nedex.org.nau/ottoman-constitution-1883': '/nodes/nedex/ottoman-constitution-1883.html',
  'nan.nedex.org.nau/treaty-of-geneva':       '/nodes/nedex/treaty-of-geneva.html',
  'nan.nedex.org.nau/treaty-of-managua':      '/nodes/nedex/treaty-of-managua.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Historical events
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/karahan-interlude':      '/nodes/nedex/karahan-interlude.html',
  'nan.nedex.org.nau/macedonian-crisis':      '/nodes/nedex/macedonian-crisis.html',
  'nan.nedex.org.nau/russian-constitutional-crisis-1907': '/nodes/nedex/russian-constitutional-crisis-1907.html',
  'nan.nedex.org.nau/ss-hesperia':            '/nodes/nedex/ss-hesperia.html',
  'nan.nedex.org.nau/suez-canal':             '/nodes/nedex/suez-canal.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Government offices
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/president-of-the-united-states': '/nodes/nedex/president-of-the-united-states.html',
  'nan.nedex.org.nau/secretary-general':      '/nodes/nedex/secretary-general.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Lists of leaders & elections
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/governor-general-canada':    '/nodes/nedex/governor-general-canada.html',
  'nan.nedex.org.nau/list_of_pm_canada':          '/nodes/nedex/list_of_pm_canada.html',
  'nan.nedex.org.nau/list_of_premiers_california': '/nodes/nedex/list_of_premiers_california.html',
  'nan.nedex.org.nau/list_of_pres_ireland':       '/nodes/nedex/list_of_pres_ireland.html',
  'nan.nedex.org.nau/list_of_pres_tex':           '/nodes/nedex/list_of_pres_tex.html',
  'nan.nedex.org.nau/list_of_pres_usa':           '/nodes/nedex/list_of_pres_usa.html',
  'nan.nedex.org.nau/list_of_taoisigh_ireland':   '/nodes/nedex/list_of_taoisigh_ireland.html',
  'nan.nedex.org.nau/monarchs-austria-hungary':   '/nodes/nedex/monarchs-austria-hungary.html',
  'nan.nedex.org.nau/monarchs-hawaii':            '/nodes/nedex/monarchs-hawaii.html',
  'nan.nedex.org.nau/monarchs-kingdom-of-austria': '/nodes/nedex/monarchs-kingdom-of-austria.html',
  'nan.nedex.org.nau/monarchs-mexico':            '/nodes/nedex/monarchs-mexico.html',
  'nan.nedex.org.nau/monarchs-uk':                '/nodes/nedex/monarchs-uk.html',
  'nan.nedex.org.nau/presidential-elections':     '/nodes/nedex/presidential-elections.html',
  'nan.nedex.org.nau/prime-ministers-mexico':     '/nodes/nedex/prime-ministers-mexico.html',
  'nan.nedex.org.nau/prime-ministers-russia':     '/nodes/nedex/prime-ministers-russia.html',
  'nan.nedex.org.nau/tsars-russia':               '/nodes/nedex/tsars-russia.html',

  // ════════════════════════════════════════════════════════
  // NEDEX — Biographies: US presidents
  // ════════════════════════════════════════════════════════
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

  // ════════════════════════════════════════════════════════
  // NEDEX — Biographies: foreign leaders & historical figures
  // ════════════════════════════════════════════════════════
  'nan.nedex.org.nau/bio-abraham-lincoln':    '/nodes/nedex/bio-abraham-lincoln.html',
  'nan.nedex.org.nau/bio-hafiz-karahan':      '/nodes/nedex/bio-hafiz-karahan.html',
  'nan.nedex.org.nau/bio-kemal-sahin':        '/nodes/nedex/bio-kemal-sahin.html',
  'nan.nedex.org.nau/bio-mahmud-3':           '/nodes/nedex/bio-mahmud-3.html',

  // ════════════════════════════════════════════════════════
  // STAND ALONE GOVERNMENT & CIVIC SITES
  // ════════════════════════════════════════════════════════
  'nan.usrc.gov.usa':                         '/nodes/usrc/',
  'nan.assembly.nau':                         '/nodes/assembly/',
  'nan.fps.gov.usa':                          '/nodes/fps/',

  // ════════════════════════════════════════════════════════
  // WASHINGTON HOUSE - PRESIDENCY
  // ════════════════════════════════════════════════════════
  'nan.washingtonhouse.gov.usa':              '/nodes/washington-house/',
  'nan.washingtonhouse.gov.usa/presidents':   '/nodes/washington-house/wh_presidents.html',
  'nan.washingtonhouse.gov.usa/president':      '/nodes/washington-house/wh_president.html',
  'nan.washingtonhouse.gov.usa/administration': '/nodes/washington-house/wh_administration.html',
  'nan.washingtonhouse.gov.usa/briefing':       '/nodes/washington-house/wh_briefing.html',
  'nan.washingtonhouse.gov.usa/visit':          '/nodes/washington-house/wh_visit.html',
  'nan.washingtonhouse.gov.usa/history':        '/nodes/washington-house/wh_history.html',
  'nan.washingtonhouse.gov.usa/contact':        '/nodes/washington-house/wh_contact.html',

  
  // ════════════════════════════════════════════════════════
  // MUSEUM OF THE UNITED STATES
  // ════════════════════════════════════════════════════════
  'nan.mususa.edu.usa':                       '/nodes/amhistory/',
  'nan.mususa.edu.usa/archives':              '/nodes/amhistory/archives.html',
  'nan.mususa.edu.usa/doc-declaration':       '/nodes/amhistory/doc-declaration.html',
  'nan.mususa.edu.usa/doc-constitution-1787': '/nodes/amhistory/doc-constitution-1787.html',
  'nan.mususa.edu.usa/doc-constitution-1861': '/nodes/amhistory/doc-constitution-1861.html',
  'nan.mususa.edu.usa/exhibitions':           '/nodes/amhistory/exhibitions.html',
  'nan.mususa.edu.usa/collections':           '/nodes/amhistory/collections.html',
  'nan.mususa.edu.usa/events':                '/nodes/amhistory/events.html',
  'nan.mususa.edu.usa/learn':                 '/nodes/amhistory/learn.html',
  'nan.mususa.edu.usa/about':                 '/nodes/amhistory/about.html',
  'nan.mususa.edu.usa/support':               '/nodes/amhistory/support.html',

  // ════════════════════════════════════════════════════════
  // SPECHIST.SOC — Speculative history board
  // ════════════════════════════════════════════════════════
  'nan.speculativehistory.soc.usa':                          '/nodes/spechist/',
  'nan.speculativehistory.soc.usa/before-1900':              '/nodes/spechist/board-before-1900.html',
  'nan.speculativehistory.soc.usa/before-1900/washington-city': '/nodes/spechist/thread-washington-city.html',
  'nan.speculativehistory.soc.usa/after-1900':               '/nodes/spechist/board-after-1900.html',
  'nan.speculativehistory.soc.usa/future-history':           '/nodes/spechist/board-future-history.html',
  'nan.speculativehistory.soc.usa/zli':                      '/nodes/spechist/board-zli.html',
  'nan.speculativehistory.soc.usa/maps-graphics':            '/nodes/spechist/board-maps-graphics.html',
  'nan.speculativehistory.soc.usa/shared-worlds':            '/nodes/spechist/board-shared-worlds.html',
  'nan.speculativehistory.soc.usa/books-film-media':         '/nodes/spechist/board-books-film-media.html',

  // ════════════════════════════════════════════════════════
  // Dispatch — Premier Intercon Node
  // ════════════════════════════════════════════════════════
  'nan.dispatch.biz.nau':                                    '/nodes/dispatch/',
  'nan.mosaic.soc.usa':                       '/nodes/mosaic/',

  // ════════════════════════════════════════════════════════
  // DIV814 (reference / out-of-universe)
  // ════════════════════════════════════════════════════════
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
  'nan.div814.gov.usa/wbt_tech_media_reference': '/nodes/ref/wbt_tech_media_reference',

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

// ════════════════════════════════════════════════════════
// BOOKMARKS BAR — single source of truth for every page
// To add a new node to the bar sitewide, add ONE line here.
// Paths are base-absolute; getBase() handles the GitHub
// Pages subdirectory automatically at any folder depth.
// ════════════════════════════════════════════════════════
const BOOKMARKS = [
  { icon: '🔍',  label: 'Waymark',           path: '/' },
  { icon: '📰', label: 'Franklin Observer', path: '/nodes/franklin-observer/' },
  { icon: '📺', label: 'ABN News',          path: '/nodes/abn/' },
  { icon: '🎥', label: 'LinkVid',           path: '/nodes/linkvid/' },
  { icon: '⚾', label: 'CSN',               path: '/nodes/csn/' },
  { icon: '📖', label: 'Nedex',             path: '/nodes/nedex/' },
  { icon: '🚂', label: 'USRC Rail',         path: '/nodes/usrc/' },
  { icon: '⚖️', label: 'NAU Assembly',      path: '/nodes/assembly/' },
  { icon: '🏛️', label: 'Washington House',  path: '/nodes/washington-house/' },
  { icon: '🏺', label: 'Museum of the US',  path: '/nodes/amhistory/' },
  { icon: '🌲', label: 'Federal Parks',     path: '/nodes/fps/' },
  { icon: '📜', label: 'SpecHist',          path: '/nodes/spechist/' },
  { icon: '📨', label: 'Dispatch',          path: '/nodes/dispatch/' },  
  // { icon: '🧩', label: 'Mosaic',            path: '/nodes/mosaic/' },     // uncomment when the node ships
];

function renderBookmarks() {
  // Anchor on the topbar itself — on standard pages it lives inside
  // .arc-chrome; on legacy builds (e.g. LinkVid's .lv-arc-wrapper) it
  // lives inside a custom wrapper. Either way the bar goes right after it.
  const topbar = document.querySelector('.wm-topbar');
  const chrome = document.querySelector('.arc-chrome');
  if (!topbar && !chrome) return;
  // Remove any leftover static bar so it never doubles up
  const old = document.querySelector('.arc-bookmarks');
  if (old) old.remove();
  const base = getBase();
  const bar = document.createElement('div');
  bar.className = 'arc-bookmarks';
  bar.innerHTML = BOOKMARKS.map(b =>
    '<a class="arc-bmark" href="' + base + b.path + '"><span class="arc-bmark-icon">' + b.icon + '</span>' + b.label + '</a>'
  ).join('');
  if (topbar) topbar.insertAdjacentElement('afterend', bar);
  else chrome.prepend(bar);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderBookmarks);
} else {
  renderBookmarks();
}
