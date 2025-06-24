import { useState, useMemo, useEffect } from 'react';
import './DataTables.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Datatables = () => {
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

        const data = [
        {"name": "Unity Pugh", "id": 9958, "city": "Curicó", "date": "2005/02/11", "percent": 37},
        {"name": "Theodore Duran", "id": 8971, "city": "Dhanbad", "date": "1999/04/07", "percent": 97},
        {"name": "Kylie Bishop", "id": 3147, "city": "Norman", "date": "2005/09/08", "percent": 63},
        {"name": "Willow Gilliam", "id": 3497, "city": "Amqui", "date": "2009/11/29", "percent": 30},
        {"name": "Blossom Dickerson", "id": 5018, "city": "Kempten", "date": "2006/11/09", "percent": 17},
        {"name": "Elliott Snyder", "id": 3925, "city": "Enines", "date": "2006/03/08", "percent": 57},
        {"name": "Castor Pugh", "id": 9488, "city": "Neath", "date": "2014/12/23", "percent": 93},
        {"name": "Pearl Carlson", "id": 6231, "city": "Cobourg", "date": "2014/08/31", "percent": 100},
        {"name": "Deirdre Bridges", "id": 1579, "city": "Eberswalde-Finow", "date": "2014/08/26", "percent": 44},
        {"name": "Daniel Baldwin", "id": 6095, "city": "Moircy", "date": "2000/01/11", "percent": 33},
        {"name": "Phelan Kane", "id": 9519, "city": "Germersheim", "date": "1999/04/16", "percent": 77},
        {"name": "Quentin Salas", "id": 1339, "city": "Los Andes", "date": "2011/01/26", "percent": 49},
        {"name": "Armand Suarez", "id": 6583, "city": "Funtua", "date": "1999/11/06", "percent": 9},
        {"name": "Gretchen Rogers", "id": 5393, "city": "Moxhe", "date": "1998/10/26", "percent": 24},
        {"name": "Harding Thompson", "id": 2824, "city": "Abeokuta", "date": "2008/08/06", "percent": 10},
        {"name": "Mira Rocha", "id": 4393, "city": "Port Harcourt", "date": "2002/10/04", "percent": 14},
        {"name": "Drew Phillips", "id": 2931, "city": "Goes", "date": "2011/10/18", "percent": 58},
        {"name": "Emerald Warner", "id": 6205, "city": "Chiavari", "date": "2002/04/08", "percent": 58},
        {"name": "Colin Burch", "id": 7457, "city": "Anamur", "date": "2004/01/02", "percent": 34},
        {"name": "Russell Haynes", "id": 8916, "city": "Frascati", "date": "2015/04/28", "percent": 18},
        {"name": "Brennan Brooks", "id": 9011, "city": "Olmué", "date": "2000/04/18", "percent": 2},
        {"name": "Kane Anthony", "id": 8075, "city": "LaSalle", "date": "2006/05/21", "percent": 93},
        {"name": "Scarlett Hurst", "id": 1019, "city": "Brampton", "date": "2015/01/07", "percent": 94},
        {"name": "James Scott", "id": 3008, "city": "Meux", "date": "2007/05/30", "percent": 55},
        {"name": "Desiree Ferguson", "id": 9054, "city": "Gojra", "date": "2009/02/15", "percent": 81},
        {"name": "Elaine Bishop", "id": 9160, "city": "Petrópolis", "date": "2008/12/23", "percent": 48},
        {"name": "Hilda Nelson", "id": 6307, "city": "Posina", "date": "2004/05/23", "percent": 76},
        {"name": "Evangeline Beasley", "id": 3820, "city": "Caplan", "date": "2009/03/12", "percent": 62},
        {"name": "Wyatt Riley", "id": 5694, "city": "Cavaion Veronese", "date": "2012/02/19", "percent": 67},
        {"name": "Wyatt Mccarthy", "id": 3547, "city": "Patan", "date": "2014/06/23", "percent": 9},
        {"name": "Cairo Rice", "id": 6273, "city": "Ostra Vetere", "date": "2016/02/27", "percent": 13},
        {"name": "Sylvia Peters", "id": 6829, "city": "Arrah", "date": "2015/02/03", "percent": 13},
        {"name": "Kasper Craig", "id": 5515, "city": "Firenze", "date": "2015/04/26", "percent": 56},
        {"name": "Leigh Ruiz", "id": 5112, "city": "Lac Ste. Anne", "date": "2001/02/09", "percent": 28},
        {"name": "Athena Aguirre", "id": 5741, "city": "Romeral", "date": "2010/03/24", "percent": 15},
        {"name": "Riley Nunez", "id": 5533, "city": "Sart-Eustache", "date": "2003/02/26", "percent": 30},
        {"name": "Lois Talley", "id": 9393, "city": "Dorchester", "date": "2014/01/05", "percent": 51},
        {"name": "Hop Bass", "id": 1024, "city": "Westerlo", "date": "2012/09/25", "percent": 85},
        {"name": "Kalia Diaz", "id": 9184, "city": "Ichalkaranji", "date": "2013/06/26", "percent": 92},
        {"name": "Maia Pate", "id": 6682, "city": "Louvain-la-Neuve", "date": "2011/04/23", "percent": 50},
        {"name": "Macaulay Pruitt", "id": 4457, "city": "Fraser-Fort George", "date": "2015/08/03", "percent": 92},
        {"name": "Danielle Oconnor", "id": 9464, "city": "Neuwied", "date": "2001/10/05", "percent": 17},
        {"name": "Kato Carr", "id": 4842, "city": "Faridabad", "date": "2012/05/11", "percent": 96},
        {"name": "Malachi Mejia", "id": 7133, "city": "Vorst", "date": "2007/04/25", "percent": 26},
        {"name": "Dominic Carver", "id": 3476, "city": "Pointe-aux-Trembles", "date": "2014/03/14", "percent": 71},
        {"name": "Paki Santos", "id": 4424, "city": "Cache Creek", "date": "2001/11/18", "percent": 82},
        {"name": "Ross Hodges", "id": 1862, "city": "Trazegnies", "date": "2010/09/19", "percent": 87},
        {"name": "Hilda Whitley", "id": 3514, "city": "New Sarepta", "date": "2011/07/05", "percent": 94},
        {"name": "Roth Cherry", "id": 4006, "city": "Flin Flon", "date": "2008/09/02", "percent": 8},
        {"name": "Lareina Jones", "id": 8642, "city": "East Linton", "date": "2009/08/07", "percent": 21},
        {"name": "Joshua Weiss", "id": 2289, "city": "Saint-Léonard", "date": "2010/01/15", "percent": 52},
        {"name": "Kiona Lowery", "id": 5952, "city": "Inuvik", "date": "2002/12/17", "percent": 72},
        {"name": "Nina Rush", "id": 7567, "city": "Bo‘lhe", "date": "2008/01/27", "percent": 6},
        {"name": "Palmer Parker", "id": 2000, "city": "Stade", "date": "2012/07/24", "percent": 58},
        {"name": "Vielka Olsen", "id": 3745, "city": "Vrasene", "date": "2016/01/08", "percent": 70},
        {"name": "Meghan Cunningham", "id": 8604, "city": "Söke", "date": "2007/02/16", "percent": 59},
        {"name": "Iola Shaw", "id": 6447, "city": "Albany", "date": "2014/03/05", "percent": 88},
        {"name": "Imelda Cole", "id": 4564, "city": "Haasdonk", "date": "2007/11/16", "percent": 79},
        {"name": "Jerry Beach", "id": 6801, "city": "Gattatico", "date": "1999/07/07", "percent": 36},
        {"name": "Garrett Rocha", "id": 3938, "city": "Gavorrano", "date": "2000/08/06", "percent": 71},
        {"name": "Derek Kerr", "id": 1724, "city": "Gualdo Cattaneo", "date": "2014/01/21", "percent": 89},
        {"name": "Shad Hudson", "id": 5944, "city": "Salamanca", "date": "2014/12/10", "percent": 98},
        {"name": "Daryl Ayers", "id": 8276, "city": "Barchi", "date": "2012/11/12", "percent": 88},
        {"name": "Caleb Livingston", "id": 3094, "city": "Fatehpur", "date": "2014/02/13", "percent": 8},
        {"name": "Sydney Meyer", "id": 4576, "city": "Neubrandenburg", "date": "2015/02/06", "percent": 22},
        {"name": "Lani Lawrence", "id": 8501, "city": "Turnhout", "date": "2008/05/07", "percent": 16},
        {"name": "Allegra Shepherd", "id": 2576, "city": "Meeuwen-Gruitrode", "date": "2004/04/19", "percent": 41},
        {"name": "Fallon Reyes", "id": 3178, "city": "Monceau-sur-Sambre", "date": "2005/02/15", "percent": 16},
        {"name": "Karen Whitley", "id": 4357, "city": "Sluis", "date": "2003/05/02", "percent": 23},
        {"name": "Stewart Stephenson", "id": 5350, "city": "Villa Faraldi", "date": "2003/07/05", "percent": 65},
        {"name": "Ursula Reynolds", "id": 7544, "city": "Southampton", "date": "1999/12/16", "percent": 61},
        {"name": "Adrienne Winters", "id": 4425, "city": "Laguna Blanca", "date": "2014/09/15", "percent": 24},
        {"name": "Francesca Brock", "id": 1337, "city": "Oban", "date": "2000/06/12", "percent": 90},
        {"name": "Ursa Davenport", "id": 7629, "city": "New Plymouth", "date": "2013/06/27", "percent": 37},
        {"name": "Mark Brock", "id": 3310, "city": "Veenendaal", "date": "2006/09/08", "percent": 41},
        {"name": "Dale Rush", "id": 5050, "city": "Chicoutimi", "date": "2000/03/27", "percent": 2},
        {"name": "Shellie Murphy", "id": 3845, "city": "Marlborough", "date": "2013/11/13", "percent": 72},
        {"name": "Porter Nicholson", "id": 4539, "city": "Bismil", "date": "2012/10/22", "percent": 23},
        {"name": "Oliver Huber", "id": 1265, "city": "Hannöche", "date": "2002/01/11", "percent": 94},
        {"name": "Calista Maynard", "id": 3315, "city": "Pozzuolo del Friuli", "date": "2006/03/23", "percent": 5},
        {"name": "Lois Vargas", "id": 6825, "city": "Cumberland", "date": "1999/04/25", "percent": 50},
        {"name": "Hermione Dickson", "id": 2785, "city": "Woodstock", "date": "2001/03/22", "percent": 2},
        {"name": "Dalton Jennings", "id": 5416, "city": "Dudzele", "date": "2015/02/09", "percent": 74},
        {"name": "Cathleen Kramer", "id": 3380, "city": "Crowsnest Pass", "date": "2012/07/27", "percent": 53},
        {"name": "Zachery Morgan", "id": 6730, "city": "Collines-de-l'Outaouais", "date": "2006/09/04", "percent": 51},
        {"name": "Yoko Freeman", "id": 4077, "city": "Lidköping", "date": "2002/12/27", "percent": 48},
        {"name": "Chaim Waller", "id": 4240, "city": "North Shore", "date": "2010/07/25", "percent": 25},
        {"name": "Berk Johnston", "id": 4532, "city": "Vergnies", "date": "2016/02/23", "percent": 93},
        {"name": "Tad Munoz", "id": 2902, "city": "Saint-Nazaire", "date": "2010/05/09", "percent": 65},
        {"name": "Vivien Dominguez", "id": 5653, "city": "Bargagli", "date": "2001/01/09", "percent": 86},
        {"name": "Carissa Lara", "id": 3241, "city": "Sherborne", "date": "2015/12/07", "percent": 72},
        {"name": "Hammett Gordon", "id": 8101, "city": "Wah", "date": "1998/09/06", "percent": 20},
        {"name": "Walker Nixon", "id": 6901, "city": "Metz", "date": "2011/11/12", "percent": 41},
        {"name": "Nathan Espinoza", "id": 5956, "city": "Strathcona County", "date": "2002/01/25", "percent": 47},
        {"name": "Kelly Cameron", "id": 4836, "city": "Fontaine-Valmont", "date": "1999/07/02", "percent": 24},
        {"name": "Kyra Moses", "id": 3796, "city": "Quenast", "date": "1998/07/07", "percent": 68},
        {"name": "Grace Bishop", "id": 8340, "city": "Rodez", "date": "2012/10/02", "percent": 4},
        {"name": "Hana Walters", "id": 9144, "city": "Mahomet", "date": "2005/03/14", "percent": 83},
        {"name": "Delilah Stokes", "id": 1586, "city": "Karlsruhe", "date": "2010/03/02", "percent": 29},
        {"name": "Nikolai Bradley", "id": 7163, "city": "Torello", "date": "2011/12/22", "percent": 82},
        {"name": "Daniella Cooke", "id": 1140, "city": "Lexington-Fayette", "date": "2006/03/18", "percent": 18},
        {"name": "Sadie Little", "id": 2845, "city": "Hummelstown", "date": "2016/06/04", "percent": 91},
        {"name": "Brady Dodson", "id": 8942, "city": "Châtellerault", "date": "1998/01/04", "percent": 67},
        {"name": "Mara Frye", "id": 4395, "city": "Vimercate", "date": "2008/09/28", "percent": 98},
        {"name": "Lincoln Jennings", "id": 6083, "city": "Gravesend", "date": "2014/07/25", "percent": 24},
        {"name": "Xena Salazar", "id": 5762, "city": "Torre d'Arese", "date": "2015/02/02", "percent": 36},
        {"name": "Amos Mills", "id": 9934, "city": "Avrillé", "date": "2001/05/05", "percent": 89},
        {"name": "Gerald Griffith", "id": 2604, "city": "Saint-Lambert", "date": "2008/07/26", "percent": 3},
        {"name": "Hailee Cook", "id": 6316, "city": "Maranello", "date": "2006/06/02", "percent": 45},
        {"name": "Selena Alexander", "id": 2767, "city": "Ronchin", "date": "2013/08/27", "percent": 94},
        {"name": "Julius Burns", "id": 9639, "city": "Feyzin", "date": "2001/12/25", "percent": 22},
        {"name": "Amaya Moore", "id": 2067, "city": "Woluwe-Saint-Pierre", "date": "2011/03/10", "percent": 80},
        {"name": "Justine Valdez", "id": 6662, "city": "Zellik", "date": "2006/09/22", "percent": 66},
        {"name": "Taryn Flynn", "id": 7061, "city": "Kingsville", "date": "2010/07/21", "percent": 98},
        {"name": "Zander Sims", "id": 1147, "city": "Westbank", "date": "2012/11/22", "percent": 71},
        {"name": "Celia Mckinney", "id": 3365, "city": "Dubuque", "date": "2014/06/28", "percent": 81},
        {"name": "Aidan Powell", "id": 2760, "city": "Bellevue", "date": "2012/12/04", "percent": 26},
        {"name": "Owen Cain", "id": 9300, "city": "Zwevegem", "date": "1999/07/05", "percent": 32},
        {"name": "Paloma Roman", "id": 6429, "city": "Kreuzlingen", "date": "2008/11/01", "percent": 59},
        {"name": "Marvin Dalton", "id": 9875, "city": "Orono", "date": "2003/03/23", "percent": 9},
        {"name": "Alfreda Pugh", "id": 6605, "city": "Randers", "date": "2011/06/12", "percent": 71},
        {"name": "Jeremiah Mckenzie", "id": 7316, "city": "Petersfield", "date": "2001/12/17", "percent": 4},
        {"name": "Isis Burgess", "id": 4846, "city": "Kafountine", "date": "1999/11/08", "percent": 25},
        {"name": "Catherine Hansen", "id": 9659, "city": "Eschweiler", "date": "2016/06/12", "percent": 84},
        {"name": "Abel Monroe", "id": 2992, "city": "Middletown", "date": "2003/07/16", "percent": 11},
        {"name": "Nathalie Webster", "id": 4667, "city": "Villard-Bonnot", "date": "2005/08/07", "percent": 27},
        {"name": "Harper Horn", "id": 1035, "city": "Harlow", "date": "2014/10/01", "percent": 77},
        {"name": "Alisa Duffy", "id": 5358, "city": "Lewiston", "date": "2004/04/18", "percent": 4},
        {"name": "Vernon Carr", "id": 3624, "city": "Richmond", "date": "2006/10/11", "percent": 21},
        {"name": "Ayanna Moran", "id": 8643, "city": "Beausoleil", "date": "2012/01/11", "percent": 45},
        {"name": "Camden Mccormick", "id": 1169, "city": "Saint-Hilaire", "date": "2010/04/14", "percent": 22},
        {"name": "Kathleen Sandoval", "id": 9256, "city": "Knysna", "date": "2015/09/03", "percent": 39},
        {"name": "Palmer Estes", "id": 5799, "city": "Berlaar", "date": "2008/06/25", "percent": 75},
        {"name": "Kristin Owen", "id": 5483, "city": "Neuville", "date": "1999/03/18", "percent": 89},
        {"name": "Kendall Green", "id": 2146, "city": "Nassau", "date": "2001/12/24", "percent": 70},
        {"name": "Bailey Chandler", "id": 5323, "city": "Bridgend", "date": "2013/05/11", "percent": 45},
        {"name": "Cyrus Murray", "id": 3743, "city": "Rio Rancho", "date": "2007/06/15", "percent": 7},
        {"name": "Darius Stanton", "id": 5163, "city": "Grammont", "date": "2010/01/10", "percent": 18},
        {"name": "Declan Mueller", "id": 4986, "city": "Pietrasanta", "date": "2015/04/21", "percent": 81},
        {"name": "Colby Combs", "id": 7977, "city": "Palisade", "date": "2009/12/14", "percent": 30},
        {"name": "Melody Carroll", "id": 5473, "city": "Plumergat", "date": "2008/03/03", "percent": 60},
        {"name": "Camilla Espinoza", "id": 6085, "city": "Van Buren", "date": "2006/11/01", "percent": 37},
        {"name": "Kiera Barrett", "id": 7349, "city": "Yuen Long", "date": "2010/10/14", "percent": 23},
        {"name": "Gary Walters", "id": 9819, "city": "Bovenden", "date": "1999/12/08", "percent": 16},
        {"name": "Audrey Graham", "id": 7481, "city": "Montesilvano", "date": "2007/08/03", "percent": 15},
        {"name": "Louisa Manning", "id": 5455, "city": "Regina", "date": "2008/11/21", "percent": 54},
        {"name": "Alec Thomas", "id": 4951, "city": "Nassau", "date": "2006/11/24", "percent": 11},
        {"name": "Erica Bruce", "id": 8697, "city": "Kampong Penawar", "date": "2012/07/15", "percent": 63},
        {"name": "Hamish Waller", "id": 7116, "city": "Jacksonville", "date": "2006/12/02", "percent": 53},
        {"name": "Jordyn Nichols", "id": 6683, "city": "Amersfoort", "date": "2016/06/06", "percent": 38},
        {"name": "Gretchen Lynch", "id": 8510, "city": "Malatya", "date": "2013/10/03", "percent": 61},
        {"name": "Malik Brennan", "id": 9495, "city": "Mohale's Hoek", "date": "2004/11/03", "percent": 36},
        {"name": "Jaime Hopkins", "id": 7351, "city": "Saint-Pol-sur-Mer", "date": "2011/03/06", "percent": 25},
        {"name": "Cameron Boone", "id": 7415, "city": "West Carleton", "date": "1999/06/03", "percent": 87},
        {"name": "Dylan Schwartz", "id": 3612, "city": "Mancomunidad Comarca de Pamplona", "date": "2013/01/26", "percent": 25},
        {"name": "Brandon Chandler", "id": 2799, "city": "Nizhnyaya Salda", "date": "2004/12/03", "percent": 14},
        {"name": "Celeste Ryan", "id": 5336, "city": "Luzarches", "date": "2001/05/10", "percent": 20},
        {"name": "Blaise Gentry", "id": 2140, "city": "Bangalore", "date": "2013/10/15", "percent": 82},
        {"name": "Jeffrey Burke", "id": 8379, "city": "Lakeland", "date": "2007/04/05", "percent": 50},
        {"name": "Jaylen Fox", "id": 3216, "city": "Tarragona", "date": "2003/09/01", "percent": 12},
        {"name": "Zayn Shaw", "id": 3947, "city": "Blainville", "date": "2014/04/11", "percent": 50},
        {"name": "Blaine Pugh", "id": 8137, "city": "Louviers", "date": "2006/11/09", "percent": 22},
        {"name": "Celeste Watson", "id": 7130, "city": "Saint-Hubert", "date": "2005/01/15", "percent": 19},
        {"name": "Corinne Mccoy", "id": 4067, "city": "Saint-Médard-en-Jalles", "date": "2015/07/02", "percent": 98},
        {"name": "Maximus Shelton", "id": 7946, "city": "Port Coquitlam", "date": "2016/11/18", "percent": 77},
        {"name": "Sonya Grimes", "id": 9650, "city": "Wakefield", "date": "2007/12/12", "percent": 19},
        {"name": "Levi Parker", "id": 8132, "city": "Toledo", "date": "2016/05/06", "percent": 46},
        {"name": "Julissa Ball", "id": 9743, "city": "Saltillo", "date": "2011/10/07", "percent": 59},
        {"name": "Penelope Dean", "id": 2999, "city": "Maia", "date": "2008/06/21", "percent": 59},
        {"name": "Eli Jensen", "id": 6072, "city": "Tecomán", "date": "2013/08/05", "percent": 6},
        {"name": "Kira Benjamin", "id": 2070, "city": "Ronchin", "date": "2015/08/15", "percent": 53},
        {"name": "Dominic Snyder", "id": 8877, "city": "Sechelt", "date": "2016/09/14", "percent": 5},
        {"name": "Sierra Cross", "id": 7540, "city": "Kelowna", "date": "2006/02/23", "percent": 9},
        {"name": "Kane Weber", "id": 4392, "city": "Bellevue", "date": "2007/09/25", "percent": 10},
        {"name": "Kellen Munoz", "id": 3016, "city": "Southaven", "date": "2010/01/17", "percent": 27},
        {"name": "Ashlyn Smith", "id": 5403, "city": "Lévis", "date": "2012/06/17", "percent": 18},
        {"name": "Kelsey Wilson", "id": 5749, "city": "Owensboro", "date": "2014/03/04", "percent": 77},
        {"name": "Jayce Rodriguez", "id": 7445, "city": "Doylestown", "date": "2007/02/11", "percent": 92},
        {"name": "Jaxson Martin", "id": 2784, "city": "Alamo", "date": "2015/12/21", "percent": 33},
        {"name": "Makayla Graham", "id": 9465, "city": "Bergen", "date": "2007/06/15", "percent": 31},
        {"name": "Beau Lyons", "id": 8259, "city": "Buchanan", "date": "2006/07/02", "percent": 9},
        {"name": "Sydney Fitzgerald", "id": 4136, "city": "Arboga", "date": "2013/01/17", "percent": 18},
        {"name": "Elise Gates", "id": 2899, "city": "Chesapeake", "date": "2006/09/29", "percent": 31},
        {"name": "Vera Watson", "id": 7095, "city": "La Grange", "date": "2007/01/10", "percent": 7},
        {"name": "Stella Webster", "id": 1486, "city": "Charenton-le-Pont", "date": "2012/12/10", "percent": 52},
        {"name": "Priscilla Hancock", "id": 7877, "city": "Braunschweig", "date": "2010/10/23", "percent": 67},
        {"name": "Amos Freeman", "id": 7274, "city": "Roselle", "date": "2012/03/30", "percent": 50},
        {"name": "Rosalie Fuller", "id": 7133, "city": "San Carlos", "date": "2016/08/27", "percent": 11},
        {"name": "Nadia Alvarado", "id": 1907, "city": "Bayonne", "date": "2007/04/07", "percent": 32},
        {"name": "Alfreda Kemp", "id": 7965, "city": "Bartlett", "date": "2003/04/26", "percent": 11},
        {"name": "Kellie Schroeder", "id": 2142, "city": "Fond du Lac", "date": "2015/10/22", "percent": 71},
        {"name": "Alec Sutton", "id": 2261, "city": "Richmond", "date": "2012/08/17", "percent": 64},
        {"name": "Mathew Willis", "id": 3127, "city": "Bristol", "date": "2007/02/24", "percent": 29},
        {"name": "Kara Ray", "id": 9943, "city": "North Tonawanda", "date": "2014/11/18", "percent": 39},
        {"name": "Heidi Kirby", "id": 8354, "city": "Toms River", "date": "2003/09/03", "percent": 45},
        {"name": "Alfredo Anderson", "id": 8956, "city": "San Francisco", "date": "2016/12/19", "percent": 40},
        {"name": "Serena Brown", "id": 2271, "city": "Münster", "date": "2015/12/16", "percent": 8},
        {"name": "Makayla Baldwin", "id": 5798, "city": "Mont-Royal", "date": "2009/06/08", "percent": 48},
        {"name": "Lawrence Manning", "id": 2608, "city": "Concord", "date": "2011/11/06", "percent": 19},
        {"name": "Ivy Tate", "id": 2798, "city": "Dayton", "date": "2007/11/14", "percent": 20},
        {"name": "Harper Marks", "id": 9436, "city": "Lake Elsinore", "date": "2014/04/14", "percent": 94},
        {"name": "Desmond Vega", "id": 3130, "city": "Cuernavaca", "date": "2004/08/17", "percent": 9},
        {"name": "Zion Cole", "id": 9570, "city": "Bellevue", "date": "2010/12/03", "percent": 40},
        {"name": "Aubrey Charles", "id": 5763, "city": "Dubuque", "date": "2013/12/21", "percent": 82},
        {"name": "Gwendolyn Rose", "id": 5298, "city": "Cumberland", "date": "2016/04/28", "percent": 94},
        {"name": "Zane Stanley", "id": 6857, "city": "Boscobel", "date": "2006/08/08", "percent": 10},
        {"name": "Jayde Guerrero", "id": 6798, "city": "Hamtramck", "date": "2009/01/15", "percent": 59},
        {"name": "Jeremiah Alexander", "id": 4276, "city": "Newport News", "date": "2015/05/18", "percent": 25},
        {"name": "Kendra Patrick", "id": 9349, "city": "Vila Nova de Gaia", "date": "2016/08/25", "percent": 75},
        {"name": "Jaden Snyder", "id": 5610, "city": "Las Cruces", "date": "2014/11/16", "percent": 81},
        {"name": "Rylan Wolfe", "id": 9795, "city": "Quezon City", "date": "2006/02/21", "percent": 98},
        {"name": "Lila Adams", "id": 3902, "city": "Concord", "date": "2013/10/18", "percent": 31},
        {"name": "Marcel Ayala", "id": 6979, "city": "Hemet", "date": "2013/07/20", "percent": 22},
        {"name": "Rebecca Cunningham", "id": 2471, "city": "Plano", "date": "2002/06/24", "percent": 71},
        {"name": "Kenny Hall", "id": 2236, "city": "Shelton", "date": "2004/12/01", "percent": 60},
        {"name": "Dana Wood", "id": 1180, "city": "Columbus", "date": "2009/02/04", "percent": 41},
        {"name": "Mallory Cole", "id": 8466, "city": "Beaufort", "date": "2011/03/03", "percent": 99},
        {"name": "Josiah Barton", "id": 8405, "city": "Talladega", "date": "2014/03/04", "percent": 87},
        {"name": "Marissa Estes", "id": 8080, "city": "Severodvinsk", "date": "2013/05/18", "percent": 42},
        {"name": "Bryson Petersen", "id": 8158, "city": "St. George", "date": "2016/08/10", "percent": 47},
        {"name": "Clara Wilcox", "id": 5371, "city": "Münster", "date": "2015/05/17", "percent": 39},
        {"name": "Walter Schwartz", "id": 8519, "city": "Middletown", "date": "2015/08/16", "percent": 9},
        {"name": "Maggie Brennan", "id": 6014, "city": "Monroe", "date": "2003/05/06", "percent": 69},
        {"name": "Spencer Flowers", "id": 9593, "city": "Ostend", "date": "2007/05/04", "percent": 69},
        {"name": "Iris Mclean", "id": 9694, "city": "Huron", "date": "2011/07/02", "percent": 91},
        {"name": "Josie Sutton", "id": 3530, "city": "Eugene", "date": "2014/04/22", "percent": 98},
        {"name": "Jocelyn Hill", "id": 3383, "city": "Malta", "date": "2008/10/10", "percent": 64},
        {"name": "Raven Baldwin", "id": 8556, "city": "Eau Claire", "date": "2012/02/12", "percent": 81},
        {"name": "Zara Duncan", "id": 8303, "city": "Oro Valley", "date": "2014/05/19", "percent": 55},
        {"name": "Quinn Stewart", "id": 7083, "city": "Ajax", "date": "2013/03/17", "percent": 33},
        {"name": "Dominic Mills", "id": 2084, "city": "Georgetown", "date": "2004/01/04", "percent": 17},
        {"name": "Trevor Kane", "id": 8875, "city": "Rockwall", "date": "2005/10/16", "percent": 31},
        {"name": "Alexis Smith", "id": 7929, "city": "Alameda", "date": "2002/12/09", "percent": 53},
        {"name": "Marcos Alvarez", "id": 6069, "city": "Concord", "date": "2010/08/20", "percent": 6},
        {"name": "Martha Boyd", "id": 3165, "city": "Saint-Ouen", "date": "2016/03/30", "percent": 67},
        {"name": "Rory Fisher", "id": 2384, "city": "Manchester", "date": "2006/05/17", "percent": 9},
        {"name": "Brennan Douglas", "id": 7031, "city": "Ventura", "date": "2010/10/30", "percent": 97},
        {"name": "Vera Davidson", "id": 7916, "city": "Chester", "date": "2014/07/25", "percent": 16},
        {"name": "Holly Crawford", "id": 3866, "city": "Whitby", "date": "2009/01/19", "percent": 69},
        {"name": "August Mullins", "id": 1784, "city": "Chester", "date": "2016/08/29", "percent": 96},
        {"name": "Presley Hale", "id": 7123, "city": "Middletown", "date": "2016/05/18", "percent": 31},
        {"name": "Tessa Bowman", "id": 5843, "city": "Hemet", "date": "2011/06/06", "percent": 9},
        {"name": "Israel Hoover", "id": 8175, "city": "North Ogden", "date": "2004/07/11", "percent": 37},
        {"name": "Kathryn Hall", "id": 1792, "city": "Lewisville", "date": "2010/05/23", "percent": 37},
        {"name": "Maddox Mendez", "id": 3797, "city": "Chandler", "date": "2016/07/27", "percent": 48},
        {"name": "Devin Jimenez", "id": 2365, "city": "El Paso", "date": "2005/08/20", "percent": 60},
        {"name": "Kian Goodman", "id": 1894, "city": "Saint-Laurent", "date": "2015/11/15", "percent": 75},
        {"name": "Tara Brady", "id": 6515, "city": "Hudson", "date": "2009/01/03", "percent": 98},
        {"name": "Nicolette Weeks", "id": 5819, "city": "Amsterdam", "date": "2014/06/20", "percent": 88},
        {"name": "Porter Chavez", "id": 5734, "city": "Mission", "date": "2013/05/14", "percent": 52},
        {"name": "Dawson Dunn", "id": 1489, "city": "Mackay", "date": "2003/10/10", "percent": 37},
        {"name": "Aimee Murray", "id": 1674, "city": "Casper", "date": "2002/10/16", "percent": 83},
        {"name": "Jesse Patrick", "id": 2827, "city": "Vila Nova de Gaia", "date": "2008/05/29", "percent": 62},
        {"name": "Annette Klein", "id": 2110, "city": "Roseville", "date": "2005/10/01", "percent": 9},
        {"name": "Abel Dean", "id": 9324, "city": "Port Colborne", "date": "2010/09/03", "percent": 12},
        {"name": "Jada Velasquez", "id": 8686, "city": "Tempe", "date": "2012/06/17", "percent": 22},
        {"name": "Ali Herring", "id": 6646, "city": "Orange", "date": "2014/01/10", "percent": 43},
        {"name": "Colby Flores", "id": 6819, "city": "Kalgoorlie", "date": "2004/02/19", "percent": 19},
        {"name": "Beatrice Becker", "id": 9225, "city": "West Jordan", "date": "2010/07/28", "percent": 30},
        {"name": "Angel Thomas", "id": 2713, "city": "Saint-Jérôme", "date": "2009/05/05", "percent": 90},
        {"name": "Jayda Horn", "id": 4585, "city": "North Platte", "date": "2012/12/28", "percent": 42},
        {"name": "Alberto Mccoy", "id": 3021, "city": "San Carlos", "date": "2008/04/05", "percent": 43},
        {"name": "Mikayla Madden", "id": 2083, "city": "El Paso", "date": "2015/06/20", "percent": 61},
        {"name": "Omar Armstrong", "id": 3360, "city": "Bayonne", "date": "2003/03/12", "percent": 87},
        {"name": "Hannah Flynn", "id": 6309, "city": "Frederick", "date": "2010/08/28", "percent": 98},
        {"name": "Grayson Steele", "id": 5765, "city": "Dubuque", "date": "2006/03/16", "percent": 48},
        {"name": "Rhonda Bennett", "id": 2017, "city": "Monrovia", "date": "2004/04/04", "percent": 36},
        {"name": "Parker Delgado", "id": 8855, "city": "Dubuque", "date": "2016/02/18", "percent": 10},
        {"name": "Kaitlyn Pena", "id": 6318, "city": "Fond du Lac", "date": "2012/11/06", "percent": 35},
        {"name": "Cora Weaver", "id": 8749, "city": "Mont-Royal", "date": "2012/07/10", "percent": 18},
        {"name": "Trevor Walsh", "id": 3075, "city": "Sault Ste. Marie", "date": "2014/12/17", "percent": 16},
        {"name": "Mollie Garrett", "id": 8498, "city": "Lake Elsinore", "date": "2016/08/18", "percent": 36},
        {"name": "Phoenix Griffin", "id": 5002, "city": "Bend", "date": "2011/01/13", "percent": 25},
        {"name": "Jermaine Baxter", "id": 8831, "city": "Rockwall", "date": "2015/05/25", "percent": 48},
        {"name": "Derrick Brady", "id": 6068, "city": "Cambridge", "date": "2006/11/07", "percent": 80},
        {"name": "Isabel Page", "id": 3796, "city": "Grimsby", "date": "2015/04/08", "percent": 40},
        {"name": "Joel Zimmerman", "id": 6240, "city": "Berlin", "date": "2009/04/18", "percent": 21},
        {"name": "Layla Mendez", "id": 9794, "city": "Des Moines", "date": "2014/11/22", "percent": 69},
        {"name": "Jonah Collins", "id": 3033, "city": "Bartlett", "date": "2011/06/21", "percent": 15},
        {"name": "Elijah Byrd", "id": 2375, "city": "Redwood City", "date": "2016/01/24", "percent": 63},
        {"name": "Kayla Francis", "id": 3087, "city": "Middletown", "date": "2013/05/28", "percent": 80},
        {"name": "Amira Farmer", "id": 9548, "city": "Lévis", "date": "2014/07/25", "percent": 3},
        {"name": "David Walters", "id": 6966, "city": "Concord", "date": "2009/12/10", "percent": 97},
        {"name": "Kallie Snyder", "id": 9201, "city": "Fond du Lac", "date": "2016/04/12", "percent": 22},
        {"name": "Keegan Hart", "id": 5750, "city": "Tacoma", "date": "2003/12/20", "percent": 56},
        {"name": "Kaya Ortiz", "id": 2393, "city": "Pueblo", "date": "2013/02/25", "percent": 53},
        {"name": "Madelyn Kane", "id": 3718, "city": "East Orange", "date": "2016/05/15", "percent": 51},
        {"name": "Camden Wagner", "id": 8452, "city": "Alexandria", "date": "2009/01/15", "percent": 9},
        {"name": "Clara Wilson", "id": 6790, "city": "La Plata", "date": "2004/01/21", "percent": 26},
        {"name": "Priscilla Valdez", "id": 4421, "city": "Nashua", "date": "2011/04/21", "percent": 97},
        {"name": "Maximus Wheeler", "id": 5657, "city": "Cedar Rapids", "date": "2005/08/02", "percent": 47},
        {"name": "Vanessa Barrett", "id": 7365, "city": "Concord", "date": "2016/06/29", "percent": 58},
        {"name": "Stephen Nguyen", "id": 1411, "city": "Alhambra", "date": "2016/11/30", "percent": 59},
        {"name": "Angelina Burke", "id": 3340, "city": "Saint-Jérôme", "date": "2007/03/16", "percent": 97},
        {"name": "Georgia Gates", "id": 4454, "city": "Boise", "date": "2013/03/03", "percent": 8},
        {"name": "Isabel Carlson", "id": 3589, "city": "Beaumont", "date": "2012/10/11", "percent": 53},
        {"name": "Stella Thompson", "id": 2803, "city": "Sunnyvale", "date": "2005/09/04", "percent": 97},
        {"name": "Alfred Jordan", "id": 4304, "city": "Redwood City", "date": "2011/01/19", "percent": 14},
        {"name": "Vivian Thornton", "id": 5336, "city": "Baton Rouge", "date": "2014/01/23", "percent": 51},
        {"name": "Eleanor Bowman", "id": 9827, "city": "Concord", "date": "2009/04/03", "percent": 55},
        {"name": "Derek Mcbride", "id": 7381, "city": "Bend", "date": "2012/02/20", "percent": 80},
        {"name": "Beau Brady", "id": 2340, "city": "East Orange", "date": "2016/01/03", "percent": 14},
        {"name": "Kinsley Lambert", "id": 3123, "city": "El Paso", "date": "2010/05/11", "percent": 5},
        {"name": "Harley Duran", "id": 3097, "city": "Chandler", "date": "2014/12/23", "percent": 33},
        {"name": "Rowan Mcdonald", "id": 8400, "city": "Cedar Rapids", "date": "2014/11/25", "percent": 48},
        {"name": "Lexi Nichols", "id": 6467, "city": "Beaumont", "date": "2003/04/03", "percent": 89},
        {"name": "Jazmin Farrell", "id": 8630, "city": "Lake Elsinore", "date": "2016/10/17", "percent": 46},
        {"name": "Maximus Collins", "id": 5516, "city": "Bellevue", "date": "2011/04/03", "percent": 44},
        {"name": "Kaden Meyers", "id": 7266, "city": "Middletown", "date": "2010/04/22", "percent": 22},
        {"name": "Camila Collins", "id": 8306, "city": "Grand Junction", "date": "2012/12/11", "percent": 91},
        {"name": "Alec Quinn", "id": 7126, "city": "Fargo", "date": "2014/12/22", "percent": 61},
        {"name": "Carter Wells", "id": 2412, "city": "Redwood City", "date": "2015/01/04", "percent": 64},
        {"name": "Madison Cook", "id": 4953, "city": "West Jordan", "date": "2014/02/14", "percent": 79},
        {"name": "Rebecca Tate", "id": 2376, "city": "Newark", "date": "2015/08/07", "percent": 19},
        {"name": "Tristan Curtis", "id": 4738, "city": "Bayonne", "date": "2016/07/20", "percent": 87},
        {"name": "Alfredo Sparks", "id": 8364, "city": "Houston", "date": "2016/04/08", "percent": 52},
        {"name": "Kylee Page", "id": 9399, "city": "Mont-Royal", "date": "2015/08/16", "percent": 50},
        {"name": "Aidan Terry", "id": 9165, "city": "Dothan", "date": "2012/08/05", "percent": 61},
        {"name": "Finley Little", "id": 8003, "city": "Las Vegas", "date": "2003/05/23", "percent": 52},
        {"name": "Jordan Boyd", "id": 2330, "city": "Saint-Ouen", "date": "2015/04/25", "percent": 84},
        {"name": "Rory Knight", "id": 7740, "city": "Redwood City", "date": "2003/05/26", "percent": 36},
        {"name": "Jazmin Weaver", "id": 7493, "city": "Lake Elsinore", "date": "2016/07/26", "percent": 81},
        {"name": "Jayla Jackson", "id": 3527, "city": "Palm Coast", "date": "2010/06/25", "percent": 24},
        {"name": "Grayson Dunn", "id": 3678, "city": "Rochester", "date": "2014/11/17", "percent": 46},
        {"name": "Dillon Vaughn", "id": 9080, "city": "San Juan", "date": "2003/05/23", "percent": 43},
        {"name": "Roman Barton", "id": 9676, "city": "Windsor", "date": "2003/10/05", "percent": 18},
        {"name": "Madelyn Page", "id": 8476, "city": "Tempe", "date": "2015/05/12", "percent": 45},
        {"name": "Mya Clayton", "id": 7901, "city": "Fort Worth", "date": "2013/01/19", "percent": 23},
        {"name": "Gwendolyn Sharp", "id": 5995, "city": "Boise", "date": "2010/11/03", "percent": 10},
        {"name": "Karsyn Graham", "id": 4628, "city": "Maple Ridge", "date": "2016/06/04", "percent": 14},
        {"name": "Martha Farmer", "id": 2690, "city": "Fort Worth", "date": "2016/01/03", "percent": 88},
        {"name": "Madilyn Freeman", "id": 5250, "city": "Fort Worth", "date": "2007/03/12", "percent": 30},
        {"name": "Josie Hogan", "id": 7950, "city": "West Palm Beach", "date": "2007/06/14", "percent": 13},
        {"name": "Myles Zimmerman", "id": 2013, "city": "Hemet", "date": "2012/05/23", "percent": 8},
        {"name": "Rylan Chandler", "id": 7921, "city": "Southaven", "date": "2014/04/04", "percent": 55},
        {"name": "Griffin Bauer", "id": 2146, "city": "Chesapeake", "date": "2012/07/17", "percent": 74},
        {"name": "Zoey Morris", "id": 6982, "city": "Salem", "date": "2013/04/15", "percent": 22},
        {"name": "Jesse Douglas", "id": 8454, "city": "Windsor", "date": "2011/10/15", "percent": 60},
        {"name": "Maximus Gregory", "id": 3185, "city": "West Palm Beach", "date": "2014/12/06", "percent": 34},
        {"name": "Gage Alexander", "id": 4899, "city": "Savannah", "date": "2003/04/11", "percent": 67},
        {"name": "Amaya Phelps", "id": 5654, "city": "Shelton", "date": "2009/11/11", "percent": 92},
        {"name": "Harper Stokes", "id": 7761, "city": "Mont-Royal", "date": "2011/12/04", "percent": 66},
        {"name": "Kenny Willis", "id": 8977, "city": "Santa Clara", "date": "2003/03/02", "percent": 56},
        {"name": "Lexi Cain", "id": 8154, "city": "Fond du Lac", "date": "2012/04/15", "percent": 27},
        {"name": "Eliana Hansen", "id": 7805, "city": "Hemet", "date": "2012/11/22", "percent": 18},
        {"name": "NathanielGutierrez", "id": 1890, "city": "Bayonne", "date": "2016/07/30", "percent": 69},
        {"name": "Rachel Hammond", "id": 2724, "city": "Arvada", "date": "2012/07/08", "percent": 21},
        {"name": "Lana Mckay", "id": 9730, "city": "Cumberland", "date": "2015/10/07", "percent": 76},
        {"name": "Kira Lindsey", "id": 8914, "city": "Toms River", "date": "2016/10/10", "percent": 35},
        {"name": "Lilian Waller", "id": 9326, "city": "Mission", "date": "2008/12/10", "percent": 13},
        {"name": "Violet Vega", "id": 8962, "city": "Mont-Royal", "date": "2007/06/28", "percent": 31},
        {"name": "Malik Daniel", "id": 2433, "city": "Newark", "date": "2007/09/27", "percent": 87},
        {"name": "Randy French", "id": 4934, "city": "Severodvinsk", "date": "2005/06/16", "percent": 24},
        {"name": "Emerson Cole", "id": 3157, "city": "Rochester", "date": "2013/07/06", "percent": 28},
        {"name": "Hadley Steele", "id": 7727, "city": "Dubuque", "date": "2011/04/27", "percent": 74},
        {"name": "Malik Chambers", "id": 2116, "city": "Ajax", "date": "2009/12/16", "percent": 99},
        {"name": "Samson Perry", "id": 2584, "city": "Owensboro", "date": "2002/12/30", "percent": 76}
    ];

    // Search filter
    const filteredData = useMemo(() => {
        return data.filter(item =>
            Object.values(item).some(val =>
                String(val).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [data, searchTerm]);

    // Sort
    const sortedData = useMemo(() => {
        if (!sortField) return filteredData;
        return [...filteredData].sort((a, b) => {
            const aVal = a[sortField];
            const bVal = b[sortField];
            if (typeof aVal === 'string') {
                return sortOrder === 'asc'
                    ? aVal.localeCompare(bVal)
                    : bVal.localeCompare(aVal);
            } else {
                return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
            }
        });
    }, [filteredData, sortField, sortOrder]);

    // Pagination
    const totalPages = useMemo(() => {
        if (entriesPerPage === 'All') return 1;
        return Math.ceil(filteredData.length / entriesPerPage);
    }, [filteredData, entriesPerPage]);

    const paginatedData = useMemo(() => {
        if (entriesPerPage === 'All') return sortedData;
        const start = (currentPage - 1) * entriesPerPage;
        const end = start + entriesPerPage;
        return sortedData.slice(start, end);
    }, [sortedData, entriesPerPage, currentPage]);

    useEffect(() => {
        setCurrentPage(1); // Reset when search/entries change
    }, [entriesPerPage, searchTerm]);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    const getPageNumbers = () => {
        const maxVisiblePages = 10;
        const pages = [];

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const middleStart = Math.max(2, currentPage - 2);
            const middleEnd = Math.min(totalPages - 1, currentPage + 2);

            pages.push(1);
            if (middleStart > 2) pages.push('...');
            for (let i = middleStart; i <= middleEnd; i++) {
                pages.push(i);
            }
            if (middleEnd < totalPages - 1) pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className='DataTables'>
            <div>
                <h2>Data Tables</h2>
                <span>Home / Tables / <strong>Data</strong></span>
            </div>
            <div className='datatables'>
                <h2>Datatables</h2>
                <p>Add lightweight datatables to your project with using the <span>Simple DataTables</span> library. Just add <strong>.datatable</strong> class name to any table you wish to convert to a datatable. Check for <span>more examples</span>.</p>

                <div className='entries'>
                    <div className='dathd'>
                        <div className='dthd-right'>
                            <div className='mdl'>
                                <h2 onClick={() => setDropdownOpen(!dropdownOpen)}>{entriesPerPage}</h2>
                                <div className='chvrn' onClick={() => setDropdownOpen(!dropdownOpen)}>
                                    <i className="bi bi-chevron-up"></i>
                                    <i className="bi bi-chevron-down"></i>
                                </div>
                                {dropdownOpen && (
                                    <ul>
                                        {['5', '10', '15', 'All'].map((val) => (
                                            <li key={val} onClick={() => {
                                                setEntriesPerPage(val === 'All' ? 'All' : parseInt(val));
                                                setDropdownOpen(false);
                                            }}>
                                                {val}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <p>entries per page</p>
                        </div>
                        <div className='dthd-left'>
                            <input
                                placeholder='Search'
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <i className="bi bi-x" onClick={() => setSearchTerm('')}></i>
                        </div>
                    </div>

                    <ul className='dknown'>
                        <li onClick={() => handleSort('name')}>
                            <h2>Name</h2>
                            <div>
                                <i className="bi bi-caret-up-fill"></i>
                                <i className="bi bi-caret-down-fill"></i>
                            </div>
                        </li>
                        <li onClick={() => handleSort('id')}>
                            <h2>Ext.</h2>
                            <div>
                                <i className="bi bi-caret-up-fill"></i>
                                <i className="bi bi-caret-down-fill"></i>
                            </div>
                        </li>
                        <li onClick={() => handleSort('city')}>
                            <h2>City</h2>
                            <div>
                                <i className="bi bi-caret-up-fill"></i>
                                <i className="bi bi-caret-down-fill"></i>
                            </div>
                        </li>
                        <li onClick={() => handleSort('date')}>
                            <h2>Start Date</h2>
                            <div>
                                <i className="bi bi-caret-up-fill"></i>
                                <i className="bi bi-caret-down-fill"></i>
                            </div>
                        </li>
                        <li onClick={() => handleSort('perset')}>
                            <h2>Completion</h2>
                            <div>
                                <i className="bi bi-caret-up-fill"></i>
                                <i className="bi bi-caret-down-fill"></i>
                            </div>
                        </li>
                    </ul>

                    <div className='datas'>
                        {paginatedData.map((item, index) => (
                            <div key={index} className="datatable-row">
                                <div>{item.name}</div>
                                <div>{item.id}</div>
                                <div>{item.city}</div>
                                <div>{item.date}</div>
                                <div>{item.percent}%</div>
                            </div>
                        ))}
                    </div>

                    <div className='shwng'>
                        <h3>
                            Showing {(entriesPerPage === 'All') ? 1 : (currentPage - 1) * entriesPerPage + 1}
                            to {(entriesPerPage === 'All') ? filteredData.length : Math.min(currentPage * entriesPerPage, filteredData.length)}
                            of {filteredData.length} entries
                        </h3>

                        <div className='pagination'>
                            <i
                                className="bi bi-chevron-left"
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            ></i>
                            <ul>
                                {getPageNumbers().map((num, i) => (
                                    <li
                                        key={i}
                                        onClick={() => typeof num === 'number' && setCurrentPage(num)}
                                        className={currentPage === num ? 'active' : ''}
                                        style={{ cursor: typeof num === 'number' ? 'pointer' : 'default' }}
                                    >
                                        {num}
                                    </li>
                                ))}
                            </ul>
                            <i
                                className="bi bi-chevron-right"
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Datatables;
