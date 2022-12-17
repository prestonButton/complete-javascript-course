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

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
*/

function calcTip(bill) {
    let tip;
    if(bill > 50 && bill < 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    return tip;
}

const tips = [calcTip(10), calcTip(100), calcTip(1000)];

const totals = [10 + calcTip(10), 100 + calcTip(100), 1000 + calcTip(1000)];

console.log(tips)
console.log(totals)

