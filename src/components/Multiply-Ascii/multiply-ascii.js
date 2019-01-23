const multiplyAscii = (message) => {
    let output = []
    for(let i = 0; i < message.length; i++){
        let num = message[i].charCodeAt(0)
        output.push(num * 2)
    }
    output = output.join('')
    return output
}

// console.log(multiplyAscii('My name is Alson'))