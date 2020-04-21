//Function for random faction
function randomFaction(){
    const factions = ["Alliance", "Horde"]
    const finalFaction = factions[Math.floor(Math.random() * factions.length)];
    console.log(finalFaction);
    return finalFaction
}
//Function for random gender
function randomGender(){
    const genders = ["Male", "Female"]
    const finalGender = genders[Math.floor(Math.random() * genders.length)];
    console.log(finalGender);
}
//Function for random spec
function randomSpec(){}

//Function for random race
function randomRace(faction){
    const allianceRaces = ["Dwarf", "Gnome", "Human", "Night Elf"]
    const hordeRaces = ["Orc", "Tauren", "Troll", "Undead"]
    const finalRace = ""
    if(faction === "Alliance"){
        finalRace = allianceRaces[Math.floor(Math.random() * allianceRaces.length)];
    } else{
        finalRace = hordeRaces[Math.floor(Math.random() * hordeRaces.length)];
    }
    return finalRace
}

//Function for random class
function randomClass(){
    const classList = []
    1;
}

//Event listener for user input
document.querySelector(`#random-btn`).addEventListener("click", generateEvent => {
    const server = document.querySelector(`#server`).value
    const faction = document.querySelector(`#faction`).value
    const gender = document.querySelector(`#gender`).value
    const spec = document.querySelector(`#spec`).value
    console.log(spec);
})

randomFaction()
randomGender()