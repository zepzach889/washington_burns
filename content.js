// content.js — Washington Burns Timeline shared content index
// Single source of truth for all searchable site content
// ─────────────────────────────────────────────────────────────────────

// ── FEDERAL PARKS ──────────────────────────────────────────────────────
const WBT_PARKS = [

  // ── PACIFIC NORTHWEST ──
  { id: 'crater', name: 'Crater Lake Federal Park', location: 'Oregon', region: 'pnw', img: '/washington_burns/images/parks/crater.jpg', imgPos: 'center top', tags: ['Volcanic','Water','Geology','Winter Sports'], desc: 'Formed by the collapse of ancient Mount Mazama, Crater Lake is the deepest lake in the United States — renowned for the extraordinary clarity and blue intensity of its waters.', lat: 42.9446, lon: -122.1090, tz: 'America/Los_Angeles', trails: ['Rim Drive open seasonally — check FPS alerts', 'Cleetwood Cove Trail (lake access) open summer only', 'Wizard Island boat tours — advance booking required'], tips: ['The Rim Village visitor centre has excellent exhibits on the eruption that created the lake — worth 30 minutes before hitting the trails.', 'Sunrise on the east rim offers the clearest water colour — afternoon haze can reduce visibility.', 'Snow can fall at any month at the rim elevation — always carry a layer.'] },

  { id: 'wyeast', name: "Wy'east Federal Park", location: 'Oregon', region: 'pnw', img: '/washington_burns/images/parks/hood.jpg', imgPos: 'center top', tags: ['Volcanic','Alpine','Climbing','Winter Sports'], desc: "Known by its Multnomah name long before statehood, Wy'east is a stratovolcano rising above the Oregon forests to over 11,000 feet, offering year-round recreation.", lat: 45.3735, lon: -121.6960, tz: 'America/Los_Angeles', trails: ['Timberline Trail open summer — upper sections require mountaineering gear', 'Mirror Lake Trail open year-round', 'Summit climbs require climbing permits'], tips: ['Timberline Lodge is a marvel of Depression-era craftsmanship — worth a visit even if you are not climbing.', 'Summit attempts should begin before 3 a.m. to complete the climb before afternoon ice softens dangerously.', 'The wildflower meadows around timberline peak in late July — stunning for photography.'] },

  { id: 'silver', name: 'Silver Creek Federal Park', location: 'Oregon', region: 'pnw', img: '/washington_burns/images/parks/silver_falls.jpg', imgPos: 'center top', tags: ['Waterfalls','Hiking','Old Growth','Family'], desc: 'A jewel of the Oregon lowlands, Silver Creek protects a remarkable concentration of waterfalls — ten major falls within a few miles of trail, including several walk-behind cascades.', lat: 44.8774, lon: -122.6548, tz: 'America/Los_Angeles', trails: ['Trail of Ten Falls open year-round', 'Some trails slippery when wet — traction devices recommended in winter', 'Canyon Trail accessible year-round'], tips: ['Wear waterproof clothing for the walk-behind falls — you will get wet regardless of the weather.', 'The Trail of Ten Falls loop is 13 km — most families complete it in 4-5 hours with stops at each fall.', 'Autumn colour peaks in mid-October and the falls run strongest in winter and spring.'] },

  { id: 'cascades', name: 'Cascades International Park', location: 'Oregon · California', region: 'pnw', img: '/washington_burns/images/parks/shasta.jpg', imgPos: 'center top', tags: ['Volcanic','International','Alpine','Wilderness'], desc: 'A joint USA-California Federal Park protecting the volcanic spine of the Cascade Range, including Mt. Shasta, Mt. McLaughlin, and the Three Sisters.', lat: 41.4092, lon: -122.1949, tz: 'America/Los_Angeles', trails: ['Lower trails open year-round', 'High routes require mountaineering experience and permits', 'Shasta summit climbs — permit required, check volcanic activity alerts'], tips: ['Mt. Shasta is one of the most volcanically active peaks in the range — check FPS volcano alerts before summit attempts.', 'The cross-border nature of the park means USA and California passes are both honoured — check your pass validity at the trailhead station.', 'Castle Lake, just outside the park boundary, offers excellent fishing and swimming in a dramatically scenic setting.'] },

  { id: 'dunes', name: 'Oregon Dunes Federal Park', location: 'Oregon', region: 'pnw', img: '', imgPos: 'center top', tags: ['Coastal','Dunes','Wildlife','Hiking'], desc: 'The largest coastal sand dune system in North America, stretching over fifty miles along the Oregon coast. Wind-sculpted dunes rise as high as five hundred feet, interspersed with freshwater lakes, forests, and wetlands sheltering migratory shorebirds and rare plant communities.', lat: 43.9015, lon: -124.1557, tz: 'America/Los_Angeles', trails: ['Dune trail network open year-round — follow posts carefully', 'Freshwater lake swimming areas open seasonally', 'Horsfall Beach accessible year-round'], tips: ['The dunes shift constantly — trails are marked with posts rather than cleared paths. Follow them carefully or you will get turned around quickly.', 'Swimming is permitted in the freshwater lakes but not in the ocean — Pacific surf along this stretch is dangerously unpredictable.', 'The overlook at Jessie M. Honeyman is the best single viewpoint for understanding the scale of the dune system — start there before heading out on foot.'] },

  { id: 'tillamook', name: 'Tillamook Headlands Federal Park', location: 'Oregon', region: 'pnw', img: '', imgPos: 'center top', tags: ['Coastal','Cliffs','Wildlife','Scenic'], desc: 'A rugged stretch of the northern Oregon coast protecting dramatic sea stacks, forested headlands, and some of the most productive seabird nesting habitat on the Pacific coast. The park encompasses Cape Meares, Cape Lookout, and Cape Kiwanda, along with the Tillamook estuary.', lat: 45.4579, lon: -123.9650, tz: 'America/Los_Angeles', trails: ['Cape Lookout Trail open year-round', 'Cape Meares Loop open year-round', 'Estuary water trail open seasonally'], tips: ['Cape Lookout trail offers the most dramatic coastal views — a two-mile ridge walk with ocean on three sides at the point. Go early, as afternoon fog frequently obscures the view.', 'The sea stacks offshore are active nesting sites for tufted puffins and common murres from April through August — bring binoculars.', 'The Tillamook estuary section of the park is best explored by canoe or kayak — rentals available at the visitor centre.'] },

  { id: 'columbia_gorge', name: 'Columbia Gorge International Federal Park', location: 'Oregon · Canada', region: 'pnw', img: '', imgPos: 'center top', tags: ['International','Waterfalls','Scenic','Hiking'], desc: 'A joint USA-Canada Federal Park protecting the dramatic basalt canyon carved by the Columbia River through the Cascade Range. The park encompasses Crown Point, Multnomah Falls, and dozens of tributary waterfalls, along with the forested slopes of the Canadian Province of Columbia.', lat: 45.5762, lon: -122.1167, tz: 'America/Los_Angeles', trails: ['Historic Columbia River Highway open year-round', 'Multnomah Falls Trail open year-round', 'Crown Point Vista open seasonally'], tips: ['Multnomah Falls is the park signature landmark — arrive before 8 a.m. or after 5 p.m. to experience it without crowds.', 'The Historic Columbia River Highway on the Oregon side is one of the finest scenic drives in the NAU — the stonework viewpoints are engineering landmarks.', 'Canadian and USA Federal Parks passes are both honoured throughout the park — check signage at trailheads to confirm which jurisdiction you are entering.'] },

  { id: 'hells_canyon', name: 'Hells Canyon Federal Park', location: 'Clark', region: 'pnw', img: '', imgPos: 'center top', tags: ['Canyon','River','Wilderness','Rafting'], desc: "North America's deepest river gorge, carved by the Snake River along the Clark-Oregon border. At nearly eight thousand feet from rim to river, Hells Canyon exceeds even the Grand Canyon in depth, sheltering bighorn sheep, black bears, and one of the most important whitewater stretches on the continent.", lat: 45.4427, lon: -116.7000, tz: 'America/Los_Angeles', trails: ['Rim trails open seasonally — check conditions', 'River access by permit only', 'Snake River water trail open year-round'], tips: ['The canyon is most dramatically experienced from the river — multi-day rafting trips are among the finest wilderness river experiences in the NAU. Book well in advance.', 'Rim viewpoints on the Clark side are accessible by road — the Hat Point overlook at 6,982 feet offers the most vertiginous view into the canyon.', 'Rattlesnakes are common on lower canyon trails from April through October — watch where you step and where you put your hands.'] },

  { id: 'steens', name: 'Steens Mountain Federal Park', location: 'Clark', region: 'pnw', img: '', imgPos: 'center top', tags: ['Alpine','Desert','Wildlife','Wilderness'], desc: 'A dramatic fault-block mountain rising abruptly from the high desert of southeastern Clark, Steens Mountain reaches nearly ten thousand feet and creates its own weather system. The western slope rises gradually through sagebrush; the eastern face drops nearly five thousand feet into the Alvord Desert below.', lat: 42.6318, lon: -118.5750, tz: 'America/Los_Angeles', trails: ['Steens Mountain Loop Road open mid-July through October', 'East Rim Viewpoint Trail open seasonally', 'Alvord Desert access year-round'], tips: ['The Steens Mountain Loop Road is open only from mid-July through October — check FPS road conditions before making the drive.', 'The Alvord Desert at the mountain eastern base becomes a vast reflective playa after winter rains — extraordinary for photography in early spring.', 'Pronghorn antelope are commonly seen on the lower slopes — the largest herds typically appear in late summer.'] },

  { id: 'grand_teton', name: 'Grand Teton Federal Park', location: 'Clark', region: 'pnw', img: '', imgPos: 'center top', tags: ['Alpine','Wildlife','Scenic','Climbing'], desc: 'The Teton Range rises with almost no foothills from the flat floor of Jackson Hole valley, creating one of the most dramatic mountain frontages in North America. Grand Teton at 13,775 feet dominates a jagged skyline visible for fifty miles, with critical habitat for grizzly bears, wolves, elk, and bison in the broader Greater Sacred Waters ecosystem.', lat: 43.7904, lon: -110.6818, tz: 'America/Denver', trails: ['Jenny Lake Loop open seasonally', 'Cascade Canyon Trail open summer', 'Grand Teton summit — technical climbing permit required'], tips: ['The Snake River Overlook is the classic Teton viewpoint — visit at dawn for the best light and the calmest air.', 'Grand Teton itself is a serious mountaineering objective — the park climbing rangers offer orientation sessions for those planning summit attempts.', 'Wildlife is most active at dawn and dusk along the Oxbow Bend of the Snake River — moose, bald eagles, and beaver are reliably seen here year-round.'] },

  // ── MOUNTAIN WEST ──
  { id: 'sacred', name: 'Sacred Waters Federal Park', location: 'Washingtonia · Clark', region: 'mw', img: '/washington_burns/images/parks/sacred.jpg', imgPos: 'center top', tags: ['Geothermal','Wildlife','Wilderness','Camping'], desc: "Home to the world's largest concentration of geysers, hot springs, and hydrothermal features, straddles one of the most geologically active regions on the continent.", lat: 44.4280, lon: -110.5885, tz: 'America/Denver', trails: ['Boardwalk trails open year-round', 'Backcountry routes may be snow-covered — check conditions', 'Wildlife viewing corridors open — bison right-of-way always'], tips: ['Old Thunderhead geyser erupts approximately every 91 minutes — check the prediction board at the visitor centre on arrival.', 'Stay on boardwalks near thermal features — ground crusts can be dangerously thin.', 'Bison have the right of way on all park roads and trails — keep 25 metres minimum distance.'] },

  { id: 'mistakis', name: 'Mistakis Federal Park', location: 'Washingtonia · Clark', region: 'mw', img: '/washington_burns/images/parks/glacier.jpg', imgPos: 'center top', tags: ['Alpine','Glaciers','Wildlife','Hiking'], desc: 'Named for the Blackfoot word for "backbone of the world," Mistakis preserves a dramatic landscape of glacially carved peaks, alpine meadows, and pristine wilderness.', lat: 48.6962, lon: -113.7180, tz: 'America/Denver', trails: ['Going-to-the-Sun Road open seasonally — check FPS alerts', 'Many high trails snow-covered before July', 'Bear spray required for backcountry travel'], tips: ['Vehicle reservations required for Going-to-the-Sun Road during peak season — book at least 60 days ahead.', 'Grizzly bear activity is common — carry bear spray and know how to use it before entering backcountry.', 'The Highline Trail is one of the finest day hikes in the country — attempt it early to beat afternoon thunderstorms.'] },

  { id: 'paha_sapa', name: 'Pahá Sápa Federal Park', location: 'Lakota · Washingtonia', region: 'mw', img: '/washington_burns/images/parks/black_hills.jpg', imgPos: 'center top', tags: ['Heritage','Geology','Indigenous Culture','Scenic'], desc: 'Known to the Lakota as Pahá Sápa — the heart of everything that is — the Black Hills hold profound spiritual significance that predates written history. The park protects the most sacred portions of the Hills, including Harney Peak, the Cathedral Spires, and the remarkable granite Needles.', lat: 43.8554, lon: -103.4659, tz: 'America/Denver', trails: ['Harney Peak Trail open year-round', 'Needles Highway open seasonally', 'Cathedral Spires Trail open summer'], tips: ['Harney Peak is the highest point east of the Rockies — the summit fire tower offers a 360-degree view across four states on clear days.', 'The FPS manages the park in active consultation with Lakota tribal historians and spiritual leaders — visitors are asked to approach this landscape with respect.', 'The Needles Highway within the park is one of the most dramatic scenic drives in the Great Plains region — narrow tunnels cut through the granite spires.'] },

  { id: 'rockies', name: 'Rocky Mountains Federal Park', location: 'Brandt', region: 'mw', img: '/washington_burns/images/parks/rockies.jpg', imgPos: 'center top', tags: ['Alpine','Wildlife','Scenic','Hiking'], desc: 'The Colorado Rockies reach their highest expression in this park, protecting the heart of the Front Range with more than seventy peaks exceeding twelve thousand feet. Trail Ridge Road — the highest continuous paved road in the NAU — crosses the Continental Divide at over twelve thousand feet through miles of alpine tundra.', lat: 40.3428, lon: -105.6836, tz: 'America/Denver', trails: ['Trail Ridge Road open late May through mid-October', 'Flattop Mountain Trail open summer', 'Bear Lake Loop open year-round'], tips: ['Trail Ridge Road traverses extraordinarily fragile tundra communities — stay on designated paths at all times above treeline.', 'Elk are most visible during the autumn rut in September and October — bugling bulls appear in the valleys near Horseshoe Park at dawn.', 'Afternoon thunderstorms are almost guaranteed in summer — plan to be below treeline by early afternoon.'] },

  { id: 'wind_river', name: 'Wind River Federal Park', location: 'Clark · Washingtonia', region: 'mw', img: '', imgPos: 'center top', tags: ['Alpine','Wilderness','Fishing','Indigenous Heritage'], desc: 'The Wind River Range protects over a hundred miles of the Rocky Mountain backbone, with more than forty peaks exceeding thirteen thousand feet and over a thousand alpine lakes. The range is the headwaters of the Wind River and preserves lands of deep cultural significance to the Eastern Shoshone and Northern Arapaho peoples.', lat: 42.7500, lon: -109.4600, tz: 'America/Denver', trails: ['Big Sandy Trailhead open summer', 'Cirque of the Towers approach — multi-day backpack', 'Elkhart Park Trailhead open summer'], tips: ['The Cirque of the Towers in the southern Winds is among the most spectacular alpine cirques in North America — a two-day backpacking approach from Big Sandy trailhead.', 'Fishing in the Wind River drainage is exceptional — golden trout and cutthroat are found in lakes above 10,000 feet that see relatively light pressure.', 'The FPS visitor centre at Dubois offers excellent exhibits on Wind River cultural history in consultation with Eastern Shoshone tribal historians.'] },

  { id: 'salish', name: 'Salish Highlands Federal Park', location: 'Clark', region: 'mw', img: '', imgPos: 'center top', tags: ['Wilderness','Alpine','Wildlife','Rivers'], desc: 'One of the largest roadless wilderness areas in the contiguous United States, the Salish Highlands preserve the spectacular Rocky Mountain Front and the Chinese Wall — a dramatic limestone escarpment stretching fifteen miles along the Continental Divide. The park takes its name from the Selis people, whose ancestral territory encompasses this landscape.', lat: 47.5000, lon: -112.8000, tz: 'America/Denver', trails: ['All access on foot or horseback — no roads within park boundaries', 'Chinese Wall approach from east — multi-day backpack', 'South Fork Sun River Trail open summer'], tips: ['The Chinese Wall is the park signature feature — a sheer limestone reef rising a thousand feet above the valley floor. The approach requires a multi-day backpacking commitment.', 'Grizzly bears, grey wolves, mountain lions, and wolverines all inhabit the park — carry bear spray and know how to use it.', 'The FPS maintains no roads within the park — all access is on foot, horseback, or by floatplane to interior lakes. Plan accordingly.'] },

  { id: 'beartooth', name: 'Beartooth Federal Park', location: 'Washingtonia', region: 'mw', img: '', imgPos: 'center top', tags: ['Alpine','Scenic','Geology','Hiking'], desc: 'The Beartooth Plateau is one of the most extraordinary high-altitude landscapes in North America — a vast tableland above ten thousand feet studded with granite pinnacles, alpine tundra, and over a thousand lakes. The Beartooth Highway skirts the park northern edge and is consistently ranked among the finest scenic drives on the continent.', lat: 45.0000, lon: -109.5000, tz: 'America/Denver', trails: ['Beartooth Highway open late May through mid-October', 'East Rosebud Trail open summer', 'Beaten Path route — multi-day backpack'], tips: ['The Beartooth Highway is seasonal — open roughly Memorial Day through mid-October. Snow squalls are possible at the summit at any time. Always carry layers.', 'The plateau high-altitude lakes offer exceptional fishing for cutthroat and golden trout — pack-in trips with horses are the best way to access the remote interior.', 'Wind on the plateau can be ferocious even on clear days — lightweight hikers should be cautious above treeline.'] },

  { id: 'bighorn', name: 'Bighorn Canyon Federal Park', location: 'Washingtonia', region: 'mw', img: '', imgPos: 'center top', tags: ['Canyon','Desert','Wildlife','History'], desc: 'The Bighorn River cuts a dramatic fifty-five-mile gorge through limestone canyon walls rising a thousand feet above the river, sheltering bighorn sheep and golden eagles. The park also preserves significant sites of the Crow people, whose ancestral territory this remains.', lat: 44.9000, lon: -108.1500, tz: 'America/Denver', trails: ['Ok-A-Beh Marina access year-round', 'Bighorn Canyon boat trail open seasonally', 'Hillsboro Ranch trail open year-round'], tips: ['The canyon is best experienced by boat — guided float trips through the main gorge run from May through September.', 'The Ok-A-Beh Marina at the northern end of the park offers the easiest water access and the most reliable bighorn sheep viewing from the lake edge.', 'The historic Hillsboro Ranch within the park preserves one of the finest examples of early twentieth-century ranch architecture in the Mountain West — ranger-led tours available on weekends.'] },

  { id: 'chimney_rock', name: 'Chimney Rock Federal Park', location: 'Platte', region: 'mw', img: '', imgPos: 'center top', tags: ['Heritage','Geology','History','Scenic'], desc: 'A solitary spire of clay and volcanic ash rising nearly five hundred feet above the North Platte River valley, Chimney Rock was the most celebrated landmark on the overland migration routes of the nineteenth century. The park preserves the rock, surrounding badland formations, and documented migration corridors.', lat: 41.7031, lon: -103.3466, tz: 'America/Denver', trails: ['Visitor centre observation deck open year-round', 'Base trail open year-round', 'Migration corridor interpretive walk open year-round'], tips: ['The rock itself cannot be climbed — the surrounding formation is fragile and protected. The visitor centre rooftop observation deck provides the best elevated view.', 'The best photographic light on Chimney Rock falls in the late afternoon when the setting sun illuminates the western face of the spire.', 'The visitor centre migration history exhibits are among the finest of any park in the Great Plains region — personal accounts from nineteenth-century travellers give the landscape immediacy.'] },

  // ── GREAT PLAINS ──
  { id: 'badlands', name: 'Badlands Federal Park', location: 'Metropotamia', region: 'plains', img: '/washington_burns/images/parks/badlands.jpg', imgPos: 'center top', tags: ['Geology','Wildlife','Fossil','Scenic'], desc: 'The Badlands of western Metropotamia are among the most otherworldly landscapes in North America — sharply eroded buttes, spires, and gullies carved from ancient sedimentary rock preserving one of the richest fossil records of Oligocene mammals. The surrounding mixed-grass prairie shelters one of the largest remaining black-footed ferret populations on the continent.', lat: 43.8554, lon: -102.3397, tz: 'America/Denver', trails: ['Notch Trail open year-round', 'Door and Window Trails open year-round', 'Castle Trail open year-round'], tips: ['The formations change colour dramatically through the day — plan to be at the Pinnacles Overlook for sunset.', 'The fossil beds within the park are protected — collecting is strictly prohibited. The visitor centre fossil preparation lab often has staff working on new specimens.', 'The park night skies are among the darkest in the eastern NAU — the FPS hosts regular astronomy programmes from May through September.'] },

  { id: 'tallgrass', name: 'Tallgrass/Flint Hills Federal Park', location: 'Kanasaw', region: 'plains', img: '/washington_burns/images/parks/tallgrass.jpg', imgPos: 'center top', tags: ['Prairie','Wildlife','Heritage','Scenic'], desc: 'The Flint Hills of eastern Kanasaw preserve the largest remaining tract of tallgrass prairie in the world — a landscape that once covered over 140 million acres of the continent interior. In high summer, big bluestem grass towers above head height, alive with meadowlarks, upland sandpipers, and scattered wildflowers of a vanishing ecosystem.', lat: 38.4539, lon: -96.5647, tz: 'America/Chicago', trails: ['Tallgrass Prairie Overlook Trail open year-round', 'Southwind Nature Trail open year-round', 'Z-Bar Ranch Trail open seasonally'], tips: ['The prairie is at its most spectacular in late June and early July when the grasses are at full height and the wildflowers are in peak bloom.', 'The annual controlled burns conducted each spring are occasionally visible from park roads — a dramatic reminder of the fire ecology that shaped this landscape over millennia.', 'The historic Z-Bar Ranch within the park is one of the finest surviving examples of nineteenth-century cattle ranching architecture on the plains — ranger-led tours available daily in summer.'] },

  { id: 'wichita', name: 'Wichita Mountains Federal Park', location: 'Jefferson', region: 'plains', img: '/washington_burns/images/parks/wichita_mnts.jpg', imgPos: 'center top', tags: ['Wildlife','Prairie','Geology','Heritage'], desc: 'An island of ancient granite mountains rising from the southern plains of Jefferson, the Wichita Mountains are among the oldest exposed rock formations in North America. The park shelters one of the last free-ranging bison herds on the continent along with Texas longhorn cattle, elk, and prairie dogs maintained as living representatives of the pre-settlement plains ecosystem.', lat: 34.7301, lon: -98.6895, tz: 'America/Chicago', trails: ['Mount Scott Drive open year-round', 'Elk Mountain Trail open year-round', 'Bison pasture viewing road open year-round'], tips: ['Mount Scott at 2,464 feet offers a panoramic view across the southern plains conveying the dramatic isolation of these mountains from the surrounding flatlands.', 'The bison herd is most active in the early morning and late afternoon — the herd often grazes near the Doris Campground area in autumn.', 'The park wildflower season peaks in April and May — Indian paintbrush, prairie verbena, and spiderwort carpet the meadows between the granite outcrops.'] },

  { id: 'ozarks', name: 'Ozark Highlands Federal Park', location: 'Arkansas · Missouri', region: 'plains', img: '/washington_burns/images/parks/ozarks.jpg', imgPos: 'center top', tags: ['Caves','Rivers','Forest','Heritage'], desc: 'The Ozark Plateau is one of the oldest upland regions in North America — ancient mountains worn to forested hills, laced with clear spring-fed rivers, extraordinary cave systems, and hollows that sheltered some of the earliest European settlements west of the Mississippi. The park protects the Buffalo River corridor and Blanchard Springs Caverns.', lat: 35.9787, lon: -92.4082, tz: 'America/Chicago', trails: ['Buffalo River Canoe Trail open seasonally', 'Lost Valley Trail open year-round', 'Blanchard Springs Caverns tour — guided only'], tips: ['The Buffalo River is one of the finest float rivers in the NAU — crystal-clear water over gravel bars and towering bluff walls. Canoe and kayak rentals available at several put-in points.', 'Blanchard Springs Caverns features one of the most accessible and visually spectacular cave formations in the region — the Dripstone Trail tour is suitable for all ages.', 'The Ozarks are at their finest in October when the hardwood forests turn — the combination of fall colour, clear river water, and limestone bluffs is genuinely extraordinary.'] },

  { id: 'sandhills', name: 'Nebraska Sandhills Federal Park', location: 'Platte', region: 'plains', img: '', imgPos: 'center top', tags: ['Prairie','Wildlife','Water','Scenic'], desc: 'The Sandhills of central Platte are the largest sand dune system in the Western Hemisphere — nearly twenty thousand square miles of grass-stabilised dunes sheltering one of the most productive wetland systems in North America. Hundreds of shallow lakes and marshes create critical stopover habitat for millions of migratory waterbirds.', lat: 42.0000, lon: -101.5000, tz: 'America/Denver', trails: ['Crescent Lake water trail open seasonally', 'Prairie viewing roads open year-round', 'Canoe network open May through October'], tips: ['The spring crane migration on the Platte River — just south of the Sandhills — concentrates half a million sandhill cranes on a thirty-mile stretch from late February through April.', 'The Sandhills lakes are best explored by canoe — the park maintains a network of water trails connecting the most productive wetland areas.', 'This is one of the darkest night sky areas in the eastern NAU — the FPS astronomy programme at the Crescent Lake visitor centre runs from June through September.'] },

  { id: 'mn_river', name: 'Minnesota River Valley Federal Park', location: 'Minnesota', region: 'plains', img: '', imgPos: 'center top', tags: ['Heritage','River','Prairie','History'], desc: 'The Minnesota River flows through a valley carved by the catastrophic draining of glacial Lake Agassiz — a valley ten times wider than the river that now occupies it. The park protects this geological legacy along with remnant tallgrass prairie, oak savanna, and wetlands sheltering migratory waterfowl along one of the continent major flyways.', lat: 44.2500, lon: -94.0000, tz: 'America/Chicago', trails: ['Big Stone Lake Trail open year-round', 'River valley overlook trail open year-round', 'Lac qui Parle wetland trail open seasonally'], tips: ['The Big Stone Lake section at the river headwaters offers the best combination of prairie, wetland, and river habitat — the dawn chorus in May is extraordinary.', 'The river valley depth becomes most apparent from the overlook at Bock Landing — the scale of the ancient glacial channel is difficult to comprehend until seen from above.', 'Migratory waterfowl peak in October and March — the marshes near Lac qui Parle hold tens of thousands of Canada geese and ducks during peak passage.'] },

  { id: 'pipestone', name: 'Pipestone Federal Park', location: 'Minnesota', region: 'plains', img: '', imgPos: 'center top', tags: ['Indigenous Heritage','Geology','Historic'], desc: 'For thousands of years, peoples from across the continent travelled to the pipestone quarries of southwestern Minnesota to extract the soft red catlinite stone used to carve sacred ceremonial pipes. The park protects the active quarries — still worked today by members of federally recognised tribes — making it one of the few Federal Parks where traditional cultural practices remain actively ongoing.', lat: 44.0100, lon: -96.3200, tz: 'America/Chicago', trails: ['Circle Trail open year-round', 'Quarry viewing area open year-round'], tips: ['The Circle Trail passes the active quarries where tribal members work the stone during summer months — visitors are welcome to observe but should do so respectfully and quietly.', 'The Pipestone visitor centre houses an exceptional collection of finished pipestone objects spanning several centuries — the craftsmanship is remarkable.', 'The park small size belies its significance — allow at least two hours to walk the trail and engage with the exhibits before moving on.'] },

  { id: 'standing_rock', name: 'Standing Rock Federal Park', location: 'Lakota', region: 'plains', img: '', imgPos: 'center top', tags: ['Indigenous Heritage','River','Prairie','Scenic'], desc: 'The Standing Rock formation — a weathered pillar of glacial till rising from the Missouri River bluffs — is a landmark recognised and named by the Lakota people long before European contact. The park preserves a stretch of the upper Missouri River corridor, surrounding mixed-grass prairie, and sites of historical significance to the Standing Rock Sioux.', lat: 45.9000, lon: -100.4500, tz: 'America/Chicago', trails: ['Missouri River water trail open May through October', 'Prairie overlook trail open year-round', 'Standing Rock formation trail open year-round'], tips: ['The Missouri River corridor within the park is best experienced by canoe or kayak — the FPS maintains a water trail with designated campsites along the river bank.', 'The FPS visitor centre was designed in consultation with Standing Rock Sioux tribal historians and features exhibits that centre the Lakota perspective on this landscape.', 'The mixed-grass prairie surrounding the river corridor is excellent pronghorn antelope habitat — herds of fifty or more are commonly seen from park roads in early morning.'] },

  { id: 'black_hills_north', name: 'Black Hills Federal Park', location: 'Metropotamia', region: 'plains', img: '', imgPos: 'center top', tags: ['Geology','Scenic','Wildlife','Heritage'], desc: 'The northern Black Hills preserve the dramatic pine-covered granite formations and rugged canyon country at the heart of the range, including Custer State Park terrain and the wildlife-rich grasslands at their base. The park is home to one of the largest remaining free-ranging bison herds in North America.', lat: 43.7500, lon: -103.5000, tz: 'America/Denver', trails: ['Sylvan Lake Shore Trail open year-round', 'Sunday Gulch Trail open summer', 'Wildlife Loop open year-round'], tips: ['The Wildlife Loop road through the park southern section offers reliable bison viewing year-round — herds of several hundred animals are commonly seen near the road in early morning.', 'Sylvan Lake is one of the most picturesque spots in the Black Hills — the granite formations surrounding the lake are exceptional for scrambling and photography.', 'The park is at its finest in late September when the ponderosa pine forests take on a golden quality in the slanted autumn light.'] },

  { id: 'ouachita', name: 'Ouachita Mountains Federal Park', location: 'Jefferson · Arkansas', region: 'plains', img: '', imgPos: 'center top', tags: ['Forest','Rivers','Wilderness','Heritage'], desc: 'The Ouachita Mountains run east-west rather than north-south — one of the few such ranges in North America — creating a distinctive landscape of forested ridges, clear spring-fed streams, and remote hollows in western Jefferson and adjacent Arkansas. The park protects the most pristine portion of the Ouachita National Forest backcountry.', lat: 34.7000, lon: -94.4000, tz: 'America/Chicago', trails: ['Ouachita National Recreation Trail — long-distance route', 'Flatside Pinnacle Trail open year-round', 'Little Missouri Falls Trail open year-round'], tips: ['The Ouachita National Recreation Trail traverses the length of the range — sections of it offer multi-day backpacking through some of the least-visited wilderness in the south-central NAU.', 'Little Missouri Falls, accessible by a short trail from the Albert Pike Recreation Area, is one of the finest waterfall destinations in the region.', 'The park rivers are exceptional for kayaking in spring when snowmelt swells the streams — the Caddo and Little Missouri offer miles of float with minimal portaging.'] },

  // ── EASTERN & HISTORIC ──
  { id: 'smokies', name: 'Great Smokies Federal Park', location: 'Tennessee · North Carolina', region: 'east', img: '/washington_burns/images/parks/smokes.jpg', imgPos: 'center top', tags: ['Hiking','Wildlife','Camping','Heritage'], desc: 'Ancient Appalachian highlands protecting over 800 square miles of old-growth forest and one of the most biodiverse temperate ecosystems in the world.', lat: 35.6532, lon: -83.5070, tz: 'America/New_York', trails: ['All primary trails open', 'Clingmans Dome Road seasonal closure check advised', 'Backcountry permits required for overnight'], tips: ['Arrive before 9 a.m. to secure parking at popular trailheads — crowds build quickly after mid-morning.', 'Bring layers even in summer — temperatures at elevation can drop 20 degrees below the valley floor.', 'The Appalachian Trail runs through the park — long-distance hikers should register at the visitor centre.'] },

  { id: 'capitol', name: 'First Capital Federal Park', location: 'Maryland', region: 'east', img: '/washington_burns/images/parks/capitol_ruins.png', imgPos: 'center top', tags: ['Heritage','History','Memorial','Walking'], desc: 'Preserved on the Potomac, this park encompasses the ruins and grounds of the original federal city destroyed in August 1814 — a solemn memorial to the founding era.', lat: 38.8951, lon: -77.0364, tz: 'America/New_York', trails: ['Heritage Walk open daily', 'Ruins viewing platforms accessible year-round', 'Ranger-led tours available weekends May through October'], tips: ['The ranger-led Burning Night walk offered Friday evenings in summer is the most moving way to experience the site — book ahead.', 'The visitor centre film August 1814 is only 18 minutes and adds enormous context before walking the ruins.', 'The park is particularly atmospheric in the early morning before the tour groups arrive.'] },

  { id: 'acadia', name: 'Acadia Federal Park', location: 'Maine', region: 'east', img: '/washington_burns/images/parks/acadia.jpg', imgPos: 'center top', tags: ['Coastal','Alpine','Scenic','Wildlife'], desc: 'The only Federal Park in the northeastern United States, Acadia protects the rugged granite coast of Mount Desert Island and several smaller islands off the Maine coast. Cadillac Mountain at 1,530 feet catches the first light of dawn in the continental United States for much of the year.', lat: 44.3386, lon: -68.2733, tz: 'America/New_York', trails: ['Cadillac Mountain Summit Trail open year-round', 'Carriage road network open year-round', 'Ocean Path open year-round'], tips: ['Cadillac Mountain summit at dawn is one of the park signature experiences — arrive well before first light and dress warmly. The summit is often significantly colder and windier than the valley below.', 'The carriage road network — forty-five miles of crushed stone paths — is the finest non-motorised trail system in any eastern park. Bicycle rentals are available at the main visitor centre.', 'The tidal pools along the Park Loop Road at low tide are exceptional for marine life — sea stars, urchins, and anemones are reliably found within a few feet of the road.'] },

  { id: 'atlanta', name: 'Atlanta Federal Park', location: 'Georgia', region: 'east', img: '/washington_burns/images/parks/atlanta.png', imgPos: 'center top', tags: ['Historic','Heritage','War Between the States','Urban'], desc: 'The Federal Park preserves the sites of the final days of the War Between the States — the encirclement of Atlanta in October 1860 by the combined Allied Forces of the Free States, the Confederation of American States, and the British Empire, and the unconditional surrender of President Hawthorne on October 18th.', lat: 33.7490, lon: -84.3880, tz: 'America/New_York', trails: ['Hawthorne House and surrender site open year-round', 'Allied approach routes walking trail open year-round', 'October 18 commemorative walk — annually, FPS guided'], tips: ['The Hawthorne House, where the surrender was signed on October 18, 1860, is the park most significant site — the room where Hawthorne signed both the surrender and his resignation has been preserved exactly as it was that afternoon.', 'The park interpretation covers all three Allied forces — Free State, Confederal, and British — whose columns entered Atlanta together on October 18. The visitor centre does an exceptional job conveying how unlikely that alliance was.','The park is at its most atmospheric on October 18 each year, when the FPS hosts a commemorative programme marking the end of the War Between the States.',] },

  { id: 'white_mts', name: 'White Mountains Federal Park', location: 'New Hampshire', region: 'east', img: '', imgPos: 'center top', tags: ['Alpine','Hiking','Scenic','Weather'], desc: 'The White Mountains of New Hampshire are the highest peaks in the northeastern United States, dominated by Mount Washington at 6,288 feet — a summit with some of the most extreme weather conditions recorded anywhere on Earth. The park protects the Presidential Range and the famous AMC hut system.', lat: 44.2706, lon: -71.3033, tz: 'America/New_York', trails: ['Appalachian Trail through Presidential Range open summer', 'AMC hut system open June through October', 'Auto Road to summit open seasonally'], tips: ['Mount Washington summit weather is notoriously dangerous — winds exceeding 100 miles per hour have been recorded in every month of the year. Never ascend without checking the summit forecast.', 'The AMC hut system allows hikers to traverse the Presidential Range over multiple days without carrying a tent — reservations are essential months in advance for summer weekends.', 'The auto road to the summit is open seasonally — even those not hiking can experience the summit, though the drive itself is not for the faint of heart.'] },

  { id: 'boston_harbor', name: 'Boston Harbor Federal Park', location: 'Massachusetts', region: 'east', img: '', imgPos: 'center top', tags: ['Historic','Maritime','Heritage','War Between the States'], desc: 'Boston Harbor is where the War Between the States began in earnest — the site of the Union Navy bombardment of Fort Warren and the city in March 1857, the subsequent Union occupation, and the dramatic breaking of the blockade by the Royal Navy in September 1859. The park encompasses Fort Warren, the harbor islands, and the waterfront where these defining events unfolded, making it one of the most historically layered sites of the conflict.', lat: 42.3601, lon: -71.0589, tz: 'America/New_York', trails: ['Fort Warren grounds open year-round', 'Harbor islands ferry network operating year-round', 'Bombardment memorial waterfront walk open year-round'], tips: ['Fort Warren was the site of the opening bombardment of the war in March 1857 — the FPS interpretation of the confused hours when Navy captains mistook a warning shot for an attack, triggering the shelling that shocked the nation, is among the finest in any War Between the States park.', 'The harbor islands are best understood as a system — the FPS ferry map shows how the Union Navy used them to maintain their blockade, and where the Royal Navy broke through in September 1859.', 'The park visitor centre houses an original copy of the Declaration of Liberty, drafted in the weeks following the bombardment — the document that formalized New England secession and set the war in motion.'] },
  
  { id: 'saratoga', name: 'Saratoga Federal Park', location: 'New York', region: 'east', img: '', imgPos: 'center top', tags: ['Historic','Heritage','Revolutionary War'], desc: 'The Battles of Saratoga in autumn 1777 marked the turning point of the American Revolutionary War — the first major American victory and the engagement that brought France into the conflict. The park preserves the battlefield in remarkable completeness, with earthworks and artillery positions essentially unchanged.', lat: 43.0063, lon: -73.6455, tz: 'America/New_York', trails: ['Battlefield tour road open year-round', 'Freeman Farm Trail open year-round', 'Breymann Redoubt Trail open year-round'], tips: ['The nine-mile battlefield tour road passes all major engagement sites — the audio guide available at the visitor centre makes the tactical situation comprehensible even for those without military history background.', 'The Boot Monument — commemorating the leg wound suffered by a general whose name was subsequently struck from the historical record for treason — is one of the more unusual monuments in any American park.', 'Autumn colour typically peaks at Saratoga in mid-October, coinciding with the anniversary of the British surrender — the park hosts a well-attended commemorative programme each year.'] },

  { id: 'adirondacks', name: 'Adirondacks Federal Park', location: 'New York', region: 'east', img: '', imgPos: 'center top', tags: ['Wilderness','Alpine','Water','Wildlife'], desc: 'The Adirondack Park is the largest protected area in the contiguous United States — six million acres of mixed public and private land protecting the high peaks region including Mount Marcy at 5,344 feet, along with an extraordinary network of lakes, rivers, and wetlands. The Adirondacks support populations of moose, black bear, loon, and the recovering eastern timber wolf.', lat: 44.1126, lon: -73.9236, tz: 'America/New_York', trails: ['High Peaks wilderness — permit required summer weekends', 'Loj Road trailhead open year-round', 'ADK canoe route network open May through October'], tips: ['The High Peaks region requires a wilderness permit during summer weekends — obtain yours well in advance through the FPS reservation system.', 'Loon calling on the interior lakes at dusk is one of the defining sounds of the Adirondack wilderness — paddle quietly and you will hear them within minutes of launching on any backcountry pond.', 'The forever wild conservation ethos of the Adirondacks means facilities are intentionally minimal in the backcountry — come prepared to be self-sufficient.'] },

  { id: 'niagara', name: 'Niagara International Federal Park', location: 'New York · Canada', region: 'east', img: '', imgPos: 'center top', tags: ['International','Waterfall','Scenic','Heritage'], desc: 'The Niagara River drops over the Niagara Escarpment in three distinct falls creating one of the most powerful waterfalls on Earth. The joint USA-Canada Federal Park protects the gorge, surrounding parkland, and historic sites associated with the War of 1812 and centuries of human activity at this crossing point between nations.', lat: 43.0896, lon: -79.0849, tz: 'America/New_York', trails: ['Gorge Trail open year-round', 'Niagara River trail open year-round', 'Maid of the Mist boat tour open seasonally'], tips: ['The Maid of the Mist boat tour brings visitors to the base of the Horseshoe Falls — waterproof ponchos are provided but will not keep you dry. Embrace it.', 'The Canadian side offers the more comprehensive view of the falls — the Horseshoe Falls are best seen from Queen Victoria Park on the Ontario shore.', 'The gorge downstream from the falls is far less visited than the falls themselves and offers remarkable geological interest — the river has cut seven miles upstream since the last ice age.'] },

  { id: 'manhattan', name: 'Manhattan Federal Park', location: 'New York', region: 'east', img: '', imgPos: 'center top', tags: ['Historic','Urban','Heritage','War Between the States'], desc: 'Manhattan Federal Park preserves the sites of one of the most fought-over and devastated urban battlegrounds of the War Between the States. The island changed hands twice — falling to Union General Gains in September 1857, suffering the New York Massacre under General Matthews in 1859, and finally surrendering to combined British and Confederal forces on April 18th, 1860. The park encompasses the principal battle sites, the surrender ground, and memorials to the civilian population that endured three years of occupation and destruction.', lat: 40.6892, lon: -74.0445, tz: 'America/New_York', trails: ['Battery Park surrender memorial open year-round', 'Battle of New York heritage trail open year-round', 'New York Massacre memorial site open year-round'], tips: ['The park visitor centre presents the full arc of the three-year Union occupation — the exhibit on the New York Massacre of 1859 is among the most sobering in any War Between the States park.', 'The surrender ground at Battery Park, where the First Army of the United States laid down its arms on April 18, 1860, is the park most significant site — a quiet spot given the enormity of what happened there.', 'The heritage trail connects the major battle sites across lower Manhattan — the FPS interpretation is careful to honour both the soldiers and the civilian population that bore the heaviest cost of the fighting.'] },

  { id: 'valley_forge', name: 'Valley Forge Federal Park', location: 'Pennsylvania', region: 'east', img: '', imgPos: 'center top', tags: ['Historic','Heritage','Revolutionary War'], desc: 'Valley Forge is where the Continental Army spent the desperate winter of 1777-1778 — six months of cold, hunger, and disease that tested the American cause to its breaking point and from which a more professional and resilient army emerged. The park preserves the encampment earthworks, reconstructed soldier huts, and Washington field headquarters.', lat: 40.1013, lon: -75.4441, tz: 'America/New_York', trails: ['Encampment tour route open year-round', 'Washington memorial trail open year-round', 'Outer Line Drive open year-round'], tips: ['The park eleven-mile encampment tour route connects all major sites — the audio tour available at the visitor centre is well-produced and makes the sequence of events comprehensible.', 'The reconstructed soldier huts at Muhlenberg Brigade give the most visceral sense of the conditions the Continental Army endured — the interiors are startlingly small and dark even in summer.', 'The park is at its most evocative in early morning fog or winter — the landscape feels genuinely continuous with its eighteenth-century past when stripped of summer visitors.'] },

  { id: 'delaware', name: 'Delaware Water Gap Federal Park', location: 'Pennsylvania', region: 'east', img: '', imgPos: 'center top', tags: ['River','Hiking','Scenic','Wildlife'], desc: 'The Delaware River cuts through the Kittatinny Ridge of the Appalachian Mountains in a dramatic water gap. The park protects seventy miles of the Delaware River along the Pennsylvania-New Jersey border, with forested ridges, waterfalls, and river beaches. The Appalachian Trail runs the length of the New Jersey ridge.', lat: 41.0534, lon: -75.1329, tz: 'America/New_York', trails: ['Appalachian Trail — NJ ridge section', 'Dingmans Falls Trail open year-round', 'Delaware River canoe trail open May through October'], tips: ['Canoeing or kayaking the Delaware through the gap section is the definitive park experience — the river is calm enough for beginners and outfitters at multiple access points make logistics straightforward.', 'Dingmans Falls drops 130 feet and is one of the tallest free-falling waterfalls in the northeastern NAU — the approach trail takes less than twenty minutes.', 'The Appalachian Trail section along Kittatinny Ridge offers outstanding hawk watching in September and October — Raccoon Ridge is one of the premier raptor migration observation points in the eastern states.'] },

  { id: 'landon', name: "Landon's Crossing Federal Park", location: 'Pennsylvania · Ohio', region: 'east', img: '', imgPos: 'center top', tags: ['Historic','Heritage','War Between the States','Rural'], desc: "Landon's Crossing marks the site of the border skirmish of March 9-10, 1858 — the moment the War Between the States became undeniable. When Union troops opened fire on Pennsylvania militiamen blocking troop trains at the state border, over 250 men were killed and 300 wounded. The shock of the engagement drove Pennsylvania, Ohio, Indiana, Illinois, and Iowa to break with the Hawthorne government within weeks, fundamentally reshaping the war.", lat: 40.5000, lon: -80.5000, tz: 'America/New_York', trails: ['Border skirmish site trail open year-round', 'Rail line heritage walk open year-round', 'Memorial grounds open year-round'], tips: ["The site preserves the stretch of rail line where Pennsylvania militiamen faced down the Union troop trains on March 9th — the FPS interpretation conveys the hours-long standoff before shots were fired.", 'The park visitor centre houses a copy of the famous Holden painting depicting the standoff — one of the most reproduced images of the War Between the States.', "The skirmish site is small and intimate — the entire engagement area can be walked in under an hour, but the FPS audio tour is essential for understanding why this moment changed everything."] },
  
  { id: 'yorktown', name: 'Yorktown Federal Park', location: 'Virginia', region: 'east', img: '', imgPos: 'center top', tags: ['Historic','Heritage','Revolutionary War','Maritime'], desc: 'Yorktown was the site of the final major engagement of the American Revolutionary War — the siege of October 1781 in which combined American and French forces compelled the surrender of Lord Cornwallis. The park preserves the siege lines, surrender ground, and surrounding York River waterfront with remarkable completeness.', lat: 37.2385, lon: -76.5097, tz: 'America/New_York', trails: ['Siege line walking trail open year-round', 'Battlefield tour route open year-round', 'Waterfront trail open year-round'], tips: ['The siege lines are the park most remarkable feature — earthworks thrown up by both sides in 1781 survive in extraordinary condition and convey the scale and violence of the siege more immediately than any exhibit.', 'The battlefield tour route connects all major sites — the audio tour does an excellent job of explaining the military situation that made Yorktown inevitable once the French fleet controlled the Chesapeake.', 'The York River waterfront below the battlefield offers a pleasant walking area and a view of the river crossing that French and American forces had to control to complete the siege.'] },

  { id: 'shenandoah', name: 'Shenandoah Federal Park', location: 'Virginia', region: 'east', img: '', imgPos: 'center top', tags: ['Scenic','Hiking','Wildlife','Drives'], desc: 'Skyline Drive runs the entire 105 miles of the Blue Ridge Mountains crest through Shenandoah Federal Park, offering continuous views into the Shenandoah Valley to the west and the Virginia Piedmont to the east. The park protects recovering Appalachian forest that has returned to near-wilderness conditions following nineteenth-century agricultural abandonment.', lat: 38.5353, lon: -78.3522, tz: 'America/New_York', trails: ['Skyline Drive open year-round', 'Appalachian Trail through park open year-round', 'Old Rag Mountain Trail open year-round'], tips: ['Skyline Drive has a maximum speed of thirty-five miles per hour and is best driven slowly — the overlooks are frequent and the views change constantly. Allow a full day for the complete drive.', 'The Appalachian Trail runs parallel to Skyline Drive for the entire length of the park — day hikers can access it from dozens of overlook parking areas.', 'Peak autumn colour typically arrives in mid-October and moves down the ridge as the season progresses — check the FPS colour report before planning a fall visit.'] },

  { id: 'new_river', name: 'New River Gorge Federal Park', location: 'Appalachia', region: 'east', img: '', imgPos: 'center top', tags: ['Canyon','River','Whitewater','Heritage'], desc: 'The New River is one of the oldest rivers in North America — ancient enough that it predates the mountains it flows through and cuts a dramatic gorge through the Appalachian Plateau. The gorge reaches a thousand feet in depth and fifty miles in length, sheltering some of the most challenging whitewater in the eastern NAU along with extraordinary biodiversity.', lat: 37.8751, lon: -81.0779, tz: 'America/New_York', trails: ['Long Point Trail open year-round', 'Grandview Rim Trail open year-round', 'Thurmond historic district trail open year-round'], tips: ['The Upper Gauley River section adjacent to the park offers some of the finest Class V whitewater in the NAU — commercial rafting operations run trips from late September through October.', 'The Long Point Trail offers the finest view of the New River Gorge Bridge from below — a moderately strenuous three-mile round trip.', 'The Thurmond historic district within the park preserves a remarkably intact early twentieth-century coal railway town — the FPS interpretation of the region industrial heritage is among the most honest in any eastern park.'] },

  { id: 'franklin_bf', name: 'Franklin Battlefield Federal Park', location: 'District of Washington', region: 'east', img: '', imgPos: 'center top', tags: ['Historic','Heritage','War Between the States','Urban'], desc: 'The Battle of Franklin in March 1859 was one of the most consequential engagements of the War Between the States — the successful Free State capture of the national capital from Union forces. General Alexander Bloom\'s Free Army of the West breached Fort Lee on March 11th, drove Union forces back into the city, and after a brilliant flanking crossing of the Ohio River on March 22nd, compelled the Union Army to abandon Franklin entirely. The park preserves the key sites of the three-week campaign across both banks of the Ohio.', lat: 39.1031, lon: -84.5120, tz: 'America/New_York', trails: ['Fort Lee earthworks trail open year-round', 'Ohio River crossing memorial open year-round', 'Franklin campaign walking tour open year-round'], tips: ['The Fort Lee earthworks at Reading mark where the battle began on March 11, 1859 — the FPS trail follows the line of the Union defences that Bloom broke through in two days of fighting.', 'The Ohio River crossing site east of the city, where Bloom sent a flanking force in secret on March 22nd, is the park most tactically significant location — the FPS interpretation explains why this manoeuvre decided the battle.', 'The park spans both banks of the Ohio — allow a full day to walk the complete campaign trail connecting Fort Lee, the city fighting sites, and the river crossing.'] },
 
  { id: 'mammoth', name: 'Mammoth Cave Federal Park', location: 'Kentucky', region: 'east', img: '', imgPos: 'center top', tags: ['Cave','Geology','Underground','Wildlife'], desc: 'Mammoth Cave is the longest known cave system in the world — over four hundred miles of surveyed passages beneath the limestone karst of central Kentucky. The cave maintains a constant temperature of 54 degrees Fahrenheit year-round and supports extraordinary cave-adapted wildlife including eyeless fish, blind crayfish, and several species found nowhere else on Earth.', lat: 37.1873, lon: -86.1005, tz: 'America/Chicago', trails: ['Historic Tour — guided, 2 hours', 'Wild Cave Tour — guided, 6 hours, strenuous', 'Green River ferry crossing open seasonally'], tips: ['Cave tours range from a one-hour introduction to strenuous six-hour wild cave experiences — book in advance as popular tours sell out days ahead in summer.', 'The cave temperature is constant at 54 degrees regardless of surface conditions — bring a jacket even on the hottest summer day.', 'The Green River within the park is one of the most biodiverse river systems in North America — the FPS river ecology programme runs interpretive canoe tours from May through September.'] },

  { id: 'cuyahoga', name: 'Cuyahoga Valley Federal Park', location: 'Ohio', region: 'east', img: '', imgPos: 'center top', tags: ['River','Heritage','Rail','Urban'], desc: 'The Cuyahoga Valley cuts a wooded corridor through the urban landscape of northeastern Ohio between Cleveland and Akron. The Ohio and Erie Canal towpath runs the length of the park, and the Cuyahoga Valley Scenic Railway still carries passengers through the valley on excursion trains, with critical habitat for migratory birds along the Lake Erie flyway.', lat: 41.2808, lon: -81.5678, tz: 'America/New_York', trails: ['Ohio and Erie Canal Towpath Trail — 20 miles through park', 'Ledges Trail open year-round', 'Beaver Marsh boardwalk open year-round'], tips: ['The Ohio and Erie Canal Towpath Trail is the best way to experience the valley at a human pace — accessible for walking, cycling, and in winter, cross-country skiing.', 'The Cuyahoga Valley Scenic Railway connects multiple park access points — combining a one-way train ride with a return hike along the towpath is a particularly satisfying day in the park.', 'Beaver Marsh, accessible from the towpath near Ira Road, is one of the finest wildlife viewing areas in any urban-adjacent park — great blue herons, wood ducks, and river otters are reliably seen year-round.'] },

  { id: 'indiana_dunes', name: 'Indiana Dunes Federal Park', location: 'Indiana', region: 'east', img: '', imgPos: 'center top', tags: ['Coastal','Dunes','Prairie','Wildlife'], desc: 'The southern shore of Lake Calumet supports an extraordinary mosaic of habitats — active sand dunes, black oak savanna, marsh, bog, and prairie existing within walking distance of each other. The park is one of the most biodiverse in the eastern NAU, supporting over 1,100 flowering plant species. The beach, backed by dunes up to 200 feet high, is one of the finest freshwater beaches in North America.', lat: 41.6534, lon: -87.0522, tz: 'America/Chicago', trails: ['Mount Baldy Trail open year-round', 'Ly-co-ki-we Trail open year-round', 'Pinhook Bog tour — guided only'], tips: ['Mount Baldy is the park largest and most active dune — the climb to the summit is demanding in soft sand but the view over the lake and the Chicago skyline is exceptional.', 'The Pinhook Bog, accessible by guided tour only, is one of the finest remaining sphagnum bogs in the Midwest — carnivorous plants and bog-adapted wildlife make it a genuinely unusual experience.', 'The park biological diversity is best explored with the FPS wildflower guide — the spring wildflower season from April through June is exceptional.'] },

  { id: 'savannah', name: 'Savannah Federal Park', location: 'Georgia', region: 'east', img: '', imgPos: 'center top', tags: ['Historic','Heritage','War Between the States','Urban'], desc: 'The Federal Park preserves the fortifications and engagement sites of the siege and fall of Savannah in December 1864, along with the extraordinarily intact antebellum urban fabric that survived the war largely undamaged. Fort McAllister — whose fall opened Savannah to Federal naval supply — anchors the park historic interpretation.', lat: 31.9686, lon: -81.1546, tz: 'America/New_York', trails: ['Fort McAllister grounds open year-round', 'Historic district walking tour open year-round', 'Marsh kayak trail open seasonally'], tips: ['Fort McAllister is the park most complete and visually impressive fortification — the earthworks are in remarkable condition and the FPS interpretation of the December 1864 assault is among the best battlefield interpretation in the southeast.', 'The park urban sites are best explored on foot from the historic district — the FPS walking tour map connects the key engagement sites with the city famous squares in a route completable in three to four hours.', 'The marsh approach to Fort McAllister by kayak follows the route of the Federal naval forces in 1864 — guided paddle tours available through the FPS visitor centre from March through November.'] },

  { id: 'cumberland', name: 'Cumberland Island Federal Park', location: 'Georgia', region: 'east', img: '', imgPos: 'center top', tags: ['Coastal','Wildlife','Historic','Wilderness'], desc: 'Cumberland Island is the largest and southernmost of Georgia Sea Islands — eighteen miles of undeveloped Atlantic beach backed by maritime forest, freshwater lakes, and salt marsh. Accessible only by ferry with no paved roads, the island shelters a herd of wild horses and the ruins of the Carnegie family Dungeness mansion.', lat: 30.8577, lon: -81.4868, tz: 'America/New_York', trails: ['Main island road — foot and horse access only', 'Beach trail open year-round', 'Dungeness ruins trail open year-round'], tips: ['The ferry from St. Marys runs twice daily with limited capacity — reservations are essential, particularly on spring and autumn weekends.', 'The wild horse herd numbers around two hundred animals and is reliably seen near the Dungeness ruins — the horses are habituated to human presence but should not be approached or fed.', 'The Atlantic beach on the island eastern shore is one of the longest undeveloped stretches on the eastern seaboard — walk south from the Dungeness dock for solitude even on busy days.'] },

  { id: 'congaree', name: 'Congaree Federal Park', location: 'South Carolina', region: 'east', img: '', imgPos: 'center top', tags: ['Old Growth','Wetlands','Wildlife','Canoeing'], desc: 'Congaree preserves the largest intact expanse of old-growth bottomland hardwood forest in North America — a cathedral landscape of massive bald cypress, tupelo, and loblolly pine rising from the floodplain of the Congaree River. Some trees exceed 160 feet in height in a forest of extraordinary scale and biodiversity.', lat: 33.7948, lon: -80.8076, tz: 'America/New_York', trails: ['Boardwalk Loop open year-round', 'Cedar Creek water trail open year-round', 'Weston Lake Loop open year-round'], tips: ['The Boardwalk Loop trail puts visitors at eye level with the floodplain forest without getting wet — the giant trees are most impressive immediately after flooding when water still stands beneath them.', 'Canoe and kayak access to the Cedar Creek water trail offers the most immersive experience of the forest — paddling beneath the giant cypress in early morning is one of the most remarkable experiences in any eastern park.', 'The synchronous firefly display in late May and early June is one of the natural wonders of the eastern NAU — the FPS runs guided evening programmes during peak display.'] },

  { id: 'gulf_islands', name: 'Gulf Islands Federal Park', location: 'Alabama · Mississippi', region: 'east', img: '', imgPos: 'center top', tags: ['Coastal','Maritime','Historic','Wildlife'], desc: 'A chain of barrier islands stretching along the Gulf Coast preserving some of the finest undeveloped white sand beach in the NAU along with remarkably complete nineteenth-century masonry fortifications that guarded the approaches to Mobile Bay and the Mississippi Sound.', lat: 30.3274, lon: -88.5597, tz: 'America/Chicago', trails: ['Ship Island beach trail open seasonally', 'Fort Massachusetts grounds open year-round', 'Fort Morgan tour route open year-round'], tips: ['Ship Island is accessible by passenger ferry from Gulfport — the combination of the historic fort, the white sand beach, and the clear Gulf water makes this the most complete Gulf Islands experience.', 'The fortifications were designed to be seen from the water — the FPS boat tour around Fort Morgan provides the perspective that the nineteenth-century engineers intended.', 'The barrier island beaches are nesting habitat for loggerhead sea turtles from May through August — FPS rangers lead guided turtle walks during nesting season.'] },

  { id: 'atchafalaya', name: 'Atchafalaya Basin Federal Park', location: 'Louisiana', region: 'east', img: '', imgPos: 'center top', tags: ['Wetlands','River','Wildlife','Canoeing'], desc: 'The Atchafalaya Basin is the largest river swamp in North America — a vast flooded forest of bald cypress and water tupelo stretching across a million acres of south-central Louisiana. The federal park protects the most ecologically intact portion of the basin, home to American alligators, black bears, river otters, and more than three hundred bird species.', lat: 30.2241, lon: -91.8874, tz: 'America/Chicago', trails: ['Henderson water trail open year-round', 'Cypress forest paddle route open March through November', 'Basin levee hiking trail open year-round'], tips: ['The basin is best experienced by boat — the FPS maintains a network of water trails through the interior cypress forest accessible by canoe, kayak, or small motor boat.', 'The annual flooding of the basin in spring transforms the landscape — paddling through the flooded cypress forest when the water is high enough to move freely between the trees is one of the most atmospheric experiences in any southern park.', 'Alligators are present throughout the basin and should be treated with respect — maintain a safe distance and never feed them. They are most active from April through October.'] },

  { id: 'gulf_marshes', name: 'Gulf Coast Marshes Federal Park', location: 'Louisiana', region: 'east', img: '', imgPos: 'center top', tags: ['Wetlands','Coastal','Wildlife','Maritime'], desc: 'The Mississippi River Delta and surrounding coastal marshes of southern Louisiana represent one of the most productive and ecologically complex landscapes in North America. The federal park protects a significant section of the Barataria-Terrebonne estuary system — critical nursery habitat for the Gulf commercial fisheries.', lat: 29.5000, lon: -90.1000, tz: 'America/Chicago', trails: ['Jean Lafitte boat tour — guided, March through November', 'Marsh canoe trail open year-round', 'Cheniere woodland trail open year-round'], tips: ['The park is best experienced by boat — the FPS operates guided boat tours through the marsh channels from Jean Lafitte visitor centre from March through November.', 'The autumn bird migration through the coastal cheniere woodlands is one of the great natural spectacles of the eastern NAU — exhausted trans-Gulf migrants concentrate in extraordinary numbers from late April through May.', 'The marsh landscape is actively changing due to subsidence and erosion — the FPS interpretation of coastal land loss and restoration efforts is sobering but essential context.'] },

  { id: 'everglades', name: 'Everglades Federal Park', location: 'Florida', region: 'east', img: '', imgPos: 'center top', tags: ['Wetlands','Wildlife','Subtropical','Unique'], desc: 'The Everglades is unlike any other landscape on Earth — a vast slow-moving river of grass fifty miles wide and a hundred miles long, flowing almost imperceptibly from Lake Okeechobee to Florida Bay. The park encompasses mangrove coast, sawgrass prairie, cypress dome, and coral reef in a mosaic of extraordinary biological richness.', lat: 25.2866, lon: -80.8987, tz: 'America/New_York', trails: ['Anhinga Trail open year-round', 'Pa-hay-okee Overlook boardwalk open year-round', 'Florida Bay boat tour — guided, December through April'], tips: ['The park is vast and most of it is inaccessible without a boat — the Anhinga Trail at Royal Palm and the Pa-hay-okee Overlook are the two most rewarding short walks for first-time visitors.', 'The dry season from December through April is the best time to visit — wildlife concentrates around remaining water sources and mosquitoes are manageable.', 'A boat tour of Florida Bay is the best way to see the marine component of the park — the shallow clear water supports seagrass beds, sharks, rays, and sea turtles visible from a flat-bottomed tour boat.'] },

  { id: 'dry_tortugas', name: 'Dry Tortugas Federal Park', location: 'Florida', region: 'east', img: '', imgPos: 'center top', tags: ['Maritime','Historic','Coral Reef','Remote'], desc: 'Seventy miles west of Key West in the open Gulf of Mexico, the Dry Tortugas are dominated by the massive brick bulk of Fort Jefferson — the largest masonry fortification in the Western Hemisphere. The surrounding waters preserve the most pristine coral reef ecosystem in the continental United States, with visibility often exceeding one hundred feet.', lat: 24.6285, lon: -82.8732, tz: 'America/New_York', trails: ['Fort Jefferson grounds open year-round', 'Snorkelling from beach — year-round', 'Bird Key tern colony — viewing from distance only'], tips: ['The ferry from Key West is a two-and-a-half-hour crossing in open water — conditions can be rough, particularly in winter and spring. Check the weather forecast before booking.', 'Snorkelling directly off the beach adjacent to Fort Jefferson puts you over some of the finest reef in the park within minutes of arriving — bring your own equipment as rentals are limited.', 'The loggerhead sea turtle nesting on Bush Key, visible from Fort Jefferson walls during summer months, is one of the most accessible sea turtle nesting experiences in the NAU.'] },

  { id: 'big_cypress', name: 'Big Cypress Federal Park', location: 'Florida', region: 'east', img: '', imgPos: 'center top', tags: ['Wetlands','Wildlife','Wilderness','Subtropical'], desc: 'Big Cypress protects the watershed that feeds fresh water into the northern Everglades — a vast swamp of bald cypress, pine flatwoods, and wet prairie stretching across seven hundred thousand acres of southern Florida. Florida panthers use the preserve as a critical wildlife corridor, and black bears, wood storks, and snail kites are among the remarkable wildlife found here.', lat: 25.9153, lon: -81.0889, tz: 'America/New_York', trails: ['Loop road — unpaved, check conditions before attempting', 'Swamp walks — guided, November through April', 'Florida Trail through park — long-distance route'], tips: ['The loop road through the heart of the preserve is unpaved and impassable in wet conditions — check road status at the visitor centre before attempting the drive.', 'The FPS swamp walks — guided ranger programmes taking visitors into the cypress forest on foot, often with water above the knee — are the most immersive way to experience Big Cypress. Available November through April.', 'The preserve remoteness means emergency services response times are significant — self-sufficiency is essential for anyone venturing away from the main road corridors.'] },

];

