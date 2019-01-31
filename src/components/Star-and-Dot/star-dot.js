
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
            if (number !== 0) {
                if (number >= operator) {
                    binaryNum += '1'
                    number -= operator
                } else {
                    binaryNum += '0'
                }
                operator /= 2
            }
        }
        
        if (binaryNum === '') {
            return '0' 
        } 

        return binaryNum

    }




// ** MAIN ENCODER FUNCTION ** //

const starDot = (message) => {
    // Message >> Ascii
    let asciiString = ''

    for(let i = 0; i < message.length; i++){
        asciiString += message[i].charCodeAt()
    }

    // Ascii >> Binary
    let asciiInBinary = numbertoBinary(asciiString)

    // 1's and 0's >> * and .
    let output = ''
    
    for (let i = 0; i < asciiInBinary.length; i++) {
        if (asciiInBinary[i] === '1') {
            output += '*'
        } else {
            output += '.'
        }
    }

    return output
}

// console.log(starDot('Hi, my name is Alson'))

module.exports = { starDot }