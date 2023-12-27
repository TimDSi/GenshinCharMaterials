class CharacterMaterials {
    constructor(name, element, type, levelBoss, localSpeciality, enemy, talentMaterial, talentBoss) {
        this.name = name;
        this.element = element;
        this.type = type;
        this.levelBoss = levelBoss;
        this.localSpeciality = localSpeciality;
        this.enemy = enemy;
        this.talentMaterial = talentMaterial;
        this.talentBoss = talentBoss;
        this.talentsName = ["normal Attack", "Skill", "Burst"];
    }
}

let charactersMaterials = [
    new CharacterMaterials("Navia",             "geo",      "DPS",      "Coppelius",        "Spring of the First Dewdrop",  "Fontemer Aberrants",   "Equity",       "Lightless Silk String"),
    new CharacterMaterials("Furina",            "hydro",    "Support",  "Hydro Tulpa",              "Lakelight Lily",       "Whopperflowers",       "Justice",      "Lightless Mass"),
    new CharacterMaterials("Charlotte",         "cryo",     "Support",  "Tourbillon Device",        "Beryl Conch",          "Clockwork Meka",       "Justice",      "Lightless Silk String"),
    new CharacterMaterials("Wriothesley",       "cryo",     "DPS",      "Tourbillon Device",        "Subdetection Unit",    "Clockwork Meka",       "Order",        "Primordial Greenbloom"),
    new CharacterMaterials("Neuvillette",       "hydro",    "DPS",      "Fontemer Unihorn",         "Lumitoile",            "Fontemer Aberrants",   "Equity",       "Everamber"),
    new CharacterMaterials("Freminet",          "cryo",     "DPS",      "Coppelius",                "Romaritime Flower",    "Fontemer Aberrants",   "Justice",      "Worldspan Fern"),
    new CharacterMaterials("Lyney",             "pyro",     "DPS",      "Emperor's Resolution",     "Rainbow Rose",         "Fatui",                "Equity",       "Primordial Greenbloom"),
    new CharacterMaterials("Lynette",           "anemo",    "Support",  "Coppelia",                 "Lumidouce Bell",       "Clockwork Meka",       "Order",        "Everamber"),
    new CharacterMaterials("Kirara",            "dendro",   "Support",  "Evergloom Ring",           "Amakumo Fruit",        "Specter",              "Transience",   "Everamber"),
    new CharacterMaterials("Baizhu",            "dendro",   "Support",  "Evergloom Ring",           "Violetgrass",          "Fungus",               "Gold",         "Worldspan Fern"),
    new CharacterMaterials("Kaveh",             "dendro",   "DPS",      "Quelled Creeper",          "Mourning Flower",      "Fungus",               "Ingenuity",    "Primordial Greenbloom"),
    new CharacterMaterials("Mika",              "cryo",     "DPS",      "Pseudo-Stamens",           "Wolfhook",             "Fatui",                "Ballad",       "Mirror of Mushin"),
    new CharacterMaterials("Dehya",             "pyro",     "Support",  "Light Guiding Tetrahedron", "Sand Grease Pupa",    "Eremites",             "Praxis",       "Puppet Strings"),
    new CharacterMaterials("Alhaitham",         "dendro",   "DPS",      "Pseudo-Stamens",           "Sand Grease Pupa",     "Eremites",             "Ingenuity",    "Mirror of Mushin"),
    new CharacterMaterials("Yaoyao",            "dendro",   "Support",  "Quelled Creeper",          "Jueyun Chili",         "Slimes",               "Diligence",    "Daka's Bell"),
    new CharacterMaterials("Wanderer",          "anemo",    "DPS",      "Perpetual Caliber",        "Rukkhashava Mushrooms", "Nobushi",             "Praxis",       "Daka's Bell"),
    new CharacterMaterials("Faruzan",           "anemo",    "Support",  "Light Guiding Tetrahedron", "Henna Berry",         "Eremites",             "Admonition",   "Puppet Strings"),
    new CharacterMaterials("Layla",             "cryo",     "Support",  "Perpetual Caliber",        "Nilotpala Lotus",      "Samachurls",           "Ingenuity",    "Mirror of Mushin"),
    new CharacterMaterials("Nahida",            "dendro",   "Support",  "Quelled Creeper",          "Kalpalata Lotus",      "Fungus",               "Ingenuity",    "Puppet Strings"),
    new CharacterMaterials("Nilou",             "hydro",    "Support",  "Perpetual Caliber",        "Padisarah",            "Fungus",               "Praxis",       "Tears of the Calamitous God"),
    new CharacterMaterials("Cyno",              "electro",  "DPS",      "Thunderclap Fruitcore",    "Scarab",               "Samachurls",           "Admonition",   "Mudra of the Malefic General"),
    new CharacterMaterials("Candace",           "hydro",    "Support",  "Light Guiding Tetrahedron", "Henna Berry",         "Eremites",             "Admonition",   "Tears of the Calamitous God"),
    new CharacterMaterials("Dori",              "electro",  "Support",  "Thunderclap Fruitcore",    "Kalpalata Lotus",      "Eremites",             "Ingenuity",    "Bloodjade Branch"),
    new CharacterMaterials("Tighnari",          "dendro",   "DPS",      "Majestic Hooked Beak",     "Nilotpala Lotus",      "Fungus",               "Admonition",   "The Meaning of Aeons"),
    new CharacterMaterials("Collei",            "dendro",   "Support",  "Majestic Hooked Beak",     "Rukkhashava Mushrooms", "Hilichurl Shooters",  "Praxis",       "Tears of the Calamitous God"),
    new CharacterMaterials("Shikanoin Heizou",  "anemo",    "DPS",      "Runic Fang",               "Onikabuto",            "Treasure Hoarders",    "Transience",   "The Meaning of Aeons"),
    new CharacterMaterials("Kuki Shinobu",      "electro",  "Support",  "Runic Fang",               "Naku Weed",            "Specter",              "Elegance",     "Tears of the Calamitous God"),
    new CharacterMaterials("Yelan",             "hydro",    "Support",  "Runic Fang",               "Starconch",            "Fatui",                "Prosperity",   "Gilded Scale"),
    new CharacterMaterials("Kamisato Ayato",    "hydro",    "DPS",      "Dew of Repudiation",       "Sakura Bloom",         "Nobushi",              "Elegance",     "Mudra of the Malefic General"),
    new CharacterMaterials("Yae Miko",          "electro",  "DPS",      "Dragonheir's False Fin",   "Sea Ganoderma",        "Nobushi",              "Light",        "The Meaning of Aeons"),
    new CharacterMaterials("Shenhe",            "cryo",     "Support",  "Dragonheir's False Fin",   "Qingxin",              "Whopperflowers",       "Prosperity",   "Hellfire Butterfly"),
    new CharacterMaterials("Yun Jin",           "geo",      "Support",  "Riftborn Regalia",         "Glaze Lily",           "Hilichurls",           "Diligence",    "Ashen Heart"),
    new CharacterMaterials("Arataki Itto",      "geo",      "DPS",      "Riftborn Regalia",         "Onikabuto",            "Slimes",               "Elegance",     "Ashen Heart"),
    new CharacterMaterials("Gorou",             "geo",      "Support",  "Perpetual Heart",          "Sango Pearl",          "Specter",              "Light",        "Molten Moment"),
    new CharacterMaterials("Thoma",             "pyro",     "Support",  "Smoldering Pearl",         "Fluorescent Fungus",   "Treasure Hoarders",    "Transience",   "Hellfire Butterfly"),
    new CharacterMaterials("Sangonomiya Kokomi", "hydro",   "DPS",      "Dew of Repudiation",       "Sango Pearl",          "Specter",              "Transience",   "Hellfire Butterfly"),
    new CharacterMaterials("Raiden Shogun",     "electro",  "Support",  "Storm Beads",              "Amakumo Fruit",        "Nobushi",              "Light",        "Molten Moment"),
    new CharacterMaterials("Kujou Sara",        "electro",  "Support",  "Storm Beads",              "Dendrobium",           "Hilichurls",           "Elegance",     "Ashen Heart"),
    new CharacterMaterials("Yoimiya",           "pyro",     "DPS",      "Smoldering Pearl",         "Naku Weed",            "Samachurls",           "Transience",   "Dragon Lord's Crown"),
    new CharacterMaterials("Sayu",              "anemo",    "Support",  "Marionette Core",          "Crystal Marrow",       "Whopperflowers",       "Light",        "Gilded Scale"),
    new CharacterMaterials("Kamisato Ayaka",    "cryo",     "DPS",      "Perpetual Heart",          "Sakura Bloom",         "Nobushi",              "Elegance",     "Bloodjade Branch"),
    new CharacterMaterials("Kaedehara Kazuha",  "anemo",    "Support",  "Marionette Core",          "Sea Ganoderma",        "Treasure Hoarders",    "Diligence",    "Gilded Scale"),
    new CharacterMaterials("Eula",              "cryo",     "DPS",      "Crystalline Bloom",        "Dandelion Seed",       "Hilichurls",           "Resistance",   "Dragon Lord's Crown"),
    new CharacterMaterials("Yanfei",            "pyro",     "DPS",      "Juvenile Jade",            "Noctilucous Jade",     "Treasure Hoarders",    "Gold",         "Bloodjade Branch"),
    new CharacterMaterials("Rosaria",           "cryo",     "Support",  "Hoarfrost Core",           "Valberry",             "Fatui",                "Ballad",       "Shadow of the Warrior"),
    new CharacterMaterials("Hu Tao",            "pyro",     "DPS",      "Juvenile Jade",            "Silk Flower",          "Whopperflowers",       "Diligence",    "Shard of a Foul Legacy"),
    new CharacterMaterials("Xiao",              "anemo",    "DPS",      "Juvenile Jade",            "Qingxin",              "Slimes",               "Prosperity",   "Shadow of the Warrior"),
    new CharacterMaterials("Ganyu",             "cryo",     "DPS",      "Hoarfrost Core",           "Qingxin",              "Whopperflowers",       "Diligence",    "Shadow of the Warrior"),
    new CharacterMaterials("Albedo",            "geo",      "Support",  "Basalt Pillar",            "Cecilia",              "Samachurls",           "Ballad",       "Tusk of Monoceros Caeli"),
    new CharacterMaterials("Zhongli",           "geo",      "Support",  "Basalt Pillar",            "Cor Lapis",            "Slimes",               "Gold",         "Tusk of Monoceros Caeli"),
    new CharacterMaterials("Xinyan",            "pyro",     "Support",  "Everflame Seed",           "Violetgrass",          "Treasure Hoarders",    "Gold",         "Tusk of Monoceros Caeli"),
    new CharacterMaterials("Tartaglia",         "hydro",    "DPS",      "Cleansing Heart",          "Starconch",            "Fatui",                "Freedom",      "Shard of a Foul Legacy"),
    new CharacterMaterials("Diona",             "cryo",     "Support",  "Hoarfrost Core",           "Calla Lily",           "Hilichurl Shooters",   "Freedom",      "Shard of a Foul Legacy"),
    new CharacterMaterials("Klee",              "pyro",     "Support",  "Everflame Seed",           "Philanemo Mushroom",   "Samachurls",           "Freedom",      "Ring of Boreas"),
    new CharacterMaterials("Venti",             "anemo",    "Support",  "Hurricane Seed",           "Cecilia",              "Slimes",               "Ballad",       "Tail of Boreas"),
    new CharacterMaterials("Keqing",            "electro",  "DPS",      "Lightning Prism",          "Cor Lapis",            "Whopperflowers",       "Prosperity",   "Ring of Boreas"),
    new CharacterMaterials("Mona",              "hydro",    "Support",  "Cleansing Heart",          "Philanemo Mushroom",   "Whopperflowers",       "Resistance",   "Ring of Boreas"),
    new CharacterMaterials("Qiqi",              "cryo",     "Support",  "Hoarfrost Core",           "Violetgrass",          "Samachurls",           "Prosperity",   "Tail of Boreas"),
    new CharacterMaterials("Diluc",             "pyro",     "DPS",      "Everflame Seed",           "Small Lamp Grass",     "Fatui",                "Resistance",   "Dvalin's Plume"),
    new CharacterMaterials("Jean",              "anemo",    "Support",  "Hurricane Seed",           "Dandelion Seed",       "Hilichurls",           "Resistance",   "Dvalin's Plume"),
    new CharacterMaterials("Sucrose",           "anemo",    "Support",  "Hurricane Seed",           "Windwheel Aster",      "Whopperflowers",       "Freedom",      "Spirit Locket of Boreas"),
    new CharacterMaterials("Chongyun",          "cryo",     "Support",  "Hoarfrost Core",           "Cor Lapis",            "Hilichurls",           "Diligence",    "Dvalin's Sigh"),
    new CharacterMaterials("Noelle",            "geo",      "DPS",      "Basalt Pillar",            "Valberry",             "Hilichurls",           "Resistance",   "Dvalin's Claw"),
    new CharacterMaterials("Bennett",           "pyro",     "Support",  "Everflame Seed",           "Windwheel Aster",      "Treasure Hoarders",    "Resistance",   "Dvalin's Plume"),
    new CharacterMaterials("Fischl",            "electro",  "Support",  "Lightning Prism",          "Small Lamp Grass",     "Hilichurl Shooters",   "Ballad",       "Spirit Locket of Boreas"),
    new CharacterMaterials("Ningguang",         "geo",      "Support",  "Basalt Pillar",            "Glaze Lily",           "Fatui",                "Prosperity",   "Spirit Locket of Boreas"),
    new CharacterMaterials("Xingqiu",           "hydro",    "Support",  "Cleansing Heart",          "Silk Flower",          "Hilichurls",           "Gold",         "Tail of Boreas"),
    new CharacterMaterials("Beidou",            "electro",  "DPS",      "Lightning Prism",          "Noctilucous Jade",     "Treasure Hoarders",    "Gold",         "Dvalin's Sigh"),
    new CharacterMaterials("Xiangling",         "pyro",     "Support",  "Everflame Seed",           "Jueyun Chili",         "Slimes",               "Diligence",    "Dvalin's Claw"),
    new CharacterMaterials("Razor",             "electro",  "DPS",      "Lightning Prism",          "Wolfhook",             "Hilichurls",           "Resistance",   "Dvalin's Claw"),
    new CharacterMaterials("Barbara",           "hydro",    "Support",  "Cleansing Heart",          "Philanemo Mushroom",   "Samachurls",           "Freedom",      "Ring of Boreas"),
    new CharacterMaterials("Lisa",              "electro",  "Support",  "Lightning Prism",          "Valberry",             "Slimes",               "Ballad",       "Dvalin's Claw"),
    new CharacterMaterials("Kaeya",             "cryo",     "Support",  "Hoarfrost Core",           "Calla Lily",           "Treasure Hoarders",    "Ballad",       "Spirit Locket of Boreas"),
    new CharacterMaterials("Amber",             "pyro",     "DPS",      "Everflame Seed",           "Small lamp grass",     "Hilichurl Shooters",   "Freedom",      "Dvalin's Sigh"),
]

