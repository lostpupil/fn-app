var fdk = require('@fnproject/fdk');

var messages = require('./messages/user_message_pb');

fdk.handle(function(input) {

    var name = 'World';
    if (input.name) {
        name = input.name;
    }
    var message = new messages.UserMessage();

    message.setId(1);
    message.setName(name);
    message.setEmail('banana@eurus.cn');
    message.setMobile('110')

    var bytes = message.serializeBinary();
    var dbytes = messages.UserMessage.deserializeBinary(bytes);
    response = {
        'message': bytes,
        'origin': dbytes
    }

    return response
})

