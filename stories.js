// stories.js — Shared content pools for the Washington Burns Interlink site
// All pages load this file to ensure daily story rotation stays in sync.
//
// HOW TO ADD NEW STORIES:
// Find the right array below and append a new object at the end.
// No other changes needed — the rotation picks it up automatically.

// ── DAY OF YEAR (canonical, used by all pages) ──
const _now = new Date();
const DAY_OF_YEAR = Math.floor((_now - new Date(_now.getFullYear(), 0, 0)) / 86400000);
const CURRENT_HOUR = _now.getHours();

// ── MONTHS / DAYS ──
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS_OF_WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// ── SEED (year-inclusive, so Jan 1 2026 ≠ Jan 1 2027) ──
const SEED = _now.getFullYear() * 1000 + DAY_OF_YEAR;

// ── SEEDED SHUFFLE ──
// Deterministically reorders an array based on a numeric seed.
// Same seed always produces same order; different seed produces different order.
// Each pool uses a different offset so pools don't correlate with each other.
function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


// ═════════════════════════════════════════════════════════════════════════════
// ── FRANKLIN OBSERVER ──
// ═════════════════════════════════════════════════════════════════════════════

const FO_LEADS = [
  {
    label: 'politics',
    hed: 'Nakamura Signals Compromise Path on NAU Constitutional Consolidation',
    byline: 'By Eleanor Voss, Political Correspondent · Franklin',
    dek: 'US President says she will not oppose a full Assembly vote on the consolidation project, ending weeks of ambiguity over the American position.',
    body: [
      'President Sophia Nakamura signalled late Thursday that she would not oppose an NAU Assembly vote on the Constitutional Consolidation Act, a sweeping proposal to bring together more than eighty years of ad-hoc treaties, founding compacts, and institutional arrangements into a single governing document.',
      'The statement, delivered through her Communications Director from Washington House, represents the first substantive break from weeks of presidential silence on the question. The consolidation effort has been the defining issue of the 18th Assembly session.',
      'SPA and Federalist leaders in Congress welcomed Nakamura\'s position, while JCA floor leader Representative Aldridge of Tennessee called it "overreach into a continental matter that is not the President\'s to decide." Democrats were more measured.',
      'In Calumet, NAU Assembly Unionist and Labour bloc leaders said the statement removed the last major obstacle to scheduling a floor vote. CC bloc leader Whitfield of Texas said his group remained firmly opposed to any document that, in his words, "writes a constitution for a country that does not exist."'
    ]
  },
  {
    label: 'politics',
    hed: 'Congress Passes USRC Modernisation Funding Bill by Wide Margin',
    byline: 'By Marcus Hendry, Capitol Correspondent · Franklin',
    dek: 'Bipartisan majority approves Ȼ2.1 billion for Northeast and Prairie Corridor upgrades over the next six years.',
    body: [
      'Congress passed the USRC Infrastructure Modernisation Act on Wednesday by a margin of 312 to 88, delivering one of the largest single investments in the Railway Company\'s history and drawing praise from across the political spectrum.',
      'The bill, backed by a broad coalition of SPA, Federalist, and Democrat members, directs Ȼ2.1 billion toward electrification upgrades on the Northeast and Prairie Corridors and the construction of three new Franklin Central platforms.',
      'President Nakamura is expected to sign the bill at a ceremony at Franklin Central Station next week. The USRC\'s Director called it "a generational investment in the backbone of this nation."',
      'JCA members largely voted against the bill on fiscal grounds, though several from states with heavy rail usage crossed the aisle.'
    ]
  },
  {
    label: 'national',
    hed: 'Congress Debates Designation of New Federal Park in Appalachia',
    byline: 'By Ruth Calloway, Environment Correspondent · Franklin',
    dek: 'A bipartisan bill would add a second protected area in the Appalachian highlands, bringing the Federal Parks total to 58.',
    body: [
      'A bipartisan group of lawmakers introduced legislation this week to designate a new Federal Park in the central Appalachian highlands, which if passed would bring the total number of Federal Parks to 58 and mark the first new designation since the FPS network was last expanded in 2021.',
      'The proposed Allegheny Federal Park would protect over 200 square miles of ridgeline forest and river valley in the heart of the Appalachian range, an area that conservation groups have long identified as a priority for federal protection.',
      'Federal Parks Service Director Halverson expressed strong support for the designation, calling the proposed site "one of the last significant unprotected wilderness areas in the eastern United States." The bill has backing from both SPA and Federalist members.',
      'JCA members from the region have raised concerns about the economic impact on local timber and mining interests, and have signalled they will seek amendments before the bill reaches a floor vote.'
    ]
  },
];

