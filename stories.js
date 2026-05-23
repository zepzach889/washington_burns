// stories.js — Shared content pools for the Washington Burns Interlink site
// All pages load this file to ensure daily story rotation stays in sync.

// ── DAY OF YEAR (canonical, used by all pages) ──
const _now = new Date();
const DAY_OF_YEAR = Math.floor((_now - new Date(_now.getFullYear(), 0, 0)) / 86400000);
const CURRENT_HOUR = _now.getHours();

// ── MONTHS / DAYS ──
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS_OF_WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// ── FRANKLIN OBSERVER ──

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
  }
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
  { label: 'culture', hed: 'Franklin National Orchestra Announces European Tour — Paris, Lyon, Munich, and Hamburg Among Stops', dek: 'The tour spans four countries: the UER (Paris, Lyon, Munich), the German Republic (Hamburg), the Kingdom of Austria (Vienna), and Britain (London). Performances begin in June.', meta: 'Observer Arts · 12 hours ago' }
];

// ── ABN NEWS ──

const ABN_LEADS = [
  { emoji: '⚖', tag: 'NAU', hed: 'Nakamura Signals She Will Not Oppose NAU Constitutional Consolidation Vote', dek: 'The US President\'s statement, issued through the Office of Communications, removes the last major obstacle to an NAU Assembly floor vote on the consolidation project.', meta: 'ABN Political Desk · Franklin · 2 hours ago' },
  { emoji: '🚂', tag: 'USA', hed: 'Congress Passes USRC Modernisation Bill — Ȼ2.1 Billion for Northeast and Prairie Corridors', dek: 'A broad bipartisan majority approved the largest single investment in the Railway Company\'s history. President Nakamura expected to sign at Franklin Central next week.', meta: 'ABN Political Desk · Franklin · 3 hours ago' },
  { emoji: '🌐', tag: 'World', hed: 'China Opens HuaWang Network to Broader Interlink Access', dek: 'Post-2019 reform commitments continue as access restrictions are rolled back for 61% of Chinese households. The GPC digital rights commission warns progress remains uneven.', meta: 'ABN Asia Desk · 2 hours ago' }
];

const ABN_CARDS = [
  { emoji: '🚂', bg: 'linear-gradient(135deg,#1a3a1a,#2d602d)', tag: 'Rail', tagColor: '#533AB7', hed: 'USRC Northeast Corridor Sets Third Straight Q1 Record', meta: '6 hours ago' },
  { emoji: '💱', bg: 'linear-gradient(135deg,#1a1a3a,#2d2d60)', tag: 'NAU', tagColor: '#993C1D', hed: 'NAU/18-042 Currency Framework Moves to Assembly Floor', meta: '5 hours ago' },
  { emoji: '📡', bg: 'linear-gradient(135deg,#2a1a1a,#5d2d2d)', tag: 'World', tagColor: '#0F6E56', hed: 'China: Interlink Now Reaches 61% of Households as Access Reforms Continue', meta: '4 hours ago' },
  { emoji: '🏛', bg: 'linear-gradient(135deg,#1a1a1a,#3a3a3a)', tag: 'USA', tagColor: '#185FA5', hed: 'Washington House West Wing Reopens After Two-Year Restoration', meta: '9 hours ago' },
  { emoji: '📚', bg: 'linear-gradient(135deg,#1a2a3a,#2d4060)', tag: 'USA', tagColor: '#185FA5', hed: 'Education Dept: Urban-Rural Literacy Gap Narrows for Third Year Running', meta: '11 hours ago' },
  { emoji: '🔍', bg: 'linear-gradient(135deg,#2a2a1a,#505020)', tag: 'USA', tagColor: '#2D5A1A', hed: 'FIS Confirms New Director After Senate Approval Ends Months-Long Vacancy', meta: '7 hours ago' }
];

const ABN_WORLD = [
  { tag: 'UER', hed: 'UER Premier Faces Parliamentary Challenge Over State Media Reforms', dek: 'The governing coalition in Paris is under pressure as a contentious broadcasting reform bill enters its second reading in the National Assembly.', meta: 'ABN Europe Desk · 7 hours ago' },
  { tag: 'Britain', hed: 'London Markets Rise on NAU Currency Stabilisation Framework Progress', dek: 'The UKP strengthened against the Continental amid optimism about NAU monetary coordination following the Assembly committee vote.', meta: 'ABN Finance · 5 hours ago' },
  { tag: 'China', hed: 'GPC Digital Rights Commission Sets Phase 4 Interlink Access Timeline', dek: 'The Commission has issued binding guidance requiring full rural household access by 2028, ahead of the expected Phase 4 transition later this year.', meta: 'ABN Asia Desk · 9 hours ago' },
  { tag: 'Russia', hed: 'Tsar Nicholas IV Urges Duma to Break Modernisation Package Impasse', dek: 'The Tsar made a rare direct appeal to parliamentary factions, warning that continued deadlock risks Russian industrial competitiveness against Western rivals.', meta: 'ABN World Desk · 10 hours ago' },
  { tag: 'Britain', hed: 'Britain and NAU Sign Five-Year Trade Renewal Agreement in London', dek: 'The agreement locks in preferential tariff arrangements across manufacturing and agricultural sectors, with a joint review scheduled for 2029.', meta: 'ABN World Desk · 6 hours ago' },
  { tag: 'Canada', hed: 'Canadian PM Tremblay Visits Washington House for Bilateral Talks', dek: 'Trade, the Continental currency framework, and NAU constitutional consolidation were among the topics discussed during the two-day visit.', meta: 'ABN Political Desk · Franklin · 8 hours ago' }
];


