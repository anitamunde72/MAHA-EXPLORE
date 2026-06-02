const CITIES = [
    {
      id: "ahilyanagar",
      name: "Ahilyanagar",
      tagline: "Largest District",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200",
      history: "Historically called Ahmednagar, founded by Ahmad Nizam Shah. Known for its strong role in the Nizam Shahi dynasty.",
      attractions: ["Ahmednagar Fort", "Shani Shingnapur", "Cavalry Tank Museum", "Bhandardara"],
      cultureFood: "A strong agrarian culture with traditional sugarcane fields and authentic rural flavors.",
      bestTime: "October to March"
    },
    {
      id: "akola",
      name: "Akola",
      tagline: "The Cotton City",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1200",
      history: "Ruled by various dynasties, Akola became a major hub for cotton production during the British era.",
      attractions: ["Akola Fort", "Narnala Fort", "Raj Rajeshwar Temple"],
      cultureFood: "Known for pungent and spicy Varhadi cuisine, reflecting the Vidarbha region's palate.",
      bestTime: "October to March"
    },
    {
      id: "amravati",
      name: "Amravati",
      tagline: "City of Lord Indra",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=1200",
      history: "Believed to be the city of Lord Indra, it has deep mythological roots and a rich history connected to the Vakataka dynasty.",
      attractions: ["Chikhaldara", "Ambadevi Temple", "Melghat Tiger Reserve"],
      cultureFood: "Celebrates Vidarbha culture with iconic spicy food and rich agricultural traditions.",
      bestTime: "October to February"
    },
    {
      id: "beed",
      name: "Beed",
      tagline: "The Historical City",
      image: "https://images.unsplash.com/photo-1590050720485-61af5b018596?auto=format&fit=crop&q=80&w=1200",
      history: "Has several historical monuments dating back to the Yadava period and Nizam era.",
      attractions: ["Kankaleshwar Temple", "Parli Vaijnath", "Khazana Well"],
      cultureFood: "Marathwada's authentic culinary styles and traditional harvests.",
      bestTime: "October to March"
    },
    {
      id: "bhandara",
      name: "Bhandara",
      tagline: "District of Lakes",
      image: "https://images.unsplash.com/photo-1558980663-3685c1d673c4?auto=format&fit=crop&q=80&w=1200",
      history: "Known as the Brass City and District of Lakes, Bhandara has a rich tribal history and was ruled by Gond kings.",
      attractions: ["Koka Wildlife Sanctuary", "Gosekhurd Dam", "Rawanwadi Lake"],
      cultureFood: "Gond tribal culture influences, with staples centering around rice and freshwater fish.",
      bestTime: "October to March"
    },
    {
      id: "buldhana",
      name: "Buldhana",
      tagline: "Meteor Crater Land",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
      history: "Famous globally for the Lonar crater created by a meteor strike during the Pleistocene Epoch.",
      attractions: ["Lonar Crater Lake", "Sindkhed Raja", "Gajanan Maharaj Temple Shegaon"],
      cultureFood: "Rich spiritual culture surrounding Shegaon and spicy Vidarbha meals.",
      bestTime: "October to March"
    },
    {
      id: "chandrapur",
      name: "Chandrapur",
      tagline: "The Black Gold City",
      image: "https://images.unsplash.com/photo-1602491453631-e2a5639ce055?auto=format&fit=crop&q=80&w=1200",
      history: "Capital of the ancient Gond dynasty, it is known for its coal mines and historic Mahakali temple.",
      attractions: ["Tadoba Andhari Tiger Reserve", "Mahakali Temple", "Chandrapur Fort"],
      cultureFood: "Saoji cuisine with robust flavors and strong cultural ties to the Gond tribal heritage.",
      bestTime: "October to March"
    },
    {
      id: "dhule",
      name: "Dhule",
      tagline: "Pioneer in Education",
      image: "https://images.unsplash.com/photo-1566324547271-92bebc0723a1?auto=format&fit=crop&q=80&w=1200",
      history: "An essential center established during the Faruqi dynasty and later flourished under the Maratha Empire.",
      attractions: ["Laling Fort", "Songir Fort", "Shirpur"],
      cultureFood: "Known for Khandeshi cuisine, highly spiced and flavored with local peanut oil.",
      bestTime: "October to March"
    },
    {
      id: "gadchiroli",
      name: "Gadchiroli",
      tagline: "Lungs of Maharashtra",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200",
      history: "A dense forest region with deep-rooted Gond tribal history, originally part of the Chandrapur district.",
      attractions: ["Chaprala Wildlife Sanctuary", "Markanda Temple", "Bhamragarh"],
      cultureFood: "Authentic Gond tribal food rich in local forest produce, roots, and millet.",
      bestTime: "November to February"
    },
    {
      id: "gondia",
      name: "Gondia",
      tagline: "The Rice City",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200",
      history: "Known for its massive rice production, Gondia has historical connections to the Gondava kingdom.",
      attractions: ["Navegaon National Park", "Nagzira Wildlife Sanctuary", "Kachargadh Caves"],
      cultureFood: "Vidarbha flavors with a heavy emphasis on rice and paddy-based indigenous dishes.",
      bestTime: "October to March"
    },
    {
      id: "hingoli",
      name: "Hingoli",
      tagline: "Land of Jyotirlingas",
      image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=1200",
      history: "Hingoli was historically an administrative center for the Nizam of Hyderabad.",
      attractions: ["Aundha Nagnath Temple", "Mallinath Digambar Jain Temple"],
      cultureFood: "Classic Marathwada staple dishes like Jowar Bhakri and spicy curries.",
      bestTime: "October to March"
    },
    {
      id: "jalgaon",
      name: "Jalgaon",
      tagline: "The Banana City",
      image: "https://images.unsplash.com/photo-1610398064619-3f749a2a9001?auto=format&fit=crop&q=80&w=1200",
      history: "A modern commercial city that also serves as a key gateway to the ancient Ajanta Caves.",
      attractions: ["Gandhi Teerth", "Waghur Dam", "Padmalaya Temple"],
      cultureFood: "Incredible Khandeshi food such as Vangyache Bharit and pure gold trade hub.",
      bestTime: "October to March"
    },
    {
      id: "jalna",
      name: "Jalna",
      tagline: "Seed Capital of India",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1200",
      history: "Known for a significant role in the Marathwada liberation movement and historical ties to the Nizam.",
      attractions: ["Jumboze Lake", "Guru Ganesh Bhavan", "Matsyodari Devi Temple"],
      cultureFood: "Known for agricultural output, specific seed cultivation, and traditional Marathwada meals.",
      bestTime: "October to March"
    },
    {
      id: "kolhapur",
      name: "Kolhapur",
      tagline: "City of Wrestlers",
      image: "https://images.unsplash.com/photo-1605649487212-4733355811ca?auto=format&fit=crop&q=80&w=1200",
      history: "Ruled by the Bhonsle Chhatrapatis of the Maratha Empire, Kolhapur is a city of valor and royalty.",
      attractions: ["Mahalakshmi Temple", "Panhala Fort", "New Palace", "Rankala Lake"],
      cultureFood: "Famous for Kolhapuri Misal, Tambda & Pandhra Rassa (mutton), and the legendary Kolhapuri Chappals.",
      bestTime: "October to March"
    },
    {
      id: "latur",
      name: "Latur",
      tagline: "Educational Hub",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200",
      history: "Historical home to the Rashtrakutas, Latur is now a vibrant center for education in Marathwada.",
      attractions: ["Udgir Fort", "Kharosa Caves", "Ausa Fort", "Ganj Golai"],
      cultureFood: "Known for Marathwada cuisine and a strong culture emphasizing competitive education.",
      bestTime: "October to March"
    },
    {
      id: "mumbai",
      name: "Mumbai",
      tagline: "The City of Dreams",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1200",
      history: "Originally an archipelago of seven islands, Mumbai was handed over to the British Crown and later the East India Company.",
      attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves", "CSMT"],
      cultureFood: "A melting pot of cultures. Famous for its vibrant street food like Vada Pav, Pav Bhaji, and Bhel Puri.",
      bestTime: "October to March"
    },
    {
      id: "nagpur",
      name: "Nagpur",
      tagline: "The Orange City",
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=1200",
      history: "Founded by the Gond Kings, Nagpur later became the capital of the Bhonsle Marathas. It serves as the winter capital of Maharashtra.",
      attractions: ["Deekshabhoomi", "Tadoba Andhari Park", "Sitabuldi Fort", "Futala Lake"],
      cultureFood: "Famed worldwide for its juicy oranges. Culinary delights include the fiery Tarri Poha and Saoji cuisine.",
      bestTime: "October to February"
    },
    {
      id: "nanded",
      name: "Nanded",
      tagline: "Holy City of Sikhs",
      image: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80&w=1200",
      history: "An ancient city historically associated with the Nanda Empire and globally significant as the resting place of Guru Gobind Singh Ji.",
      attractions: ["Hazur Sahib Gurudwara", "Nanded Fort", "Kandhar Fort"],
      cultureFood: "A blend of Punjabi langar traditions and traditional Maharashtrian cuisine.",
      bestTime: "October to March"
    },
    {
      id: "nandurbar",
      name: "Nandurbar",
      tagline: "Tribal Heartland",
      image: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&q=80&w=1200",
      history: "Known for the bravery of Shirish Kumar during the Quit India Movement. Deep tribal heritage.",
      attractions: ["Toranmal Hill Station", "Prakash (Dakshin Kashi)", "Unapdev Hot Springs"],
      cultureFood: "Tribal lifestyle and Khandeshi cuisine infused with organic, locally sourced spices.",
      bestTime: "October to February"
    },
    {
      id: "nashik",
      name: "Nashik",
      tagline: "The Wine Capital",
      image: "https://images.unsplash.com/photo-1614088924032-475a8e0cb204?auto=format&fit=crop&q=80&w=1200",
      history: "Nashik has deep mythological roots, tied to the epic Ramayana where Lord Rama stayed during his exile.",
      attractions: ["Trimbakeshwar", "Sula Vineyards", "Panchavati", "Pandavleni Caves"],
      cultureFood: "A unique blend of ancient spirituality and modern viticulture. Famous for Misal Pav and grapes.",
      bestTime: "October to March"
    },
    {
      id: "dharashiv",
      name: "Dharashiv",
      tagline: "Historical Splendor",
      image: "https://images.unsplash.com/photo-1615707758994-0985226456df?auto=format&fit=crop&q=80&w=1200",
      history: "Historically known as Osmanabad, this region was ruled by the Mauryas, Satavahanas, and Rashtrakutas.",
      attractions: ["Tulja Bhavani Temple", "Dharashiv Caves", "Naldurg Fort"],
      cultureFood: "Famed for its devotion to Goddess Tulja Bhavani and robust Marathwada cuisine.",
      bestTime: "October to March"
    },
    {
      id: "palghar",
      name: "Palghar",
      tagline: "Nature's Retreat",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
      history: "Newly carved district out of Thane, preserving untouched coastal traditions and ancient forts.",
      attractions: ["Kelva Beach", "Shirgaon Fort", "Mahim Beach"],
      cultureFood: "Famous for Chikoo (sapota) farming and coastal Maharashtrian seafood dishes.",
      bestTime: "September to March"
    },
    {
      id: "parbhani",
      name: "Parbhani",
      tagline: "City of Saints",
      image: "https://images.unsplash.com/photo-1590483256080-60b61c4709d0?auto=format&fit=crop&q=80&w=1200",
      history: "Originally known as Prabhavatinagar. It has a rich tradition of Sufi shrines and Maratha influence.",
      attractions: ["Hazrat Turabul Haq Dargah", "Nemgiri Jain Temple", "Mudgal Shrine"],
      cultureFood: "Offers pure Marathwada dining with profound ties to Sufi and Maratha cultural practices.",
      bestTime: "October to March"
    },
    {
      id: "pune",
      name: "Pune",
      tagline: "The Cultural Capital",
      image: "https://images.unsplash.com/photo-1607581177699-272cb250e7b8?auto=format&fit=crop&q=80&w=1200",
      history: "Known as the seat of the Peshwas, Pune was the political center of the Maratha Empire.",
      attractions: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Dagdusheth Halwai"],
      cultureFood: "Known for standardizing Marathi culture. Delicacies include Misal Pav, Bakarwadi, and Puran Poli.",
      bestTime: "July to February"
    },
    {
      id: "raigad",
      name: "Raigad",
      tagline: "Capital of Shivaji Maharaj",
      image: "https://images.unsplash.com/photo-1587847990159-4acfffe956eb?auto=format&fit=crop&q=80&w=1200",
      history: "The heartbeat of the Maratha Empire, famously chosen by Chhatrapati Shivaji Maharaj as his capital.",
      attractions: ["Raigad Fort", "Murud Janjira", "Harihareshwar Beach", "Elephanta Caves"],
      cultureFood: "Renowned for Poha and exquisite Konkani seafood delicacies.",
      bestTime: "October to March"
    },
    {
      id: "ratnagiri",
      name: "Ratnagiri",
      tagline: "Land of Alphonso Mangos",
      image: "https://images.unsplash.com/photo-1605273752538-23214532c54d?auto=format&fit=crop&q=80&w=1200",
      history: "Birthplace of Lokmanya Tilak. Features deep ties to the colonial prison system and Maratha naval supremacy.",
      attractions: ["Thibaw Palace", "Ratnadurg Fort", "Ganpatipule", "Guhagar Beach"],
      cultureFood: "Globally recognized for the Alphonso Mango and authentic Konkani coconut gravies.",
      bestTime: "October to March"
    },
    {
      id: "sambhajinagar",
      name: "Chh. Sambhajinagar",
      tagline: "The City of Gates",
      image: "https://images.unsplash.com/photo-1595928811800-47b1af2a3d07?auto=format&fit=crop&q=80&w=1200",
      history: "Historically known as Aurangabad, surrounded by 52 historic gates and deeply tied to Mughal and Maratha histories.",
      attractions: ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara", "Daulatabad Fort"],
      cultureFood: "Famous for its Mughlai-influenced cuisine, especially Naan Qalia.",
      bestTime: "October to March"
    },
    {
      id: "sangli",
      name: "Sangli",
      tagline: "Turmeric City",
      image: "https://images.unsplash.com/photo-1615486171448-444a7fecd0ed?auto=format&fit=crop&q=80&w=1200",
      history: "Home to significant freedom fighters and known widely across Asia as the largest Turmeric trading hub.",
      attractions: ["Sangli Fort", "Chandoli National Park", "Sagareshwar Sanctuary", "Dandoba Hills"],
      cultureFood: "Agricultural pride specializing in spices, particularly turmeric, and rich sugarcane fields.",
      bestTime: "October to March"
    },
    {
      id: "satara",
      name: "Satara",
      tagline: "District of Forts",
      image: "https://images.unsplash.com/photo-1604712066827-04d3e5e48356?auto=format&fit=crop&q=80&w=1200",
      history: "The political capital of the Maratha Empire after Shivaji Maharaj's successors moved there. Rich in warrior history.",
      attractions: ["Kaas Plateau", "Mahabaleshwar", "Panchgani", "Pratapgad Fort"],
      cultureFood: "Famous for Kandi Pedha and strawberries from the Mahabaleshwar hills.",
      bestTime: "September to February"
    },
    {
      id: "sindhudurg",
      name: "Sindhudurg",
      tagline: "Coastal Jewel",
      image: "https://images.unsplash.com/photo-1585822765876-0bf1453aebbf?auto=format&fit=crop&q=80&w=1200",
      history: "Carved from Ratnagiri, famous for the magnificent ocean fort Sindhudurg built by Chhatrapati Shivaji Maharaj.",
      attractions: ["Sindhudurg Fort", "Tarkarli Beach", "Malvan", "Vijaydurg"],
      cultureFood: "Malvani cuisine, highly celebrated globally for its seafood, coconut bases, and kokum.",
      bestTime: "October to March"
    },
    {
      id: "solapur",
      name: "Solapur",
      tagline: "Textile Capital",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=1200",
      history: "Historically governed by the Chalukyas, Yadavas, and later a key industrial center during British rule.",
      attractions: ["Siddheshwar Temple", "Great Indian Bustard Sanctuary", "Akkalkot"],
      cultureFood: "Famous for Solapuri chaddars (towels) and fierce spices, notably Solapuri peanut chutney.",
      bestTime: "October to March"
    },
    {
      id: "thane",
      name: "Thane",
      tagline: "City of Lakes",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1200",
      history: "Terminus of the first ever passenger train in India (1853). A booming metropolitan adjoining Mumbai.",
      attractions: ["Upvan Lake", "Yeoor Hills", "Kelva Beach"],
      cultureFood: "Urban cosmopolitan street food coupled with Agri-Koli coastal culinary traditions.",
      bestTime: "October to March"
    },
    {
      id: "wardha",
      name: "Wardha",
      tagline: "Gandhian District",
      image: "https://images.unsplash.com/photo-1608670570390-e54917f8b9e6?auto=format&fit=crop&q=80&w=1200",
      history: "A major center for the Indian Independence Movement, housing Mahatma Gandhi's Sevagram Ashram.",
      attractions: ["Sevagram Ashram", "Keljhar Ganpati", "Bor Wildlife Sanctuary"],
      cultureFood: "Features typical robust Vidarbha cuisine and a deep-rooted khadi-wearing Gandhian lifestyle.",
      bestTime: "October to March"
    },
    {
      id: "washim",
      name: "Washim",
      tagline: "Ancient Vatsagulma",
      image: "https://images.unsplash.com/photo-1510360662660-f1d2432ae9dc?auto=format&fit=crop&q=80&w=1200",
      history: "Once the capital of the Vakataka dynasty, Washim is an important ancient historical site.",
      attractions: ["Washim Balaji Temple", "Padmatirtha", "Pohradevi Temple"],
      cultureFood: "Spicy agricultural cuisine known commonly across the Vidarbha expanse.",
      bestTime: "October to March"
    },
    {
      id: "yavatmal",
      name: "Yavatmal",
      tagline: "The Cotton City",
      image: "https://images.unsplash.com/photo-1586526848039-3cc22b404da6?auto=format&fit=crop&q=80&w=1200",
      history: "Historically part of the Berar Sultanate, Yavatmal is globally significant for cotton farming.",
      attractions: ["Kalamb", "Chintamani Ganpati", "Painganga Wildlife Sanctuary"],
      cultureFood: "Cotton farming culture drives the economy, alongside rich Vidarbha rural culinary roots.",
      bestTime: "October to March"
    }
];

