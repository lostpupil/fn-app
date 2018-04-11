var fdk = require('@fnproject/fdk');

fdk.handle(function(input) {
    var name = 'World';
    if (input.name) {
        name = input.name;
    }
    response = {
        'message': `This is func2, ${name}.`
    }
    return response
})

