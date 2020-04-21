//Function for random faction
function randomFaction(){
    const factions = ["Alliance", "Horde"]
    const finalFaction = factions[Math.floor(Math.random() * factions.length)];
    return finalFaction
}
//Function for random gender
function randomGender(){
    const genders = ["Male", "Female"]
    const finalGender = genders[Math.floor(Math.random() * genders.length)];
    return finalGender
}
//Function for random spec
function randomSpec(){}

//Function for random race
function randomRace(faction){
    const allianceRaces = ["Dwarf", "Gnome", "Human", "Night Elf"]
    const hordeRaces = ["Orc", "Tauren", "Troll", "Undead"]
    let finalRace = ""
    if(faction === "Alliance"){
        finalRace = allianceRaces[Math.floor(Math.random() * allianceRaces.length)];
    } else{
        finalRace = hordeRaces[Math.floor(Math.random() * hordeRaces.length)];
    }
    return finalRace
}

//Function for random class
function randomClass(race){
    let finalClass = ""
    const dwarfClassList = ["Hunter", "Paladin", "Priest", "Rogue", "Warrior"]
    const gnomeClassList = ["Mage", "Rogue", "Warlock", "Warrior"]
    const humanClassList = ["Paladin", "Priest", "Mage", "Rogue", "Warlock", "Warrior"]
    const nightElfClassList = ["Druid", "Hunter", "Priest", "Rogue", "Warrior"]
    const orcClassList = ["Hunter", "Rogue", "Shaman", "Warlock", "Warrior"]
    const taurenClassList = ["Druid", "Hunter", "Shaman", "Warrior"]
    const trollClassList = ["Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior"]
    const undeadClassList = ["Mage", "Priest", "Rogue", "Warlock", "Warrior"]
    if(race === "Dwarf"){
        finalClass = dwarfClassList[Math.floor(Math.random() * dwarfClassList.length)];
    } else if(race === "Gnome"){
        finalClass = gnomeClassList[Math.floor(Math.random() * gnomeClassList.length)];
    } else if(race === "Human"){
        finalClass = humanClassList[Math.floor(Math.random() * humanClassList.length)];
    } else if(race === "Night Elf"){
        finalClass = nightElfClassList[Math.floor(Math.random() * nightElfClassList.length)];
    } else if(race === "Orc"){
        finalClass = orcClassList[Math.floor(Math.random() * orcClassList.length)];
    } else if(race === "Tauren"){
        finalClass = taurenClassList[Math.floor(Math.random() * taurenClassList.length)];
    } else if(race === "Troll"){
        finalClass = trollClassList[Math.floor(Math.random() * trollClassList.length)];
    } else if (race === "Undead"){
        finalClass = undeadClassList[Math.floor(Math.random() * undeadClassList.length)];
    }
    return finalClass
}

//Event listener for user input
document.querySelector(`#random-btn`).addEventListener("click", generateEvent => {
    const server = document.querySelector(`#server`).value
    const faction = document.querySelector(`#faction`).value
    let endFaction
    const gender = document.querySelector(`#gender`).value
    let endGender = ""
    let endClass = ""
    let endRace = ""
    const spec = document.querySelector(`#spec`).value
    if(faction === "yes"){
        endFaction = randomFaction()
        // console.log(endFaction);
    }
    if(gender === "yes"){
        endGender = randomGender()
        // console.log(endGender);
    }
    //Gotta do race first then class.....
    endRace = randomRace(endFaction)
    endClass = randomClass(endRace)
    console.log(endFaction, endRace, endGender, endClass);
    return document.querySelector(`#output-container`).innerHTML = `<p> You are an ${endFaction} ${endRace} ${endGender} ${endClass}`
})