// ── NAU ASSEMBLY BILLS ─────────────────────────────────────────────────
const WBT_BILLS = [
  { num: 'NAU/18-042', title: 'Continental Currency Stabilisation Framework Act', desc: 'Establishes a binding framework to harmonise exchange arrangements across all thirteen member states and codifies the role of the Continental Bank in monetary oversight. Backed by a Labour-Unionist majority.', status: 'floor', statusLabel: 'On Floor', sponsor: 'Mbr. Okafor (Lab.-USA), Mbr. Tremblay (Un.-Canada), Mbr. Reyes (Lab.-Mexico)' },
  { num: 'NAU/18-031', title: 'NAU Constitutional Consolidation Act', desc: 'Consolidates sixty years of accumulated treaties, charter revisions, and amendments into a single founding document. Formally establishes NAU citizenship alongside member-state citizenship and creates a permanent NAU judiciary. Mexico has reserved its position pending review of the judiciary provisions.', status: 'committee', statusLabel: 'Constitutional Committee', sponsor: 'Mbr. Halverson (Un.-USA), Mbr. Dumont (Lab.-Canada), Mbr. Castillo (Un.-California)' },
  { num: 'NAU/18-019', title: 'Pan-Continental Clean Waters Compact', desc: 'Establishes binding water quality standards across shared river systems, coastal zones, and the Great Lakes basin. Includes enforcement mechanisms and a joint monitoring agency. Led by the Greens with Labour support; CC bloc opposed on sovereignty grounds.', status: 'passed', statusLabel: 'Passed Committee', sponsor: 'Mbr. Kahananui (Grn.-Hawaii), Mbr. Beaumont (Grn.-Canada), Mbr. Flores (Lab.-FRCA)' },
  { num: 'NAU/18-008', title: 'Caribbean Integration & Development Fund Reauthorisation', desc: "Reauthorises and expands the Fund established at Caribbean member states accession, providing infrastructure, education, and economic development support. Broad cross-bloc support expected.", status: 'committee', statusLabel: 'Development Committee', sponsor: 'Mbr. Saint-Fleur (Lab.-Haiti), Mbr. Morales (Un.-Dominican Rep.), Mbr. Chen (Un.-California)' },
  { num: 'NAU/18-055', title: 'Pacific Trade Framework Renewal Act', desc: 'Renews and expands the bilateral trade frameworks governing NAU relations with Japan, China, and the Kingdom of Hawaii. Introduces new provisions on digital trade, intellectual property, and supply chain resilience. Strong Unionist and Labour backing.', status: 'floor', statusLabel: 'On Floor', sponsor: 'Mbr. Nakashima (Un.-USA), Mbr. Kahananui (Grn.-Hawaii), Mbr. Dumont (Lab.-Canada)' },
  { num: 'NAU/18-061', title: 'NAU Civil Aviation Standards Harmonisation Act', desc: 'Brings all thirteen member states under a single set of safety standards, licensing requirements, and air traffic management protocols. Technical legislation with broad support across all blocs.', status: 'committee', statusLabel: 'Transport Committee', sponsor: 'Mbr. Lavigne (Un.-Canada), Mbr. Torres (Lab.-Mexico), Mbr. Williams (CC-USA)' },
  { num: 'NAU/18-037', title: 'Interlink Access Equity Resolution', desc: 'Non-binding resolution calling on all member states to achieve universal household Interlink access by 2030 and to remove restrictions on cross-border data flows within the NAU. Greens and Labour co-sponsored; CC bloc abstaining.', status: 'passed', statusLabel: 'Passed — Non-binding', sponsor: 'Mbr. Beaumont (Grn.-Canada), Mbr. Okafor (Lab.-USA), Mbr. Reyes (Lab.-Mexico)' },
  { num: 'NAU/18-044', title: 'Mutual Recognition of Professional Qualifications Act', desc: 'Requires all member states to recognise professional qualifications — medical, legal, engineering, and teaching — issued by any other member state. Contentious among some provincial governments; Unionist bloc divided.', status: 'committee', statusLabel: 'Legal Affairs Committee', sponsor: 'Mbr. Castillo (Un.-California), Mbr. Vasquez (Lab.-Mexico), Mbr. Tremblay (Un.-Canada)' },
];

