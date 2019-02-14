
// Takes a number and returns its binary equivalent
    const numbertoBinary = (number) => {
        let index = Math.floor(Math.log2(number))
        let operator = Math.pow(2, index)
        let binaryNum = ''
        let unused = 7 - index

        for (let j = 0; j < unused; j++) {
            binaryNum += '0'
        }

        for (let i = 0; i <= index; i++){
            if (number >= operator) {
                binaryNum += '1'
                number -= operator
            } else {
                binaryNum += '0'
            }
            operator /= 2
        }
        
        if (binaryNum === '') {
            return '0' 
        } 

        return binaryNum
    }



// ENCODER
const starDotEncode = (message) => {
    // Message >> Ascii
    let asciiArray = []

    for(let i = 0; i < message.length; i++){
        asciiArray.push(message[i].charCodeAt())
    }

    console.log('message > ascii =', asciiArray)
    // Ascii >> Binary
    let asciiInBinary = []

    for (let i = 0; i < asciiArray.length; i++) {
        asciiInBinary.push(numbertoBinary(asciiArray[i]))
    }
    console.log('ascii > binary =', asciiInBinary)
    // 1's and 0's >> * and .
    let output = []
    
    for (let i = 0; i < asciiInBinary.length; i++) {
        let string = asciiInBinary[i]
        let starAndDot = ''
        for (let j = 0; j < string.length; j++) {
            if (string[j] === '1') {
                starAndDot = starAndDot + '*'
            } else {
                starAndDot = starAndDot + '.'
            }
        }
        output.push(starAndDot)
    }

    output = output.join('')

    return output
}

// console.log(starDotEncode('Hi, my name is Alson'))


// DECODER
const starDotDecode = (encodedString) => {
    /*
        1. Turn star-dot string into binary (DONE)
        2. Turn binary string back into concatenated ascii string
        3. Turn ascii string back into original message
    */

    // Stars and Dots >> Binary String
    let binaryString = ''
    for (let i = 0; i < encodedString.length; i++) {
        if (encodedString[i] === '*') {
            binaryString += '1'
        } else {
            binaryString += '0'
        }
    }

    // Binary String >> Ascii String
    return binaryString
}

// console.log(starDotDecode('.*..*.....**.*..*...*.**.....*.......**.**.*..****..*...*.......**.***...**....*..**.**.*..**..*.*...*.......**.*..*..***..**...*.......*.....*..**.**....***..**..**.****..**.***..'))

module.exports = { starDotEncode, starDotDecode }
