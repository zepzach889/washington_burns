// nedex-index.js — Master article registry for Nedex
// Add one entry per article. All Nedex pages read from this file.
// Fields: title, file, categories (array), blurb (one sentence)

const NEDEX_ARTICLES = [

  // ── COUNTRIES & NATIONS ──
  { title: 'Union of the Californias',             file: 'california.html',         categories: ['Countries', 'North American nations', 'NAU member states', 'Parliamentary republics'],                          blurb: 'Independent parliamentary republic on the Pacific Coast of North America, founded 1844.' },
  { title: 'Dominion of Canada',                   file: 'canada.html',             categories: ['Countries', 'North American nations', 'NAU member states', 'Constitutional monarchies', 'British Empire'],      blurb: 'Self-governing dominion of the British Empire occupying the northern portion of North America.' },
  { title: 'Federal Republic of Central America',  file: 'central-america.html',    categories: ['Countries', 'North American nations', 'Federal republics'],                                                      blurb: 'Federal republic occupying the Central American isthmus, founded 1830 under Francisco Morazán.' },
  { title: 'Empire of Mexico',                     file: 'mexico.html',             categories: ['Countries', 'North American nations', 'NAU member states', 'Constitutional monarchies'],                         blurb: 'Constitutional monarchy in southern North America, founded 1835; current constitution 1922.' },
  { title: 'Texas Federation',                     file: 'texas.html',              categories: ['Countries', 'North American nations', 'NAU member states'],                                                       blurb: 'Independent federal republic occupying the former Mexican province of Texas and surrounding territories.' },
  { title: 'Union of European Republics',          file: 'uer.html',                categories: ['Countries', 'European nations', 'Communalist states', 'Global War belligerents'],                               blurb: 'Communalist federal republic in western and central Europe, formed 1904 from revolutionary France and South Germany.' },
  { title: 'United German Republic',               file: 'german_republic.html',    categories: ['Countries', 'European nations'],                                                                                   blurb: 'Federal republic of the German-speaking states, established following the Global War.' },
  { title: 'Kingdom of Hawaiʻi',                   file: 'hawaii.html',             categories: ['Countries', 'Pacific nations', 'NAU associate members', 'Constitutional monarchies'],                           blurb: 'Independent constitutional monarchy of the Hawaiian archipelago; Pacific trade hub and NAU associate member.' },

  // ── HISTORY & LISTS ──
  { title: 'History of the Texas Federation',      file: 'hist_of_texas.html',      categories: ['History', 'North American history', 'Texas Federation'],                                                          blurb: 'Full account of the political and social history of the Texas Federation from independence to the present.' },
  { title: 'Presidents of the Texas Federation',   file: 'list_of_pres_tex.html',   categories: ['Lists', 'Texas Federation', 'Heads of government'],                                                               blurb: 'Complete list of presidents of the Texas Federation from founding to the present day.' },
  { title: 'Presidents of the United States',      file: 'list_of_pres_usa.html',   categories: ['Lists', 'United States', 'Heads of government'],                                                                  blurb: 'Complete list of presidents of the United States from George Washington to Sophia Nakamura.' },

  // ── BIOGRAPHIES — US PRESIDENTS ──
  { title: 'George Washington',                    file: 'george-washington.html',  categories: ['Biographies', 'Presidents of the United States', 'Unaffiliated politicians', 'Founding Era'],                   blurb: 'First President of the United States (1789–1797); established the precedents of the office.' },
  { title: 'John Adams',                           file: 'john-adams.html',         categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Founding Era'],               blurb: 'Second President of the United States (1797–1801); first Federalist president.' },
  { title: 'Thomas Jefferson',                     file: 'thomas-jefferson.html',   categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],          blurb: 'Third President of the United States (1801–1809); Louisiana Purchase and Lewis & Clark Expedition.' },
  { title: 'James Madison',                        file: 'james-madison.html',      categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],          blurb: 'Fourth President of the United States (1809–1817); president during the Burning of Washington City in 1814.' },
  { title: 'William Crawford',                     file: 'william-crawford.html',   categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],          blurb: 'Fifth President of the United States (1817–1821); oversaw the founding of Franklin as the new national capital.' },
  { title: 'Henry Clay',                           file: 'henry-clay.html',         categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Founding Era'],                 blurb: 'Sixth President of the United States (1821–1827); commissioned Washington House.' },
  { title: 'Alexander Hamilton, Jr.',              file: 'alexander-hamilton-jr.html', categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Founding Era'],            blurb: 'Seventh President of the United States (1827–1833); first president to reside in Washington House.' },
  { title: 'John C. Calhoun',                      file: 'john-c-calhoun.html',     categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'Republican Era'],             blurb: 'Eighth President of the United States (1833–1836); assassinated May 9, 1836.' },
  { title: 'Giles Brandon',                        file: 'giles-brandon.html',      categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'Republican Era'],             blurb: 'Ninth President of the United States (1836–1839); succeeded to office following the assassination of Calhoun.' },
  { title: 'Victor Yates',                         file: 'victor-yates.html',       categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Republican Era'],               blurb: 'Tenth President of the United States (1839–1845); Democrat restoration after Republican instability.' },
  { title: 'Wilbur Haines',                        file: 'wilbur-haines.html',      categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Republican Era'],               blurb: 'Elevent President of the United States (1845–1851); Continuation of the Yates era.' },
  { title: 'Robert Lee',                           file: 'robert-lee.html',         categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'Republican Era'],             blurb: 'Twelfth President of the United States (1851–1856); Major upheaval surrounding the expansion of slavery. Assassinated in 1856, a trigger of the War Between the States.' },
  { title: 'James Hawthorne',                      file: 'james-hawthorne.html',    categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'War Between the States'],     blurb: 'Thirteenth President of the United States (1856–1860); Led the "Slaver Union" during the War Between the States after assuming the presidency upon President Lee\'s assassination. Heavihandedness likely triggerd the War.' },
  { title: 'Hugo Brandt',                          file: 'hugo-brandt.html',        categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'War Between the States'],       blurb: 'Fourteenth President of the United States (1863–1869); Acting President of the Free States (1858–1863); led the republic through the War Between the States.' },
  { title: 'John P. Quincy',                       file: 'john-p-quincy.html',      categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Reconstruction'],               blurb: 'Fifteenth President of the United States (1869–1873); Popular Democratic president, seen as the finisher of reconstruction. Resigned in 1873 amid scandal.' },
  { title: 'Bradley Kinder',                       file: 'bradley-kinder.html',     categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Reconstruction'],               blurb: 'Sixteenth President of the United States (1873–1875); Caretaker president following the resignation of Presideny Quincy in the wake of the Clark Scandal.' },
  { title: 'Horace Littlefield',                   file: 'horace-littlefield.html', categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Guilded Age'],                blurb: 'Seventeenth President of the United States (1877-1881); Birth of the modern presidency - the first president to travel extensively, seeing the Pacific Coast, and visiting Canada.' },
  { title: 'Theodore Drake',                       file: 'theodore-drake.html',     categories: ['Biographies', 'Presidents of the United States', 'Democratic Party politicians', 'Guilded Age'],                blurb: 'Eighteenth President of the United States (1881-1887); Major austerity cuts, presided - and failed to respond properly to - the Italian Flu epedmic.' },
  { title: 'Leeland Rowling',                      file: 'leeland-rowling.html',    categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Guilded Age'],                blurb: 'Nineteenth President of the United States (1887-1893); End of austerity, major expansions to the National Road network, the dedication of the Freedom Triumphant statue, and the first state visit to Great Britain.' },
  { title: 'Colin Beck',                           file: 'colin-beck.html',         categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Guilded Age'],                blurb: 'Twentieth President of the United States (1893-1899); Cabinet expansion (adding three new executive departments), Women\'s suffrage amendment passed by Congress, and Calumet given federal district status.' },
  { title: 'Alexander Fleak',                      file: 'alexander-fleak.html',    categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Guilded Age'],                blurb: 'Twenty-first President of the United States (1899-1903); Continued support for infrastructure projects, major education reform, adoption of the suffrage amendment, but storm clouds building in Cuba.' },
  { title: 'Peter Landon',                         file: 'peter-landon.html',       categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Guilded Age'],                blurb: 'Twenty-second President of the United States (1903-1905); First Black man to serve as president, attempted to oversee the growing crisis in Cuba with the Matanzas Clique.' },

  
];

// ── DERIVED DATA ──

// All unique categories, sorted
const NEDEX_CATEGORIES = [...new Set(NEDEX_ARTICLES.flatMap(a => a.categories))].sort();

// Articles grouped by primary category (first category listed)
function getNedexByCategory(cat) {
  return NEDEX_ARTICLES.filter(a => a.categories.includes(cat));
}

// Total article count
const NEDEX_COUNT = NEDEX_ARTICLES.length;

// Recent articles (last N added — assumes array is in chronological order)
function getNedexRecent(n = 5) {
  return [...NEDEX_ARTICLES].reverse().slice(0, n);
}

// ── FEATURED ARTICLE POOL ──
// Rotates daily. Each entry: article title, file, image emoji, and a 2-3 sentence summary.
const NEDEX_FEATURED = [
  {
    title: 'Hugo Brandt',
    file: 'hugo-brandt.html',
    img: '../../images/nedex/14-Photo-Brandt.png',
    summary: 'Hugo Brandt (1812–1891) is regarded by historians as one of the most consequential figures in American history — the man who held the republic together during the War Between the States, guided it through the abolition of slavery, and oversaw the constitutional convention that produced the Constitution of 1861. Born to German immigrant parents in Ohio, he became the youngest-ever Speaker of the House before leading the Free States government to victory.'
  },
  {
    title: 'Kingdom of Hawaiʻi',
    file: 'hawaii.html',
    img: '../../images/nedex/hawaii.png',
    subtitle: 'Unitary constitutional monarchy · Pacific Ocean',
    summary: 'The Kingdom of Hawaiʻi is one of the Pacific\'s preeminent trade and transit states, its capital Honolulu serving as the central waypoint on trans-Pacific routes connecting North America and East Asia. Governed by the Kamehameha Dynasty under a bicameral legislature, the kingdom navigated a century of foreign commercial pressure and emerged as an independent associate member of the North American Union.'
  },
  {
    title: 'Union of European Republics',
    file: 'uer.html',
    img: '../../images/nedex/uerflag.png',
    subtitle: 'Communalist federal republic · Founded 1904',
    summary: 'The Union of European Republics was born from the simultaneous revolutionary collapse of France and the South German Confederation at the close of the Great European War. The only functioning communalist state in the world, it has been a source of ideological anxiety for conservative governments since its founding, and its survival against Prussian invasion in the Global War demonstrated that the experiment was not a passing moment but a durable state.'
  },
  {
    title: 'Federal Republic of Central America',
    file: 'central-america.html',
    img: '../../images/nedex/frca_flag.png',
    subtitle: 'Federal presidential republic · Founded 1830',
    summary: 'The Federal Republic of Central America is the only successful federation to emerge from the dissolution of Spanish colonial authority in Central America. Its survival across two centuries is widely attributed to Francisco Morazán\'s political pragmatism in negotiating the Federal Compact of 1836, which defused conservative opposition without sacrificing the federal framework. The republic became a key partner in the construction of the Central American Canal, opened in 1926.'
  },
  {
    title: 'Empire of Mexico',
    file: 'mexico.html',
    img: '../../images/nedex/mexico.png',
    subtitle: 'Constitutional monarchy · Founded 1835',
    summary: 'The Empire of Mexico was founded in 1835 following a conservative counter-coup against the liberal Mexican Republic. After decades of tension between throne and legislature, Empress Gabriella emerged victorious from a devastating civil war (1913–1921), and the Constitution of 1922 established genuine parliamentary democracy and universal suffrage — making Mexico one of the first nations in the world to grant women the vote.'
  },
  {
    title: 'William Crawford',
    file: 'william-crawford.html',
    img: '../../images/nedex/5-Crawford.png',
    summary: 'William Crawford holds a unique place in American history as the president who oversaw the founding of Franklin and the construction of the new national capital on the Ohio River. Governing in the aftermath of the burning of Washington City in August 1814, Crawford navigated the extraordinary challenge of relocating a federal government and establishing a new seat of power from which all subsequent American history would unfold.'
  },
];

// ── DID YOU KNOW POOL ──
const NEDEX_DYK = [
  'Washington House, the official residence of the President of the United States, was designed by architects Kemp & Ogden and completed in 1827 — its first occupant was President Alexander Hamilton Jr., son of Founding Father Alexander Hamilton.',
  'Hugo Brandt\'s father was a stonemason who helped build Congress Hall in Franklin in the 1820s — the same building Brandt would later govern from as Acting President of the Free States.',
  'The USRC, founded in 1834, is one of the oldest continuously operating federal enterprises in the United States, predating the Constitution of 1861 itself.',
  'The Kingdom of Hawaiʻi\'s Constitution of 1868 created a bicameral legislature that included property-qualified seats originally designed to give formal representation to the kingdom\'s substantial foreign landowning community.',
  'The Union of European Republics commissioned a constructed language — Europan — under First Delegate Mathias Holtz, intended to dissolve national identities by replacing French and German as the medium of official life. It survives today in ceremonial use only.',
  'The Federal Republic of Central America\'s founding president, Francisco Morazán, negotiated the Federal Compact of 1836 — conceding provincial autonomy and Church property rights to conservatives in exchange for the federation\'s survival.',
  'The Central American Canal, opened in 1926, was built under a tripartite commission representing the United States, the Federal Republic of Central America, and Canada — with canal toll revenues divided roughly equally among the three.',
  'The Empire of Mexico\'s Empress Gabriella came to power in 1913 at the age of 26, and within months was fighting a civil war against her own brother, who had declared himself Emperor Raul IV.',
  'Canada\'s capital Aurora was purpose-built on Manitoulin Island in Lake Huron as a compromise between Toronto and Montreal interests — construction began in the mid-1880s and it became the seat of government in the early 1900s.',
  'The Union of the Californias declared independence in 1844 during the collapse of the Mexican Republic, but formal international recognition did not come until the Second Treaty of New Orleans in 1847, following the Second Mexican War.',
  'John C. Calhoun, the eighth President of the United States, was assassinated on May 9, 1836 — the first US president to be killed in office. His death set in motion the political crisis that would eventually lead to the War Between the States.',
  'George Washington\'s decision not to seek a third term established the precedent of the two-term presidency — a tradition that was later codified in law under the Constitution of 1861.',
];

// Pick today's featured article and DYK items
const _nedexDayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
const NEDEX_FEATURED_TODAY = NEDEX_FEATURED[_nedexDayOfYear % NEDEX_FEATURED.length];
const NEDEX_DYK_TODAY = [
  NEDEX_DYK[_nedexDayOfYear % NEDEX_DYK.length],
  NEDEX_DYK[(_nedexDayOfYear + 4) % NEDEX_DYK.length],
  NEDEX_DYK[(_nedexDayOfYear + 8) % NEDEX_DYK.length],
];
