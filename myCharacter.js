/* Character :
    - name
    - level
    - talents
    - talents objectives
*/
let myCharacter = [
    new Character(
        "Furina", 80,
        [6, 10, 10],
        [6, 10, 10]
    ),
    new Character(
        "Charlotte", 80,
        [6, 6, 6],
        [6, 9, 9]
    ),
    new Character(
        "Wriothesley", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Neuvillette", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Freminet", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Lyney", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Lynette", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Kirara", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Baizhu", 1,
        [1, 1, 1],
        [6, 9, 9]
    ),
    new Character(
        "Kaveh", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Mika", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Dehya", 1,
        [1, 1, 1],
        [6, 9, 9]
    ),
    new Character(
        "Alhaitham", 1,
        [1, 1, 1],
        [1, 1, 1]
    ),
    new Character(
        "Yaoyao", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Wanderer", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Faruzan", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Layla", 80,
        [6, 9, 8],
        [6, 9, 9]
    ),
    new Character(
        "Nahida", 80,
        [9, 9, 10],
        [9, 9, 10]
    ),
    new Character(
        "Nilou", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Cyno", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Candace", 80,
        [6, 6, 6],
        [6, 9, 9]
    ),
    new Character(
        "Dori", 80,
        [6, 6, 6],
        [6, 9, 9]
    ),
    new Character(
        "Tighnari", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Collei", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Shikanoin Heizou", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Kuki Shinobu", 80,
        [6, 9, 6],
        [6, 9, 9]
    ),
    new Character(
        "Yelan", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Kamisato Ayato", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Yae Miko", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Shenhe", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Yun Jin", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Arataki Itto", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Gorou", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Thoma", 80,
        [6, 8, 6],
        [6, 9, 9]
    ),
    new Character(
        "Sangonomiya Kokomi", 80,
        [8, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Raiden Shogun", 80,
        [6, 9, 10],
        [6, 9, 10]
    ),
    new Character(
        "Kujou Sara", 80,
        [6, 10, 9],
        [6, 10, 9]
    ),
    new Character(
        "Yoimiya", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Sayu", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Kamisato Ayaka", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Kaedehara Kazuha", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Eula", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Yanfei", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Rosaria", 80,
        [6, 6, 6],
        [6, 9, 9]
    ),
    new Character(
        "Hu Tao", 80,
        [10, 10, 10],
        [10, 10, 10]
    ),
    new Character(
        "Xiao", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Ganyu", 80,
        [10, 9, 9],
        [10, 9, 9]
    ),
    new Character(
        "Albedo", 1,
        [1, 1, 1],
        [6, 9, 9]
    ),
    new Character(
        "Zhongli", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Xinyan", 80,
        [6, 6, 6],
        [6, 9, 9]
    ),
    new Character(
        "Tartaglia", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Diona", 80,
        [6, 6, 6],
        [6, 9, 9]
    ),
    new Character(
        "Klee", 1,
        [1, 1, 1],
        [9, 9, 9]
    ),
    new Character(
        "Venti", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Keqing", 90,
        [10, 10, 10],
        [10, 10, 10]
    ),
    new Character(
        "Mona", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Qiqi", 80,
        [6, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Diluc", 80,
        [9, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Jean", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Sucrose", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Chongyun", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Noelle", 80,
        [6, 9, 9],
        [9, 9, 9]
    ),
    new Character(
        "Bennett", 80,
        [10, 10, 10],
        [10, 10, 10]
    ),
    new Character(
        "Fischl", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Ningguang", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Xingqiu", 80,
        [6, 9, 10],
        [6, 9, 10]
    ),
    new Character(
        "Beidou", 80,
        [6, 6, 6],
        [9, 9, 9]
    ),
    new Character(
        "Xiangling", 80,
        [6, 9, 9],
        [6, 9, 9]
    ),
    new Character(
        "Razor", 80,
        [6, 6, 6],
        [6, 9, 9]
    ),
    new Character(
        "Barbara", 80,
        [6, 7, 6],
        [6, 9, 9]
    ),
    new Character(
        "Lisa", 80,
        [6, 6, 6],
        [6, 9, 9]
    ),
    new Character(
        "Kaeya", 80,
        [6, 6, 7],
        [6, 9, 9]
    ),
    new Character(
        "Amber", 80,
        [6, 7, 6],
        [6, 9, 9]
    )
];

function getMyCharacterIndex(name) {
    for (let i = 0; i < myCharacter.length; i++) {
        if (myCharacter[i].name == name) {
            return i;
        }
    }
    return -1;
}