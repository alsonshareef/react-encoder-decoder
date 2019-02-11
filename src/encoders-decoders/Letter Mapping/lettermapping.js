let {encodeKey, decodeKey} = require('./encoding-key-LM')

const mapEncoder = (message) => {
    let output = ''

    for(let i = 0; i < message.length; i++){
        output += encodeKey[message[i]]
        output += ','
    }

    return output
}

console.log(mapEncoder('Hi, my name is Alson'))

const mapDecoder = (encodedString) => {
    
}

module.exports = {mapEncoder, mapDecoder}