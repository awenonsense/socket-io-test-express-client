const socket = io("https://socket-io-test-express.herokuapp.com")

socket.emit('join-room', "test-page", "doc2+"+new Date().getTime())

socket.on('user-connected', (userID) => {
	console.log('New User connected: ' + userID)
})