// JavaScript source code

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
    for (let o = 0 ; o < options.length ; o++) {
        const option = options[o];
        switch (option) {
            // sort from newest to oldest
            case "Date":
            default:
                sortedCharacters = [];
                for (let index in charactersName) {
                    sortedCharacters.push(charactersName[index]);
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

            
        }
    }
    
    //console.log(charactersName)
    return charactersName;
}