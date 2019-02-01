
// String => Ascii
const convertStringToAsciiCode = (word) => {
    let output = []
    for(let i = 0; i < word.length; i++){
        output.push(word.charCodeAt(i).toString())
    }
    return output
}


// Ascii => String
const convertAsciiCodeToString = (...ascii) => {
    let output = []
    for(let i = 0; i < ascii.length; i++){
        output.push(String.fromCharCode(ascii[i]))
    }
    return output
}


// Number => Binary
const convertNumberToBinary = (number) => {
    let index = Math.floor(Math.log2(number))
    let operator = Math.pow(2, index)
    let bin = ''
    let unused = 7 - index

    for (let j = 0; j < unused; j++) {
        bin += '0'
    }

    for (let i = 0; i <= index; i++){
        if (number >= operator) {
            bin += '1'
            number -= operator
        } else {
            bin += '0'
        }
        operator /= 2
    }
    
    
    if (bin === '') {
       return '0' 
    } 

    return bin
}


// Binary => Byte Array
const convertBinarytoByteArray = (bin) => {
    let output = []
    let binArray = bin.split('')
    let iterations = binArray.length

    for(let i = 0; i <= iterations / 8; i++){
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


// Binary => Number
const convertBinaryToNumber = (bin) => {
    let num = 0
    let operator = Math.pow(2, bin.length - 1)
    for(let i = 0; i < bin.length; i++){
        if (bin[i] === '1') {
            num += operator
        }
        operator /= 2
    }
    return num
}


// ENCODER
const encoder = (codedString) => {
    let output = ''
    let numberAmount = 0
    for( let i = 0; i < codedString.length; i++ ){
        if( i !== 0 ){
            if( codedString[i] !== codedString[i-1] ){
              let type = '', zeros = ''
              
              // Type
                  if(codedString[i-1] === '0'){
                    type = '00'
                } else {
                    type = '0'
                }
              
              // Number
                for(let i = 0; i < numberAmount; i++){
                    zeros += '0'
                }
              
                output += `${type} ${zeros} `
                numberAmount = 0
            }
        } 
        numberAmount++
    }
   
    let type = '', zeros = ''

    if(codedString[codedString.length - 1] === '0'){
        type = '00'
    } else {
        type = '0'
    }

    for(let i = 0; i < numberAmount; i++){
        zeros += '0'
    }
    output += `${type} ${zeros} `
    return output
}


// DECODER
const decoder = (encodedString) => {
    encodedString = encodedString.trim()
    let output = '', a = encodedString.split(' ')
      for(let i = 0; i < a.length; i+=2){
        if(a[i] === '00'){
          output += Array(a[i+1].length+1).join('0')
        //        Array('0000'.length+1).join('0')
        //        Array(4+1).join('0')
        //        Array(5).join('0')
        //        [null,null,null,null,null].join('0')
        //        00000
      } else {
          output += Array(a[i+1].length+1).join('1')
      }
    }
    return output
}


// **** MAIN ENCODER AND DECODER FUNCTION ****


// ENCODER
const fullEncoder = (string) => {
    // Convert String >> Ascii
        let asciiCodeArray = convertStringToAsciiCode(string)
    // Ascii >> Binary
        let binaryArray = []

        for(let i = 0; i < asciiCodeArray.length; i++){
            binaryArray.push(convertNumberToBinary(asciiCodeArray[i]))
        }

    // Binary >> Byte Array
        let byteArray = []

        for(let i = 0; i < binaryArray.length; i++){
            byteArray.push(convertBinarytoByteArray(binaryArray[i]))
        }

    // Byte Array >> Byte Array String 
        let byteString = byteArray.join('')

    // Byte Array String >> Encode
        let encodedString = encoder(byteString)    

        encodedString = encodedString.trim()

        return encodedString
}


// // DECODER
const fullDecoder = (encodedString) => {
    // Encoded String => Decoder
    let decodedString = decoder(encodedString)

    // Decoded String => Byte Array
    let byteArrayfromDecode = convertBinarytoByteArray(decodedString)

    // Byte Array => Ascii Code
    let asciiCodefromDecode = []

    for(let i = 0; i < byteArrayfromDecode.length; i++){
        asciiCodefromDecode.push(convertBinaryToNumber(byteArrayfromDecode[i]))
    }

    // Ascii Code => Message
    let decodedMessage = []

    for(let i = 0; i < asciiCodefromDecode.length; i++){
        decodedMessage.push(convertAsciiCodeToString(asciiCodefromDecode[i]))
    }

    decodedMessage = decodedMessage.join('').trim()

    return decodedMessage
}

module.exports = {fullEncoder, fullDecoder}