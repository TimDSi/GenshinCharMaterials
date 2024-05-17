class CharacterMaterials {
    constructor(name, quality, region, element, type, ascensionBoss, localSpeciality, enemy, talentMaterial, talentBoss) {
        this.name = name;
        this.quality = quality;
        this.region = region;
        this.element = element;
        this.type = type;
        this.ascensionBoss = ascensionBoss;
        this.localSpeciality = localSpeciality;
        this.enemy = enemy;
        this.talentMaterial = talentMaterial;
        this.talentBoss = talentBoss;
        this.talentsName = ["normal Attack", "Skill", "Burst"];
    }
}

let charactersMaterials = [
    new CharacterMaterials("Arlecchino",        5,  "Fontaine",     "pyro",     "DPS",      "Fragment of a Golden Melody",             "Rainbow Rose",         "Fatui",                "Order",        "Fading Candle"),
    new CharacterMaterials("Chiori",            5,  "Inazuma",      "geo",      "Support",  "Coppelia",                 "Dendrobium",           "Specter",              "Light",        "Lightless Silk String"),
    new CharacterMaterials("Gaming",            4,  "Liyue",        "pyro",     "Support",  "Emperor's Resolution",     "Starconch",            "Slimes",               "Prosperity",   "Lightless Mass"),
    new CharacterMaterials("Xianyun",           5,  "Liyue",        "anemo",    "Support",  "Cloudseam Scale",          "Clearwater Jade",      "Samachurls",           "Gold",         "Lightless Eye of the Maelstrom"),
    new CharacterMaterials("Chevreuse",         4,  "Fontaine",     "pyro",     "Support",  "Fontemer Unihorn",         "Lumidouce Bell",       "Clockwork Meka",       "Order",        "Lightless Eye of the Maelstrom"),
    new CharacterMaterials("Navia",             5,  "Fontaine",     "geo",      "DPS",      "Coppelius",        "Spring of the First Dewdrop",  "Fontemer Aberrants",   "Equity",       "Lightless Silk String"),
    new CharacterMaterials("Furina",            5,  "Fontaine",     "hydro",    "Support",  "Hydro Tulpa",              "Lakelight Lily",       "Whopperflowers",       "Justice",      "Lightless Mass"),
    new CharacterMaterials("Charlotte",         4,  "Fontaine",     "cryo",     "Support",  "Tourbillon Device",        "Beryl Conch",          "Clockwork Meka",       "Justice",      "Lightless Silk String"),
    new CharacterMaterials("Wriothesley",       5,  "Fontaine",     "cryo",     "DPS",      "Tourbillon Device",        "Subdetection Unit",    "Clockwork Meka",       "Order",        "Primordial Greenbloom"),
    new CharacterMaterials("Neuvillette",       5,  "Fontaine",     "hydro",    "DPS",      "Fontemer Unihorn",         "Lumitoile",            "Fontemer Aberrants",   "Equity",       "Everamber"),
    new CharacterMaterials("Freminet",          4,  "Fontaine",     "cryo",     "DPS",      "Coppelius",                "Romaritime Flower",    "Fontemer Aberrants",   "Justice",      "Worldspan Fern"),
    new CharacterMaterials("Lyney",             5,  "Fontaine",     "pyro",     "DPS",      "Emperor's Resolution",     "Rainbow Rose",         "Fatui",                "Equity",       "Primordial Greenbloom"),
    new CharacterMaterials("Lynette",           4,  "Fontaine",     "anemo",    "Support",  "Coppelia",                 "Lumidouce Bell",       "Clockwork Meka",       "Order",        "Everamber"),
    new CharacterMaterials("Kirara",            4,  "Inazuma",      "dendro",   "Support",  "Evergloom Ring",           "Amakumo Fruit",        "Specter",              "Transience",   "Everamber"),
    new CharacterMaterials("Baizhu",            5,  "Liyue",        "dendro",   "Support",  "Evergloom Ring",           "Violetgrass",          "Fungus",               "Gold",         "Worldspan Fern"),
    new CharacterMaterials("Kaveh",             4,  "Sumeru",       "dendro",   "DPS",      "Quelled Creeper",          "Mourning Flower",      "Fungus",               "Ingenuity",    "Primordial Greenbloom"),
    new CharacterMaterials("Mika",              4,  "Mondstadt",    "cryo",     "Support",  "Pseudo-Stamens",           "Wolfhook",             "Fatui",                "Ballad",       "Mirror of Mushin"),
    new CharacterMaterials("Dehya",             5,  "Sumeru",       "pyro",     "Support",  "Light Guiding Tetrahedron", "Sand Grease Pupa",    "Eremites",             "Praxis",       "Puppet Strings"),
    new CharacterMaterials("Alhaitham",         5,  "Sumeru",       "dendro",   "DPS",      "Pseudo-Stamens",           "Sand Grease Pupa",     "Eremites",             "Ingenuity",    "Mirror of Mushin"),
    new CharacterMaterials("Yaoyao",            4,  "Liyue",        "dendro",   "Support",  "Quelled Creeper",          "Jueyun Chili",         "Slimes",               "Diligence",    "Daka's Bell"),
    new CharacterMaterials("Wanderer",          5,  "Sumeru",       "anemo",    "DPS",      "Perpetual Caliber",        "Rukkhashava Mushrooms", "Nobushi",             "Praxis",       "Daka's Bell"),
    new CharacterMaterials("Faruzan",           4,  "Sumeru",       "anemo",    "Support",  "Light Guiding Tetrahedron", "Henna Berry",         "Eremites",             "Admonition",   "Puppet Strings"),
    new CharacterMaterials("Layla",             4,  "Sumeru",       "cryo",     "Support",  "Perpetual Caliber",        "Nilotpala Lotus",      "Samachurls",           "Ingenuity",    "Mirror of Mushin"),
    new CharacterMaterials("Nahida",            5,  "Sumeru",       "dendro",   "Support",  "Quelled Creeper",          "Kalpalata Lotus",      "Fungus",               "Ingenuity",    "Puppet Strings"),
    new CharacterMaterials("Nilou",             5,  "Sumeru",       "hydro",    "Support",  "Perpetual Caliber",        "Padisarah",            "Fungus",               "Praxis",       "Tears of the Calamitous God"),
    new CharacterMaterials("Cyno",              5,  "Sumeru",       "electro",  "DPS",      "Thunderclap Fruitcore",    "Scarab",               "Samachurls",           "Admonition",   "Mudra of the Malefic General"),
    new CharacterMaterials("Candace",           4,  "Sumeru",       "hydro",    "Support",  "Light Guiding Tetrahedron", "Henna Berry",         "Eremites",             "Admonition",   "Tears of the Calamitous God"),
    new CharacterMaterials("Dori",              4,  "Sumeru",       "electro",  "Support",  "Thunderclap Fruitcore",    "Kalpalata Lotus",      "Eremites",             "Ingenuity",    "Bloodjade Branch"),
    new CharacterMaterials("Tighnari",          5,  "Sumeru",       "dendro",   "DPS",      "Majestic Hooked Beak",     "Nilotpala Lotus",      "Fungus",               "Admonition",   "The Meaning of Aeons"),
    new CharacterMaterials("Collei",            4,  "Sumeru",       "dendro",   "Support",  "Majestic Hooked Beak",     "Rukkhashava Mushrooms", "Hilichurl Shooters",  "Praxis",       "Tears of the Calamitous God"),
    new CharacterMaterials("Shikanoin Heizou",  4,  "Inazuma",      "anemo",    "DPS",      "Runic Fang",               "Onikabuto",            "Treasure Hoarders",    "Transience",   "The Meaning of Aeons"),
    new CharacterMaterials("Kuki Shinobu",      4,  "Inazuma",      "electro",  "Support",  "Runic Fang",               "Naku Weed",            "Specter",              "Elegance",     "Tears of the Calamitous God"),
    new CharacterMaterials("Yelan",             5,  "Liyue",        "hydro",    "Support",  "Runic Fang",               "Starconch",            "Fatui",                "Prosperity",   "Gilded Scale"),
    new CharacterMaterials("Kamisato Ayato",    5,  "Inazuma",      "hydro",    "DPS",      "Dew of Repudiation",       "Sakura Bloom",         "Nobushi",              "Elegance",     "Mudra of the Malefic General"),
    new CharacterMaterials("Yae Miko",          5,  "Inazuma",      "electro",  "DPS",      "Dragonheir's False Fin",   "Sea Ganoderma",        "Nobushi",              "Light",        "The Meaning of Aeons"),
    new CharacterMaterials("Shenhe",            5,  "Liyue",        "cryo",     "Support",  "Dragonheir's False Fin",   "Qingxin",              "Whopperflowers",       "Prosperity",   "Hellfire Butterfly"),
    new CharacterMaterials("Yun Jin",           4,  "Liyue",        "geo",      "Support",  "Riftborn Regalia",         "Glaze Lily",           "Hilichurls",           "Diligence",    "Ashen Heart"),
    new CharacterMaterials("Arataki Itto",      5,  "Inazuma",      "geo",      "DPS",      "Riftborn Regalia",         "Onikabuto",            "Slimes",               "Elegance",     "Ashen Heart"),
    new CharacterMaterials("Gorou",             4,  "Inazuma",      "geo",      "Support",  "Perpetual Heart",          "Sango Pearl",          "Specter",              "Light",        "Molten Moment"),
    new CharacterMaterials("Thoma",             4,  "Inazuma",      "pyro",     "Support",  "Smoldering Pearl",         "Fluorescent Fungus",   "Treasure Hoarders",    "Transience",   "Hellfire Butterfly"),
    new CharacterMaterials("Sangonomiya Kokomi",5,  "Inazuma",      "hydro",   "DPS",      "Dew of Repudiation",       "Sango Pearl",          "Specter",              "Transience",   "Hellfire Butterfly"),
    new CharacterMaterials("Raiden Shogun",     5,  "Inazuma",      "electro",  "Support",  "Storm Beads",              "Amakumo Fruit",        "Nobushi",              "Light",        "Molten Moment"),
    new CharacterMaterials("Kujou Sara",        4,  "Inazuma",      "electro",  "Support",  "Storm Beads",              "Dendrobium",           "Hilichurls",           "Elegance",     "Ashen Heart"),
    new CharacterMaterials("Yoimiya",           5,  "Inazuma",      "pyro",     "DPS",      "Smoldering Pearl",         "Naku Weed",            "Samachurls",           "Transience",   "Dragon Lord's Crown"),
    new CharacterMaterials("Sayu",              4,  "Inazuma",      "anemo",    "Support",  "Marionette Core",          "Crystal Marrow",       "Whopperflowers",       "Light",        "Gilded Scale"),
    new CharacterMaterials("Kamisato Ayaka",    5,  "Inazuma",      "cryo",     "DPS",      "Perpetual Heart",          "Sakura Bloom",         "Nobushi",              "Elegance",     "Bloodjade Branch"),
    new CharacterMaterials("Kaedehara Kazuha",  5,  "Inazuma",      "anemo",    "Support",  "Marionette Core",          "Sea Ganoderma",        "Treasure Hoarders",    "Diligence",    "Gilded Scale"),
    new CharacterMaterials("Eula",              5,  "Mondstadt",    "cryo",     "DPS",      "Crystalline Bloom",        "Dandelion Seed",       "Hilichurls",           "Resistance",   "Dragon Lord's Crown"),
    new CharacterMaterials("Yanfei",            4,  "Liyue",        "pyro",     "DPS",      "Juvenile Jade",            "Noctilucous Jade",     "Treasure Hoarders",    "Gold",         "Bloodjade Branch"),
    new CharacterMaterials("Rosaria",           4,  "Mondstadt",    "cryo",     "Support",  "Hoarfrost Core",           "Valberry",             "Fatui",                "Ballad",       "Shadow of the Warrior"),
    new CharacterMaterials("Hu Tao",            5,  "Liyue",        "pyro",     "DPS",      "Juvenile Jade",            "Silk Flower",          "Whopperflowers",       "Diligence",    "Shard of a Foul Legacy"),
    new CharacterMaterials("Xiao",              5,  "Liyue",        "anemo",    "DPS",      "Juvenile Jade",            "Qingxin",              "Slimes",               "Prosperity",   "Shadow of the Warrior"),
    new CharacterMaterials("Ganyu",             5,  "Liyue",        "cryo",     "DPS",      "Hoarfrost Core",           "Qingxin",              "Whopperflowers",       "Diligence",    "Shadow of the Warrior"),
    new CharacterMaterials("Albedo",            5,  "Mondstadt",    "geo",      "Support",  "Basalt Pillar",            "Cecilia",              "Samachurls",           "Ballad",       "Tusk of Monoceros Caeli"),
    new CharacterMaterials("Zhongli",           5,  "Liyue",        "geo",      "Support",  "Basalt Pillar",            "Cor Lapis",            "Slimes",               "Gold",         "Tusk of Monoceros Caeli"),
    new CharacterMaterials("Xinyan",            4,  "Liyue",        "pyro",     "Support",  "Everflame Seed",           "Violetgrass",          "Treasure Hoarders",    "Gold",         "Tusk of Monoceros Caeli"),
    new CharacterMaterials("Tartaglia",         5,  "Snezhnaya",    "hydro",    "DPS",      "Cleansing Heart",          "Starconch",            "Fatui",                "Freedom",      "Shard of a Foul Legacy"),
    new CharacterMaterials("Diona",             4,  "Mondstadt",    "cryo",     "Support",  "Hoarfrost Core",           "Calla Lily",           "Hilichurl Shooters",   "Freedom",      "Shard of a Foul Legacy"),
    new CharacterMaterials("Klee",              5,  "Mondstadt",    "pyro",     "Support",  "Everflame Seed",           "Philanemo Mushroom",   "Samachurls",           "Freedom",      "Ring of Boreas"),
    new CharacterMaterials("Venti",             5,  "Mondstadt",    "anemo",    "Support",  "Hurricane Seed",           "Cecilia",              "Slimes",               "Ballad",       "Tail of Boreas"),
    new CharacterMaterials("Keqing",            5,  "Liyue",        "electro",  "DPS",      "Lightning Prism",          "Cor Lapis",            "Whopperflowers",       "Prosperity",   "Ring of Boreas"),
    new CharacterMaterials("Mona",              5,  "Mondstadt",    "hydro",    "Support",  "Cleansing Heart",          "Philanemo Mushroom",   "Whopperflowers",       "Resistance",   "Ring of Boreas"),
    new CharacterMaterials("Qiqi",              5,  "Liyue",        "cryo",     "Support",  "Hoarfrost Core",           "Violetgrass",          "Samachurls",           "Prosperity",   "Tail of Boreas"),
    new CharacterMaterials("Diluc",             5,  "Mondstadt",    "pyro",     "DPS",      "Everflame Seed",           "Small Lamp Grass",     "Fatui",                "Resistance",   "Dvalin's Plume"),
    new CharacterMaterials("Jean",              5,  "Mondstadt",    "anemo",    "Support",  "Hurricane Seed",           "Dandelion Seed",       "Hilichurls",           "Resistance",   "Dvalin's Plume"),
    new CharacterMaterials("Sucrose",           4,  "Mondstadt",    "anemo",    "Support",  "Hurricane Seed",           "Windwheel Aster",      "Whopperflowers",       "Freedom",      "Spirit Locket of Boreas"),
    new CharacterMaterials("Chongyun",          4,  "Liyue",        "cryo",     "Support",  "Hoarfrost Core",           "Cor Lapis",            "Hilichurls",           "Diligence",    "Dvalin's Sigh"),
    new CharacterMaterials("Noelle",            4,  "Mondstadt",    "geo",      "DPS",      "Basalt Pillar",            "Valberry",             "Hilichurls",           "Resistance",   "Dvalin's Claw"),
    new CharacterMaterials("Bennett",           4,  "Mondstadt",    "pyro",     "Support",  "Everflame Seed",           "Windwheel Aster",      "Treasure Hoarders",    "Resistance",   "Dvalin's Plume"),
    new CharacterMaterials("Fischl",            4,  "Mondstadt",    "electro",  "Support",  "Lightning Prism",          "Small Lamp Grass",     "Hilichurl Shooters",   "Ballad",       "Spirit Locket of Boreas"),
    new CharacterMaterials("Ningguang",         4,  "Liyue",        "geo",      "Support",  "Basalt Pillar",            "Glaze Lily",           "Fatui",                "Prosperity",   "Spirit Locket of Boreas"),
    new CharacterMaterials("Xingqiu",           4,  "Liyue",        "hydro",    "Support",  "Cleansing Heart",          "Silk Flower",          "Hilichurls",           "Gold",         "Tail of Boreas"),
    new CharacterMaterials("Beidou",            4,  "Liyue",        "electro",  "Support",      "Lightning Prism",          "Noctilucous Jade",     "Treasure Hoarders",    "Gold",         "Dvalin's Sigh"),
    new CharacterMaterials("Xiangling",         4,  "Liyue",        "pyro",     "Support",  "Everflame Seed",           "Jueyun Chili",         "Slimes",               "Diligence",    "Dvalin's Claw"),
    new CharacterMaterials("Razor",             4,  "Mondstadt",    "electro",  "DPS",      "Lightning Prism",          "Wolfhook",             "Hilichurls",           "Resistance",   "Dvalin's Claw"),
    new CharacterMaterials("Barbara",           4,  "Mondstadt",    "hydro",    "Support",  "Cleansing Heart",          "Philanemo Mushroom",   "Samachurls",           "Freedom",      "Ring of Boreas"),
    new CharacterMaterials("Lisa",              4,  "Mondstadt",    "electro",  "Support",  "Lightning Prism",          "Valberry",             "Slimes",               "Ballad",       "Dvalin's Claw"),
    new CharacterMaterials("Kaeya",             4,  "Mondstadt",    "cryo",     "Support",  "Hoarfrost Core",           "Calla Lily",           "Treasure Hoarders",    "Ballad",       "Spirit Locket of Boreas"),
    new CharacterMaterials("Amber",             4,  "Mondstadt",    "pyro",     "DPS",      "Everflame Seed",           "Small lamp grass",     "Hilichurl Shooters",   "Freedom",      "Dvalin's Sigh"),
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
    const character = charactersMaterials[getCharacterMaterialIndex(name)];
    const charMaterials = new Map();
    const enemyMaterials = materials[getMaterialIndex(character.enemy)];
    const talentMaterials = materials[getMaterialIndex(character.talentMaterial)];

    switch (level) {
        case 2:
            charMaterials.set("Mora", 12500);
            charMaterials.set(enemyMaterials.forms[0], 6);
            charMaterials.set(talentMaterials.forms[0], 3);
            break;
        case 3:
            charMaterials.set("Mora", 17500);
            charMaterials.set(enemyMaterials.forms[1], 3);
            charMaterials.set(talentMaterials.forms[1], 2);
            break;
        case 4:
            charMaterials.set("Mora", 25000);
            charMaterials.set(enemyMaterials.forms[1], 4);
            charMaterials.set(talentMaterials.forms[1], 4);
            break;
        case 5:
            charMaterials.set("Mora", 30000);
            charMaterials.set(enemyMaterials.forms[1], 6);
            charMaterials.set(talentMaterials.forms[1], 6);
            break;
        case 6:
            charMaterials.set("Mora", 37500);
            charMaterials.set(enemyMaterials.forms[1], 9);
            charMaterials.set(talentMaterials.forms[1], 9);
            break;
        case 7:
            charMaterials.set("Mora", 120000);
            charMaterials.set(enemyMaterials.forms[2], 4);
            charMaterials.set(talentMaterials.forms[2], 4);
            charMaterials.set(character.talentBoss, 1);
            break;
        case 8:
            charMaterials.set("Mora", 260000);
            charMaterials.set(enemyMaterials.forms[2], 6);
            charMaterials.set(talentMaterials.forms[2], 6);
            charMaterials.set(character.talentBoss, 1);
            break;
        case 9:
            charMaterials.set("Mora", 450000);
            charMaterials.set(enemyMaterials.forms[2], 9);
            charMaterials.set(talentMaterials.forms[2], 12);
            charMaterials.set(character.talentBoss, 2);
            break;
        case 10:
            charMaterials.set("Mora", 700000);
            charMaterials.set(enemyMaterials.forms[2], 12);
            charMaterials.set(talentMaterials.forms[2], 16);
            charMaterials.set(character.talentBoss, 2);
            break;
        default: break;
    }
    return charMaterials;
}