function initGrid() {
    const grid = document.getElementById('cities-grid');
    grid.innerHTML = CITIES.map(city => `
        <div onclick="showCity('${city.id}')" class="glass-card p-6 h-64 rounded-xl flex flex-col justify-between cursor-pointer transition-all">
            <div class="space-y-2">
                <div class="w-10 h-1 saffron-gradient"></div>
                <h3 class="text-2xl font-marathi capitalize text-white">${city.name}</h3>
                <p class="text-[10px] text-slate-400 leading-relaxed line-clamp-3 font-sans">${city.history}</p>
            </div>
            <button class="text-[10px] uppercase font-bold tracking-widest text-[#F97316] text-left border-none bg-transparent cursor-pointer p-0">View Details →</button>
        </div>
    `).join('');
}

window.navigate = function(pageId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active-nav-link');
    });
    const activeBtn = document.getElementById('nav-' + pageId);
    if(activeBtn) {
        activeBtn.classList.add('active-nav-link');
    }

    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('flex');
    });
    
    const activePage = document.getElementById('page-' + pageId);
    if(activePage) {
        activePage.classList.remove('hidden');
        activePage.classList.add('flex');
        activePage.classList.remove('animate-fade-in');
        void activePage.offsetWidth; 
        activePage.classList.add('animate-fade-in');
    }

    window.scrollTo(0, 0);
}

window.showCity = function(cityId) {
    const city = CITIES.find(c => c.id === cityId);
    if(!city) return;

    document.getElementById('city-image').src = city.image;
    document.getElementById('city-tagline').textContent = city.tagline;
    document.getElementById('city-title').textContent = city.name;
    document.getElementById('city-history').textContent = city.history;
    document.getElementById('city-culture').textContent = city.cultureFood;
    document.getElementById('city-best-time').textContent = city.bestTime;

    const attrs = document.getElementById('city-attractions');
    attrs.innerHTML = city.attractions.map(attr => 
        `<li class="flex items-center space-x-3"><span class="w-1.5 h-1.5 rounded-full saffron-gradient"></span><span>${attr}</span></li>`
    ).join('');

    navigate('city');
}

document.addEventListener('DOMContentLoaded', () => {
    initGrid();
    navigate('home');
});
