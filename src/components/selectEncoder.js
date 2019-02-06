// Encoders and Decoders
const { chuckEncoder, chuckDecoder } = require('../encoders/Chuck Norris/chucknorris')
const { mapEncoder } = require('../encoders/Letter Mapping/lettermapping')
const { multiplyAsciiEncode } = require('../encoders/Multiply-Ascii/multiply-ascii')
const { starDotEncode } = require('../encoders/Star-and-Dot/star-dot')
const { symbolEncoder } = require('../encoders/Symbol/symbol-encoder')


// *** SELECTING FUNCTION *** //
const selectEncoder = (selectedItem, inputText) => {
    let output;

    if (selectedItem === null) {
        output = 'Please select an encoder or decoder to run your message through.'
    } else {
        if (selectedItem.selected === true && selectedItem.title === 'Chuck Norris') {
            output = chuckEncoder(inputText)
        } else if (selectedItem.selected === true && selectedItem.title === 'Letter Mapping') {
            output = mapEncoder(inputText)
        } else if (selectedItem.selected === true && selectedItem.title === 'Multiply-Ascii') {
            output = multiplyAsciiEncode(inputText)
        } else if (selectedItem.selected === true && selectedItem.title === 'Star and Dots') {
            output = starDotEncode(inputText)
        } else if (selectedItem.selected === true && selectedItem.title === 'Symbol') {
            output = symbolEncoder(inputText)
        } else {
            output = 'You have no encoder or decoder selected, please select one.'
        }
    }
    
    return output
}

const selectDecoder = (selectedItem, inputText) => {
    let output = ''
    
    if (selectedItem === null) {
        output = 'Please select an encoder or decoder to run your message through.'
    } else {
        if (selectedItem.selected === true && selectedItem.title === 'Chuck Norris') {
            output = chuckDecoder(inputText)
        } // else if (selectedItem.selected === true && selectedItem.title === 'Letter Mapping') {
        //     output = mapDecoder(inputText)
        // } else if (selectedItem.selected === true && selectedItem.title === 'Multiply-Ascii') {
        //     output = multiplyAsciiDecode(inputText)
        // } else if (selectedItem.selected === true && selectedItem.title === 'Star and Dots') {
        //     output = starDotDecode(inputText)
        // } else if (selectedItem.selected === true && selectedItem.title === 'Symbol') {
        //     output = symbolDecoder(inputText)
        else {
            output = 'You have no encoder or decoder selected, please select one.'
        }
    }

    return output
}



module.exports = {selectEncoder, selectDecoder}
