<script lang="ts">
	import Map from '$lib/Map.svelte';

	export const markers = [
		{
			index: 0,
			lng: 6.081698,
			lat: 46.150058,
			title: 'Saint Julien - Chemin des Crottes',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 1,
			lng: 6.090078,
			lat: 46.151679,
			title: 'Saint Julien - Douane de Perly',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 2,
			lng: 6.074859,
			lat: 46.148852,
			title: 'Saint Julien - Stade de la Paguette',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 3,
			lng: 6.073528,
			lat: 46.149428,
			title: 'Saint Julien - Douane de Certoux',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 4,
			lng: 6.0351,
			lat: 46.134065,
			title: 'Viry - Soral 2',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 5,
			lng: 6.009811,
			lat: 46.140071,
			title: 'Viry - Malagny',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 6,
			lng: 5.979567,
			lat: 46.128412,
			title: 'Valleiry - La Joux',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 7,
			lng: 6.0346931,
			lat: 46.2392866,
			title: 'CERN',
			association: 'APICY',
			description: '3 comptages:- vers Meyrin - vers CERN- vers Bourginy',
			nom: 'CERN'
		},
		{
			index: 8,
			lng: 5.9911789,
			lat: 46.1772767,
			title: 'Challex',
			association: 'APICY',
			description: '',
			nom: 'Challex'
		},
		{
			index: 9,
			lng: 6.1519184,
			lat: 46.3459462,
			title: 'Divonne->Chavanne',
			association: 'APICY',
			description: '',
			nom: 'Divonne->Chavanne'
		},
		{
			index: 10,
			lng: 6.1215538,
			lat: 46.2478175,
			title: 'Ferney',
			association: 'APICY',
			description: '',
			nom: 'Ferney'
		},
		{
			index: 11,
			lng: 6.1198347,
			lat: 46.2611045,
			title: 'Ferney-Vireloup',
			association: 'APICY',
			description: 'Comptage dans les deux sens',
			nom: 'Ferney-Vireloup'
		},
		{
			index: 12,
			lng: 6.0886806,
			lat: 46.2411268,
			title: 'Mategnin',
			association: 'APICY',
			description: '2 comptages:- rd pt des Anneaux- douane de Mategnin',
			nom: 'Mategnin'
		},
		{
			index: 13,
			lng: 5.9647337,
			lat: 46.1442561,
			title: 'Pougny',
			association: 'APICY',
			description: '',
			nom: 'Pougny'
		},
		{
			index: 14,
			lng: 5.9883357,
			lat: 46.1965512,
			title: 'StJean de Gonville/Challex',
			association: 'APICY',
			description: '',
			nom: 'StJean de Gonville/Challex'
		},
		{
			index: 15,
			lng: 6.1036252,
			lat: 46.2882263,
			title: 'Versonnex',
			association: 'APICY',
			description: '- vers frontière - piste forestière',
			nom: 'Versonnex'
		},
		{
			index: 16,
			lng: 6.2682868,
			lat: 46.1454632,
			title: "REIGNIER_Giratoire d'Arthaz",
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 17,
			lng: 6.2437207,
			lat: 46.1572031,
			title: 'REIGNIER_Rte de Marsinge / Rte de Viaison',
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 18,
			lng: 6.2349567,
			lat: 46.1768974,
			title: 'ETREMBIERES_RD2 / RD906a (ex-PN93)',
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 19,
			lng: 6.2214353,
			lat: 46.175233,
			title: 'ETREMBIERES_Rte de St-Julien / Rte du Salève',
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 20,
			lng: 6.2761617,
			lat: 46.1622162,
			title: 'ARTHAZ_Giratoire lavomatique',
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 21,
			lng: 6.2693194,
			lat: 46.1209034,
			title: 'PERS-JUSSY_Giratoire Casino',
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 22,
			lng: 6.2662295,
			lat: 46.1263467,
			title: "REIGNIER_Accès gare (Tour d'Yvoire)",
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 23,
			lng: 6.2703494,
			lat: 46.1388528,
			title: 'REIGNIER_Giratoire Eglise/Jonquilles',
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 24,
			lng: 6.268032,
			lat: 46.1331431,
			title: 'REIGNIER_Giratoire de la Colline',
			association: 'AERE',
			description: '',
			nom: ''
		},
		{
			index: 25,
			lng: 6.131991,
			lat: 46.1413547,
			title: 'Landecy',
			association: 'Saleve_Vivant',
			description: '',
			nom: ''
		},
		{
			index: 26,
			lng: 6.1367264,
			lat: 46.1427732,
			title: 'Passage du marché',
			association: 'Saleve_Vivant',
			description: '',
			nom: ''
		},
		{
			index: 27,
			lng: 6.1381708,
			lat: 46.1436146,
			title: 'Croix-de-Rozon',
			association: 'Saleve_Vivant',
			description: '',
			nom: ''
		},
		{
			index: 28,
			lng: 6.1497579,
			lat: 46.1505124,
			title: 'Pierre-Grand',
			association: 'Saleve_Vivant',
			description: '',
			nom: ''
		},
		{
			index: 29,
			lng: 6.1613021,
			lat: 46.1544961,
			title: 'Troinex/Bossey',
			association: 'Saleve_Vivant',
			description: '',
			nom: ''
		},
		{
			index: 30,
			lng: 6.1077346,
			lat: 46.1429496,
			title: 'Sous Lathoy',
			association: 'Association_du_Preau',
			description: '',
			nom: ''
		},
		{
			index: 31,
			lng: 6.1196991,
			lat: 46.1426968,
			title: 'chemin de la Chécande',
			association: 'Association_du_Preau',
			description: '',
			nom: ''
		},
		{
			index: 32,
			lng: 6.1646884,
			lat: 46.3725279,
			title: 'Voie verte Divonne',
			association: 'Calque_sans_titre',
			description: 'ATE Vaud',
			nom: ''
		},
		{
			index: 33,
			lng: 6.2312626,
			lat: 46.1959787,
			title: 'Annemasse Agglo',
			association: 'EVAV',
			nom: ''
		},
		{
			index: 34,
			lng: 6.2068732,
			lat: 46.1921605,
			title: 'Gaillard Moillesulaz',
			association: 'EVAV',
			nom: '',
			comptage_directionnel: false,
			routes: {
				Moillesulaz: ['Cote suisse', 'Cote francais']
			}
		},
		{
			index: 35,
			lng: 6.2317462,
			lat: 46.192746,
			title: 'Annemasse Clos Fleury',
			association: 'EVAV',
			nom: '',
			comptage_directionnel: true,
			routes: {
				'rue de Geneve': ['Est', 'Ouest'],
				'Clos Fleury': ['Clos Fleury'],
				Parc: ['Parc']
			},
			history: {
				'2023': {
					flux_max_velo: 214,
					percentage_vae: 51,
					percentage_women: 37
				}
			}
		},
		{
			index: 36,
			lng: 6.1954062,
			lat: 46.183636,
			title: 'Gaillard Fossard',
			association: 'EVAV',
			nom: ''
		},
		{
			index: 37,
			lng: 6.2151068,
			lat: 46.1937188,
			title: 'Gaillard Pont Noir (voie verte)',
			association: 'EVAV',
			nom: '',
			comptage_directionnel: false,
			routes: {
				'rue du Pont Noir': ['Nord', 'Sud'],
				'voie verte': ['Est', 'Ouest']
			}
		},
		{
			index: 38,
			lng: 6.227729965993614,
			lat: 46.194849196191235,
			title: 'Ambilly Jura (voie verte)',
			association: 'EVAV',
			nom: '',
			comptage_directionnel: true,
			routes: {
				'Voie Verte': ['Voie Verte'],
				'Rue du Jura': ['Nord', 'Sud']
			},
			history: {
				'2023': {
					flux_max_velo: 358,
					percentage_vae: 50,
					percentage_women: 37
				}
			}
		},
		{
			index: 39,
			lng: 6.477102,
			lat: 46.352682,
			title: 'Allinges / Thonon - Rond point des Fleysets',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 40,
			lng: 6.447093,
			lat: 46.355287,
			title: 'Anthy / Thonon - Pont de Marclaz',
			association: 'Association_Mobilite_Douce_Chablais',
			description: 'Pont du Pamphiot',
			nom: ''
		},
		{
			index: 41,
			lng: 6.366401,
			lat: 46.26919,
			title: 'Bons en Chablais - Gare',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 42,
			lng: 6.307081,
			lat: 46.304777,
			title: 'Douvaine - Mairie',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 43,
			lng: 6.577775,
			lat: 46.3982,
			title: 'Evian - Gare',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 44,
			lng: 6.508729,
			lat: 46.382772,
			title: 'Marin / Thonon - Pont de Dranse',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 45,
			lng: 6.425414,
			lat: 46.30332,
			title: 'Perrignier - Gare',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 46,
			lng: 6.48482,
			lat: 46.37567,
			title: "Thonon - Avenue d'Evian",
			association: 'Association_Mobilite_Douce_Chablais',
			description: 'Lycée Saint Joseph',
			nom: ''
		},
		{
			index: 47,
			lng: 6.478514,
			lat: 46.366942,
			title: 'Thonon - Carrefour Libération',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 48,
			lng: 6.493566,
			lat: 46.379971,
			title: 'Thonon - Collège Champagne',
			association: 'Association_Mobilite_Douce_Chablais',
			description: 'Rue Henri Baud',
			nom: ''
		},
		{
			index: 49,
			lng: 6.485916,
			lat: 46.374246,
			title: 'Thonon - Ecole Jules Ferry',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 50,
			lng: 6.477144,
			lat: 46.375093,
			title: 'Thonon - Embarcadère',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 51,
			lng: 6.482455,
			lat: 46.368321,
			title: 'Thonon - Gare Place de Crête',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 52,
			lng: 6.48157,
			lat: 46.369346,
			title: 'Thonon - Gare Parvis nord',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 53,
			lng: 6.4809428,
			lat: 46.370028,
			title: 'Thonon - Rond point J. Ferry G Andrier Pl des Arts Bld du Canal',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 54,
			lng: 6.242672,
			lat: 46.272886,
			title: 'Veigy - Douane',
			association: 'Association_Mobilite_Douce_Chablais',
			description: '',
			nom: ''
		},
		{
			index: 55,
			lng: 6.1401964,
			lat: 46.2023865,
			title: 'BD Georges Favon',
			association: 'PRO_VELO_Geneve',
			description: '',
			nom: ''
		},
		{
			index: 56,
			lng: 6.1906384,
			lat: 46.198364,
			title: 'Voie verte Montagne',
			association: 'PRO_VELO_Geneve',
			description: 'pro velo : 2 personnes',
			nom: ''
		},
		{
			index: 57,
			lng: 6.1716532,
			lat: 46.2036089,
			title: 'Voie verte Eaux-Vives',
			association: 'PRO_VELO_Geneve',
			description: '',
			nom: ''
		},
		{
			index: 58,
			lng: 6.1480769,
			lat: 46.2260737,
			title: 'Rue de Lausanne',
			association: 'PRO_VELO_Geneve',
			description: 'pro velo\xa0<br>hauteur jardin Botanique',
			nom: ''
		},
		{
			index: 59,
			lng: 6.1226808,
			lat: 46.1928829,
			title: 'Route de Chancy 6B',
			association: 'PRO_VELO_Geneve',
			description: 'hauteur Ministère Public',
			nom: ''
		},
		{
			index: 60,
			lng: 6.1884557,
			lat: 46.1664832,
			title: 'Douane Veyrier',
			association: 'PRO_VELO_Geneve',
			description: '',
			nom: ''
		},
		{
			index: 61,
			lng: 6.1940068,
			lat: 46.1968746,
			title: 'Voie verte Bel-Air',
			association: 'PRO_VELO_Geneve',
			description: '3 personnes',
			nom: ''
		},
		{
			index: 62,
			lng: 6.1353879,
			lat: 46.2109717,
			title: 'rue de la Servette 47',
			association: 'PRO_VELO_Geneve',
			description: '',
			nom: ''
		},
		{
			index: 63,
			lng: 6.1318943,
			lat: 46.2087981,
			title: 'rue de Lyon\xa0',
			association: 'PRO_VELO_Geneve',
			description: 'Au niveau du parc Geisendorf',
			nom: ''
		},
		{
			index: 64,
			lng: 6.3649998,
			lat: 46.0830867,
			title: 'Arenthon, La Papeterie',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 65,
			lng: 6.4000244,
			lat: 46.0792916,
			title: 'Bonneville, Prison',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 66,
			lng: 6.3767531,
			lat: 46.0718981,
			title: 'St Pierre M. Bricolage',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 67,
			lng: 6.3960046,
			lat: 46.0727672,
			title: 'St Pierre/Bonneville Rd point Borne/RN1203',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 68,
			lng: 6.3813434,
			lat: 46.0594339,
			title: 'Saint Pierre, Dessy',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 69,
			lng: 6.3109345,
			lat: 46.0659042,
			title: 'La Roche, Biocoop',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 70,
			lng: 6.312697,
			lat: 46.0673913,
			title: 'La Roche, La Poste',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 71,
			lng: 6.3031194,
			lat: 46.0686163,
			title: 'La Roche, Gare',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 72,
			lng: 6.3180038,
			lat: 46.0609773,
			title: 'La Roche Rte St Sixt/Andrevetan',
			association: 'Pays_Rochois',
			description: '',
			nom: ''
		},
		{
			index: 73,
			lng: 6.224675432726569,
			lat: 46.201310466618786,
			title: 'Douane Mon-Idee',
			association: 'EVAV',
			nom: '',
			comptage_directionnel: true,
			routes: {
				Douane: ['Cote suisse', 'Cote francais']
			}
		},
		{
			index: 74,
			lng: 6.237012,
			lat: 46.198762,
			title: 'Annemasse - Gare',
			association: 'EVAV',
			nom: '',
			comptage_directionnel: true,
			routes: {
				'Parvis de la gare': ['Parvis'],
				'Avenue de la gare': ['Sud-Est', 'Nord-Ouest'],
				'Rue du docteur Favre': ['Rue du docteur Favre']
			}
		}
	];
</script>

<div class="w-full">
	<Map inputClasses="h-[500px]" {markers} />
</div>
