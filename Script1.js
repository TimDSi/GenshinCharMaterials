// JavaScript source code

function generateRessourceQuantity(ressource, quantity) {
    let ressourceContainer = document.createElement("li");
    ressourceContainer.setAttribute("class", "material")

    // img
    let ressourceImage = document.createElement("img");
    ressourceImage.src = "./" + ressource.replace(/\s/g, '').replace(/'/g, '') + ".png";
    ressourceImage.alt = ressource;
    ressourceContainer.appendChild(ressourceImage);

    // value
    let ressourceQuantity = document.createElement("p");
    ressourceQuantity.innerHTML = quantity;
    ressourceContainer.appendChild(ressourceQuantity);

    return ressourceContainer;
}


function generateRequiredMaterials(character) {
    let charIndex = getCharacterMaterialIndex(character.name);
    let materialsRequired = document.createElement("ul");
    materialsRequired.setAttribute("class", "materialsRequired");

    const requirements = new Map();

    for (let j = 0; j < 3; j++) {
        let currentTalentLevel = character.talents[j];
        while (currentTalentLevel < character.talentObjectives[j]) {
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
            materialsRequired.appendChild(generateRessourceQuantity(key, value));
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
        let character = sortedCharacters[index];
        let ownIndex = getMyCharacterIndex(character);
        let materialIndex = getCharacterMaterialIndex(character);
        let div = document.createElement("div");
        div.setAttribute("class", "character");

        // presentation
        let presentation = document.createElement("div");
        presentation.setAttribute("class", "presentation");

            // name
            let name = document.createElement("h1");
            name.innerHTML = character;
            presentation.appendChild(name);

            // image
            let image = document.createElement("img");
            image.src = "./" + character.replace(/\s/g, '') + ".png";
            image.setAttribute("class", "characterImage");
            presentation.appendChild(image);

        div.appendChild(presentation);

        // stats
        let currentStats = document.createElement("table");
        currentStats.setAttribute("class", "characterStats");

            // level
            let level = document.createElement("th");
            if (ownIndex != -1) {
                level.innerHTML = "Level " + myCharacter[ownIndex].level;
            } else {
                level.innerHTML = "Level " +1;
            }
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
                    let str;
                    if (ownIndex != -1) {
                        str = myCharacter[ownIndex].talents[j];
                    } else {
                        str = 1;
                    }
                    if (ownIndex != -1) {
                        if (str < myCharacter[ownIndex].talentObjectives[j]) {
                            str += " ==> " + myCharacter[ownIndex].talentObjectives[j];
                        }
                    }
                    talentLevel.innerHTML = str;
                    talentContainer.appendChild(talentLevel);

                    currentStats.appendChild(talentContainer);
                }
            }
        div.appendChild(currentStats);

        // materials required
        let materialsRequired = generateRequiredMaterials(myCharacter[ownIndex]);
        div.appendChild(materialsRequired);

        box.appendChild(div);
    }
}