// ── NAU ASSEMBLY FLOOR BANNERS ─────────────────────────────────────────
const WBT_FLOOR_BANNERS = [
  { label: 'Assembly Floor — Now in Debate', bill: 'NAU/18-042 — Continental Currency Stabilisation Framework', meta: 'Second reading · Economic Affairs Committee · Debate in progress · Est. vote: 15:00 Calumet Time' },
  { label: 'Assembly Floor — Second Reading', bill: 'NAU/18-031 — NAU Constitutional Consolidation Act', meta: 'Constitutional Committee report tabled · General debate open · No vote scheduled today' },
  { label: 'Assembly Floor — Committee Stage', bill: 'NAU/18-019 — Pan-Continental Clean Waters Compact', meta: 'Line-by-line review · Environment & Sustainability Committee · Session resumes 10:00 Calumet Time' },
  { label: 'Assembly Floor — Question Time', bill: 'Assembly Questions to the Executive Council', meta: 'Members may submit written questions · Oral questions: 14:00-16:00 Calumet Time' },
  { label: 'Assembly Floor — Procedural Session', bill: 'NAU/18-008 — Caribbean Integration & Development Fund Reauthorisation', meta: 'First reading · Referred to Development Committee · No debate scheduled' },
  { label: 'Assembly Floor — Emergency Debate', bill: 'Motion on NAU Response to Mesopotamian Reconstruction Progress', meta: 'Tabled by Labour and Unionist blocs · Debate limited to 3 hours · Vote on motion expected' },
  { label: 'Assembly Floor — Now in Debate', bill: 'NAU/18-055 — Pacific Trade Framework Renewal', meta: 'Third reading · Trade & External Relations Committee · Vote expected 16:30 Calumet Time' },
];

// ── MUSEUM OF THE UNITED STATES ────────────────────────────────────────
const WBT_MUSEUM_GALLERIES = [
  { title: 'The American Presidency: From Washington to Nakamura', floor: 'Level 1 · East Wing', desc: "Two centuries of executive leadership — objects, documents, and portraits tracing every president from the republic's founding to the present day." },
  { title: 'Iron Nation: Two Centuries of American Rail', floor: 'Level 1 · West Wing', desc: 'From the founding of the USRC in 1834 to the modern high-speed network — the story of how rail shaped the American continent.' },
  { title: 'War Between the States, 1857-1860: The Crisis That Remade America', floor: 'Level 2 · Central Hall', desc: 'The defining conflict of the nineteenth century — from the collapse of the Hawthorne government to the Philadelphia Convention and the Constitution of 1861.' },
  { title: 'The Global War: America and the World, 1932-1940', floor: 'Level 2 · North Gallery', desc: "America's defining international conflict — from the first Prussian advances to the Treaty of Geneva and the founding of the Global Peace Council." },
  { title: 'Votes and Voices: Two Centuries of American Democracy', floor: 'Level 3 · South Gallery', desc: 'From the first elections under the 1787 Constitution to the Third Amendment and universal suffrage — the long arc of democratic participation in America.' },
  { title: 'American Arts & Material Culture, 1814-Present', floor: 'Level 3 · East Gallery', desc: 'Objects, artworks, and everyday items tracing American material life from the founding of Franklin to the present — furniture, fashion, fine art, and folk tradition.' },
];

const WBT_MUSEUM_EVENTS = [
  { title: "Curator's Talk: The August Letters — Objects from the 1814 Evacuation", time: '2:00 p.m.' },
  { title: 'Evening Lecture: Freeman and the Postwar Moment', time: '6:00 p.m.' },
  { title: 'Family Day: Rail Through History', time: '10:00 a.m.' },
  { title: 'Archives Gallery: Special Extended Hours — Document Conservation Week', time: '9:00 a.m.' },
  { title: 'Symposium: The 1861 Constitution and Its Legacy', time: '3:00 p.m.' },
  { title: 'School Group Day: War Between the States Gallery — Guided Tours', time: '9:30 a.m.' },
  { title: 'Film Screening: The Long March to Franklin (1962)', time: '7:00 p.m.' },
  { title: 'Lecture: The Global War Through American Eyes', time: '5:30 p.m.' },
];

// NOTE: WBT_WH_STATEMENTS and WBT_WH_BRIEFING formerly lived here as orphaned,
// unused arrays. They have been superseded by WH_STATEMENTS / WH_BRIEFING
// further down (see NEWS & ROTATION POOLS section), which are the versions
// actually wired into the Washington House page. Removed to avoid duplication.

// ═════════════════════════════════════════════════════════════════════════════
// -- NEWS & ROTATION POOLS --
// Shared content pools for the Franklin Observer, ABN News, Washington House,
// and CSN Sports Network pages. All pages load this file (content.js) to
// ensure daily story rotation stays in sync.
//
// HOW TO ADD NEW STORIES: find the right array below and append a new
// object at the end. No other changes needed -- the rotation picks it up
// automatically.
// ═════════════════════════════════════════════════════════════════════════════

// -- DAY OF YEAR (canonical, used by all pages) --
const _now = new Date();
const DAY_OF_YEAR = Math.floor((_now - new Date(_now.getFullYear(), 0, 0)) / 86400000);
const CURRENT_HOUR = _now.getHours();

// -- MONTHS / DAYS --
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS_OF_WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// -- SEED (year-inclusive, so Jan 1 2026 != Jan 1 2027) --
const SEED = _now.getFullYear() * 1000 + DAY_OF_YEAR;

// -- SEEDED SHUFFLE --
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