function generateAscensionMaterial(character, ascention) {

    const charMaterials = new Map();

    const enemyMaterials = materials[getMaterialIndex(character.enemy)];
    const elementMaterials = materials[getMaterialIndex(character.element)];
    switch (ascention) {
        case 1:
            // first Mora value is assencion and second is mora's xp required
            charMaterials.set("Mora", 20000 + 24035);
            charMaterials.set(elementMaterials.forms[0], 1);
            charMaterials.set(character.localSpeciality, 3);
            charMaterials.set(enemyMaterials.forms[0], 3);
            break;
        case 2:
            charMaterials.set("Mora", 40000 + 115665);
            charMaterials.set(character.ascensionBoss, 2);
            charMaterials.set(elementMaterials.forms[1], 3);
            charMaterials.set(character.localSpeciality, 10);
            charMaterials.set(enemyMaterials.forms[0], 15);
            break;
        case 3:
            charMaterials.set("Mora", 60000 + 115820);
            charMaterials.set(character.ascensionBoss, 4);
            charMaterials.set(elementMaterials.forms[1], 6);
            charMaterials.set(character.localSpeciality, 20);
            charMaterials.set(enemyMaterials.forms[1], 12);
            break;
        case 4:
            charMaterials.set("Mora", 80000 + 170825);
            charMaterials.set(character.ascensionBoss, 8);
            charMaterials.set(elementMaterials.forms[2], 3);
            charMaterials.set(character.localSpeciality, 30);
            charMaterials.set(enemyMaterials.forms[1], 18);
            break;
        case 5:
            charMaterials.set("Mora", 100000 + 239185);
            charMaterials.set(character.ascensionBoss, 12);
            charMaterials.set(elementMaterials.forms[2], 6);
            charMaterials.set(character.localSpeciality, 45);
            charMaterials.set(enemyMaterials.forms[2], 12);
            break;
        case 6:
            charMaterials.set("Mora", 120000 + 322375);
            charMaterials.set(character.ascensionBoss, 20);
            charMaterials.set(elementMaterials.forms[3], 6);
            charMaterials.set(character.localSpeciality, 60);
            charMaterials.set(enemyMaterials.forms[2], 24);
            break;
        default: break;
    }

    return charMaterials;
}

