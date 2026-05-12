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
  { title: 'George Washington',                    file: 'george-washington.html',  categories: ['Biographies', 'Presidents of the United States', 'Unaffiliated politicians', 'Founding Era'],                  blurb: 'First President of the United States (1789–1797); established the precedents of the office.' },
  { title: 'John Adams',                           file: 'john-adams.html',         categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Founding Era'],               blurb: 'Second President of the United States (1797–1801); first Federalist president.' },
  { title: 'Thomas Jefferson',                     file: 'thomas-jefferson.html',   categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],          blurb: 'Third President of the United States (1801–1809); Louisiana Purchase and Lewis & Clark Expedition.' },
  { title: 'James Madison',                        file: 'james-madison.html',      categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],          blurb: 'Fourth President of the United States (1809–1817); president during the Burning of Washington City in 1814.' },
  { title: 'William Crawford',                     file: 'william-crawford.html',   categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],          blurb: 'Fifth President of the United States (1817–1821); oversaw the founding of Franklin as the new national capital.' },
  { title: 'Henry Clay',                           file: 'henry-clay.html',         categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Founding Era'],                 blurb: 'Sixth President of the United States (1821–1827); commissioned Washington House.' },
  { title: 'Alexander Hamilton, Jr.',              file: 'alexander-hamilton-jr.html', categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Founding Era'],           blurb: 'Seventh President of the United States (1827–1833); first president to reside in Washington House.' },
  { title: 'John C. Calhoun',                      file: 'john-c-calhoun.html',     categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'Republican Era'],             blurb: 'Eighth President of the United States (1833–1836); assassinated May 9, 1836.' },
  { title: 'Giles Brandon',                        file: 'giles-brandon.html',      categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'Republican Era'],             blurb: 'Ninth President of the United States (1836–1839); succeeded to office following the assassination of Calhoun.' },
  { title: 'Victor Yates',                         file: 'victor-yates.html',       categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Republican Era'],               blurb: 'Tenth President of the United States (1839–1845); Democrat restoration after Republican instability.' },
  { title: 'Hugo Brandt',                          file: 'hugo-brandt.html',        categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'War Between the States'],       blurb: 'Fourteenth President of the United States (1863–1869); Acting President of the Free States (1858–1863); led the republic through the War Between the States.' },

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
