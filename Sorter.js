// JavaScript source code
var orderByDate = "Newest";
var orderByElements;
var orderByRegions;
var orderByQuality;
var notComplete;
var ownedFilter;
function submitForm() {
    orderByDate = document.querySelector('input[name="orderByDate"]:checked').value;
    orderByElements = document.getElementById('orderByElements').checked;
    orderByRegions = document.getElementById('orderByRegions').checked;
    orderByQuality = document.getElementById('orderByQuality').checked;
    notComplete = document.getElementById('notComplete').checked;
    ownedFilter = document.getElementById('ownedFilter').checked;
    createBox();
}

function generateSortIndex(characterName) {
    let index = "";
    let character = charactersMaterials[getCharacterMaterialIndex(characterName)];
    if (orderByRegions) {
        index += character.region;
    }

    if (orderByRegions && orderByElements) {
        index += "_";
    }

    if (orderByElements) {
        index += character.element;
    }

    if ((orderByRegions && orderByQuality) || (orderByQuality && orderByElements)) {
        index += "_";
    }

    if (orderByQuality) {
        index += character.quality;
    }
    return index;
}

function generatePriority() {
    let regions = ["Mondstadt", "Snezhnaya", "Liyue", "Inazuma", "Sumeru", "Fontaine"];
    let elements = ["pyro", "hydro", "anemo", "electro", "dendro", "cryo", "geo"];
    let quality = [5, 4];

    let priority = [""];

    // Possibility: r_e_q
    if (orderByRegions && orderByElements && orderByQuality) {
        for (let r of regions) {
            for (let e of elements) {
                for (let q of quality) {
                    priority.push(r + "_" + e + "_" + q);
                }
            }
        }
        return priority;
    }

    // Possibility: r_e
    if (orderByRegions && orderByElements) {
        for (let r of regions) {
            for (let e of elements) {
                priority.push(r + "_" + e);
            }
        }
        return priority;
    }

    // Possibility: r_q
    if (orderByRegions && orderByQuality) {
        for (let r of regions) {
            for (let q of quality) {
                priority.push(r + "_" + q);
            }
        }
        return priority;
    }

    // Possibility: e_q
    if (orderByElements && orderByQuality) {
        for (let e of elements) {
            for (let q of quality) {
                priority.push(e + "_" + q);
            }
        }
        return priority;
    }

    // Possibility: r
    if (orderByRegions) {
        for (let r of regions) {
            priority.push(r);
        }
    }

    // Possibility: e
    if (orderByElements) {
        for (let e of elements) {
            priority.push(e);
        }
    }

    // Possibility: q
    if (orderByQuality) {
        for (let q of quality) {
            priority.push(q);
        }
    }
    return priority;
}

function updateRequired(character) {
    let characterMaterials = charactersMaterials[getCharacterMaterialIndex(character.name)];
    let require = false;
    let i = 0;
    while (!require && i < 3) {
        let targetValue = 9;
        if (i == 0 && characterMaterials.type != "DPS") {
            targetValue = 6;
        }
        require = (character.talents[i] < targetValue);
        i++;
    }
    return require;
}
function generateSortedCharacter() {
    let charactersName = [];
    // generate default
    if (orderByDate == "Newest") {
        for (let index in charactersMaterials) {
            charactersName.push(charactersMaterials[index].name);
        }
    } else if (orderByDate == "Oldest") {
        for (let index = charactersMaterials.length - 1; index >= 0; index--) {
            charactersName.push(charactersMaterials[index].name);
        }
    } else {
        for (let index in charactersMaterials) {
            charactersName.push(charactersMaterials[index].name);
        }
    }

    let SortedCharacters = [];
    let identifiers = [];
    for (let i = 0; i < charactersName.length; i++) {
        let identifier = generateSortIndex(charactersName[i]);
        let tableId = identifiers.indexOf(identifier);
        if (tableId == -1) {
            tableId = identifiers.length;
            identifiers.push(identifier);
            SortedCharacters.push([]);
        }
        SortedCharacters[tableId].push(charactersName[i]);
    }

    // generate priority
    let priority = generatePriority();

    charactersName = []
    for (let i = 0; i < priority.length; i++) {
        for (let j = 0; j < SortedCharacters.length; j++) {
            if (identifiers[j] == priority[i]) {
                type = SortedCharacters[j];
                for (let k = 0; k < type.length; k++) {
                    charactersName.push(type[k]);
                }
            }
        }
    }

    if (notComplete) {
        let sortedByCompletude = [];
        for (let i = 0; i < charactersName.length; i++) {
            let character = charactersMaterials[getCharacterMaterialIndex(charactersName[i])];

            // owner
            let ownIndex = getMyCharacterIndex(charactersName[i]);
            let ownCharacter;
            if (ownIndex != -1) {
                ownCharacter = myCharacter[ownIndex];
            } else {
                ownCharacter = new Character(charactersName[i], 1, [1, 1, 1]);
            }
            if (updateRequired(ownCharacter)) {
                sortedByCompletude.push(charactersName[i]);
            }
        }
        for (let i = 0; i < charactersName.length; i++) {
            if (sortedByCompletude.indexOf(charactersName[i]) == -1) {
                sortedByCompletude.push(charactersName[i]);
            }
        }
        charactersName = sortedByCompletude;
    }


    if (ownedFilter) {
        let sortByOwned = [];
        for (let i = 0; i < charactersName.length; i++) {
            if (getMyCharacterIndex(charactersName[i]) != -1) {
                sortByOwned.push(charactersName[i]);
            }
        }
        for (let i = 0; i < charactersName.length; i++) {
            if (sortByOwned.indexOf(charactersName[i]) == -1) {
                sortByOwned.push(charactersName[i]);
            }
        }
        charactersName = sortByOwned;
    }
    
    //console.log(charactersName)
    return charactersName;
}