const FO_NATIONAL = [
  { hed: 'NAU Assembly Advances Continental Currency Stabilisation Framework', dek: 'The NAU/18-042 bill, backed by a Labour-Unionist majority, moves to a full Assembly floor vote after clearing the Economic Affairs Committee.', meta: 'United Press · Calumet · 5 hours ago' },
  { hed: 'USRC Northeast Corridor Sets New Q1 Ridership Record', dek: '4.1 million passengers on the Franklin–Pittsburgh–Philadelphia mainline, the highest quarterly figure in the corridor\'s history.', meta: 'Observer Staff · 6 hours ago' },
  { hed: 'Washington House West Wing Reopens After Two-Year Restoration', dek: 'The public and diplomatic wing, closed since 2024 for its most comprehensive renovation since the full structural restoration of 1957–1961, reopened to visitors this week.', meta: 'Observer Staff · 9 hours ago' },
  { hed: 'Congress Debates Federal Arbitration Bureau Reauthorisation', dek: 'A coalition of SPA and Federalist members is pushing for expanded powers for the Bureau, while JCA members argue the agency has overstepped its mandate.', meta: 'United Press · Franklin · 4 hours ago' },
  { hed: 'FIS Director Confirmed by Senate After Months-Long Vacancy', dek: 'The Federal Investigative Service will have new leadership for the first time in three years following the Senate\'s confirmation of the President\'s nominee.', meta: 'Observer Staff · 7 hours ago' },
  { hed: 'Department of Education Report: Urban-Rural Literacy Gap Narrows for Third Consecutive Year', dek: 'The annual report shows measurable improvement in rural literacy rates across Prairie and Mountain states, though the gap with urban centres remains significant.', meta: 'United Press · Franklin · 11 hours ago' },
  { hed: 'Secretary Anderson Intros Streetcar Program', dek: 'Transportation Secretary Alex Anderson, together with Urban Development Secretary Thomas Bale, introduced a new plan to expand major streetcar systems in 7 major cities.', meta: 'Capitol Desk · 4 hours ago' },
];

const FO_WORLD = [
  { label: 'world', hed: 'China Opens HuaWang to Broader Interlink Access', dek: 'Post-2019 reform commitments continue as access restrictions are lifted for 61% of Chinese households. The GPC\'s digital rights commission warns progress remains uneven.', meta: 'United Press · 4 hours ago' },
  { label: 'world', hed: 'UER Premier Faces Parliamentary Challenge Over State Media Reforms', dek: 'The governing coalition in Paris is under pressure from opposition factions as a contentious bill to restructure state broadcasting enters its second reading in the National Assembly.', meta: 'Observer World Desk · 7 hours ago' },
  { label: 'world', hed: 'Britain and NAU Sign Five-Year Trade Renewal Agreement', dek: 'The agreement, signed in London, locks in preferential tariff arrangements across key manufacturing and agricultural sectors for both parties.', meta: 'United Press · London · 6 hours ago' },
  { label: 'world', hed: 'Russian Imperial Duma Deadlocked Over Modernisation Package as Tsar Urges Compromise', dek: 'Tsar Nicholas IV has appealed directly to Duma factions to break a weeks-long impasse over an industrial modernisation bill, warning that delay risks Russian competitiveness with Western rivals.', meta: 'Observer World Desk · 10 hours ago' },
  { label: 'culture', hed: 'NAU–UER Co-Production TC Drama Set During Global War Confirmed for Autumn', dek: 'The six-part series will broadcast simultaneously across NANet and UER member channels — a first for open-network international co-production.', meta: 'Observer Arts · 8 hours ago' },
  { label: 'culture', hed: 'Franklin National Orchestra Announces European Tour — Paris, Lyon, Munich, and Hamburg Among Stops', dek: 'The tour spans four countries: the UER (Paris, Lyon, Munich), the German Republic (Hamburg), the Kingdom of Austria (Vienna), and Britain (London). Performances begin in June.', meta: 'Observer Arts · 12 hours ago' },
];


// ═════════════════════════════════════════════════════════════════════════════
// ── ABN NEWS ──
// ═════════════════════════════════════════════════════════════════════════════

const ABN_LEADS = [
  { emoji: '⚖', tag: 'NAU', hed: 'Nakamura Signals She Will Not Oppose NAU Constitutional Consolidation Vote', dek: 'The US President\'s statement, issued through the Office of Communications, removes the last major obstacle to an NAU Assembly floor vote on the consolidation project.', meta: 'ABN Political Desk · Franklin · 2 hours ago' },
  { emoji: '🚂', tag: 'USA', hed: 'Congress Passes USRC Modernisation Bill — Ȼ2.1 Billion for Northeast and Prairie Corridors', dek: 'A broad bipartisan majority approved the largest single investment in the Railway Company\'s history. President Nakamura expected to sign at Franklin Central next week.', meta: 'ABN Political Desk · Franklin · 3 hours ago' },
  { emoji: '🌐', tag: 'World', hed: 'China Opens HuaWang Network to Broader Interlink Access', dek: 'Post-2019 reform commitments continue as access restrictions are rolled back for 61% of Chinese households. The GPC digital rights commission warns progress remains uneven.', meta: 'ABN Asia Desk · 2 hours ago' },
];

const ABN_CARDS = [
  { emoji: '🚂', bg: 'linear-gradient(135deg,#1a3a1a,#2d602d)', tag: 'Rail', tagColor: '#533AB7', hed: 'USRC Northeast Corridor Sets Third Straight Q1 Record', meta: '6 hours ago' },
  { emoji: '💱', bg: 'linear-gradient(135deg,#1a1a3a,#2d2d60)', tag: 'NAU', tagColor: '#993C1D', hed: 'NAU/18-042 Currency Framework Moves to Assembly Floor', meta: '5 hours ago' },
  { emoji: '📡', bg: 'linear-gradient(135deg,#2a1a1a,#5d2d2d)', tag: 'World', tagColor: '#0F6E56', hed: 'China: Interlink Now Reaches 61% of Households as Access Reforms Continue', meta: '4 hours ago' },
  { emoji: '🏛', bg: 'linear-gradient(135deg,#1a1a1a,#3a3a3a)', tag: 'USA', tagColor: '#185FA5', hed: 'Washington House West Wing Reopens After Two-Year Restoration', meta: '9 hours ago' },
  { emoji: '📚', bg: 'linear-gradient(135deg,#1a2a3a,#2d4060)', tag: 'USA', tagColor: '#185FA5', hed: 'Education Dept: Urban-Rural Literacy Gap Narrows for Third Year Running', meta: '11 hours ago' },
  { emoji: '🔍', bg: 'linear-gradient(135deg,#2a2a1a,#505020)', tag: 'USA', tagColor: '#2D5A1A', hed: 'FIS Confirms New Director After Senate Approval Ends Months-Long Vacancy', meta: '7 hours ago' },
];

