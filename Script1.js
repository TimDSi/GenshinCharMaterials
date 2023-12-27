// JavaScript source code

function generateRessourceQuantity(ressource, quantity, notOwn) {
    let ressourceContainer = document.createElement("li");
    ressourceContainer.setAttribute("class", "material")

    // img
    let ressourceImage = document.createElement("img");
    ressourceImage.src = "./" + ressource.replace(/\s/g, '').replace(/'/g, '') + ".png";
    ressourceImage.alt = ressource;
    if (notOwn) {
        ressourceImage.className = "notOwned";
    }
    ressourceContainer.appendChild(ressourceImage);

    // value
    let ressourceQuantity = document.createElement("p");
    ressourceQuantity.innerHTML = quantity;
    ressourceContainer.appendChild(ressourceQuantity);

    return ressourceContainer;
}


function generateRequiredMaterials(character) {
    let materialsRequired = document.createElement("ul");
    materialsRequired.setAttribute("class", "materialsRequired");
    let materialIndex = getCharacterMaterialIndex(character.name);

    const requirements = new Map();

    for (let j = 0; j < 3; j++) {
        let currentTalentLevel = character.talents[j];
        let targetValue = 9;
        if (j == 0 && charactersMaterials[materialIndex].type != "DPS") {
            targetValue = 6;
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

    // add rows
    for (const [key, value] of requirements.entries()) {
        if (value > 0) {
            materialsRequired.appendChild(generateRessourceQuantity(key, value, getMyCharacterIndex(character.name)==-1));
        }
    }

    
    return materialsRequired;
}

function generateSortedCharacter() {
    let charactersName = [];
    for (let index in charactersMaterials) {
        charactersName.push(charactersMaterials[index].name);
    }
    return charactersName;
}

function main() {
    let box = document.getElementById("Box");
    let sortedCharacters = generateSortedCharacter();
    for (let index in sortedCharacters) {
        let characterName = sortedCharacters[index];
        let ownIndex = getMyCharacterIndex(characterName);
        let character;
        if (ownIndex != -1) {
            character = myCharacter[ownIndex];
        } else {
            character = new Character(characterName, 1, [1, 1, 1]);
        }
        let materialIndex = getCharacterMaterialIndex(characterName);
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
        if (ownIndex == -1) {
            color = "#444444";
        }
        div.style.backgroundColor = color;
        div.style.background = `linear-gradient(to bottom, ${color}, #FFFFFF)`;


        // presentation
        let presentation = document.createElement("div");
        presentation.setAttribute("class", "presentation");

            // name
            let name = document.createElement("h1");
            name.innerHTML = characterName;
            presentation.appendChild(name);

            // image
            let image = document.createElement("img");
            image.src = "./" + characterName.replace(/\s/g, '') + ".png";
            let imageClass = "characterImage";
            if (ownIndex == -1) {
                imageClass += " notOwned";
            }
            image.setAttribute("class", imageClass);
            presentation.appendChild(image);

        div.appendChild(presentation);

        // stats
        let currentStats = document.createElement("table");
        currentStats.setAttribute("class", "characterStats");

            // level
            let level = document.createElement("th");
            level.innerHTML = "Level " + character.level;
            level.colSpan = 2;
            currentStats.appendChild(level);

            //talents
            if (materialIndex != -1) {
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
        div.appendChild(currentStats);

        // materials required
        let materialsRequired = generateRequiredMaterials(character);
        div.appendChild(materialsRequired);

        box.appendChild(div);
    }
}
