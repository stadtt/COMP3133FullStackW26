const clientIO = io();

const logsDiv = document.getElementById('event-log');

const logEvent = (message) => {
    const logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    logsDiv.appendChild(logEntry);
    logsDiv.scrollTop = logsDiv.scrollHeight; 
};

const sendPing = () => {
    logEvent(`\nPing button clicked`);
    clientIO.emit('ping', "Hello from Client");
};

clientIO.on('pong-ack', (data) => {
    logEvent(`\nON CLIENT - PONG-ACK - RECEIVED - with data : ${data}`);
});       

const sendChatMessage = () => {
    logEvent('\nChat button clicked');

    const message = document.getElementById('message-input').value
    
    if (message.trim()){
        //TODO - send message from client
        clientIO.emit('chat-from-client', message);
        logEvent(`\nON CLIENT - CHAT - SENT - with message : ${message}`)
    }else{
        logEvent(`\nON CLIENT - CHAT - ERROR - Message is empty. Can't send.`)
    }
};

clientIO.on('chat-from-server', (data) => {
    logEvent(`\nON CLIENT - CHAT - RECEIVED - from user ${data.user} : ${data.message}`)
});

clientIO.on('chat-ack', (ackMessage) => {
    logEvent(`\nON CLIENT - CHAT-ACK - RECEIVED - with message : ${ackMessage}`)
});


const sendFeedback = () =>{
    logEvent('\nSend feedback button clicked');
    const userInput = document.getElementById('feedback-message').value;

    const feedback = {
        date:  new Date(),
        user: clientIO.id,
        message: userInput
    }

    // TODO - send feedback from client
    clientIO.emit('feedback-from-client', feedback);

    logEvent(`\nON CLIENT - FEEDBACK - SENT : ${JSON.stringify(feedback)}`);


};

clientIO.on('feedback-ack', (ackMessage) => {
    logEvent(`\nON CLIENT - FEEDBACK-ACK - RECEIVED - with message : ${ackMessage}`)
});

const joinGroup = () => {
    logEvent('\nJoin group button clicked');
    
    // TODO - send group join 
    clientIO.emit('join-group', "gbcodders");

    logEvent(`\nON CLIENT - JOIN-GROUP - SENT - request sent.`)
};
    
    
    const sendGroupMessage = () => {
    logEvent('\nSend group message button clicked');

    const message = document.getElementById('message-input').value
    
    if (message.trim()){
        const groupMessage = {
            user: clientIO.id,
            group: "gbcoders",
            message: message
        }
        //send message from client
        clientIO.emit('group-message-from-client', groupMessage);

        logEvent(`\nON CLIENT - GROUP-MESSAGE - SENT - with message : ${JSON.stringify(groupMessage)}`)
    }else{
        logEvent(`\nON CLIENT - GROUP-MESSAGE - ERROR - Message is empty. Can't send.`)
    }
};


const leaveGroup = () => {
    logEvent('\Leave group button clicked');

    // TODO - send group leave request
    clientIO.emit('leave-group', "gbcodders");
    // logEvent(`\nON CLIENT - LEAVE-GROUP - SENT - request sent.`)
};

clientIO.on('group-message-from-server', (data) => {
    logEvent(`\nON CLIENT - GROUP-MESSAGE - RECEIVED - in group ${data.group} from user ${data.user} : ${data.message}`)
});

const disconnectServer = () => {
    logEvent('\nDisconnect server button clicked');

    // TODO - send disconnect  request
    clientIO.disconnect();

    // logEvent(`\nON CLIENT - DISCONNECT - SENT - request sent.`)
};