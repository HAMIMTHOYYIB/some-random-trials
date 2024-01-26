function startit() {
    alert("Hello welcome...");
    let namee = prompt("What is your name?");
    let message = prompt("What do you want to say?");
    let textElement = document.getElementById('text');
    let messageElement = document.getElementById('message');

    if (namee && message) {
        textElement.innerText = " 'Hi " + namee +"'" ;
        messageElement.innerText =  namee + "You said : " + message;
    }
}