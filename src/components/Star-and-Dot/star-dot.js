const numbertoBinary = (number) => {
    let index = Math.floor(Math.log2(number))
    let operator = Math.pow(2, index)
    let binary = ''
    let unused = 7 - index

    for (let j = 0; j < unused; j++) {
        binary += '0'
    }

    for (let i = 0; i <= index; i++){
        if (number >= operator) {
            binary += '1'
            number -= operator
        } else {
            binary += '0'
        }
        operator /= 2
    }
    
    
    if (binary === '') {
       return '0' 
    } 

    return binary

}

// ** MAIN ENCODER FUNCTION ** //

const starDot = (message) => {
    // Message >> Ascii
    let asciiString = ''
    for(let i = 0; i < message.length; i++){
        asciiString += message[i].charCodeAt()
    }
    
    let asciiNum = Number(asciiString)

    // Ascii >> Binary
    let asciiInBinary = ''

    // 1's and 0's >> * and .
}

starDot('Alson')