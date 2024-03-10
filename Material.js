// JavaScript source code
class Material {
    constructor(material, forms) {
        this.material = material;
        this.forms = forms;
    }
}

let materials = [
    new Material("Mora", ["Mora"]),
    new Material("defaultLongMaterial", ["Material1", "Material2", "Material3"]),
    // Fontaine
    new Material("Clockwork Meka", ["Meshing Gear", "Spur Gear", "Artificed Dynamic Gear"]),
    new Material("Fontemer Aberrants", ["Transoceanic Pearl", "Transoceanic Chunk", "Xenochromatic Crystal"]),
    // Sumeru
    new Material("Eremites", ["Faded Red Satin", "Trimmed Red Silk", "Rich Red Brocade"]),
    new Material("Fungus", ["Fungal Spores", "Luminescent Pollen", "Crystalline Cryst Dust"]),
    // Inazuma
    new Material("Nobushi", ["Old Handguard", "Kageuchi Handguard", "Famed Handguard"]),
    new Material("Specter", ["Spectral Husk", "Spectral Heart", "Spectral Nucleus"]),
    // Liyue
    new Material("Treasure Hoarders", ["Treasure Hoarder Insignia", "Silver Raven Insignia", "Golden Raven Insignia"]),
    // Monstad
    new Material("Fatui", ["Recruit's Insignia", "Sergeant's Insignia", "Officer's Insignia"]),
    new Material("Whopperflowers", ["Whopperflower Nectar", "Shimmering Nectar", "Energy Nectar"]),
    new Material("Slimes", ["Slime Condensate", "Slime Secretions", "Slime Concentrate"]),
    // Hilichurls
    new Material("Samachurls", ["Divining Scroll", "Sealed Scroll", "Forbidden Curse Scroll"]),
    new Material("Hilichurl Shooters", ["Firm Arrowhead", "Sharp Arrowhead", "Weathered Arrowhead"]),
    new Material("Hilichurls", ["Damaged Mask", "Stained Mask", "Ominous Mask"]),
    //talent Fontaine
    new Material("Equity", ["Teachings of Equity", "Guide to Equity", "Philosophies of Equity"]),
    new Material("Justice", ["Teachings of Justice", "Guide to Justice", "Philosophies of Justice"]),
    new Material("Order", ["Teachings of Order", "Guide to Order", "Philosophies of Order"]),
    //talent Sumeru
    new Material("Admonition", ["Teachings of Admonition", "Guide to Admonition", "Philosophies of Admonition"]),
    new Material("Ingenuity", ["Teachings of Ingenuity", "Guide to Ingenuity", "Philosophies of Ingenuity"]),
    new Material("Praxis", ["Teachings of Praxis", "Guide to Praxis", "Philosophies of Praxis"]),
    //talent Inazuma
    new Material("Transience", ["Teachings of Transience", "Guide to Transience", "Philosophies of Transience"]),
    new Material("Elegance", ["Teachings of Elegance", "Guide to Elegance", "Philosophies of Elegance"]),
    new Material("Light", ["Teachings of Light", "Guide to Light", "Philosophies of Light"]),
    //talent Liyue
    new Material("Prosperity", ["Teachings of Prosperity", "Guide to Prosperity", "Philosophies of Prosperity"]),
    new Material("Gold", ["Teachings of Gold", "Guide to Gold", "Philosophies of Gold"]),
    new Material("Diligence", ["Teachings of Diligence", "Guide to Diligence", "Philosophies of Diligence"]),
    // talent Monstad
    new Material("Ballad", ["Teachings of Ballad", "Guide to Ballad", "Philosophies of Ballad"]),
    new Material("Resistance", ["Teachings of Resistance", "Guide to Resistance", "Philosophies of Resistance"]),
    new Material("Freedom", ["Teachings of Freedom", "Guide to Freedom", "Philosophies of Freedom"]),
    // ascension Stone
    new Material("pyro", ["Agnidus Agate Sliver", "Agnidus Agate Fragment", "Agnidus Agate Chunk", "Agnidus Agate Gemstone"]),
    new Material("hydro", ["Varunada Lazurite Sliver", "Varunada Lazurite Fragment", "Varunada Lazurite Chunk", "Varunada Lazurite Gemstone"]),
    new Material("anemo", ["Vayuda Turquoise Sliver", "Vayuda Turquoise Fragment", "Vayuda Turquoise Chunk", "Vayuda Turquoise Gemstone"]),
    new Material("electro", ["Vajrada Amethyst Sliver", "Vajrada Amethyst Fragment", "Vajrada Amethyst Chunk", "Vajrada Amethyst Gemstone"]),
    new Material("dendro", ["Nagadus Emerald Sliver", "Nagadus Emerald Fragment", "Nagadus Emerald Chunk", "Nagadus Emerald Gemstone"]),
    new Material("cryo", ["Shivada Jade Sliver", "Shivada Jade Fragment", "Shivada Jade Chunk", "Shivada Jade Gemstone"]),
    new Material("geo", ["Prithiva Topaz Sliver", "Prithiva Topaz Fragment", "Prithiva Topaz Chunk", "Prithiva Topaz Gemstone"]),
    // WorldBoss
    new Material("World Bosses", [
        "Hydro Tulpa", "Tourbillon Device", "Fontemer Unihorn", "Emperor's Resolution", "Coppelius", "Coppelia",
        "Dew of Repudiation", "Dragonheir's False Fin", "Marionette Core", "Perpetual Heart", "Riftborn Regalia", "Smoldering Pearl", "Storm Beads",
        "Juvenile Jade", "Everflame Seed", "Cloudseam Scale", "Cleansing Heart", "Basalt Pillar",
        "Crystalline Bloom", "Hoarfrost Core", "Hurricane Seed", "Lightning Prism",
        "Evergloom Ring", "Light Guiding Tetrahedron", "Majestic Hooked Beak", "Perpetual Caliber", "Pseudo-Stamens", "Quelled Creeper", "Runic Fang", "Thunderclap Fruitcore"
    ]),
    new Material("Weekly Bosses", [
        "Lightless Mass", "Lightless Eye of the Maelstrom", "Lightless Silk String",
        "Ring of Boreas", "Spirit Locket of Boreas", "Tail of Boreas",
        "Bloodjade Branch", "Dragon Lord's Crown", "Gilded Scale",
        "Shadow of the Warrior", "Shard of a Foul Legacy", "Tusk of Monoceros Caeli",
        "Dvalin's Claw", "Dvalin's Plume", "Dvalin's Sigh",
        "Everamber", "Primordial Greenbloom", "Worldspan Fern",
        "Ashen Heart", "Hellfire Butterfly", "Molten Moment",
        "Mudra of the Malefic General", "Tears of the Calamitous God", "The Meaning of Aeons",
        "Daka's Bell", "Mirror of Mushin", "Puppet Strings"
    ]),
];

function getMaterialIndex(material) {
    for (let i = 0; i < materials.length; i++) {
        if (materials[i].material == material) {
            return i;
        }
    }
    return -1;
}

function getMaterialCategory(material) {
    for (let i = 0; i < materials.length; i++) {
        let forms = materials[i].forms
        for (let j = 0; j < forms.length; j++) {
            if (forms[j] == material) {
                return i;
            }
        }
        if (materials[i].material == material) {
            return i;
        }
    }
    return -1;
}