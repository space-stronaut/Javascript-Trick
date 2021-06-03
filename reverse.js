function reverseWord(str){

    let res = str.split(' ')

    return res.map(e => {
        return e.split('').reverse().join('')
    }).join(' ')

}

console.log(reverseWord("double spaces"))