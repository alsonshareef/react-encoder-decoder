const multiplyAscii = (message) => {
    let output = []
    for(let i = 0; i < message.length; i++){
        let num = message[i].charCodeAt()
        output.push(num * 2)
    }
    output = output.join('')
    return output
}

// console.log(multiplyAscii('Hi, my name is Alson'))

module.exports = {multiplyAscii}