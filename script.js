function capitals(word) {
    let newArr = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            newArr.push(word.indexOf(word[i]));
        }
    }
    return newArr
}
console.log(capitals('CodEWaRs'));