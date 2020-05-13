const randomFunctions = {
	//Function for random server
	randomServer: (type) => {
		let finalServer = '';
		// Creating an object for the server types/lists
		const serverList = {
			usEastPVE: [ 'Ashkandi', 'Mankrik', 'Pagle', 'Westfall', 'Windseeker' ],
			usEastPVP: [
				'Benediction',
				'Earthfury',
				'Faerlina',
				'Heartseeker',
				'Herod',
				'Incendius',
				'Kirtonos',
				'Kromcrush',
				'Netherwind',
				'Skeram',
				'Stalagg',
				'Sulfuras',
				'Thalnos'
			],
			usEastRP: [ 'Bloodsail Buccaneers' ],
			usEastRPPVP: [ 'Deviate Delight' ],
			usWestPVE: [ 'Atiesh', 'Azuresong', 'Myzrael', 'Old Blanchy' ],
			usWestPVP: [
				'Anathema',
				'Arcanite Reaper',
				'Bigglesworth',
				'Blaumeux',
				'Fairbanks',
				'Kurinnaxx',
				'Rattlegore',
				'Smolderweb',
				'Thunderfury',
				'Whitemane'
			],
			usWestRP: [],
			usWestRPPVP: [ 'Grobbulus' ]
		};
		// Fix loop since refactored serverList into an object to store servers
		for (let i = 0; i != serverTypes.length; i++) {
			if (type === serverTypes[i]) {
				console.log(serverTypes[i]);
				finalServer = serverTypes[i];
				// [Math.floor(Math.random() * serverTypes[i].length)]
				console.log(finalServer);
				// Make servers into object
			}
		}
		return finalServer;
	},
	//Function for random faction
	randomFaction: () => {
		const factions = [ 'Alliance', 'Horde' ];
		const finalFaction = factions[Math.floor(Math.random() * factions.length)];
		return finalFaction;
	},
	//Function for random gender
	randomGender: () => {
		const genders = [ 'Male', 'Female' ];
		const finalGender = genders[Math.floor(Math.random() * genders.length)];
		return finalGender;
	},
	//Function for random spec
	randomSpec: () => {},
	//Function for random race
	randomRace: (faction) => {
        // Create an object for this as well could also do faction/race/class onject
		const allianceRaces = [ 'Dwarf', 'Gnome', 'Human', 'Night Elf' ];
		const hordeRaces = [ 'Orc', 'Tauren', 'Troll', 'Undead' ];
		let finalRace = '';
		if (faction === 'Alliance') {
			finalRace = allianceRaces[Math.floor(Math.random() * allianceRaces.length)];
		} else {
			finalRace = hordeRaces[Math.floor(Math.random() * hordeRaces.length)];
		}
		return finalRace;
	},
	//Function for random class
	randomClass: (race) => {
		let finalClass = '';
		// Create an object for this as well
		const dwarfClassList = [ 'Hunter', 'Paladin', 'Priest', 'Rogue', 'Warrior' ];
		const gnomeClassList = [ 'Mage', 'Rogue', 'Warlock', 'Warrior' ];
		const humanClassList = [ 'Paladin', 'Priest', 'Mage', 'Rogue', 'Warlock', 'Warrior' ];
		const nightElfClassList = [ 'Druid', 'Hunter', 'Priest', 'Rogue', 'Warrior' ];
		const orcClassList = [ 'Hunter', 'Rogue', 'Shaman', 'Warlock', 'Warrior' ];
		const taurenClassList = [ 'Druid', 'Hunter', 'Shaman', 'Warrior' ];
		const trollClassList = [ 'Hunter', 'Mage', 'Priest', 'Rogue', 'Shaman', 'Warrior' ];
		const undeadClassList = [ 'Mage', 'Priest', 'Rogue', 'Warlock', 'Warrior' ];
		// Make loop for this part as well to clean up code.
		if (race === 'Dwarf') {
			finalClass = dwarfClassList[Math.floor(Math.random() * dwarfClassList.length)];
		} else if (race === 'Gnome') {
			finalClass = gnomeClassList[Math.floor(Math.random() * gnomeClassList.length)];
		} else if (race === 'Human') {
			finalClass = humanClassList[Math.floor(Math.random() * humanClassList.length)];
		} else if (race === 'Night Elf') {
			finalClass = nightElfClassList[Math.floor(Math.random() * nightElfClassList.length)];
		} else if (race === 'Orc') {
			finalClass = orcClassList[Math.floor(Math.random() * orcClassList.length)];
		} else if (race === 'Tauren') {
			finalClass = taurenClassList[Math.floor(Math.random() * taurenClassList.length)];
		} else if (race === 'Troll') {
			finalClass = trollClassList[Math.floor(Math.random() * trollClassList.length)];
		} else if (race === 'Undead') {
			finalClass = undeadClassList[Math.floor(Math.random() * undeadClassList.length)];
		}
		return finalClass;
	}
};
// Exporting random functions
export default randomFunctions;