const ABN_MOSTREAD = [
  'Nakamura signals she won\'t oppose NAU consolidation vote',
  'NAU currency framework: what it means for your savings',
  'USRC Northeast Corridor breaks ridership record',
  'China\'s Interlink opening — explained',
  'Congress passes Ȼ2.1bn USRC modernisation bill',
  'UER media reforms: why Paris is divided',
  'Tsar Nicholas IV and the Duma deadlock — explained',
  'Washington House West Wing reopens — what\'s changed'
];

// ── DAILY PICKS (computed once, used by all pages) ──

// Franklin Observer
const FO_LEAD_TODAY      = FO_LEADS[DAY_OF_YEAR % FO_LEADS.length];
const FO_NATIONAL_TODAY  = [
  FO_NATIONAL[DAY_OF_YEAR % FO_NATIONAL.length],
  FO_NATIONAL[(DAY_OF_YEAR + 2) % FO_NATIONAL.length],
  FO_NATIONAL[(DAY_OF_YEAR + 4) % FO_NATIONAL.length]
];
const FO_WORLD_TODAY     = [
  FO_WORLD[DAY_OF_YEAR % FO_WORLD.length],
  FO_WORLD[(DAY_OF_YEAR + 2) % FO_WORLD.length],
  FO_WORLD[(DAY_OF_YEAR + 4) % FO_WORLD.length]
];

// ABN News
const ABN_LEAD_TODAY     = ABN_LEADS[DAY_OF_YEAR % ABN_LEADS.length];
const ABN_CARDS_TODAY    = [
  ABN_CARDS[DAY_OF_YEAR % ABN_CARDS.length],
  ABN_CARDS[(DAY_OF_YEAR + 2) % ABN_CARDS.length],
  ABN_CARDS[(DAY_OF_YEAR + 4) % ABN_CARDS.length]
];
const ABN_WORLD_TODAY    = [
  ABN_WORLD[DAY_OF_YEAR % ABN_WORLD.length],
  ABN_WORLD[(DAY_OF_YEAR + 2) % ABN_WORLD.length],
  ABN_WORLD[(DAY_OF_YEAR + 4) % ABN_WORLD.length]
];
const ABN_TICKER_TODAY   = [
  ABN_LEAD_TODAY.hed,
  ...ABN_CARDS_TODAY.map(c => c.hed),
  ...ABN_WORLD_TODAY.map(w => w.hed),
].filter((v, i, a) => a.indexOf(v) === i); // deduplicate
const ABN_MOSTREAD_TODAY = Array.from({length: 4}, (_, i) => ABN_MOSTREAD[(DAY_OF_YEAR + i * 2) % ABN_MOSTREAD.length]);

// ── WAYMARK HEADLINES (derived from daily picks) ──
// Order: ABN lead, Observer lead, world story, USRC rail, culture/world
const WAYMARK_HEADLINES = [
  {
    type: 'lead',
    tag: ABN_LEAD_TODAY.tag,
    hed: ABN_LEAD_TODAY.hed,
    dek: ABN_LEAD_TODAY.dek,
    meta: ABN_LEAD_TODAY.meta,
    link: './nodes/abn/'
  },
  {
    type: 'story',
    tag: FO_LEAD_TODAY.label,
    hed: FO_LEAD_TODAY.hed,
    dek: FO_LEAD_TODAY.dek,
    meta: 'Franklin Observer · ' + (FO_LEAD_TODAY.byline ? FO_LEAD_TODAY.byline.split('·')[1].trim() : 'Franklin'),
    link: './nodes/franklin-observer/'
  },
  {
    type: 'story',
    tag: FO_WORLD_TODAY[0].label,
    hed: FO_WORLD_TODAY[0].hed,
    dek: FO_WORLD_TODAY[0].dek,
    meta: FO_WORLD_TODAY[0].meta,
    link: './nodes/franklin-observer/'
  },
  {
    type: 'story',
    tag: 'rail',
    hed: 'USRC Northeast Corridor Sets New Q1 Ridership Record',
    dek: '4.1 million passengers on the Franklin–Pittsburgh–Philadelphia mainline, the highest quarterly figure in the corridor\'s history.',
    meta: 'USRC Public Affairs · 6 hours ago',
    link: './nodes/usrc/'
  },
  {
    type: 'story',
    tag: FO_WORLD_TODAY[1].label,
    hed: FO_WORLD_TODAY[1].hed,
    dek: FO_WORLD_TODAY[1].dek,
    meta: FO_WORLD_TODAY[1].meta,
    link: './nodes/franklin-observer/'
  }
];
