/* Character :
    - name
    - level
    - talents
    - talents objectives
*/
let myCharacter = [
    new Character("Arlecchino",         90, [10, 7, 6], 1), 
    new Character("Gaming",             80, [9, 9, 9],  5), 
    new Character("Xianyun",            80, [6, 9, 9],  0), 
    new Character("Chevreuse",          80, [6, 9, 9],  0), 
    new Character("Navia",              80, [9, 9, 9],  0), 
    new Character("Furina",             80, [6, 10, 10],2), 
    new Character("Charlotte",          80, [6, 9, 9],  6), 
    new Character("Freminet",           80, [9, 9, 9],  5), 
    new Character("Lynette",            80, [6, 9, 9],  6), 
    new Character("Kirara",             80, [6, 9, 9],  1), 
    new Character("Kaveh",              80, [6, 9, 9],  0), 
    new Character("Mika",               80, [6, 9, 9],  3), 
    new Character("Yaoyao",             80, [6, 9, 9],  0), 
    new Character("Faruzan",            80, [6, 9, 9],  6), 
    new Character("Layla",              80, [6, 9, 9],  6), 
    new Character("Nahida",             80, [9, 9, 10], 1), 
    new Character("Nilou",              80, [9, 9, 9],  0), 
    new Character("Candace",            80, [6, 9, 9],  4), 
    new Character("Dori",               80, [6, 9, 9],  5), 
    new Character("Tighnari",           80, [9, 9, 9],  1), 
    new Character("Collei",             80, [6, 9, 9],  6), 
    new Character("Shikanoin Heizou",   80, [9, 9, 9],  6), 
    new Character("Kuki Shinobu",       80, [6, 9, 9],  6), 
    new Character("Yelan",              81, [6, 9, 9],  1), 
    new Character("Yae Miko",           80, [9, 9, 9],  0), 
    new Character("Shenhe",             80, [6, 9, 9],  0), 
    new Character("Yun Jin",            80, [6, 9, 9],  4), 
    new Character("Gorou",              80, [6, 9, 9],  2), 
    new Character("Thoma",              80, [6, 9, 9],  6), 
    new Character("Sangonomiya Kokomi", 80, [9, 9, 9],  0), 
    new Character("Raiden Shogun",      80, [6, 9, 10], 2), 
    new Character("Kujou Sara",         80, [6, 10, 9], 6), 
    new Character("Yoimiya",            80, [9, 9, 9],  0), 
    new Character("Sayu",               80, [6, 9, 9],  6), 
    new Character("Kamisato Ayaka",     80, [9, 9, 9],  0), 
    new Character("Kaedehara Kazuha",   80, [6, 9, 9],  2), 
    new Character("Eula",               80, [9, 9, 9],  0), 
    new Character("Yanfei",             80, [9, 9, 9],  6), 
    new Character("Rosaria",            80, [6, 9, 9],  6), 
    new Character("Hu Tao",             80, [10, 10, 10],1), 
    new Character("Ganyu",              80, [10, 9, 9], 0), 
    new Character("Zhongli",            81, [6, 9, 9],  0), 
    new Character("Xinyan",             80, [6, 6, 6],  6), 
    new Character("Diona",              80, [6, 9, 9],  6), 
    new Character("Venti",              80, [9, 9, 9],  0), 
    new Character("Keqing",             90, [10, 10, 10],5), 
    new Character("Mona",               80, [6, 9, 9],  1), 
    new Character("Qiqi",               80, [6, 9, 9],  1), 
    new Character("Diluc",              89, [9, 9, 9],  2), 
    new Character("Jean",               80, [6, 9, 9],  3), 
    new Character("Sucrose",            80, [6, 9, 9],  6), 
    new Character("Chongyun",           84, [6, 9, 9],  2), 
    new Character("Noelle",             80, [6, 9, 9],  6), 
    new Character("Bennett",            80, [10, 10, 10],6), 
    new Character("Fischl",             80, [6, 9, 9],  6), 
    new Character("Ningguang",          80, [6, 9, 9],  6), 
    new Character("Xingqiu",            81, [6, 9, 10], 6), 
    new Character("Beidou",             80, [6, 8, 9],  6), 
    new Character("Xiangling",          80, [6, 9, 9],  6), 
    new Character("Razor",              80, [9, 9, 9],  4), 
    new Character("Barbara",            80, [6, 7, 6],  6), 
    new Character("Lisa",               80, [6, 6, 6],  6), 
    new Character("Kaeya",              80, [6, 9, 9],  4), 
    new Character("Amber",              80, [6, 9, 9],  6) 
];

function getMyCharacterIndex(name) {
    for (let i = 0; i < myCharacter.length; i++) {
        if (myCharacter[i].name == name) {
            return i;
        }
    }
    return -1;
}