const ABN_WORLD = [
  { tag: 'UER', hed: 'UER Premier Faces Parliamentary Challenge Over State Media Reforms', dek: 'The governing coalition in Paris is under pressure as a contentious broadcasting reform bill enters its second reading in the National Assembly.', meta: 'ABN Europe Desk · 7 hours ago' },
  { tag: 'Britain', hed: 'London Markets Rise on NAU Currency Stabilisation Framework Progress', dek: 'The UKP strengthened against the Continental amid optimism about NAU monetary coordination following the Assembly committee vote.', meta: 'ABN Finance · 5 hours ago' },
  { tag: 'China', hed: 'GPC Digital Rights Commission Sets Phase 4 Interlink Access Timeline', dek: 'The Commission has issued binding guidance requiring full rural household access by 2028, ahead of the expected Phase 4 transition later this year.', meta: 'ABN Asia Desk · 9 hours ago' },
  { tag: 'Russia', hed: 'Tsar Nicholas IV Urges Duma to Break Modernisation Package Impasse', dek: 'The Tsar made a rare direct appeal to parliamentary factions, warning that continued deadlock risks Russian industrial competitiveness against Western rivals.', meta: 'ABN World Desk · 10 hours ago' },
  { tag: 'Britain', hed: 'Britain and NAU Sign Five-Year Trade Renewal Agreement in London', dek: 'The agreement locks in preferential tariff arrangements across manufacturing and agricultural sectors, with a joint review scheduled for 2029.', meta: 'ABN World Desk · 6 hours ago' },
  { tag: 'Canada', hed: 'Canadian PM Tremblay Visits Washington House for Bilateral Talks', dek: 'Trade, the Continental currency framework, and NAU constitutional consolidation were among the topics discussed during the two-day visit.', meta: 'ABN Political Desk · Franklin · 8 hours ago' },
];

const ABN_MOSTREAD = [
  'Nakamura signals she won\'t oppose NAU consolidation vote',
  'NAU currency framework: what it means for your savings',
  'USRC Northeast Corridor breaks ridership record',
  'China\'s Interlink opening — explained',
  'Congress passes Ȼ2.1bn USRC modernisation bill',
  'UER media reforms: why Paris is divided',
  'Tsar Nicholas IV and the Duma deadlock — explained',
  'Washington House West Wing reopens — what\'s changed',
];


// ═════════════════════════════════════════════════════════════════════════════
// ── WASHINGTON HOUSE ──
// ═════════════════════════════════════════════════════════════════════════════

const WH_STATEMENTS = [
  { label: 'Statement from the President', date: '13 March 2026', text: '"The Assembly exists to debate these questions — that is precisely what it was designed to do. If the people\'s representatives, meeting the standard our Constitution demands, choose to open that conversation, I will not stand in their way."', attr: '— President Nakamura, on the NAU Constitutional Consolidation question · Office of Communications' },
  { label: 'Statement from the President', date: '8 March 2026', text: '"This is what public investment looks like. Generation after generation, the Railway Company has delivered — and these numbers prove that when we invest in our people, they show up."', attr: '— President Nakamura, on USRC Q1 ridership record · Office of Communications' },
  { label: 'Statement from the President', date: '24 February 2026', text: '"We enter these talks not to dominate, but to build — a North America where every nation, large or small, has an equal stake in our shared prosperity."', attr: '— President Nakamura, ahead of NAU Economic Summit · Office of Communications' },
  { label: 'Statement from the President', date: '18 February 2026', text: '"Clean water is not a regional issue. It is a continental one. The Great Lakes belong to all of us, and we will protect them together."', attr: '— President Nakamura, on the Pan-Continental Clean Waters Compact · Office of Communications' },
  { label: 'Statement from the President', date: '11 February 2026', text: '"One year ago, I stood on the steps of this House and asked the American people for their trust. I intend to spend the next five years earning it."', attr: '— President Nakamura, first anniversary address · Office of Communications' },
  { label: 'Statement from the President', date: '3 February 2026', text: '"The question before us is not whether we can afford to act on this — the question is whether we can afford not to."', attr: '— President Nakamura, on the federal clean energy investment package · Office of Communications' },
  { label: 'Statement from the Press Secretary', date: '10 March 2026', text: '"The President is monitoring the situation closely and has directed the relevant departments to provide a full assessment by end of week. We will have more to say when that review is complete."', attr: '— Press Secretary Delacroix · Morning Briefing' },
  { label: 'Statement from the President', date: '27 January 2026', text: '"Pacific trade is not a privilege — it is the backbone of our Pacific states\' economies, and it must be protected with clear-eyed, principled negotiation."', attr: '— President Nakamura, on Pacific Trade Framework renewal · Office of Communications' },
  { label: 'Statement from the President', date: '15 January 2026', text: '"Every park, every trail, every stretch of protected wilderness is a promise we keep to our children. Today we keep another."', attr: '— President Nakamura, at the Federal Parks designation ceremony · Office of Communications' },
  { label: 'Statement from the Press Secretary', date: '5 March 2026', text: '"The President congratulates the USRC on another record quarter and reaffirms the Administration\'s commitment to continued federal investment in the national rail network."', attr: '— Press Secretary Delacroix · Office of Communications' },
];

