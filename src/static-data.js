const Channels = [
	{
		id: 1,
		name: 'general'
	},
	{
		id: 2,
		name: 'help'
	},
	{
		id: 3,
		name: 'react'
	},
	{
		id: 4,
		name: 'redux'
	},
	{
		id: 5,
		name: 'webpack'
	},
	{
		id: 6,
		name: 'react-router'
	}
];

const People = [
	{
		id: 7,
		name: 'Dave'
	},
	{
		id: 8,
		name: 'Sarah'
	},
	{
		id: 9,
		name: 'Zack'
	},
	{
		id: 10,
		name: 'Pam'
	},
	{
		id: 11,
		name: 'Erin'
	},
	{
		id: 12,
		name: 'Joe'
	}
];

// generate random messages
function generateFakeMessages(count) {
	// want to return a list of messages
	let messages = [];
	for (let i = 0; i < count; i++) {
		let userName = generateRandomUser();
		messages.append({
			id: i,
			userName,
			text: `Text Message from ${userName}`,
			timeStamp: new Date()
		});
	}
	return messages;
}

function generateRandomUser() {
	return People.map((p) => p.name)[Math.floor(Math.random() * 1000) % People.length];
}

function createFakeActivity(channels, maxMessages) {
	return channels.reduce((result, channel) => {
		const randNumber = Math.floor(Math.random() * maxMessages);
		result[channel.id] = generateFakeMessages(randNumber);
		return result;
	}, {});
}

export { Channels, People, createFakeActivity };
