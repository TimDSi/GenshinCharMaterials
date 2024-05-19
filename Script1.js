// JavaScript source code

function generateRessourceQuantity(ressource, quantity) {
    let ressourceContainer = document.createElement("li");
    ressourceContainer.setAttribute("class", "material")

    // img
    let ressourceImage = document.createElement("img");
    ressourceImage.src = "./assets/Materials/" + ressource.replace(/[\s'-]/g, '') + ".png";
    ressourceImage.alt = "??";
    ressourceContainer.appendChild(ressourceImage);

    // value
    let ressourceQuantity = document.createElement("p");
    ressourceQuantity.innerHTML = quantity;
    ressourceContainer.appendChild(ressourceQuantity);

    return ressourceContainer;
}

let totalRessourcesSpent;

function calculateTotalSpent(character) {
    // talents
    let maxTalent = 0;
    for (let j = 0; j < 3; j++) {
        let talentLevel = 0;
        const currentTalentLevel = character.talents[j];

        if (currentTalentLevel > maxTalent) {
            maxTalent = currentTalentLevel;
        }

        while (talentLevel < currentTalentLevel) {
            talentLevel++;
            const thisTalentMaterials = generateMaterialsForTalentLevel(character.name, talentLevel);
            for (const [key, value] of thisTalentMaterials.entries()) {
                if (totalRessourcesSpent.has(key)) {
                    totalRessourcesSpent.set(key, value + totalRessourcesSpent.get(key));
                } else {
                    totalRessourcesSpent.set(key, value);
                }
            }
        }
    }

    // ascension
    const thisCharacterAscensionMaterials = generateCharacterLevelUp(character, maxTalent, true);
    //console.log(thisCharacterAscensionMaterials)
    for (const [key, value] of thisCharacterAscensionMaterials.entries()) {
        if (totalRessourcesSpent.has(key)) {
            totalRessourcesSpent.set(key, value + totalRessourcesSpent.get(key));
        } else {
            totalRessourcesSpent.set(key, value);
        }
    }
}

function genereateCharacterRequirements(character) {
    const requirements = new Map();

    // talents
    let maxTargetValue = 0;
    for (let j = 0; j < 3; j++) {
        let currentTalentLevel = character.talents[j];
        let targetValue;
        switch (charactersMaterials[getCharacterMaterialIndex(character.name)].type) {
            case "DPS":
                targetValue = 9;
                break;
            case "Support":
                if (j == 0) {
                    targetValue = 6;
                } else {
                    targetValue = 9;
                }
                break;
            default:
                targetValue = 1;
                break;
        }

        if (targetValue > maxTargetValue) {
            maxTargetValue = targetValue;
        }

        while (currentTalentLevel < targetValue) {
            currentTalentLevel++;
            const thisTalentMaterials = generateMaterialsForTalentLevel(character.name, currentTalentLevel);
            for (const [key, value] of thisTalentMaterials.entries()) {
                if (requirements.has(key)) {
                    requirements.set(key, value + requirements.get(key));
                } else {
                    requirements.set(key, value);
                }
            }
        }
    }

    // ascension
    const thisCharacterAscensionMaterials = generateCharacterLevelUp(character, maxTargetValue);
    //console.log(thisCharacterAscensionMaterials)
    for (const [key, value] of thisCharacterAscensionMaterials.entries()) {
        if (requirements.has(key)) {
            requirements.set(key, value + requirements.get(key));
        } else {
            requirements.set(key, value);
        }
    }

    return requirements;
}

function generateRequiredMaterials(character) {
    let materialsRequired = document.createElement("ul");
    materialsRequired.setAttribute("class", "materialsRequired");

    const requirements = genereateCharacterRequirements(character);

    //sort requirements
    let materialsIndexes = []
    for (const [key, value] of requirements.entries()) {
        if (value > 0) {
            const index = getMaterialCategory(key);
            if (!(materialsIndexes.indexOf(index) >= 0)) {
                materialsIndexes.push(index);
            }
        }
    }

    // add rows
    for (let j = 0; j < materialsIndexes.length; j++) {
        for (const [key, value] of requirements.entries()) {
            if (materialsIndexes[j] == getMaterialCategory(key)) {
                materialsRequired.appendChild(generateRessourceQuantity(key, value));
            }
        }
    }
    

    
    return materialsRequired;
}


function generateCharacterConstellations(type, value) {
    // presentation
    let constellationContainer = document.createElement("div");
    constellationContainer.setAttribute("class", "constellations");

    // Constellations
    for (let i = 0; i < 6; i++) {
        let constellation = document.createElement("div");
        constellation.setAttribute("class", "characterConstellation");
        constellationContainer.appendChild(constellation);
        let b = -1;
        let x = -25 + 100 * Math.cos((2*i + b) * Math.PI / 24);
        let y = 35 + 100 * Math.sin((i + b) * Math.PI / 24);
        constellation.style.left = x + "%";
        constellation.style.top = y + "%";

        if (i + 1 <= value) {
            constellation.style.background = `radial-gradient(circle, ${type}, #666666)`;
        } else {
            constellation.style.background = `radial-gradient(circle, #FFFFFF , #666666)`;
        }
    }

    return constellationContainer;
}

function generateCharacterPresentation(characterName) {
    // presentation
    let presentation = document.createElement("div");
    presentation.setAttribute("class", "presentation");

    // name
    let name = document.createElement("h1");
    name.innerHTML = characterName;
    presentation.appendChild(name);

    // image
    let image = document.createElement("img");
    image.src = "./assets/Characters/" + charactersMaterials[getCharacterMaterialIndex(characterName)].region + "/" + characterName.replace(/\s/g, '') + ".png";
    let imageClass = "characterImage";
    if (getMyCharacterIndex(characterName) == -1) {
        imageClass += " notOwned";
    }
    image.setAttribute("class", imageClass);
    presentation.appendChild(image);

    return presentation;
}

function generateCharacterStats(character) {
    let currentStats = document.createElement("table");
    currentStats.setAttribute("class", "characterStats");

    // level
    let level = document.createElement("th");
    level.innerHTML = "Level " + character.level;
    level.colSpan = 2;
    currentStats.appendChild(level);

    //talents
    if ((materialIndex = getCharacterMaterialIndex(character.name)) != -1) {
        for (let j = 0; j < 3; j++) {
            let talentContainer = document.createElement("tr");

            // name
            let talentName = document.createElement("td");
            talentName.innerHTML = charactersMaterials[materialIndex].talentsName[j];
            talentContainer.appendChild(talentName);

            // level
            let talentLevel = document.createElement("td");
            let str = character.talents[j];

            // objective
            let targetValue = 9;
            if (j == 0 && charactersMaterials[materialIndex].type != "DPS") {
                targetValue = 6;
            }

            // to do
            if (str < targetValue) {
                str += " ==> " + targetValue;
            }
            talentLevel.innerHTML = str;
            talentContainer.appendChild(talentLevel);

            currentStats.appendChild(talentContainer);
        }
    }

    return currentStats;
}

function generateCharacter(character) {
    // get character materials data
    let materialIndex = getCharacterMaterialIndex(character.name);

    // generate Character
    let div = document.createElement("div");
    div.setAttribute("class", "character");
    let color = "#FFFFFF";
    switch (charactersMaterials[materialIndex].element) {
        case "geo":
            color = "#FAB632";
            break;
        case "electro":
            color = "#AF8EC1";
            break;
        case "hydro":
            color = "#4CC2F1";
            break;
        case "cryo":
            color = "#9FD6E3";
            break;
        case "pyro":
            color = "#EF7938";
            break;
        case "anemo":
            color = "#74C2A8";
            break;
        case "dendro":
            color = "#A5C83B";
            break;
        default:
            color = "#FFFFFF";
            break;
    }

    // check if char is own
    let ownIndex = getMyCharacterIndex(character.name);
    let constellations = 0;
    if (ownIndex == -1) {
        color = "#444444";
    } else {
        constellations = myCharacter[ownIndex].constellations;
    }
    //div.style.backgroundColor = color;
    div.style.background = `linear-gradient(to bottom, ${color}, #FFFFFF)`;

    // presentation
    div.appendChild(generateCharacterPresentation(character.name));

    // contellations
    div.appendChild(generateCharacterConstellations(color, constellations));

    // stats
    div.appendChild(generateCharacterStats(character));

    // materials required
    let materialsRequired = generateRequiredMaterials(character);
    div.appendChild(materialsRequired);

    return div;
}

function generateAllMaterials(sortedCharacters) {
    let materialsList = document.getElementById("AllRessources");

    // clear
    while (materialsList.firstChild) {
        materialsList.removeChild(materialsList.lastChild);
    }

    totalRessourcesSpent = new Map();
    let allMaterials = new Map();

    for (let index in sortedCharacters) {

        // initialize name
        let characterName = sortedCharacters[index];

        // get character data from owner
        let ownIndex = getMyCharacterIndex(characterName);

        // get character data from owner
        let character;
        if (ownIndex != -1) {
            character = myCharacter[ownIndex];
        } else {
            if (document.getElementById("ownedFilter").checked) {
                character = new Character(characterName, 90, [10, 10, 10], 6);
            } else {
                character = new Character(characterName, 1, [1, 1, 1], 0);
            }
        }

        //force new char
        //character = new Character(characterName, 1, [1, 1, 1]);

        // Character Materials
        const thisCharacterMaterials = genereateCharacterRequirements(character);
        //console.log(character.name, thisCharacterMaterials)
        for (const [key, value] of thisCharacterMaterials.entries()) {
            if (allMaterials.has(key)) {
                allMaterials.set(key, value + allMaterials.get(key));
            } else {
                allMaterials.set(key, value);
            }
        }
        calculateTotalSpent(character);
    }
    //console.log("All : ", allMaterials)

    //sort requirements
    let materialsIndexes = [];
    for (let i = 0; i < materials.length; i++) {
        materialsIndexes.push(i);
    }

    // add all unknown Materials
    for (const [key, value] of allMaterials.entries()) {
        if (value > 0) {
            const index = getMaterialCategory(key);
            if (!(materialsIndexes.indexOf(index) >= 0)) {
                materialsIndexes.push(index);
            }
        }
    }


    // HTML Side

    //generate mob Materials
    let mob = document.createElement("ul");
    let talents = document.createElement("ul");
    let rocks = document.createElement("ul");
    let other = document.createElement("ul");
    let worldBosses = document.createElement("ul");
    let weeklyBoss = document.createElement("ul");

    // add rows
    for (let j = 0; j < materialsIndexes.length; j++) {
        for (const [key, value] of allMaterials.entries()) {
            if (materialsIndexes[j] == getMaterialCategory(key)) {
                    // weekly bosses
                if (materialsIndexes[j] > getMaterialIndex("Weekly Bosses") - 1) {
                    weeklyBoss.appendChild(generateRessourceQuantity(key, value));
                    // world bosses
                } else if (materialsIndexes[j] > getMaterialIndex("World Bosses") - 1) {
                    worldBosses.appendChild(generateRessourceQuantity(key, value));
                    // rocks
                } else if (materialsIndexes[j] > getMaterialIndex("pyro") - 1) {
                    rocks.appendChild(generateRessourceQuantity(key, value));
                    // world bosses
                } else if (materialsIndexes[j] > getMaterialIndex("Equity") - 1) {
                    talents.appendChild(generateRessourceQuantity(key, value));
                    // world bosses
                } else if (materialsIndexes[j] > 1) {
                    mob.appendChild(generateRessourceQuantity(key, value));
                    // other
                } else {
                    other.appendChild(generateRessourceQuantity(key, value));
                }
            }
        }
    }

    // add all list
    materialsList.appendChild(mob);
    materialsList.appendChild(document.createElement("br"));

    materialsList.appendChild(talents);
    materialsList.appendChild(document.createElement("br"));

    materialsList.appendChild(weeklyBoss);
    materialsList.appendChild(document.createElement("br"));

    materialsList.appendChild(rocks);
    materialsList.appendChild(document.createElement("br"));

    materialsList.appendChild(worldBosses);
    materialsList.appendChild(document.createElement("br"));

    materialsList.appendChild(other);
    materialsList.appendChild(document.createElement("br"));

    console.log("Spent : ", totalRessourcesSpent);
}

function createBox() {
    let box = document.getElementById("Box");

    // clear
    while (box.firstChild) {
        box.removeChild(box.lastChild);
    }

    // set order
    let sortedCharacters = generateSortedCharacter();

    // generate character
    for (let index in sortedCharacters) {

        // initialize name
        let characterName = sortedCharacters[index];

        // get character data from owner
        let ownIndex = getMyCharacterIndex(characterName);
        let character;
        if (ownIndex != -1) {
            character = myCharacter[ownIndex];
        } else {
            character = new Character(characterName, 1, [1, 1, 1]);
        }

        box.appendChild(generateCharacter(character));
    }

    //generate all Materials
    generateAllMaterials(sortedCharacters);
}

function main() {
    createBox();
}