// JavaScript source code
function submitForm() {
    var order = document.querySelector('input[name="order"]:checked').value;
    var orderByElements = document.getElementById('orderByElements').checked;

    console.log("Selected order: " + order);
    console.log("Order by Elements: " + orderByElements);

    var options = order;
    if (orderByElements) {
        options += " Elements";
    }
    console.log(options)
    createBox(options);
}


function generateSortedCharacter(parameters) {
    if (parameters == undefined) {
        parameters = "";
    }
    // generate default
    charactersName = []
    for (let index in charactersMaterials) {
        charactersName.push(charactersMaterials[index].name);
    }

    // sort
    let options = parameters.split(' ');
    let sortedCharacters = [];
    for (let o = 0; o < options.length; o++) {
        const option = options[o];
        switch (option) {

            // unknown
            default:
                break;


            // sort from newest to oldest
            case "Date":
                sortedCharacters = [];
                for (let index in charactersMaterials) {
                    sortedCharacters.push(charactersMaterials[index].name);
                }
                charactersName = sortedCharacters;
                break;

            // sort from oldest to newest
            case "Reverse":
                sortedCharacters = [];
                for (let index = charactersName.length - 1; index >= 0; index--) {
                    sortedCharacters.push(charactersName[index]);
                }
                charactersName = sortedCharacters;
                break;

            case "Elements":
                let elements = ["pyro", "hydro", "anemo", "electro", "dendro", "cryo", "geo"];
                sortedCharacters = [];
                for (let e = 0; e < elements.length; e++) {
                    for (let index in charactersName) {
                        if (charactersMaterials[getCharacterMaterialIndex(charactersName[index])].element == elements[e]) {
                            sortedCharacters.push(charactersName[index]);
                        }
                    }
                }
                charactersName = sortedCharacters;
                break;
        }
    }

    //console.log(charactersName)
    return charactersName;
}