module.exports = {
	name: 'hey',
	description: 'sends a hey message',
	execute(message, args, Discord) {
		message.channel.send(
			'Hey 👋, Nice to meet you! Call me `cm!help` if you need any kind of help 😊'
		);
	},
};
