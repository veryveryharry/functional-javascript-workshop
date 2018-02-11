function getShortMessages(messageContainers) {
    return messageContainers
        .filter( container => container.message.length < 50 )
        .map( container => container.message );
}

module.exports = getShortMessages;