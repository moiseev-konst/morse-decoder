const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    "**********": " "
};

let decode = (expr) => {
    let result = ''
    result += expr.replace(/.{10}/g, (part) => {
        let morseCod = ''
        morseCod += part.replace(/([01]{2})/g, (match) => {
            switch (match) {
                case "00":
                    return ""

                case "10":
                    return '.'

                case '11':
                    return '-'
            }
        })
        return MORSE_TABLE[morseCod]
    })
    return result

}
module.exports = {
    decode
}