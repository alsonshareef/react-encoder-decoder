let encodeKeyRLM = require('./encoding-key-symbol')

// RELEVANT FUNCTIONS FOR ENCODER FUNCTION
    // Generates random letter string based on passed in message
        const randomLetterEncoder = (message) => {
            let output = ''

            for(let i = 0; i < message.length; i++){
                output += encodeKeyRLM[message[i]]
            }

            return output
        }

    // Finds ascii code for each random letter, multiplies by , and returns a string of all the numbers combined
        const multiplyAscii = (message) => {
            let output = []
            for(let i = 0; i < message.length; i++){
                let ascii = message[i].charCodeAt()
                let num = Math.floor(ascii * (Math.PI/Math.sqrt(64)))
                output.push(num)
            }
            output = output.join('')
            return output
        }
    
    // Converts Numbers to Binary
        const convertNumberToBinary = (number) => {
            let index = Math.floor(Math.log2(number))
            let operator = Math.pow(2, index)
            let bin = ''
            let unused = 7 - index

            for (let j = 0; j < unused; j++) {
                bin += '0'
            }

            for (let i = 0; i <= index; i++){
                if (number !== 0) {
                    if (number >= operator) {
                        bin += '1'
                        number -= operator
                    } else {
                        bin += '0'
                    }
                    operator /= 2
                }
            }
            
            
            if (bin === '') {
            return '0' 
            } 

            return bin
        }

// ** MAIN ENCODER FUNCTION ** //

const symbolEncoder = (message) => {
    // Maps to Random Letters 
        let randomLetters = randomLetterEncoder(message)

    // Letters >> Generate Ascii Code and Multiply * PI/SQRT(64) 
        let multipliedAscii = multiplyAscii(randomLetters)

    // Multiplied Ascii Number >> Binary 
        let asciiInBinary = convertNumberToBinary(multipliedAscii)
        console.log(asciiInBinary)

    // Binary >> Binary Array of strings at length of 4

    // Binary >> Symbol
}

symbolEncoder('Hey how are you my name is alson')