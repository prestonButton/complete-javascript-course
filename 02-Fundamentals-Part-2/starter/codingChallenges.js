const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3;
}

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins)
console.log(scoreKoalas)

const checkWinner = (score1, score2) => {
    if(score1 >= 2 * score2){
        console.log(`Dolphins win!!! (${score1} vs. ${score2})`);
    }else if(score2 >= 2 * score1){
        console.log(`Koalas win!!! (${score2} vs. ${score1})`);
    }else{
        console.log(`Neither team outscored their opponents by enough`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);