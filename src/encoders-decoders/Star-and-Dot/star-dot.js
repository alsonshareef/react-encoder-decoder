
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

// Takes a binary number and returns a binary array
    const convertBinarytoByteArray = (bin) => {
        let output = []
        let binArray = bin.split('')
        let iterations = binArray.length

        for(let i = 0; i < iterations / 8; i++){
            if (binArray.length > 8) {
                let index = binArray.length - 8
                output.push(binArray.splice(index, 8).join(''))
            } 
        }

        let size = 8 - binArray.length
        let binOut = binArray.join('')

        for(let i = 0; i < size; i++){
            binOut = '0' + binOut
        }

        output.push(binOut)

        return output.reverse()
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
        let binaryArray = convertBinarytoByteArray(binaryString)

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
