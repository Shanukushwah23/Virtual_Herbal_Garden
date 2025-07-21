const plants = [
    { 
        name: "Tulsi", 
        botanicalName: "Ocimum tenuiflorum", 
        habitat: "Tropical regions", 
        uses: "Cold, cough, and respiratory issues", 
        image: "Images/Tulsi.jpg", 
        howToGrow: "Grow Tulsi in a warm climate with well-draining soil. Keep it in a sunny spot and water moderately, avoiding waterlogging." 
    },
    { 
        name: "Neem", 
        botanicalName: "Azadirachta indica", 
        habitat: "Subtropical regions", 
        uses: "Skin care, blood purification", 
        image: "Images/Neem.jpg", 
        howToGrow: "Plant Neem in a sunny location with sandy or loamy soil. Water it sparingly as it thrives in dry conditions." 
    },
    { 
        name: "Aloe Vera", 
        botanicalName: "Aloe barbadensis", 
        habitat: "Arid climates", 
        uses: "Skin care, digestive health", 
        image: "Images/Aloe vera.jpg", 
        howToGrow: "Plant Aloe Vera in a well-draining pot with cactus soil mix. Keep it in bright indirect sunlight and water sparingly." 
    },
    { 
        name: "Ashwagandha", 
        botanicalName: "Withania somnifera", 
        habitat: "Dry regions", 
        uses: "Stress relief, energy boost", 
        image: "Images/Ashwagandha.jpg", 
        howToGrow: "Plant in sandy soil under full sun. Water only when the soil is dry, as Ashwagandha thrives in dry conditions." 
    },
    { 
        name: "Brahmi", 
        botanicalName: "Bacopa monnieri", 
        habitat: "Wet and marshy areas", 
        uses: "Memory enhancement, anxiety relief", 
        image: "Images/Brahmi.jpg", 
        howToGrow: "Grow Brahmi in wet, loamy soil in partial shade. Keep the soil consistently moist but not waterlogged." 
    },
    { 
        name: "Ginger", 
        botanicalName: "Zingiber officinale", 
        habitat: "Tropical regions", 
        uses: "Digestive aid, anti-inflammatory", 
        image: "Images/ginger.jpg", 
        howToGrow: "Plant ginger rhizomes in rich, well-draining soil in a warm, humid environment. Water regularly but avoid overwatering." 
    },
    { 
        name: "Turmeric", 
        botanicalName: "Curcuma longa", 
        habitat: "Tropical regions", 
        uses: "Anti-inflammatory, skin care", 
        image: "Images/turmeric.jpg", 
        howToGrow: "Plant turmeric rhizomes in fertile, well-draining soil in a warm, humid area with indirect sunlight. Water consistently." 
    },
    { 
        name: "Mint", 
        botanicalName: "Mentha spp.", 
        habitat: "Temperate regions", 
        uses: "Digestive health, respiratory relief", 
        image: "Images/Mint.jpg", 
        howToGrow: "Plant mint in moist, rich soil in partial shade. Water frequently to keep the soil moist, but ensure good drainage." 
    },
    { 
        name: "Shatavari", 
        botanicalName: "Asparagus racemosus", 
        habitat: "Humid regions", 
        uses: "Women's health, immune boost", 
        image: "Images/Shatavari.jpg", 
        howToGrow: "Grow Shatavari in sandy soil under partial sunlight. Keep the soil moist and provide occasional organic fertilizer." 
    },
    { 
        name: "Amalaki", 
        botanicalName: "Phyllanthus emblica", 
        habitat: "Subtropical regions", 
        uses: "Immunity, digestive health", 
        image: "Images/Amalaki.jpg", 
        howToGrow: "Plant Amalaki in well-drained soil in full sun. Water it moderately and ensure it is in a frost-free environment." 
    },
    
        { 
            name: "Giloy", 
            botanicalName: "Tinospora cordifolia", 
            habitat: "Tropical regions", 
            uses: "Immunity, detoxification", 
            image: "Images/Giloy.jpg", 
            howToGrow: "Plant Giloy in sandy loam soil with good drainage. It thrives in warm climates and requires moderate watering." 
        },
        { 
            name: "Moringa", 
            botanicalName: "Moringa oleifera", 
            habitat: "Subtropical regions", 
            uses: "Nutrition, blood pressure control", 
            image: "Images/Moringa.jpg", 
            howToGrow: "Grow Moringa in well-draining soil under full sunlight. Water sparingly to prevent root rot." 
        },
        { 
            name: "Licorice", 
            botanicalName: "Glycyrrhiza glabra", 
            habitat: "Temperate regions", 
            uses: "Soothing cough, digestive aid", 
            image: "Images/Licorice.jpg", 
            howToGrow: "Plant Licorice in deep, fertile soil with good drainage. Keep it in full sun and water regularly during the growing season." 
        },
        { 
            name: "Ginkgo", 
            botanicalName: "Ginkgo biloba", 
            habitat: "Temperate regions", 
            uses: "Treating blood disorders, sharpens memory", 
            image: "Images/Ginkgo.jpg", 
            howToGrow: "Grow Ginkgo in well-drained soil in full sun to partial shade. It is drought-resistant but benefits from moderate watering." 
        },
        { 
            name: "Fenugreek (Methi)", 
            botanicalName: "Trigonella foenum-graecum", 
            habitat: "Semi-arid regions", 
            uses: "Digestive health, blood sugar control", 
            image: "Images/Fenugreek.jpg", 
            howToGrow: "Plant Fenugreek seeds in well-draining soil in a sunny location. Water regularly but avoid waterlogging." 
        },
        { 
            name: "Feverfew", 
            botanicalName: "Tanacetum parthenium", 
            habitat: "Temperate regions", 
            uses: "Fevers, headaches, arthritis", 
            image: "Images/Feverfew.jpg", 
            howToGrow: "Plant Feverfew in moist, well-drained soil in a sunny or partially shaded location. Water moderately and avoid overwatering." 
        },
        { 
            name: "Peppermint", 
            botanicalName: "Mentha piperita", 
            habitat: "Temperate regions", 
            uses: "Digestive health, headache relief", 
            image: "Images/peppermint.jpg", 
            howToGrow: "Plant Peppermint in moist, rich soil with good drainage. Keep it in partial to full sun and water regularly to maintain soil moisture." 
        },
        { 
            name: "Lemongrass", 
            botanicalName: "Cymbopogon citratus", 
            habitat: "Tropical regions", 
            uses: "Digestive aid, anti-inflammatory", 
            image: "Images/Lemmon grass.jpg", 
            howToGrow: "Grow Lemongrass in well-draining soil in full sun. Water consistently to keep the soil moist but not waterlogged." 
        },
        { 
            name: "Saffron", 
            botanicalName: "Crocus sativus", 
            habitat: "Subtropical regions", 
            uses: "Mood enhancer, skin care", 
            image: "Images/Saffron.jpg", 
            howToGrow: "Plant Saffron bulbs in well-drained, sandy soil in full sun. Water sparingly and keep them in a frost-free environment." 
        },
        { 
            name: "Cardamom", 
            botanicalName: "Elettaria cardamomum", 
            habitat: "Tropical regions", 
            uses: "Digestive aid, respiratory health", 
            image: "Images/Cardamom.jpg", 
            howToGrow: "Plant Cardamom in rich, well-draining soil under partial shade. Keep the soil moist with regular watering." 
        },
        { 
            name: "Eucalyptus", 
            botanicalName: "Eucalyptus globulus", 
            habitat: "Tropical regions", 
            uses: "Respiratory relief, wound healing", 
            image: "Images/eucalyptus.jpg", 
            howToGrow: "Grow Eucalyptus in well-draining soil under full sunlight. Water sparingly as it is drought-tolerant." 
        },
        { 
            name: "Chamomile", 
            botanicalName: "Matricaria chamomilla", 
            habitat: "Temperate regions", 
            uses: "Sleep aid, digestive health", 
            image: "Images/Chamomile.jpg", 
            howToGrow: "Plant Chamomile in light, well-draining soil in full sun to partial shade. Water lightly as it prefers drier conditions." 
        },
        { 
            name: "Mullein", 
            botanicalName: "Verbascum thapsus", 
            habitat: "Temperate regions", 
            uses: "Respiratory support, anti-inflammatory", 
            image: "Images/Mullein.jpg", 
            howToGrow: "Grow Mullein in well-draining soil in full sunlight. It tolerates poor soils and requires minimal watering once established." 
        },
        { 
            name: "Valerian", 
            botanicalName: "Valeriana officinalis", 
            habitat: "Temperate regions", 
            uses: "Sleep aid, stress relief", 
            image: "Images/Valerian.jpg", 
            howToGrow: "Plant Valerian in rich, moist soil under partial to full sun. Keep the soil consistently moist for optimal growth." 
        },
        
            { 
                name: "Slippery Elm", 
                botanicalName: "Ulmus rubra", 
                habitat: "Temperate forests", 
                uses: "Sore throat, digestive relief", 
                image: "Images/Slippery elm.jpg", 
                howToGrow: "Plant Slippery Elm in rich, moist soil with good drainage. It thrives in full sun to partial shade and needs regular watering during establishment." 
            },
            { 
                name: "Dandelion", 
                botanicalName: "Taraxacum officinale", 
                habitat: "Temperate regions", 
                uses: "Liver health, digestion", 
                image: "Images/Dandelion.jpg", 
                howToGrow: "Grow Dandelion in well-draining soil under full sun. It is drought-tolerant but grows best with moderate watering." 
            },
            { 
                name: "Kava", 
                botanicalName: "Piper methysticum", 
                habitat: "Tropical islands", 
                uses: "Anxiety relief, relaxation", 
                image: "Images/Kava.jpg", 
                howToGrow: "Plant Kava in well-draining, fertile soil in partial shade. Keep the soil moist but not waterlogged." 
            },
            { 
                name: "Sage", 
                botanicalName: "Salvia officinalis", 
                habitat: "Temperate regions", 
                uses: "Memory support, anti-inflammatory", 
                image: "Images/Sage.jpg", 
                howToGrow: "Grow Sage in well-drained soil under full sun. Water sparingly as it prefers dry conditions." 
            },
            { 
                name: "Milk Thistle", 
                botanicalName: "Silybum marianum", 
                habitat: "Mediterranean regions", 
                uses: "Liver detox, digestive health", 
                image: "Images/Milk thistle.jpg", 
                howToGrow: "Plant Milk Thistle in well-draining soil under full sun. It tolerates dry conditions and requires minimal watering." 
            },
            { 
                name: "Bitter Melon", 
                botanicalName: "Momordica charantia", 
                habitat: "Tropical and subtropical regions", 
                uses: "Blood sugar control, digestion", 
                image: "Images/Bitter melon.jpg", 
                howToGrow: "Grow Bitter Melon in well-draining soil in a sunny location. Water regularly and provide a trellis for support." 
            },
            { 
                name: "Calendula", 
                botanicalName: "Calendula officinalis", 
                habitat: "Temperate regions", 
                uses: "Wound healing, skin care, inflammation", 
                image: "Images/Calendula.jpg", 
                howToGrow: "Plant Calendula in well-draining soil in a sunny or partially shaded location. Keep the soil moist but not soggy." 
            },
            { 
                name: "Blue Cohosh", 
                botanicalName: "Caulophyllum thalictroides", 
                habitat: "Wooded areas in North America", 
                uses: "Menstrual health, childbirth support", 
                image: "Images/Blue cohosh.jpg", 
                howToGrow: "Plant Blue Cohosh in rich, moist soil in a shaded area. Water regularly to maintain soil moisture." 
            },
            { 
                name: "Ashitaba", 
                botanicalName: "Angelica keiskei", 
                habitat: "Coastal regions in Japan", 
                uses: "Anti-aging, immunity, digestion", 
                image: "Images/Ashitaba.jpg", 
                howToGrow: "Grow Ashitaba in well-draining, fertile soil under partial shade. Water consistently to keep the soil moist." 
            },
            { 
                name: "Arnica", 
                botanicalName: "Arnica montana", 
                habitat: "Mountainous regions in Europe", 
                uses: "Pain relief, anti-inflammatory", 
                image: "Images/Arnica.jpg", 
                howToGrow: "Plant Arnica in sandy, well-draining soil in full sun. It prefers cool climates and requires minimal watering." 
            },
            { 
                name: "Goldenseal", 
                botanicalName: "Hydrastis canadensis", 
                habitat: "Woodlands in North America", 
                uses: "Immune support, antimicrobial properties", 
                image: "Images/Goldenseal.jpg", 
                howToGrow: "Grow Goldenseal in rich, moist soil in shaded areas. Keep the soil consistently moist." 
            },
            { 
                name: "Black Cohosh", 
                botanicalName: "Actaea racemosa", 
                habitat: "Wooded areas in North America", 
                uses: "Menopausal support, menstrual relief", 
                image: "Images/Black cohosh.jpg", 
                howToGrow: "Plant Black Cohosh in rich, well-draining soil in shaded areas. Water regularly to maintain soil moisture." 
            },
            { 
                name: "Catnip", 
                botanicalName: "Nepeta cataria", 
                habitat: "Temperate regions", 
                uses: "Relaxation, digestive aid, mild sedative", 
                image: "Images/Catnip.jpg", 
                howToGrow: "Grow Catnip in well-draining soil under full sun to partial shade. Water moderately and trim regularly to encourage growth." 
            },
            { 
                name: "Bitter Leaf", 
                botanicalName: "Vernonia amygdalina", 
                habitat: "Tropical regions of Africa", 
                uses: "Blood sugar regulation, immune boost", 
                image: "Images/Bitter leaf.jpg", 
                howToGrow: "Plant Bitter Leaf in fertile, well-draining soil in full sun. Water consistently to maintain soil moisture." 
            },
            { 
                name: "Hibiscus", 
                botanicalName: "Hibiscus sabdariffa", 
                habitat: "Tropical and subtropical regions", 
                uses: "Blood pressure management, antioxidant", 
                image: "Images/Hibiscus.jpg", 
                howToGrow: "Grow Hibiscus in rich, well-draining soil in full sun. Water regularly to keep the soil moist." 
            },
            { 
                name: "Rosemary", 
                botanicalName: "Salvia rosmarinus", 
                habitat: "Mediterranean regions", 
                uses: "Memory enhancement, digestion, anti-inflammatory", 
                image: "Images/Rosemary.jpg", 
                howToGrow: "Plant Rosemary in well-draining soil in full sun. Water sparingly as it prefers drier conditions." 
            },
            { 
                name: "Boswellia", 
                botanicalName: "Boswellia serrata", 
                habitat: "Dry regions of India and Africa", 
                uses: "Anti-inflammatory, joint health", 
                image: "Images/Boswellia.jpg", 
                howToGrow: "Grow Boswellia in sandy, well-draining soil in full sun. Water sparingly as it thrives in arid conditions." 
            },
            { 
                name: "Echinacea", 
                botanicalName: "Echinacea purpurea", 
                habitat: "Grasslands in North America", 
                uses: "Immune support, cold prevention", 
                image: "Images/Echinacea.jpg", 
                howToGrow: "Plant Echinacea in well-draining soil under full sun. It is drought-tolerant and requires minimal watering once established." 
            },
           {
                    name: "Kudzu", 
                    botanicalName: "Pueraria montana", 
                    habitat: "Tropical and subtropical regions", 
                    uses: "Alcohol metabolism, heart health", 
                    image: "Images/Kudzu.jpg", 
                    howToGrow: "Plant Kudzu in well-draining, fertile soil with full sun exposure. It requires moderate watering and regular pruning to control its growth." 
                },
                { 
                    name: "Lesser Burdock", 
                    botanicalName: "Arctium minus", 
                    habitat: "Temperate regions", 
                    uses: "Blood purification, skin health", 
                    image: "Images/Lesser burdock.jpg", 
                    howToGrow: "Grow Lesser Burdock in moist, well-draining soil with partial to full sun. Water moderately to keep the soil moist." 
                },
                { 
                    name: "Horsetail", 
                    botanicalName: "Equisetum arvense", 
                    habitat: "Wet, temperate areas", 
                    uses: "Bone health, wound healing", 
                    image: "Images/Horsetail.jpg", 
                    howToGrow: "Plant Horsetail in consistently moist or wet soil under full sun or partial shade. It thrives in areas with high water retention." 
                },
                { 
                    name: "Comfrey", 
                    botanicalName: "Symphytum officinale", 
                    habitat: "Moist temperate regions", 
                    uses: "Wound healing, joint health", 
                    image: "Images/Comfrey.jpg", 
                    howToGrow: "Grow Comfrey in rich, moist soil with good drainage. It prefers full sun to partial shade and benefits from regular watering." 
                },
                { 
                    name: "Passion Flower", 
                    botanicalName: "Passiflora incarnata", 
                    habitat: "Tropical and subtropical regions", 
                    uses: "Anxiety relief, sleep aid", 
                    image: "Images/Passion flower.jpg", 
                    howToGrow: "Plant Passion Flower in well-draining soil in a sunny or partially shaded location. Provide a trellis for support and water regularly." 
                },
                { 
                    name: "Devil's Claw", 
                    botanicalName: "Harpagophytum procumbens", 
                    habitat: "Arid regions of Southern Africa", 
                    uses: "Pain relief, anti-inflammatory", 
                    image: "Images/Devil's claw.jpg", 
                    howToGrow: "Grow Devil's Claw in sandy, well-draining soil under full sun. It thrives in dry conditions and requires minimal watering." 
                },
                { 
                    name: "Yarrow", 
                    botanicalName: "Achillea millefolium", 
                    habitat: "Temperate regions", 
                    uses: "Wound healing, fever reduction, digestion aid", 
                    image: "Images/Yarrow.jpg", 
                    howToGrow: "Plant Yarrow in well-draining soil in full sun. It is drought-tolerant and requires little maintenance once established." 
                },
                { 
                    name: "Rhodiola", 
                    botanicalName: "Rhodiola rosea", 
                    habitat: "Cold mountainous regions", 
                    uses: "Stress relief, mental clarity, energy boost", 
                    image: "Images/Rhodiora.jpg", 
                    howToGrow: "Grow Rhodiola in well-draining, rocky soil under full sun. It prefers cool climates and requires minimal watering." 
                },
                { 
                    name: "Lemon Balm", 
                    botanicalName: "Melissa officinalis", 
                    habitat: "Temperate regions", 
                    uses: "Anxiety relief, digestive health, sleep aid", 
                    image: "Images/Lemon balm.jpg", 
                    howToGrow: "Plant Lemon Balm in well-draining soil with partial shade or full sun. Water moderately to keep the soil moist." 
                },
                { 
                    name: "Gotukola", 
                    botanicalName: "Centella asiatica", 
                    habitat: "Tropical and subtropical wetlands", 
                    uses: "Cognitive health, wound healing, skin care", 
                    image: "Images/Gotukola.jpg", 
                    howToGrow: "Grow Gotukola in moist, well-draining soil under partial shade. Keep the soil consistently wet for optimal growth." 
                },
                { 
                    name: "Sage Brush", 
                    botanicalName: "Artemisia tridentata", 
                    habitat: "Dry, arid regions of North America", 
                    uses: "Respiratory health, antimicrobial properties, digestion aid", 
                    image: "Images/Sage brush.jpg", 
                    howToGrow: "Plant Sage Brush in sandy, well-draining soil under full sun. It thrives in dry conditions and requires minimal watering." 
                },
                { 
                    name: "Datura", 
                    botanicalName: "Datura stramonium", 
                    habitat: "Tropical and subtropical regions", 
                    uses: "Pain relief, respiratory support (under supervision)", 
                    image: "Images/Datura.jpg", 
                    howToGrow: "Grow Datura in well-draining soil under full sun. Water moderately and handle with caution due to its toxicity." 
                },
                { 
                    name: "Suma Root", 
                    botanicalName: "Pfaffia paniculata", 
                    habitat: "Rainforests of South America", 
                    uses: "Energy boost, immunity support, hormonal balance", 
                    image: "Images/Suma Root.jpg", 
                    howToGrow: "Plant Suma Root in fertile, moist soil with partial shade. Water consistently to keep the soil moist." 
                },
                { 
                    name: "Astragalus", 
                    botanicalName: "Astragalus membranaceus", 
                    habitat: "Temperate regions of East Asia", 
                    uses: "Immune support, anti-inflammatory, heart health", 
                    image: "Images/Astragalus.jpg", 
                    howToGrow: "Grow Astragalus in well-draining soil with full sun. Water moderately during the growing season." 
                },
                { 
                    name: "Marshmallow", 
                    botanicalName: "Althaea officinalis", 
                    habitat: "Wetlands and marshy areas", 
                    uses: "Soothing sore throat, digestive health, skin hydration", 
                    image: "Images/Marshmallow.jpg", 
                    howToGrow: "Plant Marshmallow in moist, rich soil with full sun or partial shade. Keep the soil consistently wet for healthy growth." 
                },
                { 
                    name: "Baiklal Skullcap", 
                    botanicalName: "Scutellaria baicalensis", 
                    habitat: "Temperate regions of East Asia", 
                    uses: "Anti-inflammatory, anxiety relief, liver support", 
                    image: "Images/Baiklal Skullcap.jpg", 
                    howToGrow: "Grow Baiklal Skullcap in well-draining, fertile soil with full sun. Water moderately during the growing season." 
                },
                { 
                    name: "Chanca Piedra", 
                    botanicalName: "Phyllanthus niruri", 
                    habitat: "Tropical regions", 
                    uses: "Kidney stone prevention, liver detoxification, digestion aid", 
                    image: "Images/Chanca Piedra.jpg", 
                    howToGrow: "Plant Chanca Piedra in well-draining soil with full sun to partial shade. Water regularly to keep the soil moist." 
                },
                { 
                    name: "Ephedra", 
                    botanicalName: "Ephedra sinica", 
                    habitat: "Desert and arid regions", 
                    uses: "Respiratory support, energy boost, congestion relief", 
                    image: "Images/Ephedra.jpg", 
                    howToGrow: "Grow Ephedra in sandy, well-draining soil under full sun. It is drought-tolerant and requires minimal watering." 
                }
            
     
];
function displayPlants(plants) {
    const plantContainer = document.getElementById('plant-container');
    plantContainer.innerHTML = '';

    if (plants.length === 0) {
        document.getElementById('no-results').style.display = 'block';
    } else {
        document.getElementById('no-results').style.display = 'none';

        plants.forEach(plant => {
            const plantElement = document.createElement('div');
            plantElement.classList.add('plant');
            plantElement.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}">
 <p><strong>  Name:</strong> ${plant.name}</p>
            <p><strong>BotanicalName:</strong> ${plant.botanicalName}</p>
                <p><strong>Habitat:</strong> ${plant.habitat}</p>
            <p><strong>HowToGrow:</strong> ${plant.howToGrow}</p>
                <p><strong>Uses:</strong> ${plant.uses}</p>
            `;

            plantContainer.appendChild(plantElement);
        });
    }
    }
    function searchPlants() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(query) ||
        plant.botanicalName.toLowerCase().includes(query) ||
         plant.howToGrow.toLowerCase().includes(query) ||
        plant.habitat.toLowerCase().includes(query) ||
        
        plant.uses.toLowerCase().includes(query)
    );
    displayPlants(filteredPlants);
}

document.addEventListener('DOMContentLoaded', () => {
    displayPlants(plants);
    document.getElementById('search-bar').addEventListener('input', searchPlants);
});