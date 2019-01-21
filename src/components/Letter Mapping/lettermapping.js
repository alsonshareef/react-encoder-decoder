let encodeKey = require('./encoding-key')

const mapEncoder = (message) => {
    let output = ''

    for(let i = 0; i < message.length; i++){
        output += encodeKey[message[i]]
    }

    return output
}

console.log(mapEncoder('Hey'))