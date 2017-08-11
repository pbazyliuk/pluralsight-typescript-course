function addMessage() {
	console.log('work');
	var messageElement = document.getElementById('messages');
	messageElement.innerText = 'Welcome to MultiMath!';
}

document.getElementById('startGame').addEventListener('click', addMessage);
