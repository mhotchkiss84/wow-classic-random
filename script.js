//Function for random server
function randomServer(type){
    let finalServer = ""
    const usEastPVE = ["Ashkandi", "Mankrik", "Pagle", "Westfall", "Windseeker"]
    const usEastPVP = ["Benediction", "Earthfury", "Faerlina", "Heartseeker", "Herod", "Incendius", "Kirtonos", "Kromcrush", "Netherwind", "Skeram", "Stalagg", "Sulfuras", "Thalnos"]
    const usEastRP = ["Bloodsail Buccaneers"]
    const usEastRPPVP = ["Deviate Delight"]
    const usWestPVE = ["Atiesh", "Azuresong", "Myzrael", "Old Blanchy"]
    const usWestPVP = ["Anathema", "Arcanite Reaper", "Bigglesworth", "Blaumeux", "Fairbanks", "Kurinnaxx", "Rattlegore", "Smolderweb", "Thunderfury", "Whitemane"]
    const usWestRP = []
    const usWestRPPVP = ["Grobbulus"]
    if(type === "pve-east"){
        finalServer = usEastPVE[Math.floor(Math.random() * usEastPVE.length)];
    } else if(type === "pvp-east"){
        finalServer = usEastPVP[Math.floor(Math.random() * usEastPVP.length)];
    } else if(type === "rp-east"){
        finalServer = usEastRP[Math.floor(Math.random() * usEastRP.length)];
    } else if(type === "rppvp-east"){
        finalServer = usEastRPPVP[Math.floor(Math.random() * usEastRPPVP.length)];
    } else if(type === "pve-west"){
        finalServer = usWestPVE[Math.floor(Math.random() * usWestPVE.length)];
    } else if(type === "pvp-west"){
        finalServer = usWestPVP[Math.floor(Math.random() * usWestPVP.length)];
    } else if(type === "rppvp-west"){
        finalServer = usWestRPPVP[Math.floor(Math.random() * usWestRPPVP.length)];
    }
    return finalServer
}

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
    let endServer = ""
    if(server != "none"){
        endServer = randomServer(server)
    }
    const faction = document.querySelector(`#faction`).value
    let endFaction
    const gender = document.querySelector(`#gender`).value
    let endGender = ""
    let endClass = ""
    let endRace = ""
    const spec = document.querySelector(`#spec`).value
    if(faction === "yes"){
        endFaction = randomFaction()
    } else if(faction === "alliance"){
        endFaction = "Alliance"
        console.log(endFaction);
    } else if(faction === "horde"){
        endFaction = "Horde"
        console.log(endFaction);
    }
    if(gender === "yes"){
        endGender = randomGender()
    }
    //Gotta do race first then class.....
    endRace = randomRace(endFaction)
    endClass = randomClass(endRace)
    // console.log(endFaction, endRace, endGender, endClass);
    if(gender === "yes" && server != "none"){
    return document.querySelector(`#output-container`).innerHTML = `<p> You are a ${endFaction} ${endRace} ${endGender} ${endClass} and you are on the server ${endServer}.`
    } else if(gender === "no" && server != "none"){
        return document.querySelector(`#output-container`).innerHTML = `<p> You are a ${endFaction} ${endRace} ${endClass} and you are on the server ${endServer}.`
    } else if(gender === "yes" && server === "none"){
        return document.querySelector(`#output-container`).innerHTML = `<p> You are a ${endFaction} ${endRace} ${endGender} ${endClass}.`
    } else if(gender === "no" && server ==="none"){
        return document.querySelector(`#output-container`).innerHTML = `<p> You are a ${endFaction} ${endRace} ${endClass}.`
    }
})
