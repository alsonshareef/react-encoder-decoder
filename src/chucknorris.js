// ENCODER
exports.encoder = (string) => {
    let output = ''
    let numberAmount = 0
    for( let i = 0; i < string.length; i++ ){
        if( i !== 0 ){
            if( string[i] !== string[i-1] ){
              let type = '', zeros = ''
              
              // Type
                  if(string[i-1] === '0'){
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

    if(string[string.length - 1] === '0'){
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
exports.decoder = (encodedString) => {
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