// -- DYNAMIC "DAYS AGO" DATE FORMATTING (Washington House) --
// WH_STATEMENTS / WH_BRIEFING carry no fixed dates -- a fixed date looks
// stale the moment real time passes it by. Instead each picked item gets a
// small pseudo-random "days ago" offset (0-10), derived from the day's
// SEED, so the offset itself changes daily but always resolves to a date
// within the last ten days relative to whenever the page is actually loaded.
function pseudoRandomDaysAgo(seed, index, min = 0, max = 10) {
  let s = (seed + index * 7919) & 0xffffffff; // 7919: arbitrary prime for spread
  s = (s * 1664525 + 1013904223) & 0xffffffff;
  const range = max - min + 1;
  return min + (Math.abs(s) % range);
}
function formatDaysAgoDate(daysAgo) {
  const d = new Date(_now);
  d.setDate(d.getDate() - daysAgo);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// -- SAFE BYLINE CITY EXTRACTOR --
// Bylines aren't all formatted the same way (some include "· City", others
// don't), so naively splitting on the separator and trimming crashes the
// whole file the moment a byline without one gets picked. This degrades
// gracefully to a default instead.
function bylineCity(byline, fallback = 'Franklin') {
  if (!byline) return fallback;
  const parts = byline.split('·');
  return parts.length > 1 ? parts[1].trim() : fallback;
}


// ═════════════════════════════════════════════════════════════════════════════
// -- WIRE STORIES --
// Shared "wire service" stories used as the lead/top stories on both the
// Franklin Observer and ABN News.
//   .fo  -- Franklin Observer version (full article with byline/body)
//   .abn -- ABN News version (card/lead format)
//   .wh  -- optional Washington House tie-in
//   .waymark -- short homepage version
// ═════════════════════════════════════════════════════════════════════════════

const WIRE_STORIES = [

  {
    id: 'nau-consolidation-vote',
    fo: {
      label: 'politics',
      hed: 'Nakamura Signals Compromise Path on NAU Constitutional Consolidation',
      byline: 'By Eleanor Voss, Political Correspondent · Franklin',
      dek: 'US President says she will not oppose a full Assembly vote on the consolidation project, ending weeks of ambiguity over the American position.',
      body: [
        'President Sophia Nakamura signalled late Thursday that she would not oppose an NAU Assembly vote on the Constitutional Consolidation Act, a sweeping proposal to bring together more than eighty years of ad-hoc treaties, founding compacts, and institutional arrangements into a single governing document.',
        'The statement, delivered through her Communications Director from Washington House, represents the first substantive break from weeks of presidential silence on the question. The consolidation effort has been the defining issue of the 18th Assembly session.',
        'SPA and Federalist leaders in Congress welcomed Nakamura\'s position, while JCA floor leader Representative Aldridge of Tennessee called it "overreach into a continental matter that is not the President\'s to decide." Democrats were more measured.',
        'In Calumet, NAU Assembly President Marguerite Fontaine said the statement removed the last major obstacle to scheduling a floor vote. CC bloc leader Whitfield of Texas said his group remained firmly opposed to any document that, in his words, "writes a constitution for a country that does not exist."'
      ]
    },
    abn: {
      emoji: '⚖', tag: 'NAU', tagColor: '#993C1D',
      hed: 'Nakamura Will Not Block NAU Consolidation Vote',
      dek: 'The President\'s statement ends weeks of silence and clears the path for an NAU Assembly floor vote on the landmark consolidation project.',
      meta: 'ABN Political Desk · Franklin · 2 hours ago'
    },
    wh: {
      statement: '"The Assembly exists to debate these questions — that is precisely what it was designed to do. If the people\'s representatives, meeting the standard our Constitution demands, choose to open that conversation, I will not stand in their way."',
      briefing: 'President Issues Statement on NAU Assembly Constitutional Consolidation Vote'
    },
    waymark: { tag: 'NAU', hed: 'Nakamura clears path for NAU consolidation floor vote' }
  },

  {
    id: 'usrc-modernisation-bill',
    fo: {
      label: 'politics',
      hed: 'Congress Passes USRC Modernisation Funding Bill by Wide Margin',
      byline: 'By Marcus Hendry, Capitol Correspondent · Franklin',
      dek: 'Bipartisan majority approves Ȼ2.1 billion for Northeast and Prairie Corridor upgrades over the next six years.',
      body: [
        'Congress passed the USRC Infrastructure Modernisation Act on Wednesday by a margin of 312 to 88, delivering one of the largest single investments in the Railway Company\'s history and drawing praise from across the political spectrum.',
        'The bill directs Ȼ2.1 billion toward electrification upgrades on the Northeast and Prairie Corridors and the construction of three new Franklin Central platforms over six years.',
        'President Nakamura is expected to sign the bill at a ceremony at Franklin Central Station next week. The USRC\'s Director called it "a generational investment in the backbone of this nation."',
        'JCA members largely voted against the bill on fiscal grounds, though several from states with heavy rail usage crossed the aisle. The vote represents one of the most significant pieces of infrastructure legislation passed in the current Congress.'
      ]
    },
    abn: {
      emoji: '🚂', tag: 'USA', tagColor: '#185FA5',
      hed: 'Congress Passes Ȼ2.1 Billion USRC Modernisation Bill',
      dek: 'A broad bipartisan majority approved the largest single investment in the Railway Company\'s history. President Nakamura expected to sign at Franklin Central next week.',
      meta: 'ABN Political Desk · Franklin · 3 hours ago'
    },
    wh: {
      statement: '"This is what public investment looks like. Generation after generation, the Railway Company has delivered — and these numbers prove that when we invest in our people, they show up."',
      briefing: 'President Nakamura to Sign USRC Modernisation Act at Franklin Central Station'
    },
    waymark: { tag: 'rail', hed: 'Congress passes Ȼ2.1bn USRC modernisation bill' }
  },

  {
    id: 'mars-crew-announcement',
    fo: {
      label: 'science',
      hed: 'NASA Names Ten-Person International Crew for Mars Mission',
      byline: 'By Dr. Priya Iyer, Science Correspondent · Franklin',
      dek: 'The most internationally diverse crew in the history of human spaceflight will depart for Mars later this year under the command of Canadian astronaut Laura Mackenzie.',
      body: [
        'NASA formally announced the ten-person crew of the Ares I Mars mission on Tuesday, confirming months of speculation and finalising what the agency called "the most internationally representative crew ever assembled for a single mission."',
        'Canadian astronaut Laura Mackenzie, a veteran of two lunar rotations, will serve as mission commander — the first Canadian to command an interplanetary mission. The crew includes representatives from nine nations: the United States, Canada, Mexico, the Federation of Texas, the Union of the Californias, the Kingdom of Hawaii, Japan, Britain, Australia, and India.',
        'American crew member Chito Hotema, an engineer from Gigadohi City with Choctaw heritage, called the mission "a continuation of a story that began long before any of us were born." Physicist Arjun Desai of Mumbai said India\'s inclusion marked "the first chapter of a new relationship between our nation and the stars."',
        'Launch is scheduled for late 2026, with the crew expected to reach Mars orbit in mid-2027. The surface landing — the first in human history — is currently planned for the following year, pending orbital survey results.',
        'President Nakamura, who attended the announcement ceremony at the NASA Continental Research Campus in Calumet, called the mission "the clearest possible statement of what this continent, and this species, is capable of when we choose to reach."'
      ]
    },
    abn: {
      emoji: '🚀', tag: 'Science', tagColor: '#2D5A1A',
      hed: 'NASA Names Ten-Person International Mars Crew — Launch Set for Late 2026',
      dek: 'Canadian astronaut Laura Mackenzie will command the most internationally diverse crew in spaceflight history. Nine nations represented; departure scheduled for later this year.',
      meta: 'ABN Science Desk · Calumet · 1 hour ago'
    },
    wh: {
      statement: '"The clearest possible statement of what this continent, and this species, is capable of when we choose to reach."',
      briefing: 'President Nakamura Attends Mars Crew Announcement at NASA Calumet Campus'
    },
    waymark: { tag: 'science', hed: 'NASA names international ten-person Mars crew; launch late 2026' }
  },

  {
    id: 'uus-space-medicine',
    fo: {
      label: 'science',
      hed: 'University of the United States Study Finds Long-Duration Spaceflight Poses Greater Bone Risk Than Previously Modelled',
      byline: 'By Dr. Priya Iyer, Science Correspondent · Franklin',
      dek: 'A landmark study drawing on twelve years of lunar base rotation data has revised upward the estimated bone density loss for missions exceeding eight months — with direct implications for the Ares I crew.',
      body: [
        'A study published this week by the University of the United States School of Medicine has found that bone density loss in long-duration spaceflight may be significantly more severe than existing models predicted, raising questions about mitigation protocols for missions of nine months or longer.',
        'The study, led by Dr. Amara Osei-Bonsu and drawing on physiological data from 47 lunar base rotations conducted between 2014 and 2026, found that crew members on rotations exceeding eight months showed bone density loss at rates approximately 23% higher than the models used in current NASA mission planning.',
        'The findings arrive weeks before the Ares I crew is scheduled to depart for Mars on a transit estimated at six to nine months. NASA said in a statement that it had received the study\'s preliminary findings in March and had already begun reviewing countermeasure protocols with the crew\'s medical team.',
        '"The models we built were good models with the data we had," said Dr. Osei-Bonsu at a press conference in Franklin. "The lunar base gave us data we simply couldn\'t have had before. That is what it was designed to do, and now we use it."',
        'The study is the largest of its kind conducted using real long-duration data rather than ground-based simulation, and is expected to inform mission planning for all future deep-space programmes across NAU and allied space agencies.'
      ]
    },
    abn: {
      emoji: '🔬', tag: 'Science', tagColor: '#2D5A1A',
      hed: 'UUS Study Revises Bone Loss Risk for Long Space Missions — NASA Reviewing Ares I Protocols',
      dek: 'Drawing on twelve years of lunar base rotation data, researchers found bone density loss 23% higher than current models predicted. Ares I crew medical team briefed.',
      meta: 'ABN Science Desk · Franklin · 3 hours ago'
    },
    wh: null,
    waymark: { tag: 'science', hed: 'UUS study revises bone loss risk for long-duration spaceflight' }
  },

  {
    id: 'china-cinema-spring',
    fo: {
      label: 'world',
      hed: 'Chinese Films Find International Audiences Seven Years After the Spring',
      byline: 'By Observer World Desk',
      dek: 'A wave of Chinese-produced films — many examining the country\'s own twentieth-century history with new candour — is drawing critical attention at festivals in Franklin, New Boston, and abroad.',
      body: [
        'Seven years after the Chinese Spring opened the country\'s press and creative industries to a degree of freedom not seen in living memory, the effects are becoming visible in an unexpected place: international film festival programmes.',
        'Two Chinese productions are currently screening in competition at the Franklin International Film Festival — both historical dramas examining periods of the twentieth century that were, until recently, subjects filmmakers approached only obliquely or not at all.',
        'Critics have drawn comparisons to the wave of German and Japanese filmmaking in the 1990s that grappled directly with those nations\' wartime pasts. "There is a quality of relief in these films," wrote Observer arts critic Josephine Hale after the festival opening. "As if the artists had been waiting a long time to say something they now finally can."',
        'The films have not been without controversy at home. Conservative commentators in several Chinese outlets have questioned whether the festival selections represent the country\'s filmmaking at its broadest, or a narrow strand curated for Western tastes. The filmmakers themselves have largely declined to engage with the criticism.',
        'NAU arts organisations have signalled interest in co-production frameworks that could bring more Chinese creative work into the continental distribution system — a conversation that would have been unthinkable before 2019.'
      ]
    },
    abn: {
      emoji: '🎬', tag: 'World', tagColor: '#0F6E56',
      hed: 'Chinese Cinema Finds International Audiences Seven Years After the Spring',
      dek: 'Two Chinese historical dramas are in competition at the Franklin International Film Festival — part of a wave of post-Spring filmmaking drawing comparisons to Germany and Japan\'s 1990s reckonings.',
      meta: 'ABN Arts Desk · Franklin · 6 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'Chinese cinema finds international audiences post-Spring' }
  },

  {
    id: 'nau-qualifications-bill',
    fo: {
      label: 'politics',
      hed: 'NAU Professional Recognition Bill Divides Unionist Bloc as Legal Affairs Committee Debates',
      byline: 'By Marcus Hendry, Capitol Correspondent · Calumet',
      dek: 'A bill requiring all NAU member states to recognise each other\'s professional qualifications has exposed an unexpected fault line within the Unionist group, with some state governments pushing back on provisions covering medical and legal licensing.',
      body: [
        'A bill that would require all NAU member states to automatically recognise professional qualifications — medical, legal, engineering, and teaching — issued by any other member state ran into unexpectedly determined resistance in the Assembly\'s Legal Affairs Committee this week, with Unionist delegates from three member states joining CC bloc members in opposing the bill\'s current enforcement provisions.',
        'The Mutual Recognition of Professional Qualifications Act, designated NAU/18-044, has broad Labour and Green support and was widely expected to pass committee without significant difficulty. But Unionist delegates from Canada\'s provincial governments and the United States argued that some member states\' licensing standards differ enough that blanket recognition poses genuine public safety risks — particularly in medicine.',
        '"This is not a sovereignty argument," said Unionist delegate Tremblay of Canada, drawing a distinction from the CC bloc\'s position. "This is a standards argument. A physician licensed in one member state may have trained under very different requirements than one licensed in another. We need to solve that problem before we solve the recognition problem."',
        'Labour delegates pushed back, arguing that the bill\'s provisions for a joint standards body address exactly that concern, and that the real obstacle is professional guild resistance to cross-border competition rather than genuine safety concerns.',
        'The bill\'s sponsors have signalled they may accept amendments to the medical provisions to secure Unionist support, while holding firm on engineering and teaching qualifications where standards gaps are smaller. A committee vote is expected within the fortnight.'
      ]
    },
    abn: {
      emoji: '📋', tag: 'NAU', tagColor: '#993C1D',
      hed: 'NAU Professional Recognition Bill Hits Resistance in Legal Affairs Committee',
      dek: 'Unionist delegates have joined CC bloc members in opposing enforcement provisions in NAU/18-044, exposing an unexpected fault line over medical and legal licensing standards.',
      meta: 'ABN NAU Desk · Calumet · 4 hours ago'
    },
    wh: null,
    waymark: { tag: 'NAU', hed: 'NAU professional recognition bill divides Unionist bloc in committee' }
  },

  {
    id: 'britain-nau-trade',
    fo: {
      label: 'world',
      hed: 'Britain and NAU Sign Five-Year Trade Renewal Agreement in London',
      byline: 'By Observer World Desk · London',
      dek: 'The agreement locks in preferential tariff arrangements across key manufacturing and agricultural sectors, with a joint review scheduled for 2029.',
      body: [
        'Senior trade representatives from the NAU and the British government signed a five-year renewal of the bilateral trade framework in London on Wednesday, locking in preferential tariff arrangements across manufacturing, agricultural, and financial services sectors.',
        'The agreement, the fourth such renewal since the original framework was established in 2008, maintains the current tariff schedules with modest adjustments for the pharmaceutical and advanced technology sectors. A joint review body will convene in 2029 to assess implementation.',
        'NAU trade commissioner Helena Wray called the signing "a reaffirmation of one of the most productive bilateral economic relationships in the world." Britain\'s Trade Secretary described it as "a foundation for the next chapter of a partnership that goes back further than either of our current institutions."',
        'The signing comes amid broader discussions about Britain\'s relationship with the NAU framework, with some British commentators advocating for closer alignment and others emphasising the importance of independent trade policy. The government has maintained its position that formal associate status is not currently under consideration.'
      ]
    },
    abn: {
      emoji: '🤝', tag: 'Britain', tagColor: '#0F6E56',
      hed: 'Britain and NAU Sign Five-Year Trade Renewal in London',
      dek: 'Preferential tariff arrangements locked in across manufacturing, agriculture, and financial services. Joint review scheduled for 2029.',
      meta: 'ABN World Desk · London · 6 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'Britain and NAU renew five-year trade framework' }
  },

  {
    id: 'mare-imbrium-film',
    fo: {
      label: 'culture',
      hed: '<em>Mare Imbrium</em> Opens to Acclaim — A Moon Landing Film for the Mars Moment',
      byline: 'By Josephine Hale, Arts Correspondent · St. Augustine',
      dek: 'The prestige historical drama about the 1976 lunar landing arrives in the year America prepares to send a crew to Mars, and the timing feels anything but accidental.',
      body: [
        'There is a moment in Mare Imbrium when Isabel Carrera steps onto the lunar surface and the film simply holds on her face — not the triumph you expect, but something quieter, more private, the expression of someone realizing that what they had prepared their whole life for has turned out to be beyond what preparation can reach. It is one of the finest moments in recent American cinema, and it is typical of a film that earns every one of its 147 minutes.',
        'Released fifty years to the month after the 1976 Bicentennial Moon Landing, Mare Imbrium tells the story of the mission and its crew — Curtis Waverly, Owen Stirling, the late Abner Lyons, and Carrera herself, the first woman on the moon — with a restraint and seriousness that feels genuinely unusual for a prestige historical production of this scale.',
        'The film arrives at a moment when the culture\'s relationship to spaceflight is undergoing one of its periodic transformations. The Ares I crew is weeks from departure; the Mars mission\'s ten names are on every front page. Director Soledad Mendes has said in interviews that she did not set out to make a film about the present, but it is impossible to watch Mare Imbrium without thinking about what is coming.',
        '"Fifty years ago we went somewhere no one had gone," Carrera — now 78, who served as a consultant on the production — said at the Franklin premiere. "In a few weeks, ten people will go somewhere no one has gone. The feeling, I think, will be the same. You can prepare for everything except the moment itself."',
        'Mare Imbrium is in wide release from Friday.'
      ]
    },
    abn: {
      emoji: '🎬', tag: 'Culture', tagColor: '#993556',
      hed: '<em>Mare Imbrium</em> Opens — Moon Landing Drama Arrives in the Mars Moment',
      dek: 'The 50th anniversary prestige film about the 1976 Bicentennial moon landing is drawing strong reviews and emotional audiences as the Ares I crew prepares to depart for Mars.',
      meta: 'ABN Arts Desk · St. Augustine · 5 hours ago'
    },
    wh: null,
    waymark: { tag: 'culture', hed: 'Mare Imbrium opens to acclaim — moon landing drama arrives as Mars crew prepares' }
  },

  {
    id: 'uer-media-reforms',
    fo: {
      label: 'world',
      hed: 'UER Premier Faces Parliamentary Challenge Over State Media Reforms',
      byline: 'By Observer World Desk · Paris',
      dek: 'The governing coalition in Paris is under pressure from opposition factions as a contentious bill to restructure state broadcasting enters its second reading in the National Assembly.',
      body: [
        'The UER Premier\'s governing coalition faced its most serious parliamentary test in two years on Wednesday as opposition factions united to demand amendments to the State Broadcasting Reform Act ahead of its second reading in the National Assembly.',
        'The bill, which would consolidate the UER\'s three public broadcasting bodies into a single continental authority with an expanded remit for multilingual programming, has drawn fire from cultural nationalist factions in France, Germany, and the smaller member states, who argue it would dilute national broadcasting traditions.',
        'The Premier has framed the reform as necessary to compete with private continental and international networks, which have steadily eroded the audience share of UER public broadcasters over the past decade. Supporters note that the bill includes significant language protections and requires minimum airtime allocations for each member nation\'s programming.',
        'NAU observers have followed the debate with interest. The UER\'s two-channel model for separating news and opinion content, established in the 1970s, has long been cited as a possible template for further regulatory harmonisation across the two blocs.'
      ]
    },
    abn: {
      emoji: '📺', tag: 'UER', tagColor: '#533AB7',
      hed: 'UER Premier\'s Media Reform Bill Faces Parliamentary Rebellion',
      dek: 'Opposition factions in the National Assembly are demanding amendments to a bill that would consolidate UER public broadcasting into a single continental authority.',
      meta: 'ABN Europe Desk · Paris · 7 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'UER media reform bill faces parliamentary challenge in Paris' }
  },

  {
    id: 'russia-duma-deadlock',
    fo: {
      label: 'world',
      hed: 'Tsar Nicholas IV Appeals to Duma as Modernisation Package Stalls',
      byline: 'By Observer World Desk',
      dek: 'Russia\'s Tsar has made a rare direct appeal to parliamentary factions, warning that continued deadlock over an industrial modernisation bill risks Russian competitiveness with Western rivals.',
      body: [
        'Tsar Nicholas IV delivered an unusual direct appeal to Imperial Duma factions on Monday, urging legislators to break a weeks-long impasse over a sweeping industrial modernisation package that has stalled amid disagreements between reformist and conservative blocs.',
        'The package, which includes significant investment in electrification, rail infrastructure, and digital communications networks, has been blocked by conservative Duma factions who object to the scale of foreign technology contracts included in the implementation plan.',
        'The Tsar\'s intervention, delivered in a personal address to Duma leadership rather than through the usual ministerial channels, signals the degree to which the impasse has become a concern at the highest levels of the Russian government.',
        'Analysts in Franklin and Calumet noted that Russia\'s modernisation debate has direct implications for NAU trade and investment policy. "Russia is either a partner in the next phase of continental economic development, or it isn\'t," said one senior trade official who asked not to be named. "The Duma\'s decision will answer that question."'
      ]
    },
    abn: {
      emoji: '🦅', tag: 'Russia', tagColor: '#993C1D',
      hed: 'Tsar Nicholas IV Makes Rare Duma Appeal as Modernisation Bill Stalls',
      dek: 'The Russian Tsar directly addressed parliamentary factions to break an impasse over an industrial modernisation package stalled by conservative opposition.',
      meta: 'ABN World Desk · 10 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'Tsar appeals to Duma as Russian modernisation package stalls' }
  },

  {
    id: 'commander-black-federal-park',
    fo: {
      label: 'national',
      hed: 'Bipartisan Bill Would Create Federal Park at Sites of Joshua Black\'s 1860 Uprising',
      byline: 'By James Calloway, National Correspondent · Franklin',
      dek: 'Legislation introduced this week would designate a new Federal Park encompassing the Aberdeen plantation site and the Columbus RNA declaration grounds — the first park to formally commemorate the role of the slave uprising in ending the War Between the States.',
      body: [
        'A bipartisan group of lawmakers introduced legislation this week to designate a new Federal Park preserving the two sites most closely associated with Joshua Black\'s 1860 slave uprising — the plantation near Aberdeen, in Gigadohi\'s Choctaw national territory, where the rebellion began on January 19th, and the Columbus grounds where Black declared the Republic of New Africa on May 1st of that year.',
        'The proposed Commander Black Federal Park would be the first in the Federal Parks system to formally commemorate the uprising widely credited with breaking the Union\'s ability to fight on two fronts, accelerating the Free Army of the West\'s advance and contributing directly to Hawthorne\'s surrender in Atlanta eight months later.',
        'The bill has required unusually complex negotiations given the geography involved. The Aberdeen site sits within Choctaw national territory in the state of Gigadohi, while the Columbus declaration grounds straddle the Gigadohi-Mississippi state border. Both the Choctaw Nation and the Mississippi state government have been consulted in drafting the legislation, and both have signalled support for the designation.',
        '"This is a story about an alliance," said Representative Dawson of Gigadohi, one of the bill\'s primary sponsors. "Joshua Black and the Choctaw Nation acted together at a moment that changed everything. That story belongs in the Federal Parks system."',
        'The bill includes provisions for the park\'s interpretive programme to be developed in formal consultation with the Choctaw Nation, the Mississippi historical commission, and descendants\' organisations. Federal Parks Service Director Halverson called the proposed designation "long overdue." If passed, the park would become the 58th in the FPS network.'
      ]
    },
    abn: {
      emoji: '🏛', tag: 'USA', tagColor: '#185FA5',
      hed: 'Bill Would Create Federal Park at Sites of Joshua Black\'s 1860 Slave Uprising',
      dek: 'The proposed Commander Black Federal Park would encompass the Aberdeen plantation site in Gigadohi and the Columbus RNA declaration grounds on the Gigadohi-Mississippi border — the first FPS park to formally commemorate the uprising.',
      meta: 'ABN National Desk · Franklin · 6 hours ago'
    },
    wh: {
      statement: '"The courage of January 19th, 1860 helped end the war. It is past time that the Federal Parks system said so plainly."',
      briefing: 'Administration Expresses Support for Commander Black Federal Park Designation Bill'
    },
    waymark: { tag: 'national', hed: 'Bill would create Federal Park at sites of Joshua Black\'s 1860 uprising' }
  },

  {
    id: 'canada-pm-visit',
    fo: {
      label: 'world',
      hed: 'Canadian PM Tremblay Visits Washington House for Bilateral Summit',
      byline: 'By Eleanor Voss, Political Correspondent · Franklin',
      dek: 'Trade policy, the Continental currency framework, and NAU constitutional consolidation were the headline items in two days of talks between President Nakamura and Prime Minister Tremblay.',
      body: [
        'Canadian Prime Minister Isabelle Tremblay concluded a two-day visit to Franklin on Thursday, having held extensive bilateral discussions with President Nakamura on trade, the Continental currency framework, and the status of NAU constitutional consolidation negotiations.',
        'The two leaders issued a joint statement reaffirming their shared commitment to the consolidation timeline and expressing confidence that outstanding sovereignty provisions could be resolved before the Calumet convention. Both governments have been closely aligned on the consolidation question throughout the Assembly\'s deliberations.',
        'On trade, the joint statement noted "productive progress" on a bilateral agricultural protocol that has been under negotiation since 2024. Details were not disclosed, but officials familiar with the talks said the two sides were close to agreement on dairy and grain provisions that have historically been contentious.',
        'Prime Minister Tremblay also visited the Franklin Riverfront Historical Walk and attended a working dinner at Washington House. Her next scheduled stop is Calumet, where she will meet with Assembly President Fontaine ahead of the Assembly floor vote on the currency framework.'
      ]
    },
    abn: {
      emoji: '🍁', tag: 'Canada', tagColor: '#0F6E56',
      hed: 'Nakamura and Tremblay Hold Bilateral Summit at Washington House',
      dek: 'The two-day visit covered NAU consolidation, the Continental currency framework, and a long-running agricultural trade protocol. Joint statement expresses confidence in consolidation timeline.',
      meta: 'ABN Political Desk · Franklin · 5 hours ago'
    },
    wh: {
      statement: '"Canada is not just our partner in this project — Canada has been its conscience. Prime Minister Tremblay and I are committed to seeing this through."',
      briefing: 'President Nakamura Receives Canadian Prime Minister Tremblay — Washington House Bilateral Summit'
    },
    waymark: { tag: 'world', hed: 'Nakamura and Canadian PM Tremblay hold bilateral summit in Franklin' }
  },

  {
    id: 'mars-launch',
    fo: {
      label: 'science',
      hed: 'Ares I Departs for Mars in Most-Watched Launch in Human History',
      byline: 'By Dr. Priya Iyer, Science Correspondent · Calumet',
      dek: 'The ten-person international crew departed the lunar staging point on schedule, beginning a six-to-nine month transit to Mars. Commander Laura Mackenzie called it "the beginning of the next chapter."',
      body: [
        'The Ares I spacecraft departed lunar orbit on schedule Tuesday, beginning the six-to-nine month transit to Mars that will culminate in the first human visit to another planet. The departure was broadcast live across the NAU, drawing an estimated continental audience of 280 million.',
        'Commander Laura Mackenzie delivered a brief statement from the flight deck as the spacecraft accelerated out of lunar orbit. "Ten people from ten nations, going somewhere no one has ever gone," she said. "The beginning of the next chapter."',
        'The crew — representing Canada, the United States, Mexico, Texas, California, Hawaii, Japan, Britain, Australia, and India — conducted a brief ceremony before departure in which each member spoke briefly in their first language. The moment was broadcast in full across all major networks.',
        'President Nakamura and five other NAU heads of state addressed the continent jointly from Calumet following the departure confirmation. "We did not send them alone," Nakamura said. "We sent everything we are capable of being — and they carry it with them to Mars."',
        'The mission is expected to achieve Mars orbit in mid-2027, with surface landing operations to follow pending orbital survey results. Communications from the crew will be relayed through a network of relay satellites established during the robotic program of the previous decade.'
      ]
    },
    abn: {
      emoji: '🚀', tag: 'Science', tagColor: '#2D5A1A',
      hed: 'Ares I Departs for Mars — Human History\'s Most-Watched Launch',
      dek: 'The ten-person international crew left lunar orbit on schedule. Commander Mackenzie: "The beginning of the next chapter." Continental audience estimated at 280 million.',
      meta: 'ABN Science Desk · Calumet · BREAKING'
    },
    wh: {
      statement: '"We did not send them alone. We sent everything we are capable of being — and they carry it with them to Mars."',
      briefing: 'President Nakamura Addresses Nation Following Ares I Mars Departure'
    },
    waymark: { tag: 'science', hed: 'Ares I departs for Mars — crew begins historic transit' }
  },

  {
    id: 'great-lakes-compact',
    fo: {
      label: 'national',
      hed: 'Nakamura Signs Pan-Continental Clean Waters Compact at Great Lakes Summit',
      byline: 'By Ruth Calloway, Environment Correspondent · Calumet',
      dek: 'The agreement, signed with seven NAU member governments, establishes binding water quality and extraction standards for the Great Lakes basin — the largest freshwater system in the world.',
      body: [
        'President Nakamura signed the Pan-Continental Clean Waters Compact at a ceremony in Calumet on Thursday, joining the leaders of Canada, Mexico, the Federation of Texas, and four other NAU member governments in committing to binding water quality and extraction standards for the Great Lakes basin.',
        'The compact establishes a joint Great Lakes Commission with monitoring and enforcement powers and sets minimum water quality benchmarks enforceable through the NAU framework. It is the first continental agreement to give an NAU institution direct environmental enforcement authority.',
        '"Clean water is not a regional issue," Nakamura said at the signing ceremony. "It is a continental one. The Great Lakes belong to all of us, and we will protect them together."',
        'Environmental groups praised the compact as a historic step while noting that the enforcement provisions had been weakened in negotiations to secure Mexican and Texian participation. The JCA caucus in Congress condemned what it called "an unprecedented transfer of sovereign environmental authority to a continental body."'
      ]
    },
    abn: {
      emoji: '💧', tag: 'NAU', tagColor: '#185FA5',
      hed: 'Seven NAU Governments Sign Great Lakes Clean Waters Compact',
      dek: 'The Pan-Continental Clean Waters Compact establishes binding water quality standards and creates a new joint Great Lakes Commission with enforcement authority.',
      meta: 'ABN National Desk · Calumet · 4 hours ago'
    },
    wh: {
      statement: '"Clean water is not a regional issue. It is a continental one. The Great Lakes belong to all of us, and we will protect them together."',
      briefing: 'President Nakamura Signs Pan-Continental Clean Waters Compact — Calumet Summit'
    },
    waymark: { tag: 'NAU', hed: 'Seven NAU governments sign Great Lakes Clean Waters Compact' }
  },

  {
    id: 'ai-regulation-bill',
    fo: {
      label: 'politics',
      hed: 'Congress Passes Artificial Intelligence Regulation Act With Tech Industry Concessions',
      byline: 'By Marcus Hendry, Capitol Correspondent · Franklin',
      dek: 'The landmark bill establishes federal oversight of AI development and deployment, with carve-outs negotiated by the technology industry after months of contentious debate.',
      body: [
        'Congress passed the Artificial Intelligence Regulation Act on Tuesday by a margin of 278 to 122, establishing the first federal framework for overseeing the development and commercial deployment of artificial intelligence systems in the United States.',
        'The bill, the product of two years of drafting and months of floor negotiation, creates a new Federal AI Standards Office within the Department of Commerce and requires commercial AI systems above a defined capability threshold to undergo assessment before public deployment.',
        'Technology industry groups, which had fiercely opposed early drafts of the bill, secured several significant concessions in the final version, including a tiered assessment process that exempts smaller developers and a safe harbour provision that limits liability for companies that comply with the standards process.',
        'SPA and Green members expressed frustration that the final bill did not include stronger provisions on labour displacement notification, which were stripped in exchange for Democrat and Federalist votes needed to reach a majority. The JCA voted almost unanimously against the bill on regulatory grounds.',
        'The NAU has indicated it will open harmonisation discussions with member governments following the bill\'s passage, with the goal of developing a shared continental framework before the end of the Nakamura administration.'
      ]
    },
    abn: {
      emoji: '🤖', tag: 'USA', tagColor: '#185FA5',
      hed: 'Congress Passes Landmark AI Regulation Act After Tech Industry Concessions',
      dek: 'The Federal AI Standards Office will oversee commercial AI deployment above a defined capability threshold. Labour displacement provisions were stripped in final negotiations.',
      meta: 'ABN Political Desk · Franklin · 2 hours ago'
    },
    wh: {
      statement: '"The question is not whether artificial intelligence will shape our future — it will. The question is whether we shape it first, or whether we let it shape us."',
      briefing: 'President Nakamura Signs Artificial Intelligence Regulation Act into Law'
    },
    waymark: { tag: 'USA', hed: 'Congress passes AI Regulation Act with tech industry concessions' }
  },

  {
    id: 'india-china-relations',
    fo: {
      label: 'world',
      hed: 'India and China Sign Border Trade Protocol Amid Cautious Thaw',
      byline: 'By Observer World Desk · New Delhi',
      dek: 'The agreement, years in negotiation, expands commercial crossings along the disputed Himalayan frontier without resolving the underlying territorial questions that have defined the relationship for decades.',
      body: [
        'India and China signed a border trade protocol in New Delhi this week, expanding the number of authorised commercial crossing points along their long-disputed Himalayan frontier in what officials on both sides described as a significant, if carefully bounded, step forward.',
        'The protocol does not address the territorial disputes that have shadowed the relationship since before Indian independence. Indian officials were explicit that the agreement was commercial in nature and implied no change in either government\'s position on contested border regions.',
        'Analysts in Delhi and Franklin nonetheless described the signing as significant given the broader context. India-China remains, in the words of one NAU diplomatic cable made public under routine disclosure rules, "the most consequential bilateral relationship in Asia" — neither fully cooperative nor openly hostile, shaped by India\'s deliberate non-alignment and China\'s gradual post-Spring opening.',
        'India has maintained its non-aligned posture since the Treaty of Delhi negotiations of 1968 established the doctrine as a matter of explicit national policy — not aligned with the NAU despite considerable American sympathy, not aligned with the UER despite ideological overlap on many issues, and not aligned with Britain despite the Commonwealth relationship.',
        'NAU Secretary of the Exterior Raymond Okafor called the protocol "a welcome sign of stability in a relationship that matters to the whole region," while declining to characterise it further.'
      ]
    },
    abn: {
      emoji: '🤝', tag: 'World', tagColor: '#0F6E56',
      hed: 'India and China Sign Border Trade Protocol in Cautious Diplomatic Thaw',
      dek: 'The agreement expands commercial crossings along the disputed Himalayan frontier without resolving underlying territorial questions. Described as significant given the relationship\'s long history of careful distance.',
      meta: 'ABN Asia Desk · New Delhi · 5 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'India and China sign border trade protocol' }
  },

  {
    id: 'hawaii-state-dinner',
    fo: {
      label: 'national',
      hed: 'Nakamura Hosts State Dinner for Hawaiian Queen\'s Representative at Washington House',
      byline: 'By Eleanor Voss, Political Correspondent · Franklin',
      dek: 'The dinner, held in the West Wing Ballroom following its two-year restoration, marked the deepening of Pacific diplomatic ties ahead of expected discussions on NAU full-member obligations.',
      body: [
        'President Nakamura hosted a formal state dinner at Washington House on Saturday evening in honour of Princess Leilani Kahananui, representing Queen Mō\'ī\'ala of the Kingdom of Hawaii, marking the first state dinner held in the newly restored West Wing Ballroom.',
        'The visit comes as Hawaii — a full NAU member since 1951 — prepares for deeper engagement with the consolidation process now before the NAU Assembly. Princess Kahananui is expected to meet separately with Assembly leadership in Calumet later in her continental tour.',
        'The evening\'s toasts emphasised the long arc of the US-Hawaii relationship, from associate to full NAU membership, with Nakamura noting that Hawaii\'s "patient insistence on being treated as an equal partner, not a junior one, helped shape what full membership in this union actually means."',
        'Princess Kahananui, in her remarks, spoke warmly of the relationship while gently noting unresolved questions about Pacific trade representation within the consolidation framework — a signal, diplomatic observers suggested, that Hawaii intends to press its interests actively as the constitutional process moves toward completion.',
        'The dinner\'s menu, prepared in collaboration with a delegation of Hawaiian chefs, drew particular attention in society pages for its deliberate fusion of Hawaiian and Franklin culinary traditions — a detail the White House Social Office said was requested personally by the President.'
      ]
    },
    abn: {
      emoji: '👑', tag: 'USA', tagColor: '#185FA5',
      hed: 'Nakamura Hosts Hawaiian Royal Representative at Restored Washington House Ballroom',
      dek: 'The state dinner for Princess Leilani Kahananui marked the first formal event in the newly restored West Wing Ballroom, with discussion turning to Pacific representation in the NAU consolidation process.',
      meta: 'ABN Political Desk · Franklin · 1 day ago'
    },
    wh: {
      statement: '"Hawaii\'s patient insistence on being treated as an equal partner, not a junior one, helped shape what full membership in this union actually means."',
      briefing: 'President Nakamura Hosts State Dinner for Kingdom of Hawaii Queen\'s Representative'
    },
    waymark: { tag: 'national', hed: 'Nakamura hosts Hawaiian state dinner at restored Washington House ballroom' }
  },

  {
    id: 'texas-consolidation-friction',
    fo: {
      label: 'world',
      hed: 'Federation of Texas Delegation Signals Hard Line on Constitutional Consolidation Judiciary Provisions',
      byline: 'By James Calloway, National Correspondent · Calumet',
      dek: 'Texian Assembly delegates have emerged as the most consistent opponents of the proposed NAU judiciary, framing the question as one of fundamental sovereignty rather than technical jurisdiction.',
      body: [
        'The Federation of Texas\'s delegation to the NAU Assembly has positioned itself as the most consistent and organised opposition to the proposed NAU judiciary provisions within the Constitutional Consolidation Act, with CC bloc leader Whitfield arguing this week that the question "is not about whether the judiciary will be competent — it is about whether Texas answers to courts it did not seat."',
        'The Texian objection centres on the proposed two-tier Supreme Court structure, which would give the NAU judiciary final say on matters of continental treaty interpretation while leaving domestic law to member-state courts. Texian officials argue the line between the two categories is not as clean as drafters claim.',
        'Mexican and Canadian delegations have both expressed sympathy for aspects of the Texian position while remaining broadly supportive of the consolidation project overall — a split that consolidation supporters privately acknowledge could complicate the path to ratification if Texas remains opposed.',
        'Assembly President Fontaine has scheduled additional consultations with the Texian delegation ahead of the floor vote, calling the relationship between Texas and the broader consolidation project "essential to get right, not just convenient to resolve quickly."',
        'Texian officials have stopped short of threatening to block consolidation outright, noting that under current rules a sufficiently broad coalition of other member states could ratify without Texas. But Texian negotiators have signalled they intend to extract substantial concessions before any final vote.'
      ]
    },
    abn: {
      emoji: '⭐', tag: 'NAU', tagColor: '#993C1D',
      hed: 'Texas Emerges as Hardest Holdout on NAU Judiciary Provisions',
      dek: 'CC bloc leader Whitfield frames opposition to the proposed NAU Supreme Court as a sovereignty question. Mexican and Canadian delegations express partial sympathy while remaining broadly supportive of consolidation.',
      meta: 'ABN NAU Desk · Calumet · 6 hours ago'
    },
    wh: null,
    waymark: { tag: 'NAU', hed: 'Texas emerges as hardest holdout on NAU judiciary provisions' }
  },

  {
    id: 'cuba-sugar-tariff',
    fo: {
      label: 'world',
      hed: 'Cuban Sugar Producers Press NAU for Tariff Relief Ahead of Consolidation Vote',
      byline: 'By Observer World Desk · Havana',
      dek: 'Cuban agricultural interests argue that continental tariff harmonisation under the proposed consolidation framework would disadvantage the island\'s sugar industry relative to mainland producers.',
      body: [
        'Cuban sugar producers have mounted a lobbying campaign in Calumet ahead of the NAU Assembly\'s consolidation vote, arguing that proposed tariff harmonisation provisions would expose the island\'s sugar industry to mainland competition without adequate transition protections.',
        'Cuba, a full NAU member since the Caribbean expansion of the 2000s, has historically maintained limited protective tariffs on sugar imports from other member states — an arrangement producers argue has allowed the industry to modernise gradually rather than face immediate continental competition.',
        'The Cuban delegation to the Assembly has proposed a fifteen-year phase-out period for the protective tariffs rather than the five-year period currently drafted into the consolidation framework. Mexican sugar producers, who would benefit from faster harmonisation, have pushed back on the longer timeline.',
        'The dispute is a relatively minor piece of the broader consolidation puzzle but illustrates the kind of granular economic friction that has slowed the process even among member states broadly supportive of the project\'s constitutional ambitions.',
        'Cuban Assembly delegate Esperanza Vidal said she remained "confident in good faith negotiation" but noted that "an island economy cannot absorb shocks the way a continental one can — that is simply a fact of geography, not a political position."'
      ]
    },
    abn: {
      emoji: '🌴', tag: 'NAU', tagColor: '#993C1D',
      hed: 'Cuban Sugar Producers Press for Longer Tariff Transition in Consolidation Framework',
      dek: 'Cuba\'s Assembly delegation has proposed a fifteen-year tariff phase-out rather than the drafted five-year period. Mexican producers, who would benefit from faster harmonisation, are pushing back.',
      meta: 'ABN Trade Desk · Havana · 9 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'Cuban sugar producers press for longer tariff transition' }
  },

  {
    id: 'egypt-suez-cooperation',
    fo: {
      label: 'world',
      hed: 'NAU and Egypt Sign Expanded Suez Zone Shipping Cooperation Agreement',
      byline: 'By Observer World Desk',
      dek: 'The agreement deepens NAU naval and commercial cooperation with the GPC-administered Suez International Zone, reflecting the canal\'s continued centrality to continental trade with Asia.',
      body: [
        'NAU and Egyptian officials signed an expanded shipping cooperation agreement this week covering naval coordination, port access, and commercial transit priorities through the Suez International Zone — the GPC-administered waterway that has remained under international authority since Egyptian independence in 1960.',
        'The agreement formalises arrangements that have largely operated informally for years, reflecting the canal\'s enduring importance to NAU trade with Asian markets. Egyptian officials, who do not directly administer the zone but maintain close coordination with the GPC authority, described the agreement as "recognition of a partnership that has worked well for both sides."',
        'Egypt has emerged as one of the more diplomatically active independent African states since its 1960-61 independence settlement, building relationships across the GPC system while maintaining the delicate balance required by the international administration of the canal on its own territory.',
        'NAU Secretary of the Exterior Raymond Okafor called the agreement "a small piece of paper formalising a large and important relationship," noting that roughly a third of NAU trade with Asian markets transits the Suez Zone annually.'
      ]
    },
    abn: {
      emoji: '🚢', tag: 'World', tagColor: '#0F6E56',
      hed: 'NAU and Egypt Sign Expanded Suez Zone Shipping Cooperation Agreement',
      dek: 'The agreement formalises naval and commercial coordination through the GPC-administered Suez International Zone, which carries roughly a third of NAU trade with Asian markets.',
      meta: 'ABN World Desk · 8 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'NAU and Egypt sign expanded Suez shipping cooperation agreement' }
  },

  {
    id: 'labor-automation-hearings',
    fo: {
      label: 'politics',
      hed: 'Congress Opens Hearings on AI Workforce Displacement Despite New Regulatory Framework',
      byline: 'By Marcus Hendry, Capitol Correspondent · Franklin',
      dek: 'Labour advocates argue the recently passed AI Regulation Act left displacement protections too weak, setting up a fresh legislative fight over a question the original bill was meant to settle.',
      body: [
        'The House Labour Committee opened hearings this week on artificial intelligence workforce displacement, just months after Congress passed the Artificial Intelligence Regulation Act — a sign that the question labour advocates hoped the original bill would settle remains very much open.',
        'Witnesses from manufacturing, logistics, and clerical worker organisations testified that the displacement notification provisions stripped from the final version of the AI Regulation Act left workers without meaningful advance warning or transition support when automated systems replace human positions.',
        'SPA committee chair Representative Whitford said the hearings were "not an attempt to relitigate a bill that already passed, but to look honestly at whether it did what it needed to do." Industry witnesses pushed back, arguing that additional notification requirements would simply slow adoption of systems that ultimately create new categories of work even as they eliminate others.',
        'The hearings come amid Treasury data showing measurable, if still modest, displacement effects concentrated in specific sectors — data entry, basic logistics routing, and certain categories of customer service. Broader employment figures remain strong, complicating efforts on both sides to make a definitive case.',
        'No new legislation has been introduced, but committee staff have indicated a narrower bill addressing notification requirements specifically could emerge from the hearings within the current session.'
      ]
    },
    abn: {
      emoji: '⚙️', tag: 'USA', tagColor: '#185FA5',
      hed: 'Congress Opens AI Workforce Displacement Hearings After Regulation Act Falls Short, Labour Groups Say',
      dek: 'Worker organisations testified that displacement notification provisions stripped from the AI Regulation Act left workers without meaningful transition support. Treasury data shows modest but concentrated effects.',
      meta: 'ABN Political Desk · Franklin · 3 hours ago'
    },
    wh: null,
    waymark: { tag: 'USA', hed: 'Congress opens hearings on AI workforce displacement' }
  },

  {
    id: 'franklin-orchestra-tour',
    fo: {
      label: 'culture',
      hed: 'Franklin National Orchestra Announces European Tour — Paris, Lyon, Munich, and Hamburg Among Stops',
      byline: 'By Josephine Hale, Arts Correspondent · Franklin',
      dek: 'The six-city tour, the orchestra\'s most ambitious international engagement in over a decade, will include the premiere of a newly commissioned work marking the sesquicentennial.',
      body: [
        'The Franklin National Orchestra announced its most ambitious international tour in over a decade on Tuesday, with confirmed stops in Paris, Lyon, and Munich within the UER, Hamburg in the German Republic, Vienna in the Kingdom of Austria, and London.',
        'Music director Eleanora Voss-Carrington said the tour\'s centrepiece would be the European premiere of a newly commissioned symphonic work marking the American sesquicentennial, composed by Franklin-based composer Daniel Okonkwo-Reyes and drawing on themes from the orchestra\'s extensive American songbook archive.',
        'The tour represents a significant cultural exchange moment between the NAU and the UER, whose own state broadcasting and cultural institutions have featured prominently in recent diplomatic discussions. Several performances will be broadcast jointly across NANet and UER member networks.',
        'Tickets for the Paris and Vienna performances sold out within hours of going on sale, according to tour organisers, reflecting strong continued European interest in American orchestral programming following the orchestra\'s well-received 2019 tour.',
        'The tour begins in October and runs six weeks, concluding with a return performance at Franklin\'s Constitution Hall where the commissioned work will receive its full domestic premiere.'
      ]
    },
    abn: {
      emoji: '🎻', tag: 'Culture', tagColor: '#993556',
      hed: 'Franklin National Orchestra Announces Six-City European Tour, Sesquicentennial Premiere',
      dek: 'The tour includes stops in Paris, Lyon, Munich, Hamburg, Vienna, and London, with several performances broadcast jointly across NANet and UER networks.',
      meta: 'ABN Arts Desk · Franklin · 1 day ago'
    },
    wh: null,
    waymark: { tag: 'culture', hed: 'Franklin National Orchestra announces six-city European tour' }
  },

  {
    id: 'fab-reauthorization',
    fo: {
      label: 'politics',
      hed: 'Congress Debates Federal Arbitration Bureau Reauthorisation Amid Calls for Expanded Powers',
      byline: 'By Marcus Hendry, Capitol Correspondent · Franklin',
      dek: 'A coalition of SPA and Federalist members is pushing for expanded labour dispute jurisdiction for the Bureau, while JCA members argue the agency has already overstepped its original mandate.',
      body: [
        'Congress opened floor debate this week on reauthorisation of the Federal Arbitration Bureau, the independent agency responsible for resolving interstate commercial and labour disputes, with a coalition of SPA and Federalist members pushing to expand its jurisdiction over cross-border labour arbitration cases.',
        'The Bureau, established in 1974, has historically focused on commercial contract disputes between businesses operating across state lines. Proponents of the expansion argue that growing cross-border labour arrangements — particularly in industries affected by NAU economic integration — have outpaced the Bureau\'s original mandate.',
        'JCA members have raised sharp objections, with Representative Aldridge arguing the Bureau "was built to settle disputes between businesses, not to become a backdoor labour court." The objection echoes broader JCA scepticism of expanding federal regulatory reach.',
        'Labour organisations have been broadly supportive of the expansion, while business groups are divided — larger interstate employers have generally favoured the predictability of arbitration over litigation, while smaller businesses have expressed concern about compliance costs.',
        'The reauthorisation bill is expected to pass with the labour jurisdiction provisions intact, given the current composition of Congress, though JCA members have signalled they will seek a sunset clause requiring renewed congressional review within five years.'
      ]
    },
    abn: {
      emoji: '⚖️', tag: 'USA', tagColor: '#185FA5',
      hed: 'Congress Debates Expanded Powers for Federal Arbitration Bureau',
      dek: 'A coalition of SPA and Federalist members is pushing to expand the Bureau\'s jurisdiction over cross-border labour disputes. JCA members argue the agency has overstepped its commercial mandate.',
      meta: 'ABN Political Desk · Franklin · 4 hours ago'
    },
    wh: null,
    waymark: { tag: 'USA', hed: 'Congress debates expanded powers for Federal Arbitration Bureau' }
  },

  {
    id: 'uus-great-lakes-research',
    fo: {
      label: 'science',
      hed: 'UUS Researchers Document Recovery of Great Lakes Fish Populations Following Clean Waters Compact',
      byline: 'By Dr. Priya Iyer, Science Correspondent · Franklin',
      dek: 'A University of the United States study finds measurable population recovery in several native fish species since the Pan-Continental Clean Waters Compact took effect, offering early validation for the agreement\'s environmental claims.',
      body: [
        'A University of the United States ecological survey has documented measurable recovery in several native Great Lakes fish populations in the period since the Pan-Continental Clean Waters Compact began implementation, offering some of the first hard data supporting the agreement\'s environmental rationale.',
        'The study, led by Dr. Marcus Whitfield of the UUS School of Environmental Science, found lake whitefish and lake trout populations had increased measurably in monitored sections of the lakes since water quality enforcement began, though researchers cautioned that several years of additional data would be needed to confirm a sustained trend rather than natural population variation.',
        '"We are encouraged, but we are not declaring victory," Dr. Whitfield said at a Franklin briefing. "Ecological recovery on this scale takes a generation to fully establish. What we can say is that the early data is moving in the right direction, and that is not nothing."',
        'The findings arrive at a politically useful moment for compact supporters, who have faced sustained JCA criticism over the agreement\'s enforcement provisions. Environmental groups have already begun citing the study in public communications, while JCA critics have noted that correlation between the compact and the population changes has not been definitively established.',
        'The Great Lakes Commission, established under the compact, said it would incorporate the UUS findings into its next annual monitoring report, due later this year.'
      ]
    },
    abn: {
      emoji: '🐟', tag: 'Science', tagColor: '#2D5A1A',
      hed: 'UUS Study Finds Early Evidence of Great Lakes Fish Population Recovery',
      dek: 'Researchers documented measurable increases in lake whitefish and lake trout populations since the Clean Waters Compact began enforcement, though they caution more years of data are needed.',
      meta: 'ABN Science Desk · Franklin · 5 hours ago'
    },
    wh: null,
    waymark: { tag: 'science', hed: 'UUS study finds early evidence of Great Lakes fish recovery' }
  },

  {
    id: 'british-royal-tour',
    fo: {
      label: 'world',
      hed: 'Prince Michael to Undertake First Solo Continental Tour, Beginning in Canada',
      byline: 'By Observer World Desk · London',
      dek: 'The King\'s second son will visit Toronto and Aurora before continuing to Franklin and Mexico City, in his first official engagement abroad without senior royal accompaniment.',
      body: [
        'Buckingham Palace announced this week that Prince Michael, the second of King Victor\'s three younger children, will undertake his first solo overseas tour this autumn, beginning in Canada with stops in Toronto and the Canadian capital, Aurora, before continuing to Franklin and Mexico City.',
        'The eighteen-day tour will focus on youth education initiatives and continental cultural exchange programmes, areas the Prince has taken a personal interest in since completing his studies. Palace officials described the trip as a deliberate step in preparing the nineteen-year-old Prince for a more visible public role, and noted the Canadian leg reflects the Commonwealth relationship\'s continued importance to the Palace.',
        'King Victor\'s three younger children — Prince Charles, Prince Michael, and Princess Sarah — have largely remained out of the public eye relative to their elder sister, Crown Princess Charlotte, whose marriage to Prince Paul in 2024 was the most closely watched royal event of recent years. Royal correspondents have noted a gradual, deliberate increase in the younger royals\' public engagements over the past two years.',
        'In Aurora, the Prince is expected to call on the Governor General and address a youth assembly. The Franklin leg of the tour will include a visit to the University of the United States and a reception at the British Embassy. Washington House has confirmed the Prince will be received informally by President Nakamura during his stay, though officials stressed the visit carries no particular diplomatic significance beyond customary courtesy.',
        'Royal watchers in London have speculated that the tour may be a preliminary step toward a more defined long-term role for the Prince, though the Palace has offered no indication of specific plans beyond the tour itself.'
      ]
    },
    abn: {
      emoji: '👑', tag: 'Britain', tagColor: '#0F6E56',
      hed: 'Prince Michael to Make First Solo Overseas Tour, Beginning in Canada',
      dek: 'The King\'s second son will visit Toronto and Aurora before continuing to Franklin and Mexico City in an eighteen-day tour focused on youth education and cultural exchange — his first official engagement without senior royal accompaniment.',
      meta: 'ABN Europe Desk · London · 1 day ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'Prince Michael to make first solo overseas tour, beginning in Canada' }
  },

  {
    id: 'caribbean-port-modernization',
    fo: {
      label: 'world',
      hed: 'Caribbean Integration Fund Approves Port Modernisation Grants for Three Member States',
      byline: 'By Observer World Desk · Kingston',
      dek: 'Haiti, Jamaica, and the Dominican Republic will share a modest package of infrastructure grants under the reauthorised Caribbean Integration & Development Fund, the first disbursement since the bill\'s renewal.',
      body: [
        'The NAU\'s Caribbean Integration & Development Fund announced its first round of grants under its recent reauthorisation this week, approving port modernisation funding for Haiti, Jamaica, and the Dominican Republic to improve cargo handling capacity at secondary ports across the three island nations.',
        'The grants, totalling a modest Ȼ40 million across the three recipients, are intended to improve efficiency at ports that handle regional trade but have not historically qualified for the larger infrastructure investments directed at the NAU\'s primary shipping hubs in Mexico, Texas, and the mainland United States.',
        'Fund administrators described the grants as consistent with the programme\'s founding purpose — targeted, proportionate support for smaller member economies rather than headline infrastructure projects. "This is not the kind of investment that makes for dramatic announcements," said Fund director Pierre Augustin. "It is the kind that makes the difference for a fishing cooperative or a small import business that has been waiting years for a pier that doesn\'t flood."',
        'Haitian officials welcomed the grant as recognition of the country\'s steady infrastructure progress in the years since the Fund\'s original establishment. Dominican Republic trade officials noted the funding would specifically benefit the port at Puerto Plata, easing congestion that has affected the country\'s growing tourism-adjacent shipping needs.',
        'The grants are expected to be disbursed over the coming fiscal year, with construction beginning at individual sites as engineering reviews are completed.'
      ]
    },
    abn: {
      emoji: '⚓', tag: 'NAU', tagColor: '#993C1D',
      hed: 'Caribbean Integration Fund Approves Ȼ40 Million in Port Grants for Three Member States',
      dek: 'Haiti, Jamaica, and the Dominican Republic will receive targeted port modernisation funding under the reauthorised Caribbean Integration & Development Fund — its first disbursement since renewal.',
      meta: 'ABN NAU Desk · Kingston · 5 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'Caribbean Integration Fund approves port grants for three member states' }
  },

  {
    id: 'bolt-music-cultural-moment',
    fo: {
      label: 'culture',
      hed: 'Bolt Reasserts Itself as Contemporary Artists Draw Record Crowds Across the Heartland',
      byline: 'By Josephine Hale, Arts Correspondent · St. Louis',
      dek: 'A new generation of Bolt artists — from Kanasaw to Boston to the Ohio Valley — is drawing some of the genre\'s largest crowds in years, even as critics debate whether the music\'s working-class roots are being stretched too far from their origins.',
      body: [
        'Bolt, one of the two dominant genres in American popular music, is experiencing what critics are calling its strongest commercial moment in over a decade, driven by a new generation of artists drawing record crowds from St. Louis to Boston to the plains of Kanasaw.',
        'Andrew Webb, the St. Louis-born Bolt artist whose sound carries forward the genre\'s Mississippi corridor tradition, sold out a three-night stand at the city\'s Forge Amphitheatre this week — the venue\'s fastest sellout in its history. Sasha Whitehorse, performing out of Kanasaw\'s Kaw Nation, has likewise drawn unprecedented crowds on her current tour.',
        'Music critics have noted the genre\'s continued geographic spread as one of its defining features this decade — Bridget Foley carrying a distinctly Boston Irish working-class edge, Ryo Tanaka folding Pacific Northwest sensibilities into the tradition from New Boston. "Bolt has always been the sound of the people who built this country with their hands," wrote one Franklin Observer critic this week. "What\'s remarkable is how many different hands that turns out to include."',
        'Some longtime fans have voiced concern that the genre\'s commercial success risks diluting its working-class identity — a tension that has accompanied Bolt through several previous boom periods without ever fully resolving. Industry analysts note that ticket and recording revenue for Bolt artists is up nearly 30% over the previous year, the steepest growth of any major genre.',
        'Franklin, sitting geographically at the heart of Bolt territory, remains the genre\'s most reliable bellwether market — a detail that has not escaped the notice of touring artists planning their routes.'
      ]
    },
    abn: {
      emoji: '🎸', tag: 'Culture', tagColor: '#993556',
      hed: 'Bolt Music Surges as New Generation of Artists Draws Record Crowds',
      dek: 'Revenue for Bolt artists is up nearly 30% over the previous year, the steepest growth of any major genre, as a new generation carries the working-class tradition into new geographic territory.',
      meta: 'ABN Arts Desk · St. Louis · 1 day ago'
    },
    wh: null,
    waymark: { tag: 'culture', hed: 'Bolt music surges as new generation draws record crowds' }
  },

  {
    id: 'mexico-economic-growth',
    fo: {
      label: 'world',
      hed: 'Mexico Reports Strongest Manufacturing Growth in a Decade Amid NAU Integration Push',
      byline: 'By Observer World Desk · Mexico City',
      dek: 'New economic data shows Mexican manufacturing output rising sharply as continental supply chains deepen, though labour groups warn that wage growth has not kept pace.',
      body: [
        'The Empire of Mexico reported its strongest manufacturing growth figures in a decade this week, with output rising 7.2% year over year as continental supply chain integration under the NAU framework continues to deepen Mexican industrial ties with the United States, Texas, and Canada.',
        'Mexican government officials credited the growth to a combination of NAU tariff coordination, infrastructure investment along the northern manufacturing corridor, and growing demand from continental partners seeking to diversify supply chains. The automotive and electronics sectors led the growth figures.',
        'Mexican labour organisations have welcomed the growth while warning that wage growth has not kept pace with output gains, with average manufacturing wages rising just 2.1% over the same period. Several unions have called for the Mexican delegation to the NAU Assembly to push harder on labour standard harmonisation alongside the trade provisions already under negotiation.',
        'NAU trade officials in Calumet described the figures as "exactly the kind of integration dividend the consolidation framework is designed to accelerate," while declining to comment directly on the wage growth disparity.',
        'The figures arrive as Mexico\'s First Vice-President of the NAU Assembly, Rodrigo Vásquez, continues to push the Continental Currency Stabilisation Framework — legislation Mexican officials argue would further accelerate the kind of integration reflected in this week\'s manufacturing data.'
      ]
    },
    abn: {
      emoji: '🏭', tag: 'World', tagColor: '#0F6E56',
      hed: 'Mexico Reports Decade-Best Manufacturing Growth Amid NAU Integration',
      dek: 'Manufacturing output rose 7.2% year over year, led by automotive and electronics. Labour groups warn wage growth of just 2.1% has not kept pace with the gains.',
      meta: 'ABN Business Desk · Mexico City · 5 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'Mexico reports decade-best manufacturing growth' }
  },

  {
    id: 'german-reunification-30th',
    fo: {
      label: 'world',
      hed: 'Germany Marks Thirty Years Since Reunification With Frankfurt Ceremony',
      byline: 'By Observer World Desk · Frankfurt',
      dek: 'Three decades after Prussia formally joined the German Republic on January 1st, 1996, officials marked the anniversary with a notably restrained ceremony in the republic\'s capital — a reflection, observers say, of a political culture still careful about how it tells stories of national unity.',
      body: [
        'Germany marked the thirtieth anniversary of its reunification this week with a ceremony in Frankfurt, the German Republic\'s capital since its founding, that observers described as deliberately understated, decades removed from the events that brought together the democratic German Republic and the smaller, more conservative state of rump Prussia that had persisted alongside it since the close of the Global War.',
        'The reunification, finalised on January 1st, 1996 after a year of negotiation, was the first major foreign policy achievement of then-US President Liu, whose administration helped manage the diplomatic consultation process with the Union of European Republics — Germany\'s wary western neighbour, which had insisted on being consulted rather than blindsided by the prospect of a larger, reunified German state on its border.',
        'President Heinrich Vogel, addressing the Frankfurt crowd, struck a tone that German commentators noted was characteristic of the country\'s broader relationship with national symbolism since the Global War. "We do not gather today to celebrate strength," Vogel said. "We gather to mark patience — the patience of people who built a democracy carefully, and then waited a very long time to make it whole."',
        'The choice of Frankfurt as the site of the ceremony was itself a quiet statement, German commentators noted — the republic has held its capital there since its founding precisely to mark a clean break from Berlin, the old seat of Prussian and Hohenzollern power. Some commentators have periodically floated relocating the capital to Berlin as a symbol of completed reunification; the government has shown no interest in revisiting the question.',
        'The anniversary has drawn modest international attention. The UER, whose relationship with Germany remains, in the words of one Franklin diplomatic analyst, "the most carefully managed bilateral relationship on the continent," issued formal congratulations but sent no senior officials to the ceremony — a choice read as consistent with decades of studiously correct, rather than warm, relations between the two states.'
      ]
    },
    abn: {
      emoji: '🇩🇪', tag: 'World', tagColor: '#0F6E56',
      hed: 'Germany Marks Thirtieth Anniversary of Reunification With Restrained Frankfurt Ceremony',
      dek: 'Three decades after Prussia formally joined the German Republic, President Vogel struck a deliberately modest tone in the republic\'s capital. The UER, Germany\'s historically wary neighbour, sent formal congratulations but no senior officials.',
      meta: 'ABN Europe Desk · Frankfurt · 7 hours ago'
    },
    wh: null,
    waymark: { tag: 'world', hed: 'Germany marks thirtieth anniversary of reunification' }
  },

  {
    id: 'continental-bank-rates',
    fo: {
      label: 'business',
      hed: 'Continental Bank Holds Interest Rates Steady Amid Mixed Inflation Signals',
      byline: 'By Marcus Hendry, Business Correspondent · Franklin',
      dek: 'The decision, widely expected by markets, reflects policymakers\' caution as continental inflation data sends conflicting signals across member economies.',
      body: [
        'The Continental Bank held its benchmark interest rate steady at its quarterly policy meeting this week, a widely expected decision that nonetheless drew close attention given increasingly mixed inflation signals across the NAU\'s member economies.',
        'Bank officials cited Mexican manufacturing growth and continued strong USRC-linked infrastructure spending as inflationary pressures in some sectors, while noting that consumer price growth in Canada and the northern United States has moderated more than expected over the past two quarters.',
        'The decision affects monetary conditions across all NAU member states that participate in the coordinated currency framework established under the mid-twentieth-century continental monetary agreements, which now governs exchange and interest rate coordination across the bloc.',
        '"We see an economy moving in different directions in different places, and that argues for patience rather than action," the Continental Bank\'s chief economist said in a statement following the decision. Markets reacted with modest relief, having priced in some probability of a rate move.',
        'The Bank\'s next policy meeting is scheduled for the autumn, by which point officials said they expected clearer signals on whether current trends represent a durable pattern or temporary divergence.'
      ]
    },
    abn: {
      emoji: '💰', tag: 'NAU', tagColor: '#993C1D',
      hed: 'Continental Bank Holds Rates Steady Amid Mixed Inflation Signals',
      dek: 'The widely expected decision reflects policymaker caution as inflation data diverges across NAU member economies — rising in some manufacturing sectors, moderating in Canada and the northern US.',
      meta: 'ABN Finance Desk · Franklin · 3 hours ago'
    },
    wh: null,
    waymark: { tag: 'business', hed: 'Continental Bank holds interest rates steady' }
  },

  {
    id: 'oldest-usrc-conductor',
    fo: {
      label: 'national',
      hed: 'At 81, USRC\'s Longest-Serving Conductor Marks Sixty Years on the Rails',
      byline: 'By Ruth Calloway, Feature Correspondent · Franklin',
      dek: 'Eleanor Brightwater began conducting on the Franklin-Pittsburgh line in 1966. She has no plans to retire.',
      body: [
        'Eleanor Brightwater stepped onto the platform at Franklin Central Station on Tuesday morning the same way she has nearly every working day for sixty years — pocket watch in hand, checking it against the station clock out of a habit she says she could not break if she tried.',
        'Brightwater, 81, is the USRC\'s longest continuously serving conductor, having begun her career on the Franklin-Pittsburgh line in 1966 at a time when very few women held conducting positions on the network. She has, by her own rough count, made the journey more than eleven thousand times.',
        '"People ask if I get tired of the same line," she said, settling into the small office at the rear of the lead car as the train pulled out of Franklin. "I tell them no two days have ever been the same trip. The track is the same. Everything else is different."',
        'Brightwater has trained dozens of younger conductors over the decades, several of whom now hold senior positions across the network. The USRC has quietly nominated her for a Continental Service Medal, an honour reserved for individuals whose careers exemplify the railway\'s founding values — though Brightwater, when asked about the nomination, said only that she would "rather talk about literally anything else."',
        'She says she has no plans to retire. "When the trains stop being interesting, I\'ll stop riding them. They have not stopped being interesting yet."'
      ]
    },
    abn: {
      emoji: '🚂', tag: 'USA', tagColor: '#185FA5',
      hed: 'At 81, USRC\'s Longest-Serving Conductor Marks Sixty Years on the Rails',
      dek: 'Eleanor Brightwater has conducted the Franklin-Pittsburgh line since 1966 and has made the journey more than eleven thousand times. She has no plans to retire.',
      meta: 'ABN Feature Desk · Franklin · 1 day ago'
    },
    wh: null,
    waymark: { tag: 'national', hed: 'USRC\'s longest-serving conductor marks sixty years on the rails' }
  },

  {
    id: 'jamaica-cultural-exchange',
    fo: {
      label: 'world',
      hed: 'Jamaica and NAU Sign Cultural Exchange Agreement Expanding Music and Arts Programming',
      byline: 'By Observer World Desk · Kingston',
      dek: 'The agreement will fund touring programmes bringing Jamaican musical traditions to mainland venues and NAU artists to Caribbean festivals, building on Jamaica\'s growing influence within continental popular culture.',
      body: [
        'Jamaica and the NAU signed a cultural exchange agreement this week expanding funding for touring programmes that bring Jamaican musical artists to mainland venues and NAU performers to Caribbean festivals, formalising cultural ties that officials on both sides described as already deep but historically under-resourced.',
        'The agreement comes as Jamaican musical influence continues to shape mainland genres — Zinga artist Yvette Blake, a Jamaican immigrant now based in New Orleans, has been among the most prominent contemporary voices in the genre\'s current commercial moment, a connection Jamaican officials cited explicitly in negotiating the agreement.',
        'Jamaica\'s Minister of Culture called the agreement "recognition of something that has always been true — that Jamaican artists have shaped this continent\'s music for a century, and it is past time the institutional relationship caught up with the cultural reality."',
        'The funding will support a new annual touring festival circuit connecting venues in Kingston, New Orleans, Miami, and Franklin, with the first joint programming expected to launch next year.'
      ]
    },
    abn: {
      emoji: '🎵', tag: 'World', tagColor: '#0F6E56',
      hed: 'Jamaica and NAU Sign Cultural Exchange Agreement Expanding Music Touring',
      dek: 'The agreement funds a new annual festival circuit connecting Kingston, New Orleans, Miami, and Franklin, formalising cultural ties Jamaican officials say have long outpaced the institutional relationship.',
      meta: 'ABN World Desk · Kingston · 6 hours ago'
    },
    wh: null,
    waymark: { tag: 'culture', hed: 'Jamaica and NAU sign cultural exchange agreement' }
  },

  {
    id: 'interlink-rural-access',
    fo: {
      label: 'national',
      hed: 'Federal Communications Authority Reports Rural Interlink Access Reaches 94%',
      byline: 'By Marcus Hendry, Capitol Correspondent · Franklin',
      dek: 'The figure represents the final milestone in a decade-long federal investment programme, though gaps remain concentrated in the most remote mountain and plains communities.',
      body: [
        'The Federal Communications Authority reported this week that rural Interlink access across the United States has reached 94% of households, the final reportable milestone in a federal investment programme that began under the Hudson administration over a decade ago.',
        'The remaining gap is concentrated in the most remote mountain and high plains communities, where the FCA said infrastructure costs remain prohibitively high relative to population density even with continued federal subsidy. Officials said reaching the final percentage points would likely require new satellite relay technology currently in development rather than additional fiber investment.',
        'The milestone drew bipartisan praise, with both SPA and JCA members noting the programme\'s origins under different party administrations as evidence of its durability as a genuinely cross-partisan infrastructure priority — a rare point of consensus in an otherwise divided Congress.',
        '"This is what patient, boring, bipartisan governance looks like," said FCA Director Patricia Whitfield. "It is not exciting. It is just the kind of thing that, ten years on, has changed how nearly every American household functions."',
        'The FCA said it would shift its remaining rural connectivity budget toward the satellite relay programme, with initial deployment to the hardest-to-reach communities expected within three years.'
      ]
    },
    abn: {
      emoji: '📶', tag: 'USA', tagColor: '#185FA5',
      hed: 'Rural Interlink Access Reaches 94% as Federal Programme Nears Completion',
      dek: 'The decade-long federal investment programme has reached its final reportable milestone, with remaining gaps in remote mountain and plains communities to be addressed through new satellite relay technology.',
      meta: 'ABN National Desk · Franklin · 5 hours ago'
    },
    wh: null,
    waymark: { tag: 'national', hed: 'Rural Interlink access reaches 94% as federal programme nears completion' }
  },

];


// ═════════════════════════════════════════════════════════════════════════════
// -- FRANKLIN OBSERVER -- SITE-SPECIFIC POOLS --
// ═════════════════════════════════════════════════════════════════════════════

const FO_NATIONAL = [
  { hed: 'Washington House West Wing Reopens After Two-Year Restoration', dek: 'The public and diplomatic wing, closed since 2024 for its most comprehensive renovation since the full structural restoration of 1957–1961, reopened to visitors this week.', meta: 'Observer Staff · 9 hours ago' },
  { hed: 'Congress Debates Federal Arbitration Bureau Reauthorisation', dek: 'A coalition of SPA and Federalist members is pushing for expanded powers for the Bureau, while JCA members argue the agency has overstepped its mandate.', meta: 'United Press · Franklin · 4 hours ago' },
  { hed: 'FIS Director Confirmed by Senate After Months-Long Vacancy', dek: 'The Federal Investigative Service will have new leadership for the first time in three years following the Senate\'s confirmation of the President\'s nominee.', meta: 'Observer Staff · 7 hours ago' },
  { hed: 'Department of Education Report: Urban-Rural Literacy Gap Narrows for Third Consecutive Year', dek: 'The annual report shows measurable improvement in rural literacy rates across Prairie and Mountain states, though the gap with urban centres remains significant.', meta: 'United Press · Franklin · 11 hours ago' },
  { hed: 'Secretary Anderson Intros Streetcar Program', dek: 'Transportation Secretary Alex Anderson, together with Urban Development Secretary Thomas Bale, introduced a new plan to expand major streetcar systems in 7 major cities.', meta: 'Capitol Desk · 4 hours ago' },
  { hed: 'Senate Confirms Three Nominees to Federal Court of Appeals, Western Circuit', dek: 'The confirmations, approved by voice vote, fill vacancies that had persisted for over a year amid scheduling disputes between committee leadership.', meta: 'United Press · Franklin · 8 hours ago' },
  { hed: 'Texas Federation Governor of Austin Visits Franklin for Trade Talks', dek: 'Discussions focused on cross-border manufacturing supply chains and a proposed rail spur connecting Austin\'s industrial corridor to the USRC network.', meta: 'Observer Staff · Franklin · 5 hours ago' },
  { hed: 'Bank of the United States Governor Warns of Uneven Regional Recovery in Prairie States', dek: 'Testimony before the Senate Banking Committee highlighted persistent gaps between coastal and interior economic indicators despite strong national growth figures.', meta: 'United Press · Franklin · 3 hours ago' },
  { hed: 'Department of the Interior Announces New Wildfire Prevention Funding for Pacific Northwest and Mountain West', dek: 'The Ȼ180 million package targets forest thinning and early-detection infrastructure across Oregon, Clark, Washingtonia, and Brandt following last season\'s elevated fire activity.', meta: 'Observer Staff · 6 hours ago' },
  { hed: 'House Passes Veterans Health Modernisation Act', dek: 'The bill expands telemedicine access for veterans in rural districts and authorises construction of two new federal veterans hospitals in the Great Plains region.', meta: 'United Press · Franklin · 9 hours ago' },
  { hed: 'Census Bureau Releases Mid-Decade Population Estimates', dek: 'Continued growth in Pacific and Mountain West states contrasts with modest declines in parts of the rural Great Plains, continuing a pattern observed since the last full census.', meta: 'Observer Staff · 10 hours ago' },
  { hed: 'Congress Advances Bill to Expand Federal Broadband Subsidy to Tribal Nations', dek: 'The bipartisan measure would direct additional Interlink infrastructure funding to Native nations not fully covered under the existing rural access programme.', meta: 'United Press · Franklin · 7 hours ago' },
  { hed: 'USRC Reports Strong First Year for Franklin–Calumet High-Speed Corridor', dek: 'The elevated-speed line, completed two years ago, has cut travel time between the two cities by nearly forty minutes and exceeded initial ridership projections.', meta: 'United Press · Calumet · 8 hours ago' },
  { hed: 'Supreme Court Declines to Hear Challenge to NAU Tariff Coordination Authority', dek: 'The decision leaves in place a lower court ruling affirming Congress\'s authority to delegate certain tariff-setting functions to coordinated continental bodies.', meta: 'Observer Staff · 6 hours ago' },
  { hed: 'Federal Parks Service Reports Record Visitation Across Mountain West Parks', dek: 'Sacred Waters and Mistakis Federal Parks both posted their highest annual visitor counts on record, prompting renewed debate over backcountry permit caps.', meta: 'United Press · Franklin · 11 hours ago' },
  { hed: 'Senate Banking Committee Opens Hearings on AI-Driven Lending Practices', dek: 'Consumer advocacy groups testified that automated credit decisions may be producing disparate outcomes for rural applicants, prompting calls for new disclosure rules.', meta: 'Observer Staff · 5 hours ago' },
  { hed: 'Congress Approves Funding for University of the United States Space Medicine Research Wing', dek: 'The Ȼ60 million appropriation will expand UUS\'s long-duration physiology research programme ahead of future deep-space missions beyond the current Mars effort.', meta: 'United Press · Franklin · 7 hours ago' },
  { hed: 'Federal Trade Commission Opens Inquiry Into Continental Streaming Market Consolidation', dek: 'The inquiry follows complaints from independent producers that a small number of platforms now control the majority of original TC programming distribution.', meta: 'Observer Staff · 9 hours ago' },
  { hed: 'House Agriculture Committee Advances Drought Resilience Funding for Great Plains', dek: 'The bill would expand federal cost-sharing for water-efficient irrigation infrastructure across Platte, Metropotamia, and Kanasaw.', meta: 'United Press · Franklin · 6 hours ago' },
  { hed: 'National Weather Service Unveils Upgraded Severe Storm Warning System', dek: 'The new system, developed jointly with USRC for rail-line safety integration, promises warning times up to twelve minutes longer than the current network.', meta: 'Observer Staff · 4 hours ago' },
  { hed: 'Congress Honours Choson War Veterans in Capitol Ceremony Ahead of Sixtieth Anniversary', dek: 'Veterans of the 1966–67 conflict, most now in their late seventies and eighties, were recognised in a ceremony organisers said carries particular weight as their numbers steadily decline.', meta: 'United Press · Franklin · 12 hours ago' },
  { hed: 'Department of Labour Reports Continued Wage Growth Outpacing Inflation', dek: 'The latest figures mark the eleventh consecutive quarter of real wage growth, though gains remain concentrated in urban and coastal labour markets.', meta: 'Observer Staff · 8 hours ago' },
  { hed: 'House Committee Advances Bill Expanding Federal Mediation Authority for Cross-Border Labour Disputes', dek: 'The measure responds to growing friction over labour arrangements tied to deepening NAU economic integration, particularly in border manufacturing corridors.', meta: 'United Press · Franklin · 5 hours ago' },
  { hed: 'Department of the Armed Forces Announces Joint Training Exercise With Canadian Home Guard Counterpart', dek: 'The exercise, focused on emergency response coordination along the shared northern border, is the largest joint drill of its kind in over a decade.', meta: 'Observer Staff · 10 hours ago' },
  { hed: 'National Intelligence Director Briefs Congress on Continental Cybersecurity Cooperation', dek: 'The closed-door briefing addressed coordinated threat-monitoring efforts among NAU member states\' intelligence services, details of which remain classified.', meta: 'United Press · Franklin · 7 hours ago' },
];

const FO_WORLD = [
  { label: 'world', hed: 'China Opens HuaWang to Broader Interlink Access', dek: 'Post-2019 reform commitments continue as access restrictions are lifted for more Chinese households. The GPC\'s digital rights commission warns progress remains uneven.', meta: 'United Press · 4 hours ago' },
  { label: 'world', hed: 'UER Premier Faces Parliamentary Challenge Over State Media Reforms', dek: 'The governing coalition in Paris is under pressure from opposition factions as a contentious bill to restructure state broadcasting enters its second reading in the National Assembly.', meta: 'Observer World Desk · 7 hours ago' },
  { label: 'world', hed: 'Britain and NAU Sign Five-Year Trade Renewal Agreement', dek: 'The agreement, signed in London, locks in preferential tariff arrangements across key manufacturing and agricultural sectors for both parties.', meta: 'United Press · London · 6 hours ago' },
  { label: 'world', hed: 'Russian Imperial Duma Deadlocked Over Modernisation Package as Tsar Urges Compromise', dek: 'Tsar Nicholas IV has appealed directly to Duma factions to break a weeks-long impasse over an industrial modernisation bill, warning that delay risks Russian competitiveness with Western rivals.', meta: 'Observer World Desk · 10 hours ago' },
  { label: 'culture', hed: 'NAU–UER Co-Production TC Drama Set During Global War Confirmed for Autumn', dek: 'The six-part series will broadcast simultaneously across NANet and UER member channels — a first for open-network international co-production.', meta: 'Observer Arts · 8 hours ago' },
  { label: 'culture', hed: 'Franklin National Orchestra Announces European Tour — Paris, Lyon, Munich, and Hamburg Among Stops', dek: 'The tour spans four countries: the UER (Paris, Lyon, Munich), the German Republic (Hamburg), the Kingdom of Austria (Vienna), and Britain (London). Performances begin in June.', meta: 'Observer Arts · 12 hours ago' },
  { label: 'world', hed: 'Japan and NAU Renew Pacific Maritime Security Cooperation Agreement', dek: 'The renewal extends a framework first established after the Global War, covering joint naval exercises and shared monitoring of Pacific shipping lanes.', meta: 'Observer World Desk · Tokyo · 9 hours ago' },
  { label: 'world', hed: 'GPC Announces Expanded Investment in Suez International Zone Infrastructure', dek: 'The Global Peace Council, which has administered the Suez Canal Zone since Egyptian independence, confirmed funding for capacity expansion to accommodate growing container traffic.', meta: 'United Press · 11 hours ago' },
  { label: 'world', hed: 'Kingdom of Hawaii and Japan Sign Cultural Exchange Agreement', dek: 'The agreement expands student exchange programmes and joint oceanographic research between the two Pacific nations.', meta: 'Observer World Desk · Honolulu · 8 hours ago' },
  { label: 'world', hed: 'Sokoto Caliphate Hosts Regional Trade Summit in Kano', dek: 'Delegations from across West Africa attended talks on regional currency coordination and infrastructure investment, with NAU and UER observers present.', meta: 'United Press · Kano · 10 hours ago' },
  { label: 'world', hed: 'India Announces Major Expansion of Non-Aligned Trade Bloc Membership Talks', dek: 'Delhi confirmed exploratory talks with three additional nations interested in joining the non-aligned economic framework established under the Treaty of Delhi.', meta: 'Observer World Desk · New Delhi · 7 hours ago' },
  { label: 'world', hed: 'Egypt Marks Anniversary of Independence With National Address', dek: 'The President\'s address reflected on Egypt\'s relationship with the GPC-administered Suez International Zone in the decades since the 1960/61 settlement that secured Egyptian sovereignty.', meta: 'United Press · Cairo · 9 hours ago' },
  { label: 'world', hed: 'Ethiopia and Zanzibar Sign Joint Infrastructure Development Pact', dek: 'The agreement focuses on rail connectivity between the two East African states, part of a broader regional push toward economic integration.', meta: 'Observer World Desk · Addis Ababa · 8 hours ago' },
  { label: 'world', hed: 'Mesopotamian Reconstruction Authority Reports Continued Progress on Infrastructure Rebuilding', dek: 'The joint Kurdish-Arab oversight body cited steady gains in water and power infrastructure, though officials cautioned full reconstruction remains years away.', meta: 'United Press · 12 hours ago' },
  { label: 'world', hed: 'Brazil and NAU Discuss Expanded Agricultural Trade Framework', dek: 'Talks in Calumet focused on coordinated commodity standards and reduced tariff barriers for South American agricultural exports.', meta: 'Observer World Desk · Calumet · 6 hours ago' },
  { label: 'world', hed: 'German National Assembly and Federal Council Reach Coalition Agreement After Months of Negotiation', dek: 'The deal between the lower Nationalversammlung and upper Bundesrat ends a prolonged period of political uncertainty in Frankfurt following a closely divided election.', meta: 'United Press · Frankfurt · 10 hours ago' },
  { label: 'world', hed: 'Australia and NAU Sign Joint Scientific Research Agreement on Pacific Marine Ecosystems', dek: 'The agreement establishes a shared research station and coordinated funding for long-term ocean health monitoring across the Pacific basin.', meta: 'Observer World Desk · Sydney · 9 hours ago' },
  { label: 'world', hed: 'Kingdom of Austria Hosts Diplomatic Conference Marking Decades of Postwar Stability', dek: 'Established in the wake of the Global War, Austria has charted a distinct course separate from both the UER and German Republic, a status this week\'s gathering was convened to reaffirm.', meta: 'United Press · Vienna · 11 hours ago' },
  { label: 'culture', hed: 'British Royal Family Announces Prince Michael\'s First Solo Continental Tour', dek: 'The eighteen-day tour will begin in Canada before continuing to Franklin and Mexico City, focusing on youth education and cultural exchange.', meta: 'Observer World Desk · London · 1 day ago' },
  { label: 'culture', hed: 'Chinese Historical Dramas Draw International Attention at Franklin Film Festival', dek: 'Two Chinese productions examining twentieth-century history with new candour are screening in competition, part of a wave of post-Spring filmmaking.', meta: 'Observer Arts · 6 hours ago' },
  { label: 'world', hed: 'Canada and NAU Discuss Joint Arctic Research Initiative', dek: 'The proposed initiative would expand climate and resource monitoring across Canada\'s northern territories, with funding shared among interested NAU member states.', meta: 'Observer World Desk · Aurora · 8 hours ago' },
  { label: 'world', hed: 'Dominican Republic and Haiti Mark Anniversary of Joint Border Customs Modernisation', dek: 'Officials from both NAU member states celebrated continued smooth implementation of shared customs infrastructure, part of the open-trade integration the two countries have built since joining the union.', meta: 'United Press · Santo Domingo · 9 hours ago' },
  { label: 'world', hed: 'Jamaica\'s Music Industry Sees Continued Growth in Continental Market Share', dek: 'Industry figures show Jamaican-originated genres now represent a growing share of NAU streaming and touring revenue, building on decades of cross-border cultural exchange.', meta: 'Observer Arts · Kingston · 7 hours ago' },
  { label: 'world', hed: 'Puerto Rico President Visits Franklin Ahead of Trade Delegation Talks', dek: 'The independent republic\'s head of state met with NAU trade officials to discuss expanded agricultural export access ahead of next month\'s continental trade summit.', meta: 'United Press · Franklin · 10 hours ago' },
  { label: 'world', hed: 'Federal Republic of Central America Reports Record Coffee Export Year', dek: 'Favourable growing conditions and expanded NAU market access combined to produce the strongest export figures in the country\'s history.', meta: 'Observer World Desk · 11 hours ago' },
];


// -- FO_EXCLUSIVES -- Observer-only national features, no ABN/WH counterpart --
// Brief format (hed/dek/meta) -- analysis, profiles, institutional deep-dives.
// Only the WIRE_STORIES lead gets full-article (body array) treatment.
const FO_EXCLUSIVES = [
  { hed: 'Philadelphia Olympic Preparations Enter Final Stretch as Test Events Begin', dek: 'With the Games opening this summer, organisers report venue construction substantially complete as the city hosts its first full slate of pre-Games test competitions.', meta: 'Observer Sports Desk · Philadelphia · 5 hours ago' },
  { hed: 'Analysis: What the Texian Judiciary Standoff Reveals About the Limits of Consensus Politics', dek: 'The NAU consolidation project has survived a decade of incremental friction. Whether it can survive a member state\'s constitutional objection may be a different test entirely.', meta: 'By Eleanor Voss, Political Correspondent · 8 hours ago' },
  { hed: 'Inside the Bank of the United States\' Quiet Campaign Against Regional Lending Gaps', dek: 'A multiyear initiative to expand rural credit access has drawn little public attention — and, supporters argue, that may be exactly why it has worked.', meta: 'By Marcus Hendry, Capitol Correspondent · 11 hours ago' },
  { hed: 'The Slow Education of a Continental Judiciary: Inside the NAU Constitutional Committee\'s Closed Sessions', dek: 'Months of testimony, much of it never made public, have shaped the consolidation bill\'s most contested provisions. The Observer reviewed transcripts.', meta: 'By Eleanor Voss, Political Correspondent · Calumet · 1 day ago' },
  { hed: 'Choctaw Nation Historians Reflect on the Long Road to Federal Recognition of Joshua Black\'s Uprising', dek: 'As Congress weighs the Commander Black Federal Park bill, tribal historians describe decades of advocacy for a story they say has long been told incompletely.', meta: 'By James Calloway, National Correspondent · 9 hours ago' },
  { hed: 'University of the United States Researchers Trace a Century of American Migration Patterns', dek: 'A new demographic study draws on census records back to 1920 to map the long westward and southward population shifts that reshaped the country\'s political map.', meta: 'By Dr. Priya Iyer, Science Correspondent · 7 hours ago' },
  { hed: 'The Church of the Third Testament at 180: A Faith Tradition Born of the Western Trek', dek: 'Founded by trekkers who reached the shores of the Salt Sea in the 1840s, the tradition remains a quiet but durable presence across the Mountain West.', meta: 'By Observer Religion Desk · Beacon, Colorado y Rocosas · 1 day ago' },
  { hed: 'Inside Congress\'s Quiet Fight Over Who Controls AI Lending Standards', dek: 'A turf battle between the Bank of the United States and the Federal Trade Commission has slowed action on consumer protections even as both sides agree action is needed.', meta: 'By Marcus Hendry, Capitol Correspondent · 6 hours ago' },
  { hed: 'Federal Parks Service at a Crossroads: Record Visitation Tests a Century-Old Model', dek: 'Backcountry permit systems designed for a smaller, slower era of travel are straining under demand the agency\'s founders never anticipated.', meta: 'By Ruth Calloway, Environment Correspondent · 10 hours ago' },
  { hed: 'The Choson War at Sixty: How a Bombing Decision Reshaped the NAU Assembly', dek: 'The accountability debates that followed the 1967 strikes on Beijing and Shanghai produced reforms still shaping continental governance today. Veterans and historians look back.', meta: 'By James Calloway, National Correspondent · 1 day ago' },
  { hed: 'Why Franklin\'s Streetcar Revival Is Being Watched Closely by a Dozen Other Cities', dek: 'Secretary Anderson\'s pilot program has drawn interest from urban planners across the country, who see it as a test case for car-light downtown redevelopment.', meta: 'By Observer Urban Affairs Desk · 8 hours ago' },
  { hed: 'A Century of the Federal Arbitration Bureau: From Railroad Disputes to the AI Economy', dek: 'As Congress debates expanding the Bureau\'s mandate, a look back at an agency that has quietly adapted to a century of economic transformation.', meta: 'By Marcus Hendry, Capitol Correspondent · 1 day ago' },
  { hed: 'The Quiet Resurgence of the Federal Republic of Central America\'s Coffee Belt', dek: 'A combination of favourable weather and NAU market access has produced the country\'s strongest export year on record — and a debate over whether the boom can last.', meta: 'By Observer World Desk · 9 hours ago' },
  { hed: 'Inside the University of the United States\' Bid to Lead the Next Generation of Space Medicine', dek: 'A modest research wing has become one of the most closely watched programmes in the field, with direct implications for the Mars mission now underway.', meta: 'By Dr. Priya Iyer, Science Correspondent · Franklin · 7 hours ago' },
  { hed: 'How the Tallgrass Prairie Became Kanasaw\'s Most Unlikely Tourism Success Story', dek: 'A federal park once considered a hard sell now draws hundreds of thousands of annual visitors, reshaping the economy of the surrounding Flint Hills communities.', meta: 'By Observer Travel Desk · 1 day ago' },
  { hed: 'The Long Afterlife of the Civil Equality Amendment\'s Deliberate Silences', dek: 'Sixty-seven years after its passage, legal scholars continue to debate what the Amendment\'s drafters meant to leave unsaid — and what that has cost.', meta: 'By Observer Legal Affairs Desk · 11 hours ago' },
  { hed: 'Profile: The Career Diplomat Quietly Shaping NAU Trade Policy From the Second Chair', dek: 'Rarely quoted and rarely photographed, a senior career official has spent three administrations building the technical scaffolding behind the continent\'s trade architecture.', meta: 'By Eleanor Voss, Political Correspondent · Calumet · 1 day ago' },
  { hed: 'Lakota State\'s Communal Land Model Draws Renewed Academic Interest', dek: 'Decades after its establishment, researchers say the state\'s approach to land ownership offers lessons increasingly relevant to debates over rural economic development elsewhere.', meta: 'By Observer National Desk · 9 hours ago' },
  { hed: 'The Forgotten Fight Over the Bank of the United States\' Independence', dek: 'A little-remembered 1970s congressional standoff established the precedent now being tested in current debates over the Bank\'s relationship to NAU monetary coordination.', meta: 'By Marcus Hendry, Capitol Correspondent · 1 day ago' },
  { hed: 'Inside the Federal Investigative Service\'s New Approach to Rural Case Backlogs', dek: 'A quiet pilot programme redistributing casework across regional field offices has cut average resolution times nearly in half in early results.', meta: 'By Observer National Desk · 8 hours ago' },
  { hed: 'What Sixty Years of USRC Expansion Data Reveals About How Americans Actually Travel', dek: 'A Observer analysis of ridership patterns since the 1960s shows commuting habits shifting in ways that don\'t always match the conventional wisdom.', meta: 'By Observer Data Desk · 1 day ago' },
];


// ═════════════════════════════════════════════════════════════════════════════
// -- ABN NEWS -- SITE-SPECIFIC POOLS --
// ═════════════════════════════════════════════════════════════════════════════

const ABN_CARDS = [
  { emoji: '🚂', bg: 'linear-gradient(135deg,#1a3a1a,#2d602d)', tag: 'Rail', tagColor: '#533AB7', hed: 'USRC Northeast Corridor Sets Third Straight Q1 Record', meta: '6 hours ago' },
  { emoji: '💱', bg: 'linear-gradient(135deg,#1a1a3a,#2d2d60)', tag: 'NAU', tagColor: '#993C1D', hed: 'NAU/18-042 Currency Framework Moves to Assembly Floor', meta: '5 hours ago' },
  { emoji: '📡', bg: 'linear-gradient(135deg,#2a1a1a,#5d2d2d)', tag: 'World', tagColor: '#0F6E56', hed: 'China: Interlink Access Expands as Reforms Continue', meta: '4 hours ago' },
  { emoji: '🏛', bg: 'linear-gradient(135deg,#1a1a1a,#3a3a3a)', tag: 'USA', tagColor: '#185FA5', hed: 'Washington House West Wing Reopens After Two-Year Restoration', meta: '9 hours ago' },
  { emoji: '📚', bg: 'linear-gradient(135deg,#1a2a3a,#2d4060)', tag: 'USA', tagColor: '#185FA5', hed: 'Education Dept: Urban-Rural Literacy Gap Narrows for Third Year Running', meta: '11 hours ago' },
  { emoji: '🔍', bg: 'linear-gradient(135deg,#2a2a1a,#505020)', tag: 'USA', tagColor: '#2D5A1A', hed: 'FIS Confirms New Director After Senate Approval Ends Months-Long Vacancy', meta: '7 hours ago' },
  { emoji: '🚀', bg: 'linear-gradient(135deg,#0a1a2a,#1a3a5a)', tag: 'Science', tagColor: '#2D5A1A', hed: 'Ten-Person Mars Crew Completes Final Training Milestone', meta: '3 hours ago' },
  { emoji: '🏞', bg: 'linear-gradient(135deg,#1a3a1a,#2d5020)', tag: 'USA', tagColor: '#2D5A1A', hed: 'Federal Parks Service Reports Record Visitation in Mountain West', meta: '10 hours ago' },
  { emoji: '⚖️', bg: 'linear-gradient(135deg,#3a1a1a,#601a1a)', tag: 'USA', tagColor: '#185FA5', hed: 'Supreme Court Declines NAU Tariff Authority Challenge', meta: '6 hours ago' },
  { emoji: '🤖', bg: 'linear-gradient(135deg,#1a1a3a,#3a2a5a)', tag: 'USA', tagColor: '#185FA5', hed: 'Senate Opens Hearings on AI Lending Disparities', meta: '5 hours ago' },
  { emoji: '🌾', bg: 'linear-gradient(135deg,#2a3a1a,#4a5a20)', tag: 'USA', tagColor: '#2D5A1A', hed: 'House Advances Great Plains Drought Resilience Funding', meta: '8 hours ago' },
  { emoji: '🎓', bg: 'linear-gradient(135deg,#1a1a2a,#2a2a4a)', tag: 'Science', tagColor: '#2D5A1A', hed: 'UUS Bone Density Study Prompts NASA Protocol Review', meta: '4 hours ago' },
  { emoji: '📺', bg: 'linear-gradient(135deg,#2a1a2a,#4a1a4a)', tag: 'USA', tagColor: '#185FA5', hed: 'FTC Opens Inquiry Into Streaming Market Consolidation', meta: '9 hours ago' },
  { emoji: '🚆', bg: 'linear-gradient(135deg,#1a2a1a,#2d4020)', tag: 'Rail', tagColor: '#533AB7', hed: 'USRC Pilots High-Speed Service on Calumet-Franklin Line', meta: '7 hours ago' },
  { emoji: '🏅', bg: 'linear-gradient(135deg,#3a2a1a,#5a4020)', tag: 'USA', tagColor: '#185FA5', hed: 'Congress Honours Choson War Veterans Ahead of Sixtieth Anniversary', meta: '12 hours ago' },
  { emoji: '💼', bg: 'linear-gradient(135deg,#1a1a1a,#3a3a3a)', tag: 'USA', tagColor: '#2D5A1A', hed: 'Wage Growth Outpaces Inflation for Eleventh Straight Quarter', meta: '8 hours ago' },
  { emoji: '🛰', bg: 'linear-gradient(135deg,#0a1a3a,#1a2a5a)', tag: 'Science', tagColor: '#2D5A1A', hed: 'National Weather Service Unveils Upgraded Storm Warning System', meta: '6 hours ago' },
  { emoji: '🏛', bg: 'linear-gradient(135deg,#2a1a1a,#4a2a2a)', tag: 'USA', tagColor: '#185FA5', hed: 'House Passes Veterans Health Modernisation Act', meta: '10 hours ago' },
  { emoji: '🌐', bg: 'linear-gradient(135deg,#1a3a3a,#2a5a5a)', tag: 'USA', tagColor: '#185FA5', hed: 'Congress Advances Tribal Broadband Expansion Bill', meta: '7 hours ago' },
  { emoji: '🏗', bg: 'linear-gradient(135deg,#3a1a1a,#5a2a1a)', tag: 'NAU', tagColor: '#993C1D', hed: 'NAU Professional Recognition Bill Stalls in Committee', meta: '4 hours ago' },
];

const ABN_WORLD = [
  { tag: 'UER', hed: 'UER Premier Faces Parliamentary Challenge Over State Media Reforms', dek: 'The governing coalition in Paris is under pressure as a contentious broadcasting reform bill enters its second reading in the National Assembly.', meta: 'ABN Europe Desk · 7 hours ago' },
  { tag: 'Britain', hed: 'London Markets Rise on NAU Currency Stabilisation Framework Progress', dek: 'The UKP strengthened against the Continental amid optimism about NAU monetary coordination following the Assembly committee vote.', meta: 'ABN Finance · 5 hours ago' },
  { tag: 'China', hed: 'GPC Digital Rights Commission Sets Phase 4 Interlink Access Timeline', dek: 'The Commission has issued binding guidance requiring full rural household access by 2028, ahead of the expected Phase 4 transition later this year.', meta: 'ABN Asia Desk · 9 hours ago' },
  { tag: 'Russia', hed: 'Tsar Nicholas IV Urges Duma to Break Modernisation Package Impasse', dek: 'The Tsar made a rare direct appeal to parliamentary factions, warning that continued deadlock risks Russian industrial competitiveness against Western rivals.', meta: 'ABN World Desk · 10 hours ago' },
  { tag: 'Britain', hed: 'Britain and NAU Sign Five-Year Trade Renewal Agreement in London', dek: 'The agreement locks in preferential tariff arrangements across manufacturing and agricultural sectors, with a joint review scheduled for 2029.', meta: 'ABN World Desk · 6 hours ago' },
  { tag: 'Canada', hed: 'Canadian PM Tremblay Visits Washington House for Bilateral Talks', dek: 'Agricultural trade and NAU constitutional consolidation were among the topics discussed during the two-day visit, the first since Tremblay\'s re-election.', meta: 'ABN Political Desk · Franklin · 8 hours ago' },
  { tag: 'Japan', hed: 'Japan and NAU Renew Pacific Maritime Security Pact', dek: 'The agreement extends joint naval exercises and shipping-lane monitoring first established in the years following the Global War.', meta: 'ABN Asia Desk · Tokyo · 9 hours ago' },
  { tag: 'GPC', hed: 'GPC Confirms New Investment in Suez International Zone Capacity', dek: 'The Council, which has administered the Zone since Egyptian independence in 1960/61, says the expansion will accommodate rising container traffic.', meta: 'ABN World Desk · 11 hours ago' },
  { tag: 'Hawaii', hed: 'Hawaii and Japan Sign Pacific Cultural Exchange Agreement', dek: 'The pact expands student exchange and joint oceanographic research between the two Pacific nations.', meta: 'ABN Asia Desk · Honolulu · 8 hours ago' },
  { tag: 'Africa', hed: 'Sokoto Caliphate Hosts West African Trade Summit in Kano', dek: 'Regional currency coordination and infrastructure investment topped the agenda, with NAU and UER officials observing.', meta: 'ABN Africa Desk · Kano · 10 hours ago' },
  { tag: 'India', hed: 'India Opens Talks With Three Nations on Non-Aligned Bloc Membership', dek: 'Delhi confirmed exploratory discussions building on the framework established under the Treaty of Delhi.', meta: 'ABN Asia Desk · New Delhi · 7 hours ago' },
  { tag: 'Egypt', hed: 'Egypt Marks Independence Anniversary, Reflects on Suez Settlement', dek: 'The President\'s address looked back on the decades since the 1960/61 agreement that secured Egyptian sovereignty and established GPC administration of the Canal Zone.', meta: 'ABN Africa Desk · Cairo · 9 hours ago' },
  { tag: 'Africa', hed: 'Ethiopia and Zanzibar Sign Joint Rail Infrastructure Pact', dek: 'The agreement is part of a broader East African push toward regional economic integration.', meta: 'ABN Africa Desk · Addis Ababa · 8 hours ago' },
  { tag: 'Mesopotamia', hed: 'Reconstruction Authority Reports Steady Infrastructure Progress', dek: 'The joint Kurdish-Arab oversight body says water and power rebuilding continues, though full recovery remains years off.', meta: 'ABN World Desk · 12 hours ago' },
  { tag: 'Brazil', hed: 'Brazil and NAU Discuss Expanded Agricultural Trade Framework', dek: 'Talks in Calumet focused on coordinated commodity standards and reduced tariffs for South American exports.', meta: 'ABN World Desk · Calumet · 6 hours ago' },
  { tag: 'Germany', hed: 'German Coalition Talks Conclude After Months of Deadlock', dek: 'Agreement between the Nationalversammlung and Bundesrat ends a prolonged period of political uncertainty in Frankfurt.', meta: 'ABN Europe Desk · Frankfurt · 10 hours ago' },
  { tag: 'Australia', hed: 'Australia and NAU Sign Pacific Marine Research Pact', dek: 'The agreement establishes a shared research station for long-term ocean health monitoring across the Pacific basin.', meta: 'ABN Asia Desk · Sydney · 9 hours ago' },
  { tag: 'Austria', hed: 'Austria Hosts Conference Marking Decades of Postwar Stability', dek: 'Vienna convened the gathering to reaffirm its distinct path apart from both the UER and German Republic.', meta: 'ABN Europe Desk · Vienna · 11 hours ago' },
  { tag: 'Britain', hed: 'Prince Michael to Begin First Solo Tour in Canada', dek: 'The King\'s second son will visit Toronto and Aurora before continuing to Franklin and Mexico City on an eighteen-day continental tour.', meta: 'ABN Europe Desk · London · 1 day ago' },
  { tag: 'China', hed: 'Chinese Cinema Draws International Buzz at Franklin Festival', dek: 'Two historical dramas examining the twentieth century with new candour are screening in competition, part of a broader post-Spring filmmaking wave.', meta: 'ABN Arts Desk · Franklin · 6 hours ago' },
  { tag: 'Canada', hed: 'Canada and NAU Weigh Joint Arctic Research Initiative', dek: 'The proposal would expand climate and resource monitoring across Canada\'s northern territories with shared NAU funding.', meta: 'ABN World Desk · Aurora · 8 hours ago' },
  { tag: 'Caribbean', hed: 'Dominican Republic and Haiti Mark Customs Modernisation Anniversary', dek: 'Officials from both NAU members celebrated smooth implementation of shared border infrastructure since the original integration agreement.', meta: 'ABN World Desk · Santo Domingo · 9 hours ago' },
  { tag: 'Jamaica', hed: 'Jamaican Music Continues Gaining Continental Market Share', dek: 'Industry data shows Jamaican-originated genres growing as a share of NAU streaming and touring revenue.', meta: 'ABN Arts Desk · Kingston · 7 hours ago' },
  { tag: 'Puerto Rico', hed: 'Puerto Rico President Visits Franklin for Trade Talks', dek: 'The independent republic\'s head of state discussed expanded agricultural export access ahead of next month\'s continental trade summit.', meta: 'ABN Political Desk · Franklin · 10 hours ago' },
  { tag: 'FRCA', hed: 'Federal Republic of Central America Posts Record Coffee Exports', dek: 'Favourable growing conditions and expanded NAU market access produced the strongest export figures in the country\'s history.', meta: 'ABN World Desk · 11 hours ago' },
];

const ABN_MOSTREAD = [
  'USRC Northeast Corridor breaks ridership record',
  'China\'s Interlink opening — explained',
  'Congress passes Ȼ2.1bn USRC modernisation bill',
  'UER media reforms: why Paris is divided',
  'Tsar Nicholas IV and the Duma deadlock — explained',
  'Washington House West Wing reopens — what\'s changed',
  'Meet the ten-person crew headed to Mars',
  'What the Texas judiciary standoff means for NAU consolidation',
  'Mare Imbrium review: the moon landing film everyone\'s talking about',
  'Commander Black Federal Park, explained',
  'Bone density and Mars: the UUS study NASA is taking seriously',
  'Five things to know about the Choson War at sixty',
  'Prince Michael\'s first solo tour: full itinerary',
  'Why Bolt music is having its biggest year in a decade',
  'NAU professional licensing bill: what doctors and lawyers need to know',
  'Inside the Suez Zone: how the GPC actually runs it',
  'German coalition deal ends months of deadlock — what changes now',
  'Sixty years on: the bombing decision that ended the Choson War',
  'Everything to know about the Philadelphia Olympics this summer',
  'The Federal Arbitration Bureau, a century later',
  'Cuban sugar and the consolidation vote: the fight nobody\'s watching',
  'Jamaica\'s music boom, explained in five charts',
  'AI lending bias: what the Senate hearings revealed',
  'Inside the Bank of the United States\' quiet war on regional lending gaps',
  'Egypt at the Suez anniversary: a history primer',
  'Sokoto Caliphate trade summit: why it matters more than you think',
  'The Sesquicentennial Tour, mapped',
  'Inside the NAU Assembly\'s closed-door consolidation hearings',
  'Why Hawaii is pushing back on Pacific trade representation',
  'The Choctaw alliance behind the Commander Black uprising, explained',
];


// -- ABN_EXCLUSIVES -- ABN-only breaking/business stories, no FO/WH counterpart --
// Punchier CNN-style format (hed/dek/meta/tag).
const ABN_EXCLUSIVES = [
  { tag: 'Business', hed: 'Continental Markets Open Higher on Mexican Manufacturing Data', dek: 'Equity markets across NAU member exchanges rose in early trading following stronger-than-expected industrial output figures from Mexico.', meta: 'ABN Markets Desk · 2 hours ago' },
  { tag: 'NAU', hed: 'Assembly President Fontaine Calls for "Patience, Not Pressure" on Consolidation Timeline', dek: 'In a rare extended interview, Fontaine pushed back on critics who say the Assembly is moving too slowly on the constitutional consolidation question.', meta: 'ABN Political Desk · Calumet · 3 hours ago' },
  { tag: 'Business', hed: 'USRC Bonds Oversubscribed Following Modernisation Act Passage', dek: 'Investor demand for the Railway Company\'s new infrastructure bonds exceeded offering size within hours of opening, according to underwriters.', meta: 'ABN Markets Desk · 5 hours ago' },
  { tag: 'USA', hed: 'BREAKING: Senate Confirms FIS Director in Bipartisan Vote', dek: 'The confirmation ends a vacancy that had stretched past three years amid repeated scheduling disputes between committee leadership.', meta: 'ABN Political Desk · Franklin · BREAKING' },
  { tag: 'World', hed: 'Markets Watch Frankfurt as German Coalition Talks Reach Final Stage', dek: 'Analysts say a resolution to months of political uncertainty could unlock delayed industrial investment decisions across the German Republic.', meta: 'ABN Markets Desk · Frankfurt · 4 hours ago' },
  { tag: 'NAU', hed: 'Texian Delegation Signals Openness to Compromise on Judiciary Provisions', dek: 'A shift in tone from CC bloc leader Whitfield suggests the standoff over NAU consolidation may be entering a more negotiable phase.', meta: 'ABN NAU Desk · Calumet · 6 hours ago' },
  { tag: 'Science', hed: 'NASA Confirms Ares I Crew Has Completed Final Pre-Departure Medical Reviews', dek: 'The confirmation follows weeks of heightened scrutiny after a UUS study raised questions about long-duration bone density loss.', meta: 'ABN Science Desk · Calumet · 3 hours ago' },
  { tag: 'Business', hed: 'Continental Bank Chief Economist Defends Rate Hold in Rare Public Remarks', dek: 'Speaking to reporters after the policy decision, the Bank\'s chief economist said "patience" remained the appropriate posture given diverging regional data.', meta: 'ABN Markets Desk · Franklin · 5 hours ago' },
  { tag: 'World', hed: 'Sources: Hawaii Pressing for Formal Pacific Trade Seat Ahead of Consolidation Vote', dek: 'ABN has learned Hawaiian officials have privately signalled they may withhold support for the final consolidation package without firmer trade guarantees.', meta: 'ABN Political Desk · Honolulu · 7 hours ago' },
  { tag: 'USA', hed: 'Streaming Platforms Brace for FTC Inquiry Findings', dek: 'Industry sources say platforms are preparing voluntary content-distribution commitments ahead of the Commission\'s expected preliminary report.', meta: 'ABN Business Desk · 8 hours ago' },
  { tag: 'World', hed: 'GPC Officials Confirm Suez Zone Expansion Timeline', dek: 'Engineering work on the capacity expansion is expected to begin within the year, according to officials familiar with the planning.', meta: 'ABN World Desk · 9 hours ago' },
  { tag: 'Business', hed: 'Caribbean Integration Fund Grants Draw Praise From Small-Business Groups', dek: 'Port modernisation funding for Haiti, Jamaica, and the Dominican Republic has been welcomed by regional trade associations as overdue but meaningful.', meta: 'ABN Business Desk · Kingston · 6 hours ago' },
  { tag: 'USA', hed: 'Federal Arbitration Bureau Reauthorisation Clears Procedural Hurdle', dek: 'A scheduling vote moves the bill closer to floor consideration despite continued JCA objections to its expanded labour jurisdiction.', meta: 'ABN Political Desk · Franklin · 5 hours ago' },
  { tag: 'World', hed: 'Analysts Say India-China Trade Protocol Signals Broader Diplomatic Thaw', dek: 'Regional experts caution against overreading the agreement, but say the symbolism of expanded border crossings should not be dismissed.', meta: 'ABN Asia Desk · New Delhi · 7 hours ago' },
  { tag: 'Science', hed: 'NASA Confirms Ares I Communications Relay Schedule Through Mars Transit', dek: 'The relay satellite network built during the previous decade\'s robotic programme will provide continuous coverage of the crew throughout the journey.', meta: 'ABN Science Desk · 8 hours ago' },
  { tag: 'NAU', hed: 'Labour Bloc Leader Okafor Warns Against "Watering Down" Professional Recognition Bill', dek: 'Okafor said proposed amendments to ease Unionist concerns over medical licensing risk undermining the bill\'s core purpose.', meta: 'ABN NAU Desk · Calumet · 6 hours ago' },
  { tag: 'Business', hed: 'Texas Federation Manufacturing Sector Watches Currency Framework Debate Closely', dek: 'Industry groups in Texopolis say continued uncertainty over continental monetary coordination is complicating long-term investment planning.', meta: 'ABN Business Desk · Texopolis · 9 hours ago' },
  { tag: 'World', hed: 'Royal Watchers Say Prince Michael\'s Tour Marks a Deliberate Step Into Public Life', dek: 'Commentators note the itinerary\'s focus on youth education and cultural exchange mirrors the causes the Prince has championed privately for several years.', meta: 'ABN Europe Desk · London · 1 day ago' },
  { tag: 'USA', hed: 'Rural Broadband Milestone Prompts Calls for Next-Phase Funding Debate', dek: 'Advocacy groups say reaching 94% access should be treated as a floor, not a finish line, as Congress weighs the programme\'s future.', meta: 'ABN Political Desk · Franklin · 7 hours ago' },
];


// ═════════════════════════════════════════════════════════════════════════════
// -- WASHINGTON HOUSE --
// ═════════════════════════════════════════════════════════════════════════════

const WH_STATEMENTS = [
  { label: 'Statement from the President', text: '"The Assembly exists to debate these questions — that is precisely what it was designed to do. If the people\'s representatives, meeting the standard our Constitution demands, choose to open that conversation, I will not stand in their way."', attr: '— President Nakamura, on the NAU Constitutional Consolidation question · Office of Communications' },
  { label: 'Statement from the President', text: '"This is what public investment looks like. Generation after generation, the Railway Company has delivered — and these numbers prove that when we invest in our people, they show up."', attr: '— President Nakamura, on USRC Q1 ridership record · Office of Communications' },
  { label: 'Statement from the President', text: '"We enter these talks not to dominate, but to build — a North America where every nation, large or small, has an equal stake in our shared prosperity."', attr: '— President Nakamura, ahead of NAU Economic Summit · Office of Communications' },
  { label: 'Statement from the President', text: '"Clean water is not a regional issue. It is a continental one. The Great Lakes belong to all of us, and we will protect them together."', attr: '— President Nakamura, on the Pan-Continental Clean Waters Compact · Office of Communications' },
  { label: 'Statement from the President', text: '"One year ago, I stood on the steps of this House and asked the American people for their trust. I intend to spend the next five years earning it."', attr: '— President Nakamura, first anniversary address · Office of Communications' },
  { label: 'Statement from the President', text: '"The question before us is not whether we can afford to act on this — the question is whether we can afford not to."', attr: '— President Nakamura, on the federal clean energy investment package · Office of Communications' },
  { label: 'Statement from the Press Secretary', text: '"The President is monitoring the situation closely and has directed the relevant departments to provide a full assessment by end of week. We will have more to say when that review is complete."', attr: '— Press Secretary Delacroix · Morning Briefing' },
  { label: 'Statement from the President', text: '"Pacific trade is not a privilege — it is the backbone of our Pacific states\' economies, and it must be protected with clear-eyed, principled negotiation."', attr: '— President Nakamura, on Pacific Trade Framework renewal · Office of Communications' },
  { label: 'Statement from the President', text: '"Every park, every trail, every stretch of protected wilderness is a promise we keep to our children. Today we keep another."', attr: '— President Nakamura, on Federal Parks Service expansion · Office of Communications' },
  { label: 'Statement from the Press Secretary', text: '"The President congratulates the USRC on another record quarter and reaffirms the Administration\'s commitment to continued federal investment in the national rail network."', attr: '— Press Secretary Delacroix · Office of Communications' },
  { label: 'Statement from the President', text: '"Ten people, nine nations, one mission. Whatever else divides us, we have just proven — again — what we can do when we choose to reach together."', attr: '— President Nakamura, on the Mars crew announcement · Office of Communications' },
  { label: 'Statement from the President', text: '"Joshua Black and the Choctaw Nation acted together at a moment when the whole future of this country hung in the balance. It is past time the Federal Parks system told that story plainly."', attr: '— President Nakamura, on the Commander Black Federal Park designation bill · Office of Communications' },
  { label: 'Statement from the Press Secretary', text: '"The Administration takes the UUS findings seriously. NASA has briefed the President directly, and the Ares I medical team has our full confidence going into departure."', attr: '— Press Secretary Delacroix · Morning Briefing' },
  { label: 'Statement from the President', text: '"Texas has always had a seat at this table, and it always will. What we owe each other now is patience, and the honesty to say what we actually need from one another."', attr: '— President Nakamura, on the NAU judiciary standoff · Office of Communications' },
  { label: 'Statement from the President', text: '"Sixty years ago this summer, young Americans went to war in a conflict that asked hard questions about who authorizes force and on whose behalf. We owe it to them to keep answering those questions honestly."', attr: '— President Nakamura, ahead of the Choson War sixtieth anniversary · Office of Communications' },
  { label: 'Statement from the Press Secretary', text: '"The President welcomes the Continental Bank\'s decision and shares its assessment that patience, not haste, is the right posture given the data in front of us."', attr: '— Press Secretary Delacroix · Office of Communications' },
  { label: 'Statement from the President', text: '"Rural America has waited long enough for the connections the rest of the country takes for granted. Ninety-four percent is not the finish line. It is the floor."', attr: '— President Nakamura, on the rural Interlink access milestone · Office of Communications' },
  { label: 'Statement from the President', text: '"Every generation of Americans has had to decide, again, what kind of country this is. We are no different. I believe we will choose well."', attr: '— President Nakamura, Sesquicentennial reflections · Office of Communications' },
  { label: 'Statement from the Press Secretary', text: '"The President has reviewed the Senate hearing testimony on automated lending practices and has asked the Treasury Department to report back with recommendations within sixty days."', attr: '— Press Secretary Delacroix · Office of Communications' },
  { label: 'Statement from the President', text: '"A century from now, I hope someone stands where I am standing and says the same thing about us that we say about the builders of this railway — that we built for people we would never meet."', attr: '— President Nakamura, at the USRC modernisation signing ceremony, Franklin Central Station · Office of Communications' },
  { label: 'Statement from the President', text: '"The Choctaw Nation, the State of Gigadohi, and the federal government do not always agree on how this land should be governed. On this, we agree completely."', attr: '— President Nakamura, on bipartisan Choctaw consultation provisions · Office of Communications' },
  { label: 'Statement from the Press Secretary', text: '"The President spoke this morning with NAU Assembly President Fontaine and reaffirmed the Administration\'s full support for a fair and orderly path to a floor vote."', attr: '— Press Secretary Delacroix · Morning Briefing' },
  { label: 'Statement from the President', text: '"Science does not wait for politics to catch up, and neither should we. The bone density findings are sobering, and NASA is responding the way good institutions respond — quickly, and honestly."', attr: '— President Nakamura, on the UUS space medicine study · Office of Communications' },
  { label: 'Statement from the President', text: '"Hawaii waited decades to be treated as an equal partner in this union, not a junior one. That patience helped shape what union actually means. We will not forget it."', attr: '— President Nakamura, at the state dinner for Princess Kahananui · Office of Communications' },
  { label: 'Statement from the Press Secretary', text: '"The President wishes all Americans, and all our partners across the continent, a peaceful close to the year and a hopeful beginning to the one ahead."', attr: '— Press Secretary Delacroix · Year-End Statement' },
];

const WH_BRIEFING = [
  { title: 'President Nakamura to Address NAU Economic Summit in Montréal' },
  { title: 'Statement on USRC Q1 Ridership Record: "A testament to what public investment delivers."' },
  { title: 'President Nakamura Receives Canadian Prime Minister Tremblay at Washington House' },
  { title: 'Administration Announces Appointments to the Federal Arbitration Bureau' },
  { title: 'Nakamura Signs Reauthorisation of the Caribbean Integration & Development Fund' },
  { title: 'President Issues Statement Supporting NAU Assembly Currency Stabilisation Framework' },
  { title: 'Washington House West Wing Tours Resume Following Renovation of State Dining Room' },
  { title: 'President Nakamura Signs Pacific Trade Framework Renewal into Law' },
  { title: 'Administration Releases First Anniversary Progress Report — 47 Legislative Priorities' },
  { title: 'President Nakamura Hosts State Dinner for Kingdom of Hawaii Queen\'s Representative' },
  { title: 'Nakamura Nominates Three Justices to the Federal Court of Appeals, Western Circuit' },
  { title: 'Press Secretary Delacroix Addresses Questions on NAU Consolidation Timeline' },
  { title: 'President Nakamura Marks Anniversary of Great Lakes Environmental Compact' },
  { title: 'Administration Announces Federal Parks Service Expansion' },
  { title: 'President Nakamura Delivers Remarks at National Science & Industry Exposition, Calumet' },
  { title: 'President Nakamura Attends Mars Crew Announcement at NASA Calumet Campus' },
  { title: 'Administration Expresses Support for Commander Black Federal Park Designation Bill' },
  { title: 'Press Secretary Delacroix Briefs Reporters on UUS Space Medicine Findings' },
  { title: 'President Nakamura Calls Texas Federation Delegation Amid Judiciary Standoff' },
  { title: 'Administration Announces Choson War Sixtieth Anniversary Commemoration Plans' },
  { title: 'President Nakamura Welcomes Continental Bank Rate Decision' },
  { title: 'Administration Marks Rural Interlink Access Reaching 94% of Households' },
  { title: 'President Nakamura Reflects on Sesquicentennial Ahead of Summer Commemorations' },
  { title: 'Treasury Department Tasked With Sixty-Day Review of Automated Lending Practices' },
  { title: 'President Nakamura Signs USRC Modernisation Act at Franklin Central Station' },
  { title: 'Administration Confirms Choctaw Nation Consultation Provisions in Park Designation Bill' },
  { title: 'President Nakamura Speaks With NAU Assembly President Fontaine on Consolidation Timeline' },
  { title: 'President Nakamura Addresses UUS Space Medicine Study Findings' },
  { title: 'President Nakamura Hosts State Dinner for Princess Kahananui of Hawaii' },
  { title: 'Office of Communications Releases Statement From the President on Continental Cooperation' },
  { title: 'Administration Announces Joint Home Guard Training Exercise With Canada' },
  { title: 'President Nakamura Signs Tribal Broadband Expansion Bill' },
];


// ═════════════════════════════════════════════════════════════════════════════
// -- CSN -- CONTINENTAL SPORTS NETWORK --
// ═════════════════════════════════════════════════════════════════════════════

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
  'NBA · Atlanta Locomotives 4, Birmingham Vulcans 2 · FINAL',
  'NBA · St. Louis Rivermen 3, Calumet Lakers 3 · F/10',
  'NAFA · New Orleans Crescents 1, Miami Floridians 1 · FINAL',
  'NAFA · Galvesport Buccaneers 0, San Antonio Rancheros 2 · FINAL',
  'ANSA · Philadelphia Bells 2, Baltimore Fishermen 2 · FINAL',
  'ANSA · New Echota Nighthawks 5, Oyathira Coyotes 3 · FINAL',
  'ANSA · Nashville Fiddlers 2, Louisville Colonels 1 · FINAL',
  'MLA · Franklin Statesmen 17, St. Louis Brewers 12 · FINAL',
  'MLA · Monterrey Norteños 20, Puebla Guerreros 15 · FINAL',
  'Union Cup · Toronto Royals 19, Aurora Dominion RC 14 · FINAL',
  'Union Cup · Philadelphia Keystones 28, Baltimore Clippers 21 · FINAL',
  'Women\'s · New Orleans Violets 5, Memphis Queens 3 · FINAL',
  'Women\'s · Boston Sirens 2, Baltimore Pearls 1 · F/12',
  'NBA · Mahkato Bluemen 6, Astoria Mariners 4 · FINAL',
  'NBA · Gigadohi City Arrowmen 3, Missouri City Scouts 2 · FINAL',
  'NAFA · Manhattan FC 2, Philadelphia Liberty 2 · FINAL',
  'NAFA · Pittsburgh Forgers 1, Franklin Nationals 3 · FINAL',
  'ANSA · Lakota City Thunderbirds 4, New Boston Chinooks 1 · FINAL',
  'MLA · New Boston Bears 22, Astoria Explorers 11 · FINAL',
  'Union Cup · Vancouver RC 16, Pugetsburgh Columbians 13 · FINAL',
  'Women\'s · Calumet Swans 4, St. Louis Tigerlilies 4 · F/10',
  'Women\'s · Astoria Selkies 3, New Boston Ravens 2 · FINAL',
  'NBA · Philadelphia Colonials 5, Miami Everglades 2 · FINAL',
  'MLA · Texopolis Texians 19, Santa Fe Sundancers 13 · FINAL',
];

const CSN_LEADS = [
  { tag: 'NBA', hed: 'Franklin Senators Hold Off Islanders in Extra-Innings Thriller', dek: 'Capital city club extends winning streak to seven games with a dramatic late rally at Washington House Park, putting pressure on the Eastern Conference leaders.', meta: 'CSN Baseball Desk · Franklin · 2 hours ago' },
  { tag: 'NAFA', hed: 'Nationals Claim Derby Day as Franklin Edges Atlanta in Five-Goal Classic', dek: 'A sold-out Founders Field witnessed one of the season\'s finest matches as the Nationals and Southerners traded goals in a match that lived up to its billing.', meta: 'CSN Football Desk · Franklin · 3 hours ago' },
  { tag: 'MLA', hed: 'Vaqueros Surge to Top of Texas Division After Dominant Win Over Breakers', dek: 'San Antonio\'s 21–14 victory in Galvesport puts them three points clear at the top of the Texas Division with six rounds remaining in the regular season.', meta: 'CSN Aroball Desk · San Antonio · 4 hours ago' },
  { tag: 'ANSA', hed: 'Gigadohi City United Make History With Record-Breaking Home Win', dek: 'The United became the first team in ANSA history to win fifteen consecutive home matches, extending a streak that stretches back to last season\'s All-Nation Championship run.', meta: 'CSN Stickball Desk · Gigadohi City · 2 hours ago' },
  { tag: 'Union Cup', hed: 'New England RC Advance to Continental Semi-Finals With Dominant Display', dek: 'A commanding 22–17 victory over Pittsburgh Three Rivers RC sends New England through to the last four, where they will face the Golden Gate RC next month.', meta: 'CSN Rugby Desk · Boston · 5 hours ago' },
  { tag: 'Women\'s Baseball', hed: 'Suffragettes Clinch Eastern Division Title With Win Over Manhattan Roses', dek: 'Franklin\'s Suffragettes secured their third divisional title in four seasons with a composed 4–2 victory, setting up a potential Diamond Series repeat appearance.', meta: 'CSN Women\'s Baseball Desk · Franklin · 1 hour ago' },
  { tag: 'NBA', hed: 'Pharaohs Hold Off Late Rivermen Rally to Stay Atop the West', dek: 'Memphis survived a furious ninth-inning comeback attempt to preserve its three-game cushion in the Western Conference standings.', meta: 'CSN Baseball Desk · Memphis · 3 hours ago' },
  { tag: 'NAFA', hed: 'Imperiales Set New NAFA Points Record With Win Over Voyageurs', dek: 'Mexico City\'s victory over Montreal extends their points total to a mark that surpasses the previous record set during the 2019 championship campaign.', meta: 'CSN Football Desk · Mexico City · 4 hours ago' },
  { tag: 'MLA', hed: 'Dons Edge Fogcutters in Bay Area Derby Thriller', dek: 'A last-minute score from Los Angeles capped a back-and-forth contest that drew the largest MLA crowd of the season at San Francisco\'s Embarcadero Field.', meta: 'CSN Aroball Desk · San Francisco · 2 hours ago' },
  { tag: 'ANSA', hed: 'New Echota Nighthawks Close Gap on League Leaders With Statement Win', dek: 'A dominant performance over St. Louis narrows the Nighthawks\' deficit to just two games heading into the season\'s final stretch.', meta: 'CSN Stickball Desk · New Echota · 5 hours ago' },
  { tag: 'Union Cup', hed: 'Golden Gate RC Survive Scare Against LA Condors to Reach Semi-Finals', dek: 'A late penalty try secured a narrow 31–24 victory, sending Golden Gate through to face New England RC in next month\'s semi-final.', meta: 'CSN Rugby Desk · San Francisco · 3 hours ago' },
  { tag: 'Women\'s Baseball', hed: 'Memphis Queens Roll Into Playoff Position With Sixth Straight Win', dek: 'The Queens\' winning streak has them firmly in control of the Western Division as the regular season enters its final weeks.', meta: 'CSN Women\'s Baseball Desk · Memphis · 2 hours ago' },
  { tag: 'NBA', hed: 'Open Play Debate: Is This the Greatest ANSA Season Ever?', dek: 'Panelists weigh in on whether Gigadohi City United\'s historic run belongs in the same conversation as the legendary squads of the 1990s.', meta: 'CSN Studio Desk · Manhattan · 6 hours ago' },
  { tag: 'MLA', hed: 'Mexico City Tigres Clinch Division With Dominant Win Over Charros', dek: 'A 24–19 victory secures the Mexico Division title with two rounds still to play, the Tigres\' first divisional crown in six seasons.', meta: 'CSN Aroball Desk · Mexico City · 4 hours ago' },
  { tag: 'NAFA', hed: 'Pacifics Keep Western Conference Hopes Alive With Statement Win', dek: 'San Francisco\'s narrow victory over Los Angeles keeps their playoff push alive with three matches remaining in the regular season.', meta: 'CSN Football Desk · San Francisco · 3 hours ago' },
  { tag: 'ANSA', hed: 'Philadelphia Bells Snap Three-Game Skid With Win Over Baltimore', dek: 'A balanced offensive performance helped the Bells steady themselves after a difficult stretch that had threatened their playoff positioning.', meta: 'CSN Stickball Desk · Philadelphia · 5 hours ago' },
];

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

// -- STANDINGS (static season snapshots -- not rotated) --
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

const CSN_TOP_STORIES = [
  'Franklin Senators extend winning streak to seven',
  'Vaqueros surge to top of MLA Texas Division',
  'Suffragettes clinch Eastern Division title',
  'New England RC through to Union Cup semi-finals',
  'Gigadohi City United set consecutive home win record',
  'NBA Western race tightens as Pharaohs hold off Rivermen',
  'Mexico City Imperiales set new NAFA points record',
  'Open Play: Is this the greatest ANSA season ever?',
  'Dons edge Fogcutters in Bay Area derby thriller',
  'New Echota Nighthawks close gap on ANSA leaders',
  'Golden Gate RC survive scare to reach semi-finals',
  'Memphis Queens win sixth straight, lock up playoff spot',
  'Tigres clinch MLA Mexico Division with two rounds to spare',
  'Pacifics keep NAFA Western playoff hopes alive',
  'Philadelphia Bells snap three-game skid',
  'Mahkato Bluemen quietly climbing the NBA West standings',
  'Toronto Royals\' rugby resurgence, explained',
  'Five storylines to watch in the MLA stretch run',
  'Calumet Lakers riding hot streak into playoff push',
  'Atlanta Locomotives find their groove after slow start',
  'San Antonio\'s pitching staff quietly historic this season',
  'Boston Sirens chase first women\'s baseball title in a decade',
  'Inside the Wichita Mountains training camp boom',
  'Why Aroball attendance is up across the continent this year',
  'Franklin Nationals\' youth movement paying early dividends',
  'CSN Power Rankings: Week\'s biggest movers',
  'Diamond Series picture coming into focus as season winds down',
  'Union Cup quarterfinal upsets reshape playoff bracket',
];

// -- BROADCAST SCHEDULE (static, time-of-day logic in CSN page) --
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

const LV_FILMS = [

  // ── ORIGINALS ──────────────────────────────────────────────────────────────

  {
    id: 'night-train',
    title: 'Night Train',
    year: '2019',
    genre: 'Action / Thriller',
    section: 'originals',
    alsoIn: [],
    director: null,
    studio: 'LinkVid',
    platform: null,
    synopsis: 'A hostage/terrorist situation aboard a high-speed USRC line — the dramatic irony of a beloved national institution weaponized against the public it serves. LinkVid, the platform with no legacy theatrical obligations, greenlit a premise the major studios considered too politically sensitive.',
    poster: 'cinema_night_train_poster.png',
  },

  // ── DRAMA ──────────────────────────────────────────────────────────────────

  {
    id: 'freedmans-road',
    title: "The Freedman's Road",
    year: '~1913–1914',
    genre: 'Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Vera Hollis',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: 'A thirty-minute narrative film following a Black veteran of the War Between the States returning home to Mississippi. Directed by Vera Hollis — one of the earliest surviving narrative films with a Black protagonist and a Black director.',
    poster: 'cinema_freedmans_road_poster.png',
  },

  {
    id: 'the-gulf',
    title: 'The Gulf',
    year: '~1923',
    genre: 'Melodrama',
    section: 'drama',
    alsoIn: [],
    director: 'Vera Hollis',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Vera Hollis's late-career masterpiece and final major directorial work. A melodrama set in St. Augustine following a woman of mixed heritage navigating the social currents of the Gulf Coast city in the early twentieth century.",
    poster: 'cinema_gulf_poster.png',
  },

  {
    id: 'mourning-dove',
    title: 'The Mourning Dove',
    year: '~1928',
    genre: 'Melodrama',
    section: 'drama',
    alsoIn: ['romance'],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "Marguerite Thibodaux's breakthrough film. A melodrama set in New Orleans during the Caribbean War period — Thibodaux as a young woman navigating love and loss against the backdrop of a city transformed by the conflict.",
    poster: 'cinema_mourning_dove_poster.png',
  },

  {
    id: 'home-water',
    title: 'Home Water',
    year: '~1939',
    genre: 'Home Front Drama',
    section: 'drama',
    alsoIn: ['romance'],
    director: null,
    studio: 'Hollis Studio',
    platform: null,
    synopsis: 'A home front drama following a family with sons overseas. Marguerite Thibodaux in her mature career peak — the film that cemented her reputation as the defining dramatic actress of the Global War era.',
    poster: 'cinema_home_water_poster.png',
  },

  {
    id: 'gold-coast',
    title: 'Gold Coast',
    year: '~1946',
    genre: 'Romantic Drama',
    section: 'drama',
    alsoIn: ['romance'],
    director: null,
    studio: 'Helios Pictures',
    platform: null,
    synopsis: "William Cord's postwar romantic peak — a glossy, beautifully photographed romantic drama making full expressive use of color in a non-epic context. Cord opposite Vivienne Marsh in their first major pairing; the chemistry that would define both their careers immediately apparent.",
    poster: 'cinema_gold_coast_poster.png',
  },

  {
    id: 'marcus-petition',
    title: 'The Marcus Petition',
    year: '~1947',
    genre: 'Historical Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Leon Dupree',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: 'The most politically significant film of the Freeman era. A drama about a Black attorney in the post-War Between the States South fighting a wrongful conviction case — widely read as an allegory for the Nolan administration\'s accommodation of Southern resistance to Reconstruction.',
    poster: 'cinema_marcus_petition_poster.png',
  },

  {
    id: 'quiet-current',
    title: 'The Quiet Current',
    year: '~1950',
    genre: 'Thriller',
    section: 'drama',
    alsoIn: [],
    director: 'David Sterne',
    studio: 'US Studios',
    platform: null,
    synopsis: "The resistance's answer — though it would never call itself that. A psychological thriller following a river boat captain who discovers his first mate has been falsely accused and must decide whether to speak or stay silent. Sterne working in genre cover.",
    poster: 'cinema_quiet_current_poster.png',
  },

  {
    id: 'caribbean-moon',
    title: 'Caribbean Moon',
    year: '~1951',
    genre: 'Romantic Epic',
    section: 'drama',
    alsoIn: ['romance'],
    director: null,
    studio: 'Helios Pictures',
    platform: null,
    synopsis: 'Helios caught in the middle — a lush romantic epic set in the Caribbean in the 1820s. Cord and Marsh in their third and most commercially successful pairing; their screen chemistry at its peak. The film that made Helios the dominant studio of the early color era.',
    poster: 'cinema_caribbean_moon_poster.png',
  },

  {
    id: 'night-side',
    title: 'The Night Side',
    year: '~1952',
    genre: 'Crime Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Leon Dupree',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Leon Dupree's Nolan-era statement. A crime drama — genre cover — set in a Southern city, following a Black detective navigating a corrupt police department. Dupree's most formally controlled film; the anger entirely subsumed into craft.",
    poster: 'cinema_night_side_poster.png',
  },

  {
    id: 'gulf-summer',
    title: 'Gulf Summer',
    year: '~1957',
    genre: 'Melodrama',
    section: 'drama',
    alsoIn: ['romance'],
    director: null,
    studio: 'Helios Pictures',
    platform: null,
    synopsis: "Ida Welles's breakthrough into serious material. A melodrama set in New Orleans following a woman navigating the dissolution of her marriage and the discovery of her own independence. The film that ended Welles's comedic-actress typecast.",
    poster: 'cinema_gulf_summer_poster.png',
  },

  {
    id: 'commander-black',
    title: 'Commander Black',
    year: '~1958',
    genre: 'Biopic',
    section: 'drama',
    alsoIn: [],
    director: 'James Odom',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "James Odom's defining work — a color sound biopic of Joshua Black from his years as a house slave through the founding of the Republic of New Africa and the July 4th emancipation. Odom's direction is monumental without being reverent; the performance at the center is the finest of the era.",
    poster: 'cinema_commander_black_poster.png',
  },

  {
    id: 'fourth-of-july',
    title: 'The Fourth of July',
    year: '~1958',
    genre: 'Political Drama',
    section: 'drama',
    alsoIn: [],
    director: 'David Sterne',
    studio: 'US Studios',
    platform: null,
    synopsis: "David Sterne's centennial film — the six weeks of congressional horse-trading behind the Negro Emancipation Act's passage. Follows a fictional Democratic congressman from Ohio who privately supports emancipation but fears the political cost. Sterne's most direct political statement.",
    poster: 'cinema_fourth_of_july_poster.png',
  },

  {
    id: 'defining-freedom',
    title: 'Defining Freedom',
    year: '~1959',
    genre: 'Reconstruction Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Leon Dupree',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Leon Dupree's reconstruction ensemble — set in New Orleans, 1861–1863. Five characters: a newly elected Black state legislator, his wife managing a freedmen's school, a white Free State officer discovering the gap between the war's stated purpose and its conduct, a freedman building a business, and a Confederate widow choosing which side of history to stand on.",
    poster: 'cinema_defining_freedom_poster.png',
  },

  {
    id: 'long-summer',
    title: 'The Long Summer',
    year: '~1961',
    genre: 'Romantic Drama',
    section: 'drama',
    alsoIn: ['romance'],
    director: null,
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Set in Calumet — the NAU's cosmopolitan hub. A woman in her late twenties navigating the end of one relationship and the beginning of another over a single summer. Character study as genre; the city as supporting cast.",
    poster: 'cinema_long_summer_poster.png',
  },

  {
    id: 'american-boys',
    title: 'American Boys',
    year: 'October 1962',
    genre: 'Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Joseph Tomb',
    studio: 'Helios Pictures',
    platform: null,
    synopsis: "Two soldiers — Thomas Gallant (Benjamin LeCroy) and Peter Strand (Scott Bell) — fall in love in the European theater of the Global War. Gallant had been suppressing his nature his entire life; Strand hadn't. The first major studio film to treat a same-sex relationship as its primary subject without tragedy as the mandatory ending.",
    poster: 'cinema_american_boys_poster.png',
  },

  {
    id: 'benefit-of-the-doubt',
    title: 'The Benefit of the Doubt',
    year: '~1963',
    genre: 'Legal Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Leon Dupree',
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "The first Dupree/Ward collaboration. Ward defends a man accused of a violent crime. He wins. The courtroom as a space where the law's stated principles and its practiced reality are in constant, uncomfortable negotiation.",
    poster: 'cinema_benefit_of_the_doubt_poster.png',
  },

  {
    id: 'season-apart',
    title: 'A Season Apart',
    year: '~1964',
    genre: 'Romantic Drama',
    section: 'drama',
    alsoIn: ['romance'],
    director: null,
    studio: 'Helios Pictures',
    platform: null,
    synopsis: "Set in New Boston — the Pacific Northwest's major city, the NAU's Pacific gateway. A woman choosing between two versions of her life: the stable, conventional path and the uncertain, vital one. The geography is moral as much as physical.",
    poster: 'cinema_season_apart_poster.png',
  },

  {
    id: 'three-days',
    title: 'Three Days',
    year: '~1967',
    genre: 'Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Leon Dupree',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "The second Dupree/Ward collaboration. A death brings a father (Ward) and his adult son together for three days they've been avoiding for years. Dupree's most intimate film; the political almost entirely absent, the personal everything.",
    poster: 'cinema_three_days_poster.png',
  },

  {
    id: 'home-again',
    title: 'Home Again',
    year: '~1968',
    genre: 'Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Ruth Calloway',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Ruth Calloway's debut feature. A woman returns to her Appalachian hometown after decades away for a funeral, and finds herself reckoning with who she left behind and who she became. Calloway's signature register — landscape as emotional presence — fully formed from the first film.",
    poster: 'cinema_home_again_poster.png',
  },

  {
    id: 'waiting-room',
    title: 'The Waiting Room',
    year: '~1971',
    genre: 'Drama',
    section: 'drama',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: 'The Choson War as experienced from a continent away. Families, TC screens, a senator\'s office, a protest outside a government building. The war as absence — what it takes from the home front rather than what it does at the front.',
    poster: 'cinema_waiting_room_poster.png',
  },

  {
    id: 'distance-between-us',
    title: 'The Distance Between Us',
    year: '~1972',
    genre: 'Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Ruth Calloway',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Ruth Calloway's second film. A mother and adult daughter — the generational divide as subject rather than backdrop. Two women who love each other and cannot fully reach each other across the distance of different lives.",
    poster: 'cinema_distance_between_us_poster.png',
  },

  {
    id: 'westbound',
    title: 'Westbound',
    year: '~1975',
    genre: 'Drama',
    section: 'drama',
    alsoIn: ['romance'],
    director: 'Ruth Calloway',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Calloway pushing her aesthetic into less familiar territory — a road film, more formally adventurous than her previous work. A woman in motion, landscape as moral presence. The destination less important than what the journey clarifies.",
    poster: 'cinema_westbound_poster.png',
  },

  {
    id: 'abernathy',
    title: 'Abernathy',
    year: '~1978–1979',
    genre: 'Historical Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Ruth Calloway',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Ruth Calloway's major statement — the dramatization of the Abernathy murder (autumn 1944) and the founding marches. Episcopal priest George Abernathy as the emotional anchor; Jesse Pike as a visible counter-weight. Calloway's most explicitly political film and her most formally ambitious.",
    poster: 'cinema_abernathy_poster.png',
  },

  {
    id: 'together',
    title: 'Together',
    year: '~1981–1982',
    genre: 'Romance',
    section: 'drama',
    alsoIn: ['romance'],
    director: 'Peter Vane',
    studio: 'Hollis Studio',
    platform: null,
    synopsis: "Peter Vane's debut feature. Two women in a contemporary relationship — the marriage equality question present the way a locked door is present, felt without being announced. The film that made Vane the defining voice of queer cinema in the early 1980s.",
    poster: 'cinema_together_poster.png',
  },

  {
    id: 'at-last',
    title: 'At Last',
    year: '~1986–1987',
    genre: 'Romance',
    section: 'drama',
    alsoIn: ['romance'],
    director: null,
    studio: 'Helios Pictures',
    platform: null,
    synopsis: "The cinema's response to marriage equality — a year or two after the fact. Two men. The film that Helios had been too cautious to make a decade earlier, arriving now that the legal question was settled.",
    poster: 'cinema_at_last_poster.png',
  },

  {
    id: 'fat-tuesday',
    title: 'Fat Tuesday',
    year: '~1995–1996',
    genre: 'Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Jules Fontenot',
    studio: 'Gulf Coast Pictures',
    platform: 'delta',
    synopsis: "Jules Fontenot's debut feature. Mardi Gras as dramatic pressure rather than backdrop — the city transformed, normal rules suspended, something coming to a head under the surface of the celebration. The film that launched the Gulf Wave.",
    poster: 'cinema_fat_tuesday_poster.png',
  },

  {
    id: 'long-way-south',
    title: 'The Long Way South',
    year: '~1996–1997',
    genre: 'Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Jesse Cormac',
    studio: 'Gulf Coast Pictures',
    platform: 'delta',
    synopsis: "Jesse Cormac's debut feature. A man from Kanasaw comes to New Orleans; characters from both worlds in conversation; the bridge between them the dramatic engine. Gulf Wave's second major statement.",
    poster: 'cinema_long_way_south_poster.png',
  },

  {
    id: 'november-01',
    title: "November '01",
    year: '~2005–2007',
    genre: 'Political Drama',
    section: 'drama',
    alsoIn: [],
    director: null,
    studio: 'US Studios',
    platform: null,
    synopsis: "The Mercer withdrawal gambit — the public deadline, the summer of nobody believing it, November 7th itself, and the Ottoman about-face. Told from inside the room: an aide or junior diplomat watching the machinery of diplomacy at the moment it either works or doesn't.",
    poster: 'cinema_november_01_poster.png',
  },

  {
    id: 'mare-imbrium',
    title: 'Mare Imbrium',
    year: '2026',
    genre: 'Historical Drama',
    section: 'drama',
    alsoIn: [],
    director: 'Soledad Mendes',
    studio: null,
    platform: null,
    synopsis: "Released for the 50th anniversary of the 1976 moon landing — a prestige historical film about the mission itself, the crew (Curtis Waverly, Owen Stirling, Isabel Carrera, Abner Lyons — Carrera the first woman on the moon), and what it meant to go somewhere no one had gone. In wide release now.",
    poster: 'cinema_mare_imbrium_poster.png',
  },

  // ── HISTORICAL EPIC ────────────────────────────────────────────────────────

  {
    id: 'long-march',
    title: 'The Long March',
    year: '~1917–1918',
    genre: 'Historical Epic',
    section: 'historical',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: 'A War Between the States epic following a Free State regiment from enlistment through the fall of Atlanta. The first film to feel genuinely cinematic in the modern sense — real location photography, crowd scenes of genuine scale, a narrative arc that earns its length.',
    poster: 'cinema_long_march_poster.png',
  },

  {
    id: 'joshua',
    title: 'Joshua',
    year: '~1921',
    genre: 'Biopic',
    section: 'historical',
    alsoIn: [],
    director: 'Samuel Archer',
    studio: 'Independent',
    platform: null,
    synopsis: "A feature-length account of Joshua Black's 1860 Mississippi slave uprising. Directed and independently produced by Samuel Archer, financed through Black investors and Freedmen's community organizations. One of the founding texts of Black American cinema.",
    poster: 'cinema_joshua_poster.png',
  },

  {
    id: 'westward-ho',
    title: 'Westward Ho!',
    year: '~1925–1926',
    genre: 'Pioneer Drama',
    section: 'historical',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "NWP's first commercially successful talkie — a pioneer story set in the 1850s Oregon Country. Edmund Farr leads. The film that established NWP's dominance of the prestige historical genre for the next three decades.",
    poster: 'cinema_westward_ho_poster.png',
  },

  {
    id: 'remember-private-marsh',
    title: 'Remember Private Marsh',
    year: '1936',
    genre: 'War Drama',
    section: 'historical',
    alsoIn: [],
    director: null,
    studio: 'Helios Pictures',
    platform: null,
    synopsis: "The Global War era's defining dramatic film, and the breakout for both William Cord and Helios Pictures. Private Marsh — a natural leader who looks out for the underdog — carries his unit through training and into the European theater. Cord's star-making performance.",
    poster: 'cinema_remember_private_marsh_poster.png',
  },

  {
    id: 'moses',
    title: 'Moses',
    year: '1942',
    genre: 'Biblical Epic',
    section: 'historical',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: 'The first color feature film. A Biblical epic — NWP staking its claim on the new technology with the most ambitious project the studio had attempted. The color process still imperfect, but the scale and ambition undeniable.',
    poster: 'cinema_moses_poster.png',
  },

  {
    id: 'sons-of-liberty',
    title: 'Sons of Liberty',
    year: '~1949',
    genre: 'Historical Epic',
    section: 'historical',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: 'The archetypal Nolan-era accommodationist film. A sweeping American Revolution epic — safe historical subject, unambiguous heroism, gorgeous color cinematography. What NWP made when it wanted no trouble from anyone.',
    poster: 'cinema_sons_of_liberty_poster.png',
  },

  {
    id: 'free-army',
    title: 'The Free Army',
    year: '~1957',
    genre: 'Historical Epic',
    section: 'historical',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "The big commercial centennial epic. Follows the Free Army of the West's campaign from the liberation of Franklin through the fall of Atlanta. Released for the centenary of the War Between the States, it is NWP at its most lavish.",
    poster: 'cinema_free_army_poster.png',
  },

  {
    id: 'galvezport',
    title: 'Galvezport',
    year: '~1971–1972',
    genre: 'Historical Epic',
    section: 'historical',
    alsoIn: [],
    director: 'Mateo Herrera',
    studio: 'Texian-American Co-Production',
    platform: null,
    synopsis: "Mateo Herrera's St. Augustine debut — a historical epic centered on the Gulf Coast port city that became the hinge point of the Caribbean War. Herrera's visual style immediately distinctive: the heat and light of the Gulf as active dramatic elements.",
    poster: 'cinema_galvezport_poster.png',
  },

  {
    id: 'campaign',
    title: 'The Campaign',
    year: '~1972',
    genre: 'Political Drama',
    section: 'historical',
    alsoIn: [],
    director: 'Leon Dupree',
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "The third and final Dupree/Ward collaboration. Ward as a staffer inside a fictional presidential campaign, watching someone he respects make a choice he can't respect. Dupree's farewell to the political film; the most despairing thing he ever made.",
    poster: 'cinema_campaign_poster.png',
  },

  {
    id: 'west-country',
    title: 'The West Country',
    year: '~early-mid 2000s',
    genre: 'Western',
    section: 'historical',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: 'The genre revival NWP needed — "western" in the WBT sense: Oregon Trail-era westward expansion, survival, land, and family rather than gunfights. A multi-generational saga beginning in the 1840s, the landscape itself the through-line.',
    poster: 'cinema_west_country_poster.png',
  },

  // ── WAR FILMS ──────────────────────────────────────────────────────────────

  {
    id: 'signal-corps',
    title: 'The Signal Corps',
    year: '~1929',
    genre: 'War Drama',
    section: 'war',
    alsoIn: [],
    director: null,
    studio: 'US Studios',
    platform: null,
    synopsis: "The first major sound-era war film — a dramatization of the Caribbean War's naval campaign. Less interested in heroism than in the machinery and cost of modern warfare. The sound design — battle noise, radio static, the sea — used expressively rather than realistically.",
    poster: 'cinema_signal_corps_poster.png',
  },

  {
    id: 'courier',
    title: 'The Courier',
    year: '~1933',
    genre: 'Espionage Thriller',
    section: 'war',
    alsoIn: [],
    director: null,
    studio: 'US Studios',
    platform: null,
    synopsis: 'A pre-entry espionage thriller — an American operative in Prussia uncovering military intelligence. Tense, morally grayer than later wartime productions will allow. Made before the Global War began, when the genre could still ask difficult questions.',
    poster: 'cinema_courier_poster.png',
  },

  {
    id: 'guns-of-matanzas',
    title: 'Guns of Matanzas',
    year: '~1938',
    genre: 'Naval Epic',
    section: 'war',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "Edmund Farr's final film, released posthumously — he died early 1938 during post-production. A Caribbean War naval epic. The last of the great silent-era stars; Farr's death during production giving the film an unplanned elegiac quality.",
    poster: 'cinema_guns_of_matanzas_poster.png',
  },

  {
    id: 'long-road-home',
    title: 'Long Road Home',
    year: '~1944',
    genre: "Veterans' Drama",
    section: 'war',
    alsoIn: [],
    director: null,
    studio: 'US Studios',
    platform: null,
    synopsis: "The veterans' cinema landmark. Not a war film — the war is mostly past tense. What it costs to come home; the gap between the person who left and the person who returned; the family that waited and the man they're waiting for.",
    poster: 'cinema_long_road_home_poster.png',
  },

  {
    id: 'iron-meridian',
    title: 'The Iron Meridian',
    year: '~1954',
    genre: 'Global War Epic',
    section: 'war',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "The era's big commercial war epic — set in the Global War's European theater. James Corbin leads as a composite officer: heroic, uncomplicated. NWP giving audiences exactly what they wanted, exactly as well as they knew how to do it.",
    poster: 'cinema_iron_meridian_poster.png',
  },

  {
    id: 'narrow-sea',
    title: 'The Narrow Sea',
    year: '~1969',
    genre: 'War Drama',
    section: 'war',
    alsoIn: [],
    director: null,
    studio: 'Helios Pictures',
    platform: null,
    synopsis: 'The ground-level Choson War film. A small unit of NAU soldiers in the grinding middle of the conflict before the bombing decision changes everything. Helios finding the register between heroism and despair.',
    poster: 'cinema_narrow_sea_poster.png',
  },

  {
    id: 'august',
    title: 'August',
    year: '~1970',
    genre: 'War Drama',
    section: 'war',
    alsoIn: [],
    director: 'David Sterne',
    studio: 'US Studios',
    platform: null,
    synopsis: "David Sterne's Choson War film — the moral reckoning picture. The bombing decision and its aftermath from a civilian and diplomatic angle. Not the soldiers but the people who decided; not the explosion but what came after.",
    poster: 'cinema_august_poster.png',
  },

  {
    id: 'promise-lost',
    title: 'Promise Lost',
    year: '~2003–2005',
    genre: 'War Drama',
    section: 'war',
    alsoIn: [],
    director: null,
    studio: 'Gulf Coast Pictures / Hollis co-production',
    platform: 'delta',
    synopsis: "A small GPC unit, present near the 1998 Ottoman atrocity inside a GPC-protected zone, unable to stop it. Ground-level, gritty, Gulf Wave-adjacent register — the film that gave the era's defining political debate its human face.",
    poster: 'cinema_promise_lost_poster.png',
  },

  {
    id: 'flight-to-frankfurt',
    title: 'Flight to Frankfurt',
    year: '~2004–2006',
    genre: 'Drama',
    section: 'war',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "The 1999 downing of a Delhi-to-Germany civilian airliner — mistaken by Ottoman forces for a GPC military flight — told through the families of the mixed international passenger manifest. NWP-scale ensemble; the disaster as the through-line connecting lives that would never otherwise have intersected.",
    poster: 'cinema_flight_to_frankfurt_poster.png',
  },

  // ── SPECULATIVE HISTORY ────────────────────────────────────────────────────

  {
    id: 'hawthorneland',
    title: 'Hawthorneland',
    year: '1963',
    genre: 'Speculative / Alternate History',
    section: 'spec',
    alsoIn: [],
    director: 'David Sterne',
    studio: 'US Studios',
    platform: null,
    synopsis: 'The film that launches the speculative history / alternate history genre in American cinema. Sterne given an open canvas — the premise deliberately left flexible so the film can be read multiple ways. The genre begins here.',
    poster: 'cinema_hawthorneland_poster.png',
  },

  {
    id: 'tenochtitlan',
    title: 'Tenochtitlan',
    year: '~1967–1968',
    genre: 'Speculative History',
    section: 'spec',
    alsoIn: ['international'],
    director: null,
    studio: 'Californian Co-Production',
    platform: null,
    synopsis: "Part of the post-Hawthorneland spec history wave. Premise: the Aztec Empire successfully resisted Spanish colonization and survives into the modern era. A Californian co-production that drew on the state's deep Mexican cultural heritage.",
    poster: 'cinema_tenochtitlan_poster.png',
  },

  {
    id: 'home-front',
    title: 'The Home Front',
    year: '~1979–1980',
    genre: 'Speculative History',
    section: 'spec',
    alsoIn: [],
    director: null,
    studio: null,
    platform: null,
    synopsis: "The spec history genre's major late-1970s entry — a deliberate wink at the alternate history tradition. Premise: the War Between the States dragged on for a decade without British entry; the 1867 ceasefire left a divided continent. The film the genre had been building toward.",
    poster: 'cinema_home_front_poster.png',
  },

  {
    id: 'house-divided',
    title: 'A House Divided',
    year: '2009',
    genre: 'Speculative History',
    section: 'spec',
    alsoIn: [],
    director: null,
    studio: 'US Studios',
    platform: null,
    synopsis: "The genre's most direct engagement yet with WBT's own point of divergence — and its inverse. Premise: the War of 1812 resolves as it did in our own world, Washington is never burned, and the capital remains on the Potomac. What would America look like?",
    poster: 'cinema_house_divided_poster.png',
  },

  {
    id: 'worlds-at-war-cold-front',
    title: 'Worlds at War: Cold Front',
    year: '~2008–2009',
    genre: 'Speculative History / Science Fiction',
    section: 'spec',
    alsoIn: ['scifi'],
    director: null,
    studio: null,
    platform: null,
    synopsis: "The spec history genre's most ambitious entry yet — an alien invasion during the Global War (~1932–40), launching a new franchise. The title plays on WBT's own avoidance of the term \"World War\" — these are wars between worlds.",
    poster: 'cinema_worlds_at_war_cold_front_poster.png',
  },

  {
    id: 'worlds-at-war-permafrost',
    title: 'Worlds at War: Permafrost',
    year: '~early 2010s',
    genre: 'Speculative History / Science Fiction',
    section: 'spec',
    alsoIn: ['scifi'],
    director: null,
    studio: null,
    platform: null,
    synopsis: "The alternate Global War's brutal climax — the cold-adapted invaders at the peak of their dominance, the conflict's darkest hour before any thaw. The franchise's grimmest entry, setting up everything that follows.",
    poster: 'cinema_worlds_at_war_permafrost_poster.png',
  },

  {
    id: 'worlds-at-war-warm-front',
    title: 'Worlds at War: Warm Front',
    year: '~2020s',
    genre: 'Speculative History / Science Fiction',
    section: 'spec',
    alsoIn: ['scifi'],
    director: null,
    studio: null,
    platform: null,
    synopsis: 'A time-jump to this alternate timeline\'s postwar era — "warm front" works on two levels: a literal climate shift eroding the cold-adapted invaders\' advantage, and a political thaw as humans and aliens begin to find a way to coexist.',
    poster: 'cinema_worlds_at_war_warm_front_poster.png',
  },

  // ── SCIENCE FICTION ────────────────────────────────────────────────────────

  {
    id: 'pale-frontier',
    title: 'The Pale Frontier',
    year: '~1955',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: 'Castillo Pictures',
    platform: null,
    synopsis: "The science fiction genre's arrival as a mainstream commercial proposition. A near-future story about the first human expedition to establish a permanent Moon research station — the fission era's technological optimism made cinematic.",
    poster: 'cinema_pale_frontier_poster.png',
  },

  {
    id: 'quiet-stars',
    title: 'The Quiet Stars',
    year: '~1956',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: 'David Sterne',
    studio: 'US Studios',
    platform: null,
    synopsis: "David Sterne's oblique homophilia film. Two scientists at an isolated research installation develop a profound bond while working on a classified project; discovered by institutional authorities, they face a choice between their work and each other. Science fiction as cover.",
    poster: 'cinema_quiet_stars_poster.png',
  },

  {
    id: 'furthest-frontier',
    title: 'The Furthest Frontier',
    year: '1978',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: 'The major sci-fi film franchise of the post-moon landing era. Opens optimistically — humanity spreading through the solar system, the GPC evolved into a unified Earth governance body, first contact on the horizon.',
    poster: 'cinema_furthest_frontier_poster.png',
  },

  {
    id: 'ff-common-ground',
    title: 'FF: Common Ground',
    year: '~1981–1982',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: "The second Furthest Frontier film. The alien arrival forces Earth/Mars tension into suspension as humanity scrambles to present a unified front. The franchise's first exploration of what unity actually costs.",
    poster: 'cinema_ff_common_ground_poster.png',
  },

  {
    id: 'ff-united-front',
    title: 'FF: United Front',
    year: '~1988–1990',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: "The original trilogy's closer, arriving after a time jump from Common Ground. The uneasy first contact has matured into something more formal — a genuine human-alien alliance, with a governing compact both sides have had to compromise to reach.",
    poster: 'cinema_ff_united_front_poster.png',
  },

  {
    id: 'ash-and-stars',
    title: 'Ash and Stars',
    year: '~1984–1985',
    genre: 'Science Fiction / Fantasy',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'abn',
    synopsis: "Ash and Stars launched on TC ~1968–69 — a serialized fantasy-in-space series following protagonists navigating a galactic empire in decline. A full cultural institution over fifteen years of TC life before the theatrical film arrived.",
    poster: 'cinema_ash_and_stars_poster.png',
  },

  {
    id: 'across-all-time',
    title: 'Across All Time',
    year: '~1991–1992',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: ['international'],
    director: null,
    studio: 'Japanese Production',
    platform: null,
    synopsis: "Japan's major international breakthrough film. Four connected stories across time — pre-modernization Japan, the early republic (~1904–10), the Global War era (~1935–40), and the near-to-medium future — linked by a recurring object and theme of continuity across rupture.",
    poster: 'cinema_across_all_time_poster.png',
  },

  {
    id: 'ff-mission-to-mars',
    title: 'FF: Mission to Mars',
    year: '~2003–2004',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: "The founding mission — humanity's first permanent Mars colony, the GPC-evolved Earth government at its most optimistic. Sets up everything the original trilogy takes for granted: how Mars came to be settled, and by whom.",
    poster: 'cinema_ff_mission_to_mars_poster.png',
  },

  {
    id: 'ff-red-home',
    title: 'FF: Red Home',
    year: '~2005–2006',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: "Mars grows — and a generation born on Mars rather than Earth starts asking what \"home\" means and who gets to decide their future. The sovereignty/integration tension that defines the original trilogy's central conflict.",
    poster: 'cinema_ff_red_home_poster.png',
  },

  {
    id: 'ff-the-voyagers',
    title: 'FF: The Voyagers',
    year: '~2007–2008',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: "The trilogy's structural surprise — an entire film from the alien perspective, following their long journey toward the Sol system. Not villains, not invaders in any simple sense — travelers, with their own logic and their own losses.",
    poster: 'cinema_ff_the_voyagers_poster.png',
  },

  {
    id: 'ff-new-contact',
    title: 'FF: New Contact',
    year: '~2020s',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: "The alliance's first diplomatic overture to a newly encountered civilization — refused. Not hostility for its own sake: this second species has its own coherent reasons for staying outside the compact, and the film gives them full weight.",
    poster: 'cinema_ff_new_contact_poster.png',
  },

  {
    id: 'ff-divided-ground',
    title: 'FF: Divided Ground',
    year: '~2020s',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: "Conflict over territory both civilizations claim — the trilogy's escalation, echoing Common Ground's title with its opposite meaning. The alliance's unity, hard-won in the original trilogy, is tested by a dispute neither side can afford to lose.",
    poster: 'cinema_ff_divided_ground_poster.png',
  },

  {
    id: 'ff-new-front',
    title: 'FF: New Front',
    year: '~2020s',
    genre: 'Science Fiction',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'jubilee',
    synopsis: 'Resolution — not full alliance, but an uneasy coexistence the alliance and the new civilization both have to maintain rather than simply achieve. Echoes United Front without claiming the same unity; the frontier remains open.',
    poster: 'cinema_ff_new_front_poster.png',
  },

  {
    id: 'ash-and-stars-eclipse',
    title: 'Ash and Stars: Eclipse',
    year: '~2020s',
    genre: 'Science Fiction / Fantasy',
    section: 'scifi',
    alsoIn: [],
    director: null,
    studio: null,
    platform: 'abn',
    synopsis: "One of the three or four new space nations born from A New Dawn's collapse has grown into something that looks like the answer to everything — stability, unity, prosperity. It's quietly authoritarian, and the protagonists are beginning to notice.",
    poster: 'cinema_ash_and_stars_eclipse_poster.png',
  },

  // ── HORROR ─────────────────────────────────────────────────────────────────

  {
    id: 'he-comes-at-night',
    title: 'He Comes at Night',
    year: '~late 1920s–1930s',
    genre: 'Horror',
    section: 'horror',
    alsoIn: [],
    director: null,
    studio: 'Castillo Pictures',
    platform: null,
    synopsis: "The cycle's vampire picture — atmospheric, shadow-heavy, a European predator arriving in an American gothic setting. Establishes the visual vocabulary (candlelight, fog, silhouette) that defines the Castillo horror cycle.",
    poster: 'cinema_he_comes_at_night_poster.png',
  },

  {
    id: 'moon-changer',
    title: 'Moon Changer',
    year: '~1930s',
    genre: 'Horror',
    section: 'horror',
    alsoIn: [],
    director: null,
    studio: 'Castillo Pictures',
    platform: null,
    synopsis: "The cycle's werewolf picture — transformation as tragedy rather than spectacle, the Code-era restraint working in the film's favor. The \"monster\" is sympathetic; the horror is in the loss of self rather than the threat to others.",
    poster: 'cinema_moon_changer_poster.png',
  },

  {
    id: 'the-drowned',
    title: 'The Drowned',
    year: '~1930s–1940s',
    genre: 'Horror',
    section: 'horror',
    alsoIn: [],
    director: null,
    studio: 'Castillo Pictures',
    platform: null,
    synopsis: "The cycle's most distinctly WBT entry — a revenant tied to the Mississippi or Ohio River, drowned and returned. Geographically and culturally rooted in the river-valley gothic tradition that the WBT's deeper river culture produced.",
    poster: 'cinema_drowned_poster.png',
  },

  {
    id: 'what-calls-in-hunger',
    title: 'What Calls in Hunger',
    year: '~1930s–1940s',
    genre: 'Horror',
    section: 'horror',
    alsoIn: [],
    director: null,
    studio: 'Castillo Pictures',
    platform: null,
    synopsis: "The cycle's fourth entry, drawing on Wendigo mythology (Algonquian-speaking peoples) — a figure that, given over a century of deeper integration since 1861, had entered the broader American folkloric imagination.",
    poster: 'cinema_what_calls_in_hunger_poster.png',
  },

  {
    id: 'dead-air',
    title: 'Dead Air',
    year: '~late 1960s–early 1970s',
    genre: 'Horror',
    section: 'horror',
    alsoIn: [],
    director: 'Margaret Ashby',
    studio: 'Helios Pictures',
    platform: null,
    synopsis: "A person alone with recording equipment — audiograph or early radio apparatus — begins capturing something on tape that shouldn't be there. The dread is entirely auditory: listening, replaying, never quite sure what is being heard.",
    poster: 'cinema_dead_air_poster.png',
  },

  {
    id: 'harvest',
    title: 'Harvest',
    year: '~2020s',
    genre: 'Horror',
    section: 'horror',
    alsoIn: [],
    director: null,
    studio: null,
    platform: null,
    synopsis: 'Isolated family/farm, seasonal and agricultural dread — "something is being harvested" carries a double meaning beyond the crops. Solitary, claustrophobic register.',
    poster: 'cinema_harvest_poster.png',
  },

  {
    id: 'the-gathering',
    title: 'The Gathering',
    year: '~2020s',
    genre: 'Horror',
    section: 'horror',
    alsoIn: [],
    director: null,
    studio: null,
    platform: null,
    synopsis: "A community event — reunion, festival, or religious gathering — where something goes wrong. Communal/social dread, the inverse register from Harvest's isolation.",
    poster: 'cinema_gathering_poster.png',
  },

  // ── ANIMATION ──────────────────────────────────────────────────────────────

  {
    id: 'hansel-and-gretel',
    title: 'Hansel and Gretel',
    year: '~1932',
    genre: 'Animated Feature',
    section: 'animation',
    alsoIn: [],
    director: 'Lauretta Parker',
    studio: 'Parker Studios',
    platform: 'jubilee',
    synopsis: "The first animated feature film. Lauretta Parker had been developing it for years before the Global War began — release coinciding with the war's outbreak was circumstance, not calculation. The film that proved animation could sustain a feature-length narrative.",
    poster: 'cinema_hansel_and_gretel_poster.png',
  },

  {
    id: 'private-brent',
    title: 'Private Brent',
    year: '~1936',
    genre: 'Animated Short',
    section: 'animation',
    alsoIn: [],
    director: null,
    studio: 'Parker Studios',
    platform: 'jubilee',
    synopsis: 'The beloved wartime Brent Bunny short. Brent drafted — comedic basic training — never shipped overseas, never seen in combat. Parker keeping the character away from the front by instinct and by principle.',
    poster: 'cinema_private_brent_poster.png',
  },

  {
    id: 'twelve-princesses',
    title: 'The Twelve Princesses',
    year: '~1943',
    genre: 'Animated Feature',
    section: 'animation',
    alsoIn: [],
    director: null,
    studio: 'Parker Studios',
    platform: 'jubilee',
    synopsis: "Parker Studios' first color animated feature — arriving a year after Moses, Parker moving quickly to stake her claim in the color era. A fairy-tale adaptation that set the visual standard for the color animated feature.",
    poster: 'cinema_twelve_princesses_poster.png',
  },

  {
    id: 'grandmothers-garden',
    title: "Grandmother's Garden",
    year: '~2020s',
    genre: 'Animation — Hand-Crafted',
    section: 'animation',
    alsoIn: ['international'],
    director: 'Kenji Aoyama',
    studio: 'Tsukikage',
    platform: null,
    synopsis: "Building on Across All Time's 1991–92 breakthrough, Japanese animation develops its own distinctive hand-crafted tradition — Tsukikage (\"moon shadow\"), founded by director Kenji Aoyama, achieves major international recognition with this film.",
    poster: 'cinema_grandmothers_garden_poster.png',
  },

  // ── INTERNATIONAL CINEMA ───────────────────────────────────────────────────

  {
    id: 'das-volk-spricht',
    title: 'Das Volk Spricht',
    year: '~1993–1994',
    genre: 'Historical Drama',
    section: 'international',
    alsoIn: [],
    director: null,
    studio: 'German Republic',
    platform: null,
    synopsis: "The German Republic's major international breakthrough film. A dramatization of the 1938 democratic revolution — the mass protests, the parliamentary collapse, the King's abdication, the republic proclaimed. The German film industry finding its defining subject.",
    poster: 'cinema_das_volk_spricht_poster.png',
  },

  // ── ROMANCE ────────────────────────────────────────────────────────────────

  {
    id: 'hesperia',
    title: 'Hesperia',
    year: '2003',
    genre: 'Historical Romance',
    section: 'romance',
    alsoIn: [],
    director: null,
    studio: 'New World Pictures',
    platform: 'jubilee',
    synopsis: "The SS Hesperia (Continental Steamship Company, 49,200 gross tons, quadruple screw) set a new American transatlantic speed record on its maiden voyage in April 1913 — four days, eighteen hours. A romantic drama set aboard the crossing, the ship's luxury and speed the backdrop for a story about what people carry across oceans.",
    poster: 'cinema_hesperia_poster.png',
  },

];

// ── SECTION METADATA (for films.html section headers) ──────────────────────
const LV_SECTIONS = [
  { id: 'originals',      label: 'LinkVid Originals' },
  { id: 'drama',          label: 'Drama' },
  { id: 'historical',     label: 'Historical Epic' },
  { id: 'war',            label: 'War Films' },
  { id: 'spec',           label: 'Speculative History' },
  { id: 'scifi',          label: 'Science Fiction' },
  { id: 'horror',         label: 'Horror' },
  { id: 'animation',      label: 'Animation' },
  { id: 'international',  label: 'International Cinema' },
  { id: 'romance',        label: 'Romance' },
];

// ═════════════════════════════════════════════════════════════════════════════
// ── SHUFFLED POOLS (computed once on page load) ──
// Each pool uses a different seed offset so picks don't correlate across sections.
// ═════════════════════════════════════════════════════════════════════════════

const _WIRE_STORIES_S   = seededShuffle(WIRE_STORIES,   SEED);

const _FO_NATIONAL_S    = seededShuffle(FO_NATIONAL,    SEED + 1);
const _FO_WORLD_S       = seededShuffle(FO_WORLD,       SEED + 2);

const _ABN_CARDS_S      = seededShuffle(ABN_CARDS,      SEED + 4);
const _ABN_WORLD_S      = seededShuffle(ABN_WORLD,      SEED + 5);
const _ABN_MOSTREAD_S   = seededShuffle(ABN_MOSTREAD,   SEED + 6);

const _FO_EXCLUSIVES_S  = seededShuffle(FO_EXCLUSIVES,  SEED + 18);
const _ABN_EXCLUSIVES_S = seededShuffle(ABN_EXCLUSIVES, SEED + 19);

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

// Wire stories — the lead of the day is always a wire story, shared across
// the Franklin Observer and ABN News. Two additional wire stories are also
// picked for secondary placement so both sites have more shared backbone
// to draw from if needed.
const WIRE_LEAD_TODAY      = _WIRE_STORIES_S[0];
const WIRE_SECONDARY_TODAY = _WIRE_STORIES_S.slice(1, 3);

// Franklin Observer
// FO_LEAD_TODAY is the .fo rendering of the day's wire lead -- this gives
// the Observer its full-article treatment (byline, body paragraphs, etc).
const FO_LEAD_TODAY     = WIRE_LEAD_TODAY.fo;
const FO_NATIONAL_TODAY = _FO_NATIONAL_S.slice(0, 3);
const FO_WORLD_TODAY    = _FO_WORLD_S.slice(0, 3);

// ABN News
// ABN_LEAD_TODAY is the .abn rendering of the SAME wire lead story --
// this is what keeps the Observer and ABN aligned on the day's biggest story
// while still sounding like themselves.
const ABN_LEAD_TODAY     = WIRE_LEAD_TODAY.abn;
const ABN_CARDS_TODAY    = _ABN_CARDS_S.slice(0, 3);
const ABN_WORLD_TODAY    = _ABN_WORLD_S.slice(0, 3);
const ABN_MOSTREAD_TODAY = _ABN_MOSTREAD_S.slice(0, 4);

const ABN_TICKER_TODAY = [
  ABN_LEAD_TODAY.hed,
  ..._ABN_CARDS_S.slice(0, 3).map(c => c.hed),
  ..._ABN_WORLD_S.slice(0, 3).map(w => w.hed),
].filter((v, i, a) => a.indexOf(v) === i); // deduplicate

// Site-exclusive picks -- FO_EXCLUSIVE_TODAY and ABN_EXCLUSIVE_TODAY pull from
// each site's own independent pool (no wire-story counterpart). Useful for
// filling secondary story slots beyond the shared wire lead.
const FO_EXCLUSIVE_TODAY  = _FO_EXCLUSIVES_S[0];
const ABN_EXCLUSIVE_TODAY = _ABN_EXCLUSIVES_S[0];

// Washington House
// If the day's wire lead has a .wh tie-in (statement + briefing item), it
// takes priority by being woven into the regular WH_STATEMENT/BRIEFING picks
// below. Otherwise WH draws from its own independent pools as usual.
// Dates are generated dynamically (see pseudoRandomDaysAgo/formatDaysAgoDate
// above) rather than stored as fixed strings, so the page never looks stale
// no matter when it's actually viewed.
const WH_STATEMENT_TODAY = WIRE_LEAD_TODAY.wh
  ? { label: 'Statement from the President', text: WIRE_LEAD_TODAY.wh.statement, attr: '— President Nakamura · Office of Communications' }
  : { ..._WH_STATEMENTS_S[0] };
WH_STATEMENT_TODAY.date = formatDaysAgoDate(pseudoRandomDaysAgo(SEED, 0));

const WH_BRIEFING_TODAY = (WIRE_LEAD_TODAY.wh
  ? [{ title: WIRE_LEAD_TODAY.wh.briefing }, ..._WH_BRIEFING_S.slice(0, 2)]
  : _WH_BRIEFING_S.slice(0, 3)
).map((b, i) => ({
  title: b.title,
  meta: 'Office of the Press Secretary · ' + formatDaysAgoDate(pseudoRandomDaysAgo(SEED, i + 1))
}));

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

// Each Waymark headline must link to a page where that exact story actually
// renders. The lead always comes from WIRE_LEAD_TODAY (which both FO and ABN
// display). Everything else pulls from FO_NATIONAL_TODAY / FO_WORLD_TODAY,
// which are the pools the Observer page itself renders -- so clicking
// through always lands on a page that actually contains the story shown.
const WAYMARK_HEADLINES = [
  {
    type: 'lead',
    tag:  WIRE_LEAD_TODAY.waymark.tag,
    hed:  WIRE_LEAD_TODAY.waymark.hed,
    dek:  WIRE_LEAD_TODAY.abn.dek,
    meta: WIRE_LEAD_TODAY.abn.meta,
    link: './nodes/abn/'
  },
  {
    type: 'story',
    tag:  FO_LEAD_TODAY.label,
    hed:  FO_LEAD_TODAY.hed,
    dek:  FO_LEAD_TODAY.dek,
    meta: 'Franklin Observer · ' + bylineCity(FO_LEAD_TODAY.byline),
    link: './nodes/franklin-observer/'
  },
  {
    type: 'story',
    tag:  FO_NATIONAL_TODAY[0].label || 'national',
    hed:  FO_NATIONAL_TODAY[0].hed,
    dek:  FO_NATIONAL_TODAY[0].dek,
    meta: FO_NATIONAL_TODAY[0].meta,
    link: './nodes/franklin-observer/'
  },
  {
    // Only search within FO_NATIONAL_TODAY (the 3 items actually rendered
    // on the Observer page today) -- searching the full shuffled pool would
    // risk linking to a USRC story that exists but isn't on today's page.
    // Tag is derived from whichever story actually gets picked, rather than
    // hardcoded to 'rail', since the fallback may pick a non-rail story.
    type: 'story',
    tag:  (FO_NATIONAL_TODAY.find(s => s.hed.includes('USRC')) || FO_NATIONAL_TODAY[1]).hed.includes('USRC') ? 'rail' : 'national',
    hed:  (FO_NATIONAL_TODAY.find(s => s.hed.includes('USRC')) || FO_NATIONAL_TODAY[1]).hed,
    dek:  (FO_NATIONAL_TODAY.find(s => s.hed.includes('USRC')) || FO_NATIONAL_TODAY[1]).dek,
    meta: (FO_NATIONAL_TODAY.find(s => s.hed.includes('USRC')) || FO_NATIONAL_TODAY[1]).meta,
    link: './nodes/franklin-observer/'
  },
  {
    type: 'story',
    tag:  FO_WORLD_TODAY[0].label,
    hed:  FO_WORLD_TODAY[0].hed,
    dek:  FO_WORLD_TODAY[0].dek,
    meta: FO_WORLD_TODAY[0].meta,
    link: './nodes/franklin-observer/'
  }
];
