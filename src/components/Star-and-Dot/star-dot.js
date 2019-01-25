const numbertoBinary = (number) => {
    let index = Math.floor(Math.log2(number))
    let operator = Math.pow(2, index)
    let binaryNum = ''
    let unused = 7 - index

    // console.log('operator:', operator)

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
        
        // console.log('iteration:', i)
        // console.log('index:', index)
        // console.log('binaryNum:', binaryNum)
        // console.log('number', number)
        // console.log('operator:', operator)
        // console.log('\n')
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

// BUG: FIGURE OUT WHY THEYRE SO MANY DOTS (BINARY FUNCTION) :
        // the 'number' variable hits 0 before loop has finished, making the rest of the loop with number variable = 0 add '0' to the end of binaryNum
console.log(starDot('Hi, my name is Alson '))