function levelForTalent(talent) {
    level = 0
    switch (talent) {
        case 2:
            level = 40;
            break;
        case 3:
        case 4:
            level = 50;
            break;
        case 5:
        case 6:
            level = 60;
            break;
        case 7:
        case 8:
            level = 70;
            break;
        case 9:
        case 10:
            level = 80;
            break;
        default: break;
    }
    return level;
}

function generateCharacterLevelUp(character, maxTalentLevel, spent) {


    const characterMaterial = charactersMaterials[getCharacterMaterialIndex(character.name)];
    const charMaterials = new Map();

    let characterLevel = (spent)? 1 : character.level;
    while (characterLevel < levelForTalent(maxTalentLevel)) {
        characterLevel++;
        let characterAscentionMaterials = new Map();
        
        switch (characterLevel) {
            case 19:
                characterAscentionMaterials = generateAscensionMaterial(characterMaterial, 1);
                break;
            case 39:
                characterAscentionMaterials = generateAscensionMaterial(characterMaterial, 2);
                break;
            case 49:
                characterAscentionMaterials = generateAscensionMaterial(characterMaterial, 3);
                break;
            case 59:
                characterAscentionMaterials = generateAscensionMaterial(characterMaterial, 4);
                break;
            case 69:
                characterAscentionMaterials = generateAscensionMaterial(characterMaterial, 5);
                break;
            case 79:
                characterAscentionMaterials = generateAscensionMaterial(characterMaterial, 6);
                break;
            default: break;
        }

        for (const [key, value] of characterAscentionMaterials.entries()) {
            if (charMaterials.has(key)) {
                charMaterials.set(key, value + charMaterials.get(key));
            } else {
                charMaterials.set(key, value);
            }
        }
    }

    return charMaterials;
}

