const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let messageConverted = expr.match(/.{1,10}/g);
  let resultArr = [];
    messageConverted.forEach( function (el) {
        if (el==='**********') {
            resultArr.push(' ');
        } else {
            resultArr.push((el.match(/.{1,2}/g).map(function (bin) {
                return bin === '10' ? '.' : bin === '11' ? '-' : '';
            })).join(''));
        }
    });

  return resultArr.map(substr => MORSE_TABLE[substr]? MORSE_TABLE[substr] : ' ').join('');
}

module.exports = {
    decode
}