function getCharacterMaterialIndex(name) {
    for (let i = 0; i < charactersMaterials.length; i++) {
        if (charactersMaterials[i].name == name) {
            return i;
        }
    }
    return -1;
}

function generateMaterialsForTalentLevel(name, level) {
    let character = charactersMaterials[getCharacterMaterialIndex(name)];
    const charMaterials = new Map();
    switch (level) {
        case 2:
            charMaterials.set("Mora", 12500);
            charMaterials.set(materials[getMaterialIndex(character.enemy)].forms[0], 6);
            charMaterials.set(materials[getMaterialIndex(character.talentMaterial)].forms[0], 3);
            break;
        case 3:
            charMaterials.set("Mora", 17500);
            charMaterials.set(materials[getMaterialIndex(character.enemy)].forms[1], 3);
            charMaterials.set(materials[getMaterialIndex(character.talentMaterial)].forms[1], 2);
            break;
        case 4:
            charMaterials.set("Mora", 25000);
            charMaterials.set(materials[getMaterialIndex(character.enemy)].forms[1], 4);
            charMaterials.set(materials[getMaterialIndex(character.talentMaterial)].forms[1], 4);
            break;
        case 5:
            charMaterials.set("Mora", 30000);
            charMaterials.set(materials[getMaterialIndex(character.enemy)].forms[1], 6);
            charMaterials.set(materials[getMaterialIndex(character.talentMaterial)].forms[1], 6);
            break;
        case 6:
            charMaterials.set("Mora", 37500);
            charMaterials.set(materials[getMaterialIndex(character.enemy)].forms[1], 9);
            charMaterials.set(materials[getMaterialIndex(character.talentMaterial)].forms[1], 9);
            break;
        case 7:
            charMaterials.set("Mora", 120000);
            const talentMaterial = materials[getMaterialIndex(character.talentMaterial)].forms[2];
            charMaterials.set(talentMaterial, 4);
            const mobMaterial = materials[getMaterialIndex(character.enemy)].forms[2];
            charMaterials.set(mobMaterial, 4);
            charMaterials.set(character.talentBoss, 1);
            break;
        case 8:
            charMaterials.set("Mora", 260000);
            charMaterials.set(materials[getMaterialIndex(character.enemy)].forms[2], 6);
            charMaterials.set(materials[getMaterialIndex(character.talentMaterial)].forms[2], 6);
            charMaterials.set(character.talentBoss, 1);
            break;
        case 9:
            charMaterials.set("Mora", 450000);
            charMaterials.set(materials[getMaterialIndex(character.enemy)].forms[2], 9);
            charMaterials.set(materials[getMaterialIndex(character.talentMaterial)].forms[2], 12);
            charMaterials.set(character.talentBoss, 2);
            break;
        case 10:
            charMaterials.set("Mora", 700000);
            charMaterials.set(materials[getMaterialIndex(character.enemy)].forms[2], 12);
            charMaterials.set(materials[getMaterialIndex(character.talentMaterial)].forms[2], 16);
            charMaterials.set(character.talentBoss, 2);
            break;
        default: break;
    }
    return charMaterials;
}