const WH_BRIEFING = [
  { title: 'President Nakamura to Address NAU Economic Summit in Montréal, April 3–4', meta: 'Office of the Press Secretary · 12 March 2026' },
  { title: 'Statement on USRC Q1 Ridership Record: "A testament to what public investment delivers."', meta: 'Office of Communications · 8 March 2026' },
  { title: 'President Nakamura Receives Canadian Prime Minister Tremblay at Washington House', meta: 'Office of the Press Secretary · 7 March 2026' },
  { title: 'Administration Announces Appointments to the Federal Arbitration Bureau', meta: 'Office of the President · 5 March 2026' },
  { title: 'Nakamura Signs Reauthorisation of the Caribbean Integration & Development Fund', meta: 'Office of Communications · 3 March 2026' },
  { title: 'President Issues Statement Supporting NAU Assembly Currency Stabilisation Framework', meta: 'Office of Communications · 28 February 2026' },
  { title: 'Washington House West Wing Tours Resume Following Renovation of State Dining Room', meta: 'Office of the Press Secretary · 20 February 2026' },
  { title: 'President Nakamura Signs Pacific Trade Framework Renewal into Law', meta: 'Office of the Press Secretary · 25 February 2026' },
  { title: 'Administration Releases First Anniversary Progress Report — 47 Legislative Priorities', meta: 'Office of Communications · 11 February 2026' },
  { title: 'President Nakamura Hosts State Dinner for Kingdom of Hawaii Queen\'s Representative', meta: 'Office of the Press Secretary · 18 February 2026' },
  { title: 'Nakamura Nominates Three Justices to the Federal Court of Appeals, Western Circuit', meta: 'Office of the President · 22 February 2026' },
  { title: 'Press Secretary Delacroix Addresses Questions on NAU Consolidation Timeline', meta: 'Office of Communications · 2 March 2026' },
  { title: 'President Nakamura Marks Anniversary of Great Lakes Environmental Compact', meta: 'Office of Communications · 15 March 2026' },
  { title: 'Administration Announces Federal Parks Expansion — Six New Protected Areas Designated', meta: 'Office of the Press Secretary · 15 January 2026' },
  { title: 'President Nakamura Delivers Remarks at National Science & Industry Exposition, Calumet', meta: 'Office of Communications · 10 January 2026' },
];


// ═════════════════════════════════════════════════════════════════════════════
// ── CSN — CONTINENTAL SPORTS NETWORK ──
// ═════════════════════════════════════════════════════════════════════════════

// ── SCORES TICKER ──
const CSN_TICKER_SCORES = [
  'NBA · Franklin Senators 5, Manhattan Islanders 3 · FINAL',
  'NBA · Memphis Pharaohs 7, Nashville Volunteers 4 · FINAL',
  'NBA · Boston Navigators 2, Baltimore Skipjacks 1 · F/11',
  'NBA · New Orleans Creoles 6, Little Rock Riflemen 3 · FINAL',
  'NAFA · Franklin Nationals 2, Atlanta Southerners 1 · FINAL',
  'NAFA · Montreal Voyageurs 3, Toronto Maples 1 · FINAL',
  'NAFA · Mexico City Imperiales 2, Guadalajara Rayos 2 · FINAL',
  'NAFA · San Francisco Pacifics 1, Los Angeles Californianos 0 · FINAL',
  'ANSA · Gigadohi City United 4, Pushmataha Redsticks 2 · FINAL',
  'ANSA · St. Louis Ferrymen 3, Memphis Riverbenders 1 · FINAL',
  'MLA · San Antonio Vaqueros 21, Galvesport Breakers 14 · FINAL',
  'MLA · Los Angeles Dons 18, San Francisco Fogcutters 16 · FINAL',
  'MLA · Mexico City Tigres 24, Guadalajara Charros 19 · FINAL',
  'Union Cup · New England RC 22, Pittsburgh Three Rivers RC 17 · FINAL',
  'Union Cup · Golden Gate RC 31, LA Condors 24 · FINAL',
  'Women\'s · Franklin Suffragettes 4, Manhattan Roses 2 · FINAL',
  'Women\'s · Atlanta Magnolias 3, Charlotte Wrens 1 · FINAL',
];

