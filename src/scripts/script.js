// Importing functions for randomizing
import randomFunctions from './randomFunctions.js'
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
