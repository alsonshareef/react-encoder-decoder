
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

// Takes a binary number and returns its number
    const binarytoNumber = (bin) => {
        let num = 0
        let operator = Math.pow(2, bin.length - 1)
        for (let i = 0; i < bin.length; i++) {
            if (bin[i] === '1') {
                num += operator
            }
            operator /= 2
        }
        return num
    }



// ENCODER
    const starDotEncode = (message) => {
        // Message >> Ascii
        let asciiArray = []

        for(let i = 0; i < message.length; i++){
            asciiArray.push(message[i].charCodeAt())
        }

        // Ascii >> Binary
        let asciiInBinary = []

        for (let i = 0; i < asciiArray.length; i++) {
            asciiInBinary.push(numbertoBinary(asciiArray[i]))
        }
        
        // Binary >> * and .
        let output = []
        
        for (let i = 0; i < asciiInBinary.length; i++) {
            let string = asciiInBinary[i]
            let starAndDot = ''
            for (let j = 0; j < string.length; j++) {
                if (string[j] === '1') {
                    starAndDot += '*'
                } else {
                    starAndDot += '.'
                }
            }
            output.push(starAndDot)
        }

        output = output.join('')

        return output
    }

    // console.log('starDotEncode:', starDotEncode('Hi, I am Alson'))


// DECODER
    const starDotDecode = (encodedString) => {

        // Stars and Dots >> Binary String
        let binaryString = ''
        for (let i = 0; i < encodedString.length; i++) {
            if (encodedString[i] === '*') {
                binaryString += '1'
            } else {
                binaryString += '0'
            }
        }

        // Binary String >> Binary Array
        let binaryArray = [], string = ''
        for (let i = 0; i <= binaryString.length; i++) {
            if (string.length < 8) {
                string += binaryString[i]
            } else {
                binaryArray.push(string)
                string = binaryString[i]
            }
        }

        // Binary Array >> Ascii array
        let asciiArray = []
        for (let i = 0; i < binaryArray.length; i++) {
            asciiArray.push(binarytoNumber(binaryArray[i]))
        }

        // Ascii array >> Original Message
        let originalMessage = ''
        for (let i = 0; i < asciiArray.length; i++) {
            originalMessage += String.fromCharCode(asciiArray[i])
        }

        originalMessage = originalMessage.trim()
        
        return originalMessage
    }

// console.log('starDotDecode:', starDotDecode('.*..*....**.*..*..*.**....*......*..*..*..*......**....*.**.**.*..*......*.....*.**.**...***..**.**.****.**.***.'))

module.exports = { starDotEncode, starDotDecode }