// ── FEATURED STORIES ──
const CSN_LEADS = [
  { tag: 'NBA', hed: 'Franklin Senators Hold Off Islanders in Extra-Innings Thriller', dek: 'Capital city club extends winning streak to seven games with a dramatic late rally at Washington House Park, putting pressure on the Eastern Conference leaders.', meta: 'CSN Baseball Desk · Franklin · 2 hours ago' },
  { tag: 'NAFA', hed: 'Nationals Claim Derby Day as Franklin Edges Atlanta in Five-Goal Classic', dek: 'A sold-out Founders Field witnessed one of the season\'s finest matches as the Nationals and Southerners traded goals in a match that lived up to its billing.', meta: 'CSN Football Desk · Franklin · 3 hours ago' },
  { tag: 'MLA', hed: 'Vaqueros Surge to Top of Texas Division After Dominant Win Over Breakers', dek: 'San Antonio\'s 21–14 victory in Galvesport puts them three points clear at the top of the Texas Division with six rounds remaining in the regular season.', meta: 'CSN Aroball Desk · San Antonio · 4 hours ago' },
  { tag: 'ANSA', hed: 'Gigadohi City United Make History With Record-Breaking Home Win', dek: 'The United became the first team in ANSA history to win fifteen consecutive home matches, extending a streak that stretches back to last season\'s All-Nation Championship run.', meta: 'CSN Stickball Desk · Gigadohi City · 2 hours ago' },
  { tag: 'Union Cup', hed: 'New England RC Advance to Continental Semi-Finals With Dominant Display', dek: 'A commanding 22–17 victory over Pittsburgh Three Rivers RC sends New England through to the last four, where they will face the Golden Gate RC next month.', meta: 'CSN Rugby Desk · Boston · 5 hours ago' },
  { tag: 'Women\'s Baseball', hed: 'Suffragettes Clinch Eastern Division Title With Win Over Manhattan Roses', dek: 'Franklin\'s Suffragettes secured their third divisional title in four seasons with a composed 4–2 victory, setting up a potential Diamond Series repeat appearance.', meta: 'CSN Women\'s Baseball Desk · Franklin · 1 hour ago' },
];

// ── SCORE CARDS ──
const CSN_SCORES_NBA = [
  { home: 'Franklin Senators',      away: 'Manhattan Islanders',    score: '5–3',  status: 'FINAL' },
  { home: 'Memphis Pharaohs',       away: 'Nashville Volunteers',   score: '7–4',  status: 'FINAL' },
  { home: 'Boston Navigators',      away: 'Baltimore Skipjacks',    score: '2–1',  status: 'F/11' },
  { home: 'New Orleans Creoles',    away: 'Little Rock Riflemen',   score: '6–3',  status: 'FINAL' },
  { home: 'Atlanta Locomotives',    away: 'Birmingham Vulcans',     score: '4–2',  status: 'FINAL' },
  { home: 'St. Louis Rivermen',     away: 'Calumet Lakers',         score: '3–3',  status: 'F/10' },
];

const CSN_SCORES_NAFA = [
  { home: 'Franklin Nationals',          away: 'Atlanta Southerners',        score: '2–1', status: 'FINAL' },
  { home: 'Montreal Voyageurs',          away: 'Toronto Maples',             score: '3–1', status: 'FINAL' },
  { home: 'Mexico City Imperiales',      away: 'Guadalajara Rayos',          score: '2–2', status: 'FINAL' },
  { home: 'San Francisco Pacifics',      away: 'Los Angeles Californianos',  score: '1–0', status: 'FINAL' },
  { home: 'New Orleans Crescents',       away: 'Miami Floridians',           score: '1–1', status: 'FINAL' },
  { home: 'Galvesport Buccaneers',       away: 'San Antonio Rancheros',      score: '0–2', status: 'FINAL' },
];

const CSN_SCORES_ANSA = [
  { home: 'Gigadohi City United',   away: 'Pushmataha Redsticks',  score: '4–2', status: 'FINAL' },
  { home: 'St. Louis Ferrymen',     away: 'Memphis Riverbenders',  score: '3–1', status: 'FINAL' },
  { home: 'Philadelphia Bells',     away: 'Baltimore Fishermen',   score: '2–2', status: 'FINAL' },
  { home: 'New Echota Nighthawks',  away: 'Oyathira Coyotes',      score: '5–3', status: 'FINAL' },
  { home: 'Nashville Fiddlers',     away: 'Louisville Colonels',   score: '2–1', status: 'FINAL' },
  { home: 'New Boston Chinooks',    away: 'New Orleans Deltas',    score: '3–0', status: 'FINAL' },
];

const CSN_SCORES_MLA = [
  { home: 'San Antonio Vaqueros',      away: 'Galvesport Breakers',    score: '21–14', status: 'FINAL' },
  { home: 'Los Angeles Dons',          away: 'San Francisco Fogcutters', score: '18–16', status: 'FINAL' },
  { home: 'Mexico City Tigres',        away: 'Guadalajara Charros',    score: '24–19', status: 'FINAL' },
  { home: 'Franklin Statesmen',        away: 'St. Louis Brewers',      score: '17–12', status: 'FINAL' },
  { home: 'Monterrey Norteños',        away: 'Puebla Guerreros',       score: '20–15', status: 'FINAL' },
  { home: 'New Boston Bears',          away: 'Astoria Explorers',      score: '22–11', status: 'FINAL' },
];

const CSN_SCORES_RUGBY = [
  { home: 'New England RC',          away: 'Pittsburgh Three Rivers RC', score: '22–17', status: 'FINAL' },
  { home: 'Golden Gate RC',          away: 'LA Condors',                 score: '31–24', status: 'FINAL' },
  { home: 'Toronto Royals',          away: 'Aurora Dominion RC',         score: '19–14', status: 'FINAL' },
  { home: 'Philadelphia Keystones',  away: 'Baltimore Clippers',         score: '28–21', status: 'FINAL' },
  { home: 'Texopolis Rangers',       away: 'Galvesport RC',              score: '25–18', status: 'FINAL' },
  { home: 'Vancouver RC',            away: 'Pugetsburgh Columbians',     score: '16–13', status: 'FINAL' },
];

