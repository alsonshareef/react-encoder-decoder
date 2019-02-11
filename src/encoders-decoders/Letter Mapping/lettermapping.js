let {encodeKey, decodeKey} = require('./encoding-key-LM')

const mapEncoder = (message) => {
    let output = ''

    for(let i = 0; i < message.length; i++){
        output += encodeKey[message[i]]
        output += ','
    }

    return output
}

// console.log(mapEncoder('Hi, my name is Alson'))

const mapDecoder = (encodedString) => {
    let tempNum = '', output = '';

    for (let i = 0; i < encodedString.length; i++) {
        if (encodedString[i] !== ',') {
            tempNum += encodedString[i]
        } else {
            let num = Number(tempNum)
            output += decodeKey[num]
            tempNum = ''
        }
    }
    return output
}

// console.log(mapDecoder('34,5,25,84,53,13,25,53,14,1,13,5,53,9,19,53,27,12,19,15,14,'))

module.exports = {mapEncoder, mapDecoder}