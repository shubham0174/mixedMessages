
const RandomNum = () => {
    return Math.floor(Math.random()*3);
}

const lowWords = ['a looser', 'a failure', 'stupid'];
const highWords = ['monster', 'best', 'above all of them'];

console.log(`You are not ${lowWords[RandomNum()]}`);
console.log(`You are ${highWords[RandomNum()]}`);
console.log('Prove them all');