const CSN_SCORES_WOMENS = [
  { home: 'Franklin Suffragettes',  away: 'Manhattan Roses',       score: '4–2', status: 'FINAL' },
  { home: 'Atlanta Magnolias',      away: 'Charlotte Wrens',       score: '3–1', status: 'FINAL' },
  { home: 'New Orleans Violets',    away: 'Memphis Queens',        score: '5–3', status: 'FINAL' },
  { home: 'Boston Sirens',          away: 'Baltimore Pearls',      score: '2–1', status: 'F/12' },
  { home: 'Calumet Swans',          away: 'St. Louis Tigerlilies', score: '4–4', status: 'F/10' },
  { home: 'Astoria Selkies',        away: 'New Boston Ravens',     score: '3–2', status: 'FINAL' },
];

// ── STANDINGS (static season snapshots — not rotated) ──
const CSN_STANDINGS_NBA = {
  east: [
    { team: 'Franklin Senators',      w: 42, l: 18 },
    { team: 'Philadelphia Colonials', w: 38, l: 22 },
    { team: 'Boston Navigators',      w: 35, l: 25 },
    { team: 'Atlanta Locomotives',    w: 33, l: 27 },
    { team: 'Manhattan Islanders',    w: 31, l: 29 },
    { team: 'Baltimore Skipjacks',    w: 28, l: 32 },
    { team: 'Miami Everglades',       w: 26, l: 34 },
    { team: 'Birmingham Vulcans',     w: 24, l: 36 },
  ],
  west: [
    { team: 'Memphis Pharaohs',       w: 44, l: 16 },
    { team: 'St. Louis Rivermen',     w: 39, l: 21 },
    { team: 'Calumet Lakers',         w: 36, l: 24 },
    { team: 'New Orleans Creoles',    w: 33, l: 27 },
    { team: 'Mahkato Bluemen',        w: 30, l: 30 },
    { team: 'Astoria Mariners',       w: 27, l: 33 },
    { team: 'Gigadohi City Arrowmen', w: 25, l: 35 },
    { team: 'Missouri City Scouts',   w: 22, l: 38 },
  ]
};

const CSN_STANDINGS_NAFA = {
  usa: [
    { team: 'Franklin Nationals',    gp: 22, w: 14, d: 5, l: 3, pts: 47 },
    { team: 'New Orleans Crescents', gp: 22, w: 12, d: 4, l: 6, pts: 40 },
    { team: 'Atlanta Southerners',   gp: 22, w: 11, d: 5, l: 6, pts: 38 },
    { team: 'Manhattan FC',          gp: 22, w: 10, d: 6, l: 6, pts: 36 },
    { team: 'Philadelphia Liberty',  gp: 22, w:  9, d: 4, l: 9, pts: 31 },
    { team: 'Pittsburgh Forgers',    gp: 22, w:  8, d: 3, l:11, pts: 27 },
  ],
  international: [
    { team: 'Mexico City Imperiales',    gp: 22, w: 15, d: 4, l: 3, pts: 49 },
    { team: 'Montreal Voyageurs',        gp: 22, w: 13, d: 3, l: 6, pts: 42 },
    { team: 'San Francisco Pacifics',    gp: 22, w: 12, d: 5, l: 5, pts: 41 },
    { team: 'Toronto Maples',            gp: 22, w: 11, d: 4, l: 7, pts: 37 },
    { team: 'Galvesport Buccaneers',     gp: 22, w: 10, d: 3, l: 9, pts: 33 },
    { team: 'Los Angeles Californianos', gp: 22, w:  9, d: 5, l: 8, pts: 32 },
  ]
};

const CSN_STANDINGS_ANSA = [
  { team: 'Gigadohi City United',    w: 18, l:  4 },
  { team: 'New Echota Nighthawks',   w: 16, l:  6 },
  { team: 'Philadelphia Bells',      w: 14, l:  8 },
  { team: 'St. Louis Ferrymen',      w: 13, l:  9 },
  { team: 'Nashville Fiddlers',      w: 12, l: 10 },
  { team: 'Lakota City Thunderbirds',w: 11, l: 11 },
  { team: 'New Boston Chinooks',     w: 10, l: 12 },
  { team: 'Oyathira Coyotes',        w:  9, l: 13 },
];

const CSN_STANDINGS_MLA = {
  texas: [
    { team: 'San Antonio Vaqueros', gp: 20, pts: 52 },
    { team: 'Texopolis Texians',    gp: 20, pts: 44 },
    { team: 'Santa Fe Sundancers',  gp: 20, pts: 38 },
    { team: 'Galvesport Breakers',  gp: 20, pts: 33 },
  ],
  california: [
    { team: 'Los Angeles Dons',          gp: 20, pts: 50 },
    { team: 'San Francisco Fogcutters',  gp: 20, pts: 46 },
    { team: 'Monterey Presidios',        gp: 20, pts: 39 },
    { team: 'San Diego Padres',          gp: 20, pts: 31 },
  ],
  mexico: [
    { team: 'Mexico City Tigres',  gp: 20, pts: 55 },
    { team: 'Monterrey Norteños',  gp: 20, pts: 47 },
    { team: 'Guadalajara Charros', gp: 20, pts: 41 },
    { team: 'Puebla Guerreros',    gp: 20, pts: 34 },
  ],
};

