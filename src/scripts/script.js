// Importing functions for randomizing
import randomFunctions from './randomFunctions.js';
//Event listener for user input
document.querySelector(`#random-btn`).addEventListener('click', (generateEvent) => {
    // Make function and move to eventListeners.js
	const server = document.querySelector(`#server`).value;
	let endServer = '';
	if (server != 'none') {
		endServer = randomFunctions.randomServer(server);
	}
	const faction = document.querySelector(`#faction`).value;
	let endFaction;
	const gender = document.querySelector(`#gender`).value;
	let endGender = '';
	let endClass = '';
	let endRace = '';
    const spec = document.querySelector(`#spec`).value;
	if (faction === 'yes') {
        endFaction = randomFunctions.randomFaction();
	} else if (faction === 'alliance') {
		endFaction = 'Alliance';
	} else if (faction === 'horde') { //Turn into else block instead
		endFaction = 'Horde';
	}
	if (gender === 'yes') {
		endGender = randomFunctions.randomGender();
	}
	//Gotta do race first then class.....
	endRace = randomFunctions.randomRace(endFaction);
	endClass = randomFunctions.randomClass(endRace);
	// console.log(endFaction, endRace, endGender, endClass);
	// Make event listener functions for this and clean up
	if (gender === 'yes' && server != 'none') {
		return (document.querySelector(
			`#output-container`
		).innerHTML = `<p> You are a ${endFaction} ${endRace} ${endGender} ${endClass} and you are on the server ${endServer}.`);
	} else if (gender === 'no' && server != 'none') {
		return (document.querySelector(
			`#output-container`
		).innerHTML = `<p> You are a ${endFaction} ${endRace} ${endClass} and you are on the server ${endServer}.`);
	} else if (gender === 'yes' && server === 'none') {
		return (document.querySelector(
			`#output-container`
		).innerHTML = `<p> You are a ${endFaction} ${endRace} ${endGender} ${endClass}.`);
	} else if (gender === 'no' && server === 'none') {
		return (document.querySelector(
			`#output-container`
		).innerHTML = `<p> You are a ${endFaction} ${endRace} ${endClass}.`);
	}
});
