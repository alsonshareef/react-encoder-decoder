const {mapEncoder, mapDecoder} = require('./lettermapping')

// **** UNIT TESTS **** //

// Testing mapEncoder function
const mapEncoderTest = () => {
    let testMessage = 'Hi, my name is Alson'
    let expectedOutput = '34,9,84,53,13,25,53,14,1,13,5,53,9,19,53,27,12,19,15,14,'

    if (mapEncoder(testMessage) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the 'mapEncoder' function is EQUAL to expectedOutput`)
    } else {
        console.log(`** FAILED ** The returned value from the 'mapEncoder' function is NOT EQUAL to expectedOutput`)
    }
}

mapEncoderTest()


// Testing mapDecoder function
const mapDecoderTest = () => {
    let testMessage = '34,9,84,53,13,25,53,14,1,13,5,53,9,19,53,27,12,19,15,14,'
    let expectedOutput = 'Hi, my name is Alson'

    if (mapDecoder(testMessage) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the mapDecoder' function is EQUAL to expectedOutput`)
    } else {
        console.log(`** FAILED ** The returned value from the mapDecoder' function is NOT EQUAL to expectedOutput`)
    }
}

mapDecoderTest()