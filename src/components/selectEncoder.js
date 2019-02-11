// Encoders and Decoders
const { chuckEncoder, chuckDecoder } = require('../encoders-decoders/Chuck Norris/chucknorris')
const { mapEncoder, mapDecoder } = require('../encoders-decoders/Letter Mapping/lettermapping')
const { multiplyAsciiEncode } = require('../encoders-decoders/Multiply-Ascii/multiply-ascii')
const { starDotEncode } = require('../encoders-decoders/Star-and-Dot/star-dot')
const { symbolEncoder } = require('../encoders-decoders/Symbol/symbol-encoder')


// *** SELECTING FUNCTION *** //
const selectEncoder = (selectedItem, inputText) => {
    let output;

    if (selectedItem === null) {
        output = 'Please select an encoder or decoder to run your message through.'
    } else {
        let {key, selected, title} = selectedItem

        if (key === 'decoders') {
            output = 'You have selected a decoder, please press the "Decode" button instead.'
        } else {
            if (selected === true && title === 'Chuck Norris') {
                output = chuckEncoder(inputText)
            } else if (selected === true && title === 'Letter Mapping') {
                output = mapEncoder(inputText)
            } else if (selected === true && title === 'Multiply-Ascii') {
                output = multiplyAsciiEncode(inputText)
            } else if (selected === true && title === 'Star and Dots') {
                output = starDotEncode(inputText)
            } else if (selected === true && title === 'Symbol') {
                output = symbolEncoder(inputText)
            } else {
                output = 'You have no encoder or decoder selected, please select one.'
            }
        }
    }
    
    return output
}

const selectDecoder = (selectedItem, inputText) => {
    let output;
    
    if (selectedItem === null) {
        output = 'Please select an encoder or decoder to run your message through.'
    } else {
        let {key, selected, title} = selectedItem

        if (key === 'encoders') {
            output = 'You have selected an encoder, please press the "Encode" button instead'
        } else {
            if (selected === true && title === 'Chuck Norris') {
                output = chuckDecoder(inputText)
            } else if (selected === true && title === 'Letter Mapping') {
                output = mapDecoder(inputText)
            } // else if (selected === true && title === 'Multiply-Ascii') {
            //     output = multiplyAsciiDecode(inputText)
            // } else if (selected === true && title === 'Star and Dots') {
            //     output = starDotDecode(inputText)
            // } else if (selected === true && title === 'Symbol') {
            //     output = symbolDecoder(inputText)
            else {
                output = 'You have no encoder or decoder selected, please select one.'
            }
        }
    }

    return output
}



module.exports = {selectEncoder, selectDecoder}
