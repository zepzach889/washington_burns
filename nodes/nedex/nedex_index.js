// nedex-index.js — Master article registry for Nedex
// Add one entry per article. All Nedex pages read from this file.
// Fields: title, file, categories (array), blurb (one sentence)

const NEDEX_ARTICLES = [

  // ── COUNTRIES & NATIONS ──
  { title: 'Union of the Californias',             file: 'california.html',         categories: ['Countries', 'North American nations', 'NAU member states', 'Parliamentary republics'],                                                    blurb: 'Independent parliamentary republic on the Pacific Coast of North America, founded 1844.' },
  { title: 'Dominion of Canada',                   file: 'canada.html',             categories: ['Countries', 'North American nations', 'NAU member states', 'Constitutional monarchies', 'British Empire'],                               blurb: 'Self-governing dominion of the British Empire occupying the northern portion of North America.' },
  { title: 'Federal Republic of Central America',  file: 'central-america.html',    categories: ['Countries', 'North American nations', 'NAU member states', 'Federal republics', 'Global Peace Council members'],                         blurb: 'Federal republic occupying the Central American isthmus, founded 1830 under Francisco Morazán.' },
  { title: 'Empire of Mexico',                     file: 'mexico.html',             categories: ['Countries', 'North American nations', 'NAU member states', 'Constitutional monarchies', 'Global Peace Council members'],                  blurb: 'Constitutional monarchy in southern North America, founded 1835; current constitution 1922.' },
  { title: 'Texas Federation',                     file: 'texas.html',              categories: ['Countries', 'North American nations', 'NAU member states', 'Federal republics', 'Global Peace Council members'],                         blurb: 'Independent federal republic occupying the former Mexican province of Texas and surrounding territories.' },
  { title: 'Union of European Republics',          file: 'uer.html',                categories: ['Countries', 'European nations', 'Communalist states', 'Global War belligerents', 'Global Peace Council members'],                        blurb: 'Communalist federal republic in western and central Europe, formed 1904 from revolutionary France and South Germany.' },
  { title: 'United German Republic',               file: 'german_republic.html',    categories: ['Countries', 'European nations', 'Federal republics', 'Parliamentary republics', 'Global Peace Council members'],                         blurb: 'Federal parliamentary republic of the German-speaking states, established 1938 following the Global War; reunified with the former Prussian territories in 1996.' },
  { title: 'Kingdom of Hawaiʻi',                   file: 'hawaii.html',             categories: ['Countries', 'Pacific nations', 'NAU member states', 'Constitutional monarchies', 'Global Peace Council members'],                        blurb: 'Independent constitutional monarchy of the Hawaiian archipelago; Pacific trade hub and full member of the North American Union.' },

  // ── HISTORY & LISTS ──
  { title: 'History of the Texas Federation',      file: 'hist_of_texas.html',      categories: ['History', 'North American history', 'Texas Federation'],                                                                                  blurb: 'Full account of the political and social history of the Texas Federation from independence to the present.' },
  { title: 'Presidents of the Texas Federation',   file: 'list_of_pres_tex.html',   categories: ['Lists', 'Texas Federation', 'Heads of government'],                                                                                       blurb: 'Complete list of presidents of the Texas Federation from founding to the present day.' },
  { title: 'Presidents of the United States',      file: 'list_of_pres_usa.html',   categories: ['Lists', 'United States', 'Heads of government'],                                                                                          blurb: 'Complete list of presidents of the United States from George Washington to Sophia Nakamura.' },

  // ── BIOGRAPHIES — US PRESIDENTS ──
  { title: 'George Washington',                    file: 'george-washington.html',      categories: ['Biographies', 'Presidents of the United States', 'Unaffiliated politicians', 'Founding Era'],                                        blurb: 'First President of the United States (1789–1797); established the precedents of the office.' },
  { title: 'John Adams',                           file: 'john-adams.html',             categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Founding Era'],                                    blurb: 'Second President of the United States (1797–1801); first Federalist president.' },
  { title: 'Thomas Jefferson',                     file: 'thomas-jefferson.html',       categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],                               blurb: 'Third President of the United States (1801–1809); Louisiana Purchase and Lewis & Clark Expedition.' },
  { title: 'James Madison',                        file: 'james-madison.html',          categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],                               blurb: 'Fourth President of the United States (1809–1817); president during the Burning of Washington City in 1814.' },
  { title: 'William Crawford',                     file: 'william-crawford.html',       categories: ['Biographies', 'Presidents of the United States', 'Democratic-Republican politicians', 'Founding Era'],                               blurb: 'Fifth President of the United States (1817–1821); oversaw the founding of Franklin as the new national capital.' },
  { title: 'Henry Clay',                           file: 'henry-clay.html',             categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Founding Era'],                                      blurb: 'Sixth President of the United States (1821–1827); commissioned Washington House and established the Federal Bureau of Improvements.' },
  { title: 'Alexander Hamilton, Jr.',              file: 'alexander-hamilton-jr.html',  categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Founding Era'],                                   blurb: 'Seventh President of the United States (1827–1833); first president to reside in Washington House; oversaw the Franklin Indian Treaty.' },
  { title: 'John C. Calhoun',                      file: 'john-c-calhoun.html',         categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'Republican Era'],                                  blurb: 'Eighth President of the United States (1833–1836); established the USRC and the Preston education system; assassinated May 9, 1836.' },
  { title: 'Giles Brandon',                        file: 'giles-brandon.html',          categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'Republican Era'],                                  blurb: 'Ninth President of the United States (1836–1839); succeeded to office following the assassination of Calhoun; negotiated the First Treaty of New Orleans.' },
  { title: 'Victor Yates',                         file: 'victor-yates.html',           categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Republican Era'],                                    blurb: 'Tenth President of the United States (1839–1845); passed the Grantham Act and oversaw the admission of Iowa; declared war on Imperial Mexico in 1845.' },
  { title: 'Wilbur Haines',                        file: 'wilbur-haines.html',          categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Republican Era'],                                    blurb: 'Eleventh President of the United States (1845–1851); won the Second Mexican War, securing independence for Texas and California via the Second Treaty of New Orleans.' },
  { title: 'Robert Lee',                           file: 'robert-lee.html',             categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'Republican Era'],                                  blurb: 'Twelfth President of the United States (1851–1856); presided over escalating tensions over slavery and the Runaway Slave Act; assassinated in 1856.' },
  { title: 'James Hawthorne',                      file: 'james-hawthorne.html',        categories: ['Biographies', 'Presidents of the United States', 'Republican Party politicians', 'War Between the States'],                          blurb: 'Thirteenth President of the United States (1856–1860); his authoritarian response to abolitionist resistance triggered the War Between the States; surrendered in Atlanta in 1860.' },
  { title: 'Hugo Brandt',                          file: 'hugo-brandt.html',            categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'War Between the States'],                            blurb: 'Fourteenth President of the United States (1863–1869); Acting President of the Free States (1858–1863); led the republic through the War Between the States and the Reconstruction era.' },
  { title: 'John P. Quincy',                       file: 'john-p-quincy.html',          categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Reconstruction'],                                   blurb: 'Fifteenth President of the United States (1869–1873); oversaw the final reintegration of Georgia and Florida, established the Federal Office of Education, and completed the transcontinental railroad.' },
  { title: 'Bradley Kinder',                       file: 'bradley-kinder.html',         categories: ['Biographies', 'Presidents of the United States', 'Democrat Party politicians', 'Reconstruction'],                                   blurb: 'Sixteenth President of the United States (1873–1875); caretaker president following the resignation of President Quincy in the wake of the Clark Scandal.' },
  { title: 'Horace Littlefield',                   file: 'horace-littlefield.html',     categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Gilded Age'],                                     blurb: 'Seventeenth President of the United States (1877–1881); birth of the modern presidency — the first president to travel extensively, seeing the Pacific Coast and visiting Canada.' },
  { title: 'Theodore Drake',                       file: 'theodore-drake.html',         categories: ['Biographies', 'Presidents of the United States', 'Democratic Party politicians', 'Gilded Age'],                                     blurb: 'Eighteenth President of the United States (1881–1887); major austerity cuts; presided over — and failed to respond adequately to — the Italian Flu epidemic.' },
  { title: 'Leeland Rowling',                      file: 'leeland-rowling.html',        categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Gilded Age'],                                     blurb: 'Nineteenth President of the United States (1887–1893); end of austerity, major expansions to the National Road network, the dedication of the Freedom Triumphant statue, and the first state visit to Great Britain.' },
  { title: 'Colin Beck',                           file: 'colin-beck.html',             categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Gilded Age'],                                     blurb: 'Twentieth President of the United States (1893–1899); cabinet expansion, Women\'s suffrage amendment passed by Congress, and Calumet given federal district status.' },
  { title: 'Alexander Fleak',                      file: 'alexander-fleak.html',        categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Gilded Age'],                                     blurb: 'Twenty-first President of the United States (1899–1903); continued support for infrastructure projects, major education reform, adoption of the suffrage amendment.' },
  { title: 'Peter Landon',                         file: 'peter-landon.html',           categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Gilded Age', 'Wars and Conflicts'],               blurb: 'Twenty-second President of the United States (1903–1905); first Black man to serve as president; attempted to oversee the growing crisis in Cuba with the Matanzas Clique.' },
  { title: 'Cornelius Roosevelt II',               file: 'cornelius-roosevelt-ii.html', categories: ['Biographies', 'Presidents of the United States', 'Federalist Party politicians', 'Gilded Age', 'Wars and Conflicts'],               blurb: 'Twenty-third President of the United States (1905–1911); popular wartime president who oversaw the destruction of the Matanzas Clique in Cuba and a wave of postwar national pride.' },

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
// Rotates daily using seeded shuffle so all articles appear before repeating.
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
    summary: 'The Kingdom of Hawaiʻi is one of the Pacific\'s preeminent trade and transit states, its capital Honolulu serving as the central waypoint on trans-Pacific routes connecting North America and East Asia. Governed by the Kamehameha Dynasty under a bicameral legislature, the kingdom navigated a century of foreign commercial pressure and emerged as a full member of the North American Union.'
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
// 40 entries — shuffled daily so all appear before repeating.
const NEDEX_DYK = [
  // Franklin & the capital
  'Washington House, the official residence of the President of the United States, was designed by architects Kemp & Ogden and completed in 1827 — its first occupant was President Alexander Hamilton Jr., son of Founding Father Alexander Hamilton.',
  'The city of Franklin was renamed from Cincinnati after President Crawford\'s 1817 Grand Compromise selected it as the new national capital — construction of the government district took a full decade, with the Congress Hall only completed in time for Hamilton\'s 1827 inauguration.',
  'Franklin is built on both banks of the Ohio River, with Congress Hall on the north bank and Washington House on the south. The George Washington Bridge linking the two sides of Union Avenue did not open until 1877 — fifty years after the city became the capital.',
  'Hugo Brandt\'s father was a stonemason who helped build Congress Hall in the 1820s — the same building Brandt would later govern from as Acting President of the Free States.',

  // War Between the States
  'The War Between the States produced not two but three rival governments at its peak: James Hawthorne\'s Union in Atlanta, Hugo Brandt\'s Free States in Philadelphia (later Franklin), and Ulysses Portman\'s Confederation of American States in Montpelier, Vermont.',
  'The shelling of Boston Harbor in early 1857 — when Union Navy ships misread a warning shot from Fort Warren as an attack — is widely credited with transforming what might have been a political standoff into a shooting war.',
  'Manhattan Island was fought over in three separate battles during the War Between the States, leaving it almost entirely destroyed. Its population fell from nearly half a million before the war to an estimated 75,000 by 1863, with European immigrants providing much of the labor force for its subsequent reconstruction.',
  'President Hawthorne relocated the Union government from Franklin to Atlanta in July of 1859, citing personal safety — a move his own generals opposed and which many historians regard as the moment the South lost the initiative.',
  'Joshua Black, a formerly enslaved house attendant from Mississippi, led a slave revolt in early 1860 that grew into the Republic of New Africa — controlling much of Mississippi and northern Alabama before ultimately agreeing to rejoin the United States in exchange for the Negro Emancipation Act of 1860.',
  'The Confederation of American States, formed by the New England secessionists, operated under a Westminster-style parliamentary constitution — meaning that when the Confederation dissolved and rejoined the United States in 1861, it brought with it the political ideas that shaped the executive reforms of the Constitution of 1861.',

  // Constitution of 1861
  'The Constitution of 1861 moved the Bill of Rights to the front of the document as Article I, explicitly defining citizenship and banning slavery — a reversal of the 1787 convention\'s decision not to lead with a list of rights.',
  'The office of Secretary General — the head of the president\'s cabinet, appointed by and accountable to the House of Representatives — was the most radical innovation of the 1861 Constitutional Convention, and the result of weeks of standoffs between New England delegates and moderates from the western states.',
  'Indiana Senator Abraham Lincoln presided over the 1861 Constitutional Convention, chosen as a moderate compromise between radical New Englanders and conservative southern delegates. He later became Chief Justice of the Supreme Court under President Quincy.',
  'The states of Kanasaw and Gigadohi — the first Native-majority states in the United States — were admitted to the Union in September of 1862, with constitutions that included a "Council of Nations" upper chamber representing each tribe and communal land trust provisions.',

  // The USRC & infrastructure
  'The USRC, founded in 1834 under President Calhoun, is one of the oldest continuously operating federal enterprises in the United States, predating the Constitution of 1861 itself — its first test line ran from Boston to Brooklyn.',
  'The National Road network was established under President Clay in 1821, beginning as a single route from Cumberland to Wheeling before eventually expanding to seven numbered roads spanning the continent. The Fifth National Road, from St. Louis to Astoria, Oregon, became the backbone of America\'s transcontinental connection.',
  'Canada\'s Trans-Canadian Railway and the United States\' transcontinental railroad were built in deliberate competition during the 1860s and 1870s, with newspapers on both sides of the border tracking construction progress in what they called "the Race to the Pacific."',

  // Presidents & political history
  'John C. Calhoun, the eighth President of the United States, was assassinated on May 9, 1836 — the first US president to be killed in office. His death set in motion the political crisis that would eventually lead to the War Between the States.',
  'President Robert Lee owned over a hundred enslaved people at the time he took office in 1851, yet wrote privately that he hoped to keep the presidency above the slavery debate and seek a lasting compromise — a goal that proved impossible.',
  'George Washington\'s decision not to seek a third term established the precedent of the two-term presidency — a tradition that was later codified in law under the Constitution of 1861.',
  'The election of 1826 was the second in American history to be decided by the House of Representatives, after no candidate won an outright majority of the electoral college. Alexander Hamilton Jr. was chosen despite John C. Calhoun receiving the most electoral votes — a result Republicans called the "Devil\'s Bargain."',
  'Peter Landon, the twenty-second president, was the first Black man to serve as President of the United States — elected in 1903 as the Federalist candidate at a moment when the party\'s abolitionist legacy gave it particular strength among Black voters in the South.',

  // Crawford era & Grand Compromise
  'The Grand Compromise of 1817 settled four major disputes at once: replacing Vice President Tompkins (who had died before the inauguration), moving the capital westward, reforming the presidential term to a single six-year period, and setting a higher threshold for declarations of war.',
  'The 14th Amendment, passed as part of the Grand Compromise of 1817, limited presidents to a single six-year term — a provision that shaped American politics for generations and prevented the emergence of entrenched executive dynasties.',

  // Hawaii
  'The Kingdom of Hawaiʻi\'s Constitution of 1868 created a bicameral legislature that included property-qualified seats originally designed to give formal representation to the kingdom\'s substantial foreign landowning community while preserving Hawaiian political authority.',
  'Honolulu\'s strategic importance as a trans-Pacific waypoint surged dramatically in the early 1880s when three separate transcontinental rail networks — American, Canadian, and Californian-Texian — all reached Pacific ports within a few years of each other, tripling the volume of shipping that needed a mid-ocean stop.',

  // California & Texas
  'The Union of the Californias declared independence in 1844 during the collapse of the Mexican Republic, but formal international recognition did not come until the Second Treaty of New Orleans in 1847, following the Second Mexican War.',
  'The Texas Federation\'s constitution of 1847 left slavery as a state-level issue — meaning only the state of Austin initially permitted it, while the other member states immediately banned the institution. Austin finally abolished slavery through compensated manumission in 1863 under pressure from both Texopolis and Franklin.',
  'The Galvezport-to-San Francisco railroad, completed in 1881 and funded jointly by the Texas Federation and the Union of the Californias, was the first rail link across the southern span of the North American continent and transformed both nations\' economies within a decade.',

  // Canada
  'Canada\'s capital Aurora was purpose-built on Manitoulin Island in Lake Huron as a compromise between Toronto and Montreal interests — construction began in the mid-1880s and it became the seat of government in the early 1900s.',
  'The Dominion of Canada was formed in 1864 partly in response to the United States\' transcontinental railroad ambitions — colonial leaders recognized that only a unified British North America could pool the resources needed to build a competing line from Toronto to the Pacific coast.',

  // Mexico & FRCA
  'The Empire of Mexico\'s Empress Gabriella came to power in 1913 at the age of 26, and within months was fighting a civil war against her own brother, who had declared himself Emperor Raul IV. She prevailed and went on to enact universal suffrage in 1922.',
  'The Central American Canal, opened in 1926, was built under a tripartite commission representing the United States, the Federal Republic of Central America, and Canada — with canal toll revenues divided roughly equally among the three signatories of the Treaty of Managua.',
  'The Federal Republic of Central America\'s founding president, Francisco Morazán, negotiated the Federal Compact of 1836 — conceding provincial autonomy and Church property rights to conservatives in exchange for the federation\'s survival. He governed for over two decades and died in office in 1856.',

  // UER & European history
  'The Union of European Republics commissioned a constructed language — Europan — under First Delegate Mathias Holtz, intended to dissolve national identities by replacing French and German as the medium of official life. It survives today in ceremonial use only.',
  'Mathias Holtz, the UER\'s second First Delegate, moved the capital from Paris to Strasbourg in 1916 as a symbolic gesture of neutrality between the French and German founding peoples — it was moved back to Paris after his removal from power in the late 1920s.',
  'The UER\'s 1906 repudiation of all pre-revolutionary French and South German debt caused a cascading financial crash across European institutions — a deliberate gamble by First Delegate Marchand, who calculated that diplomatic isolation was preferable to servicing debts of governments the UER had overthrown.',

  // Germany & Prussia
  'When the United German Republic was proclaimed in 1938, it was built from the non-Prussian states of the old Union of German States — Hanover, Thuringia, Saxony, Hamburg, and others. The Kingdom of Prussia limped on separately for another five decades before collapsing in the 1990s.',
  'The young Prussian king Franz Hohenzollern, who died during a coup attempt in 1995, never lived to see the unified Germany his martyrdom made possible. Statues, public squares, and a national scholarship program across the reunified republic now bear his name.',
  'Hannover was chosen as the capital of the United German Republic in 1938 in deliberate rejection of Berlin — the founders wanted to signal that the Germany built on resistance to Prussian domination, not Prussian imperial ambition, was the Germany that would now govern itself.',
];

// ── SEEDED SHUFFLE ──
// Deterministic Fisher-Yates using a simple LCG seeded by day-of-year.
// Ensures all items appear before repeating across a full cycle.
function _nedexSeededShuffle(arr, seed) {
  const a = arr.slice();
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const _nedexDayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);

// Featured article: cycles through all entries before repeating
const _nedexFeaturedShuffled = _nedexSeededShuffle(NEDEX_FEATURED, _nedexDayOfYear + 1);
const NEDEX_FEATURED_TODAY = _nedexFeaturedShuffled[_nedexDayOfYear % _nedexFeaturedShuffled.length];

// DYK: shuffled daily, pick first 3 — full 40-item cycle before any repeat
const _nedexDYKShuffled = _nedexSeededShuffle(NEDEX_DYK, _nedexDayOfYear + 7);
const NEDEX_DYK_TODAY = _nedexDYKShuffled.slice(0, 3);
