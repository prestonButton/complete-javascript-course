/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

if(markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinsScore1 = 97;
const dolphinsScore2 = 0;
const dolphinsScore3 = 101;

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 0;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;
const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3)/3;

if(dolphinsAverage > koalaAverage && dolphinsAverage > 100){
    console.log(`Dolphins Win!!!! (${dolphinsAverage})`);
}else if(dolphinsAverage === koalaAverage && dolphinsAverage > 100){
    console.log(`It was a draw. Both teams win!!! (${dolphinsAverage})`)
}else if(koalaAverage > dolphinsAverage && koalaAverage > 100){
    console.log(`Koalas win!!!! (${koalaAverage})`)
}else {
    console.log(`Minimum score not reached. No one wins`)
}
