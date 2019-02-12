
// ENCODER
const multiplyAsciiEncode = (message) => {
    let output = []
    for(let i = 0; i < message.length; i++){
        let num = message[i].charCodeAt()
        output.push(num * 2)
        output.push(',')
    }
    output = output.join('')
    return output
}

// console.log('Encoded:', multiplyAsciiEncode('Hi, my name is Alson'))


// DECODER
const multiplyAsciiDecode = (encodedString) => {
    let tempNum = '', output = '';

    for (let i = 0; i < encodedString.length; i++) {
        if (encodedString[i] !== ',') {
            tempNum += encodedString[i]
        } else {
            let num = Number(tempNum / 2)
            num = String.fromCharCode(num)
            output += num
            tempNum = ''
        }
    }
    return output
}

// console.log('Decoded:', multiplyAsciiDecode('144,210,88,64,218,242,64,220,194,218,202,64,210,230,64,130,216,230,222,220,'))

module.exports = {multiplyAsciiEncode, multiplyAsciiDecode}