const CSN_STANDINGS_RUGBY = [
  { team: 'New England RC',          p: 12, w: 10, l: 2, pts: 44 },
  { team: 'Golden Gate RC',          p: 12, w:  9, l: 3, pts: 40 },
  { team: 'Toronto Royals',          p: 12, w:  8, l: 4, pts: 36 },
  { team: 'Philadelphia Keystones',  p: 12, w:  7, l: 5, pts: 32 },
  { team: 'Franklin Capitol RC',     p: 12, w:  6, l: 6, pts: 28 },
  { team: 'Honolulu Aloha RC',       p: 12, w:  5, l: 7, pts: 24 },
  { team: 'Vancouver RC',            p: 12, w:  4, l: 8, pts: 20 },
  { team: 'Pugetsburgh Columbians',  p: 12, w:  3, l: 9, pts: 16 },
];

const CSN_STANDINGS_WOMENS = {
  east: [
    { team: 'Franklin Suffragettes', w: 40, l: 20 },
    { team: 'Boston Sirens',         w: 37, l: 23 },
    { team: 'Atlanta Magnolias',     w: 34, l: 26 },
    { team: 'Philadelphia Belles',   w: 31, l: 29 },
    { team: 'Manhattan Roses',       w: 28, l: 32 },
    { team: 'Miami Flamingos',       w: 25, l: 35 },
  ],
  west: [
    { team: 'Memphis Queens',        w: 41, l: 19 },
    { team: 'New Orleans Violets',   w: 36, l: 24 },
    { team: 'Calumet Swans',         w: 33, l: 27 },
    { team: 'Astoria Selkies',       w: 30, l: 30 },
    { team: 'St. Louis Tigerlilies', w: 27, l: 33 },
    { team: 'Mahkato Daisies',       w: 24, l: 36 },
  ]
};

// ── TOP STORIES / TRENDING ──
const CSN_TOP_STORIES = [
  'Franklin Senators extend winning streak to seven',
  'Vaqueros surge to top of MLA Texas Division',
  'Suffragettes clinch Eastern Division title',
  'New England RC through to Union Cup semi-finals',
  'Gigadohi City United set consecutive home win record',
  'NBA Western race tightens as Pharaohs hold off Rivermen',
  'Mexico City Imperiales set new NAFA points record',
  'Open Play: Is this the greatest ANSA season ever?',
];

// ── BROADCAST SCHEDULE (static, time-of-day logic in CSN page) ──
const CSN_SCHEDULE = [
  { h:  6, m:  0, show: 'Early Whistle',        desc: 'Overnight scores, morning headlines, preview of the day\'s matches' },
  { h:  8, m:  0, show: 'Diamond Hour',          desc: 'NBA highlights and analysis' },
  { h:  9, m:  0, show: 'The Pitch',             desc: 'NAFA highlights and match report' },
  { h: 10, m:  0, show: 'Stick & Stone',         desc: 'ANSA round-up and features' },
  { h: 11, m:  0, show: 'The Ring',              desc: 'MLA Aroball highlights' },
  { h: 12, m:  0, show: 'The Scoreboard',        desc: 'Midday edition — scores, standings, top stories' },
  { h: 14, m:  0, show: 'Open Play',             desc: 'Sports analysis and debate' },
  { h: 16, m:  0, show: 'The Scrum',             desc: 'Union Cup Rugby highlights and preview' },
  { h: 18, m:  0, show: 'The Scoreboard',        desc: 'Evening edition — the day in sport' },
  { h: 20, m:  0, show: 'Live Coverage',         desc: 'Tonight\'s featured match — see listings' },
  { h: 22, m:  0, show: 'The Scoreboard',        desc: 'Late night edition — final scores and reaction' },
  { h: 23, m: 30, show: 'Early Whistle Preview', desc: 'Tomorrow\'s matches and overnight coverage' },
];


// ═════════════════════════════════════════════════════════════════════════════
// ── SHUFFLED POOLS (computed once on page load) ──
// Each pool uses a different seed offset so picks don't correlate across sections.
// ═════════════════════════════════════════════════════════════════════════════

const _FO_LEADS_S      = seededShuffle(FO_LEADS,      SEED);
const _FO_NATIONAL_S   = seededShuffle(FO_NATIONAL,   SEED + 1);
const _FO_WORLD_S      = seededShuffle(FO_WORLD,      SEED + 2);

const _ABN_LEADS_S     = seededShuffle(ABN_LEADS,     SEED + 3);
const _ABN_CARDS_S     = seededShuffle(ABN_CARDS,     SEED + 4);
const _ABN_WORLD_S     = seededShuffle(ABN_WORLD,     SEED + 5);
const _ABN_MOSTREAD_S  = seededShuffle(ABN_MOSTREAD,  SEED + 6);

