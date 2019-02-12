const {multiplyAsciiEncode, multiplyAsciiDecode} = require('./multiply-ascii')

// **** UNIT TESTS **** //

// Testing multiplyAsciiEncode function
const multiplyAsciiEncodeTest = () => {
    let testMessage = 'Hi, my name is Alson'
    let expectedOutput = '144,210,88,64,218,242,64,220,194,218,202,64,210,230,64,130,216,230,222,220,'

    if (multiplyAsciiEncode(testMessage) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the 'multiplyAsciiEncode' function is EQUAL to expectedOutput`)
    } else {
        console.log(`** FAILED ** The returned value from the 'multiplyAsciiEncode' function is NOT EQUAL to expectedOutput`)
    }
}

multiplyAsciiEncodeTest()


// Testing multiplyAsciiDecode function
const multiplyAsciiDecodeTest = () => {
    let testMessage = '144,210,88,64,218,242,64,220,194,218,202,64,210,230,64,130,216,230,222,220,'
    let expectedOutput = 'Hi, my name is Alson'

    if (multiplyAsciiDecode(testMessage) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the 'multiplyAsciiDecode' function is EQUAL to expectedOutput`)
    } else {
        console.log(`** FAILED ** The returned value from the 'multiplyAsciiDecode' function is NOT EQUAL to expectedOutput`)
    }
}

multiplyAsciiDecodeTest()