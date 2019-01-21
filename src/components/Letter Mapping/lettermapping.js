let encodeMap = require('./encoding-map')

const mapEncoder = (message) => {
    let output = ''

    for(let i = 0; i < message.length; i++){
        output += encodeMap[message[i]]
    }

    return output
}

console.log(mapEncoder())