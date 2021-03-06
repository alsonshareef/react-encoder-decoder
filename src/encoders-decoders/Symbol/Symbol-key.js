const symbolEncode = {
    '0000' : '!',
    '0001' : '@',
    '0010' : '#',
    '0011' : '$',
    '0100' : '%',
    '0101' : '^',
    '0110' : '&',
    '0111' : '*',
    '1000' : '(',
    '1001' : ')',
    '1010' : '_',
    '1011' : '-',
    '1100' : '+',
    '1101' : '{',
    '1110' : '}',
    '1111' : '|'
}

const symbolDecode = {
    '!' : '0000',
    '@' : '0001',
    '#' : '0010',
    '$' : '0011',
    '%' : '0100',
    '^' : '0101',
    '&' : '0110',
    '*' : '0111',
    '(' : '1000',
    ')' : '1001',
    '_' : '1010',
    '-' : '1011',
    '+' : '1100',
    '{' : '1101',
    '}' : '1110',
    '|' : '1111'
}

module.exports = { symbolEncode, symbolDecode }