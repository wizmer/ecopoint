import type { Ecopoint } from "./types/ecopoint";
import { Mode } from "./types/itinerary";

export const ecopoints: Ecopoint[] = [
		{
			title: 'Climbing trip to Valle Maggia (Switzerland) by public transport',
            slug: 'climbing-trip-to-valle-maggia-switzerland-by-public-transport',
			summary: 'Ticino is wonderful. In autumn, winter and spring its cold and warm enough for bouldering, climbing, hiking, biking (even in summer one can climb in the shadow, if somewhat heat-resistant). It’s beautiful, and greatly developed in terms of public transport. There are lots of buses to the different valleys. Sometimes, while in front of the Gotthard tunnel cars are being stuck in traffic jams for hours, I race past it by train in peace and quiet (yes, all quiet – in Swiss trains you can mostly almost hear a needle drop…). Whenever I get out of the Gotthard, I’m blinded by the dazzling light, and then I see the lovely landscape, the green, wooded hills, the high mountains in the background – and I’m glad to be back here, and eager to go climbing. The famous Valle Maggia, close to Locarno, meanders deep into the mountains. For ecopoint climbing, it is perfect. There is a vast variety of different climbing styles and types – from slabs to steep overhangs and from trad to sport and multi-pitch climbing you can find almost everything – and almost everything is reachable by train and bus.',
			sections: {
				howToGetThere:
					'From <strong>Zurich</strong> you travel by train to <strong>Bellinzona</strong> (depending on the connection via Arth-Goldau), then to <strong>Locarno</strong>, where you switch to the bus which takes you directly to <strong>Avegno</strong> in the Valle Maggia (travel time in total: 2:30 h).',
				whereToStay: `If you stay at a campground, in a hotel or hostel taking part in the project “<a href="https://www.ticino.ch/en/ticket.html" target="_blank" rel="noopener">Ticino Ticket</a>”, you can use public transport for free.<br clear="none">
<br clear="none">
In <a href="https://www.camping-piccoloparadiso.com/en/" target="_blank" rel="noopener">Avegno</a> and <a href="https://www.tcs.ch/en/camping-travelling/camping-insider/campsites/tcs-campsites/campsite-gordevio-maggiatal.php" target="_blank" rel="noopener">Gordevio</a> for example, there are <strong>campgrounds</strong> from which you can even walk to different climbing crags (e.g. to Torbeccio in ca. 20 min., or to Ponte Brolla in ca. 30 min., or take the bus to other crags in the valley). You have to look in detail on how long the travel time from your overnight stay to the different climbing areas will be.<br clear="none">
<br clear="none">
Unfortunately, the campgrounds in Ticino are closed in winter. But you could have a look at Airbnb or conventional holiday home websites (lots of conventional holiday accommodations take part in the Ticino Ticket Project) and find a place where to stay in Valle Maggia, Centovalli, Locarno, or Losone. You might find a beautiful old stone house =). Even if you only find an accommodation in Locarno, you can still quite easily go climbing in Valle Maggia (20 min. bus ride to Avegno, 45 min. to Cevio) or even in the Valle Onsernone (e.g. 50 min. bus ride to Russo).`,
				howToReachCrags: `If you stay somewhere between Locarno and the end of the Valle Maggia: The <a href="https://fartiamo.ch/wp-content/uploads/2022/12/62.315.pdf" target="_blank" rel="noopener">bus</a> from e.g. Locarno (and other stops on the line) leaves every 30 min. Depending on where you want to climb, the ride from Locarno takes between 20 min. (Avegno) to 60 min. (Linescio, switch bus in Cevio).<br clear="none">
<br clear="none">
For example, you can go to Ponte Brolla and climb in the east sector (sport climbing), where the routes are already quite polished, but still beautiful. The difficulties range between 5a to 8b. Just around the corner is the sector Castelliere with lots of easy multi-pitch climbing. Or you can go to Avegno, Torbeccio, a climbing crag with multi-pitches and three sport climbing sectors (6b-8b). You can also get on the bus to the Valle Maggia – which takes you to the different crags with all kinds of difficulties and styles, e.g. Someo, Cevio, Linescio and so on. The approach to the crags from the bus stops ranges between 10 – 30 min.`,
				tips: `Beside the crags mentioned above, there are lots of other climbing crags in the area. And in addition, there are some <strong>boulder</strong> areas: directly in Avegno you can find great, but hard boulders in all difficulties; Brione is a famous boulder area, which you can reach from Locarno in 55 min (train to Tenero, then bus to Brione. Attention: Sometimes the bus can get quite crowded, so you might want to put your crashpad in the cargo space of the bus).<br clear="none">
<br clear="none">
<strong>Supermarkets</strong> can be found in Locarno (there is only a small kiosk by the train station) and in the villages Maggia and Cevio.<br clear="none">
<br clear="none">
For <strong>rest days</strong>, I recommend hiking or spending the day at the riverside of the Maggia. In Ponte Brolla, there are beautiful cliffs for cliff jumping, if you are keen on some adrenaline kick=). And if you enjoy strolling through the old villages, you will discover that every one of them is different from the others and tells us something about the long history of people living in remote places under harsh conditions in winter and great heat in summer, tending sheep, cows, and goats on steep slopes, living on subsistence farming.<br clear="none">
<br clear="none">
<strong>Attention</strong>: Sometimes, when the weather is bad in the north of the alps or when it's a holiday weekend, trains and buses can get pretty crowded. So, you might want to plan your train/bus ride at times of lower rush (off-peak hours).`,
				howToBook: `<strong>From Switzerland</strong>: You can book the trip via the <a href="https://www.sbb.ch/en/home.html" target="_blank" rel="noopener">SBB website</a>. It might be useful to download the SBB-App (you can pay by credit card), which might be handier than the website. In buses, you have to pay in cash.<br clear="none">
<br clear="none">
<strong>From Germany</strong>: You can book your trip to Locarno via the <a href="https://www.bahn.com/en" target="_blank" rel="noopener">DB website</a> or App. You can have a look at the Austrian train website (<a href="https://shop.oebbtickets.at/en/ticket" target="_blank" rel="noopener">ÖBB</a>) and check a combination of DB and ÖBB tickets to get a cheaper ticket. From Locarno to your destination, you can buy the ticket via the SBB website/App or at a vending machine in Locarno / from the bus driver.<br clear="none">
<br clear="none">
<strong>From Austria</strong>: You can book your trip on the <a href="https://shop.oebbtickets.at/en/ticket" target="_blank" rel="noopener">ÖBB website</a> or App. If you plan in advance, there are often pretty cheap “Sparschiene”-tickets (e.g. trip to Locarno from Innsbruck/Bregenz: EUR 30.–). From Locarno to your destination, you can buy the ticket via the SBB website/App or at a vending machine in Locarno / from the bus driver.<br clear="none">
<br clear="none">
If you stay on a campground, in a hotel or hostel taking part in the project “<a href="https://www.ticino.ch/en/ticket.html" target="_blank" rel="noopener">Ticino Ticket</a>”, you can use public transport for free after arrival.<br clear="none">
<br clear="none">
If you plan to travel more often to/in Switzerland, you might want to buy a “<a href="https://www.sbb.ch/en/travelcards-and-tickets/railpasses/half-fare-travelcard.html" target="_blank" rel="noopener">Half Fare Travelcard</a>”, which costs CHF 185, but then cuts prices by half. Attention: Plan the purchase in advance – cf. registration/ identification process etc.`,
				author: `<a href="https://www.linkedin.com/in/theresa-koim-23033617a/" target="_blank" rel="noopener">Theresa Koim</a>`,
				gallery: {
					images: [
						{
							title: 'Cover picture Theresa climbing in Valle Maggia',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/Cover-picture-Theresa-climbing-in-Valle-Maggia-c-Lena-Muller-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/cover-picture-theresa-climbing-in-valle-maggia-c-lena-muller/',
							credit: '(c) Lena Müller'
						},
						{
							title: 'Look at the lago Maggiore from the train',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/Look-at-the-lago-Maggiore-from-the-train-c-Theresa-Koim-300x300.jpeg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/look-at-the-lago-maggiore-from-the-train-c-theresa-koim/',
							credit: '(c) Theresa Koim'
						},
						{
							title: 'On the way to Linescio',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/On-the-way-to-Linescio-c-Theresa-Koim-300x300.jpeg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/on-the-way-to-linescio-c-theresa-koim/',
							credit: '(c) Theresa Koim'
						},
						{
							title: 'The coziest train - FART',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/The-coziest-train-FART-c-Theresa-Koim-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/the-coziest-train-fart-c-theresa-koim/',
							credit: '(c) Theresa Koim'
						},
						{
							title: 'Valle Maggia',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/Valle-Maggia-c-Lena-Muller-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/valle-maggia-c-lena-muller/',
							credit: '(c) Lena Müller'
						},
						{
							title: 'Approaching the crag via the Maggia river',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/Approaching-the-crag-via-the-Maggia-river-c-Lena-Muller-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/approaching-the-crag-via-the-maggia-river-c-lena-muller/',
							credit: '(c) Lena Müller'
						}
					]
				}
			},
			facts: {
				approach: ['Train', 'Bus'],
				nearestStation: 'Locarno',
				accommodation: ['Camping', 'Apartment'],
				climbingTypes: ['Trad Climbing', 'Sport Climbing', 'Bouldering', 'Multipitch'],
				difficulty: '3b-8c+',
				rock: 'Gneiss',
				bestMonths: ['January', 'February', 'March', 'April', 'May', 'October', 'November', 'December'],
				topoLink: 'https://www.thecrag.com/en/climbing/switzerland/alpen/tessin/valle-maggia'
			},
			itinerary : {
				totalDuration: 150,
					legs: [
						{
							mode: Mode.Train,
							duration: 60, // estimated
							from: {
								name: "Zurich",
								lat: 47.3769,
								lon: 8.5417
							},
							to: {
								name: "Bellinzona",
								lat: 46.1957,
								lon: 9.0238
							}
						},
						{
							mode: Mode.Train,
							duration: 30, // estimated
							from: {
								name: "Bellinzona",
								lat: 46.1957,
								lon: 9.0238
							},
							to: {
								name: "Locarno",
								lat: 46.1695,
								lon: 8.7927
							}
						},
						{
							mode: Mode.Bus,
							duration: 20,
							from: {
								name: "Locarno",
								lat: 46.1695,
								lon: 8.7927
							},
							to: {
								name: "Avegno",
								lat: 46.2082,
								lon: 8.7477
							}
						}
					]
				},
			approaches: [
				{
					totalDuration: 30,
					legs: [
						{
							mode: Mode.Walk,
							duration: 20,
							from: {
								name: "Avegno",
								lat: 46.2082,
								lon: 8.7477
							},
							to: {
								name: "Torbeccio Crag",
								lat: 46.2125,
								lon: 8.7453
							}
						}
					]
				},
				{
					totalDuration: 30,
					legs: [
						{
							mode: Mode.Walk,
							duration: 30,
							from: {
								name: "Avegno",
								lat: 46.2082,
								lon: 8.7477
							},
							to: {
								name: "Ponte Brolla Crag",
								lat: 46.1903,
								lon: 8.7516
							}
						}
					]
				},
				{
					totalDuration: 60,
					legs: [
						{
							mode: Mode.Bus,
							duration: 45,
							from: {
								name: "Locarno",
								lat: 46.1695,
								lon: 8.7927
							},
							to: {
								name: "Cevio",
								lat: 46.3191,
								lon: 8.6016
							}
						},
						{
							mode: Mode.Walk,
							duration: 15,
							from: {
								name: "Cevio",
								lat: 46.3191,
								lon: 8.6016
							},
							to: {
								name: "Cevio Crag",
								lat: 46.3209,
								lon: 8.5983
							}
						}
					]
				}
			]
		},
		{
			title: 'Climbing trip to Bohuslän (Sweden) by train and bike',
            slug: 'climbing-trip-to-bohuslan-sweden-by-train-and-bike',
			summary: 'Bohuslän, the Swedish Mecca of trad climbing, boasts the best granite between Lofoten and Chamonix, and is conveniently located right in the middle of these two. The Bohuslän crags range from beginnner-friendly to some of the hardest lines in Scandinavia. The crags are densely distributed throughout the region, which is easily reached by train. Bus transport is sparse and infrequent, so bringing a bike makes the trip a lot easier.',
			sections: {
				howToGetThere: `I started from Copenhagen, taking the Øresundståg to Gothenburg (4h), changing to the Västtrafik train towards Strømstad. Depending on accomodation, you'll want to get off in Munkedal (1h18m) or Dingle (1h27m). You can also take a more frequent train to Uddevalla but this makes for a longer ride. Both of these trains are covered on an Interrail ticket.<br clear="none">
<br clear="none">
Bringing the bike on the train is thankfully super easy! On the Øresundståg to Gothenburg, there are dedicated bike carriages with seats adjacent. Bringing a bike is free on the Øresundståg but technically not between Copenhagen and Malmö. Likewise bringing the bike is free on the Västtrafik trains but not on all Swedish trains, so be aware of this if you want a different connection.`,
				whereToStay: `There are two main places to stay:<br clear="none">
<br clear="none">
The Bohusläns Climbing Club's hut - see also here. The Climbers' hut offers an indoor area, beds to sleep (bring your own sleeping bag) and a large area for van- or tent-based camping. The Club recommends pitching your tent here if you're planning to camp, to reduce traffic around the crags, which are privately owned by the local farmers.<br clear="none">
<br clear="none">
The Häller Climbing Camping is close to the Häller and Hallinden crags and provide warm showers and a guest house with rooms available.<br clear="none">
<br clear="none">
AirBnBs and the like are also available in the area for the more luxury-focused. See here (Swedish).`,
				howToReachCrags: `From the Häller camping, reaching the Häller crag is a 2-minute walk. The Hallinden Crag is a 15 minute bike ride away, and Hallindens Clack a bit further at 20 minutes. Reaching the Galgeberget crag is a 30-minute bike ride from the camping. From the Club Hut, the closest crags are Valseröd and Änghagen, both accessible within 25 minutes by bike.`,
				tips: `There is a small supermarket, Tempo, in Bro, close to the Häller camping and crag. Otherwise the closest big supermarkets are by the train stations.<br clear="none">
<br clear="none">
At Häller there is a fair bit of bouldering - see Gryttr for boulders.<br clear="none">
<br clear="none">
Other good rest day activities are taking a swim in the fjords (in the evenings you might catch phosphorescent algae if you're lucky).`,
				howToBook: `You can use an Interrail ticket on this journey. No seat reservation is necessary. Otherwise, buying the tickets can be done with the Skånetrafik (to Gothenburg) and Västtrafik (the remainder) websites or apps. Alternatively the SJ website and app can be used.`,
				author: 'Magnus Sletfjerding',
				gallery: {
					images: [
						{
							title: 'Departure from Copenhagen',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2024/12/20240531_112950-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/climbing-trip-to-bohuslan-sweden/20240531_112950/',
							credit: '(c) Magnus Sletfjerding'
						},
						{
							title: 'The loaded bike at Dingle station',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2024/12/20240505_181001-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/climbing-trip-to-bohuslan-sweden/20240505_181001/',
							credit: '(c) Magnus Sletfjerding'
						},
						{
							title: 'A view of Masken, the great Bohus test piece for finger-jamming',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2024/12/20240908_121529-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/climbing-trip-to-bohuslan-sweden/20240908_121529/',
							credit: '(c) Magnus Sletfjerding'
						}
					]
				}
			},
			facts: {
				approach: ['Train', 'Bike'],
				nearestStation: 'Gothenburg',
				accommodation: ['Camping', 'Apartment', 'Hostel'],
				climbingTypes: ['Trad Climbing', 'Sport Climbing', 'Bouldering'],
				difficulty: '4a-9a',
				rock: 'Granite',
				bestMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				topoLink: 'Click to open...'
			},
			itinerary: {
				totalDuration: 333,
				legs: [
					{
						mode: Mode.Train,
						duration: 240,
						from: {
							name: "Copenhagen",
							lat: 55.6761,
							lon: 12.5683
						},
						to: {
							name: "Gothenburg",
							lat: 57.7089,
							lon: 11.9746
						}
					},
					{
						mode: Mode.Train,
						duration: 78,
						from: {
							name: "Gothenburg",
							lat: 57.7089,
							lon: 11.9746
						},
						to: {
							name: "Dingle",
							lat: 58.5254,
							lon: 11.5781
						}
					},
					{
						mode: Mode.Bike,
						duration: 15,
						from: {
							name: "Dingle",
							lat: 58.5254,
							lon: 11.5781
						},
						to: {
							name: "Häller Climbing Camping",
							lat: 58.4833,
							lon: 11.5667
						}
					}
				]
			},
			approaches: [
				{
					totalDuration: 2,
					legs: [
						{
							mode: Mode.Walk,
							duration: 2,
							from: {
								name: "Häller Climbing Camping",
								lat: 58.4833,
								lon: 11.5667
							},
							to: {
								name: "Häller Crag",
								lat: 58.4831,
								lon: 11.5672
							}
						}
					]
				},
				{
					totalDuration: 15,
					legs: [
						{
							mode: Mode.Bike,
							duration: 15,
							from: {
								name: "Häller Climbing Camping",
								lat: 58.4833,
								lon: 11.5667
							},
							to: {
								name: "Hallinden Crag",
								lat: 58.4917,
								lon: 11.5750
							}
						}
					]
				},
				{
					totalDuration: 30,
					legs: [
						{
							mode: Mode.Bike,
							duration: 30,
							from: {
								name: "Häller Climbing Camping",
								lat: 58.4833,
								lon: 11.5667
							},
							to: {
								name: "Galgeberget Crag",
								lat: 58.4722,
								lon: 11.5528
							}
						}
					]
				}
			]
		}
	];