const _CSN_LEADS_S          = seededShuffle(CSN_LEADS,        SEED + 7);
const _CSN_TOP_STORIES_S    = seededShuffle(CSN_TOP_STORIES,  SEED + 8);
const _CSN_TICKER_S         = seededShuffle(CSN_TICKER_SCORES,SEED + 9);
const _CSN_SCORES_NBA_S     = seededShuffle(CSN_SCORES_NBA,   SEED + 10);
const _CSN_SCORES_NAFA_S    = seededShuffle(CSN_SCORES_NAFA,  SEED + 11);
const _CSN_SCORES_ANSA_S    = seededShuffle(CSN_SCORES_ANSA,  SEED + 12);
const _CSN_SCORES_MLA_S     = seededShuffle(CSN_SCORES_MLA,   SEED + 13);
const _CSN_SCORES_RUGBY_S   = seededShuffle(CSN_SCORES_RUGBY, SEED + 14);
const _CSN_SCORES_WOMENS_S  = seededShuffle(CSN_SCORES_WOMENS,SEED + 15);

const _WH_STATEMENTS_S = seededShuffle(WH_STATEMENTS, SEED + 16);
const _WH_BRIEFING_S   = seededShuffle(WH_BRIEFING,   SEED + 17);


// ═════════════════════════════════════════════════════════════════════════════
// ── DAILY PICKS ──
// ═════════════════════════════════════════════════════════════════════════════

// Franklin Observer
const FO_LEAD_TODAY     = _FO_LEADS_S[0];
const FO_NATIONAL_TODAY = _FO_NATIONAL_S.slice(0, 3);
const FO_WORLD_TODAY    = _FO_WORLD_S.slice(0, 3);

// ABN News
const ABN_LEAD_TODAY     = _ABN_LEADS_S[0];
const ABN_CARDS_TODAY    = _ABN_CARDS_S.slice(0, 3);
const ABN_WORLD_TODAY    = _ABN_WORLD_S.slice(0, 3);
const ABN_MOSTREAD_TODAY = _ABN_MOSTREAD_S.slice(0, 4);

const ABN_TICKER_TODAY = [
  ABN_LEAD_TODAY.hed,
  ..._ABN_CARDS_S.slice(0, 3).map(c => c.hed),
  ..._ABN_WORLD_S.slice(0, 3).map(w => w.hed),
].filter((v, i, a) => a.indexOf(v) === i); // deduplicate

// Washington House
const WH_STATEMENT_TODAY = _WH_STATEMENTS_S[0];
const WH_BRIEFING_TODAY  = _WH_BRIEFING_S.slice(0, 3);

// CSN Sports
const CSN_LEAD_TODAY        = _CSN_LEADS_S[0];
const CSN_TOP_STORIES_TODAY = _CSN_TOP_STORIES_S.slice(0, 6);
const CSN_TICKER_TODAY      = _CSN_TICKER_S.slice(0, 8);

// CSN Scores (rotate which results are shown each day)
const CSN_SCORES_NBA_TODAY    = _CSN_SCORES_NBA_S.slice(0, 6);
const CSN_SCORES_NAFA_TODAY   = _CSN_SCORES_NAFA_S.slice(0, 6);
const CSN_SCORES_ANSA_TODAY   = _CSN_SCORES_ANSA_S.slice(0, 6);
const CSN_SCORES_MLA_TODAY    = _CSN_SCORES_MLA_S.slice(0, 6);
const CSN_SCORES_RUGBY_TODAY  = _CSN_SCORES_RUGBY_S.slice(0, 6);
const CSN_SCORES_WOMENS_TODAY = _CSN_SCORES_WOMENS_S.slice(0, 6);


// ═════════════════════════════════════════════════════════════════════════════
// ── WAYMARK HEADLINES (derived from daily picks) ──
// ═════════════════════════════════════════════════════════════════════════════

const WAYMARK_HEADLINES = [
  {
    type: 'lead',
    tag:  ABN_LEAD_TODAY.tag,
    hed:  ABN_LEAD_TODAY.hed,
    dek:  ABN_LEAD_TODAY.dek,
    meta: ABN_LEAD_TODAY.meta,
    link: './nodes/abn/'
  },
  {
    type: 'story',
    tag:  FO_LEAD_TODAY.label,
    hed:  FO_LEAD_TODAY.hed,
    dek:  FO_LEAD_TODAY.dek,
    meta: 'Franklin Observer · ' + (FO_LEAD_TODAY.byline ? FO_LEAD_TODAY.byline.split('·')[1].trim() : 'Franklin'),
    link: './nodes/franklin-observer/'
  },
  {
    type: 'story',
    tag:  FO_WORLD_TODAY[0].label,
    hed:  FO_WORLD_TODAY[0].hed,
    dek:  FO_WORLD_TODAY[0].dek,
    meta: FO_WORLD_TODAY[0].meta,
    link: './nodes/franklin-observer/'
  },
  {
    type: 'story',
    tag:  'rail',
    hed:  _FO_NATIONAL_S.find(s => s.hed.includes('USRC'))?.hed || 'USRC Northeast Corridor Sets New Ridership Record',
    dek:  _FO_NATIONAL_S.find(s => s.hed.includes('USRC'))?.dek || '4.1 million passengers on the Franklin–Pittsburgh–Philadelphia mainline.',
    meta: 'USRC Public Affairs · 6 hours ago',
    link: './nodes/usrc/'
  },
  {
    type: 'story',
    tag:  FO_WORLD_TODAY[1].label,
    hed:  FO_WORLD_TODAY[1].hed,
    dek:  FO_WORLD_TODAY[1].dek,
    meta: FO_WORLD_TODAY[1].meta,
    link: './nodes/franklin-observer/'
  }
];
