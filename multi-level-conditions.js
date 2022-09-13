var myMoney = 120;
var myNeed = 50;
var needQuantity = 3;
if (myMoney >= myNeed) {
    console.log("My need value is less than my money.");
    if (myMoney >= myNeed * needQuantity) {
        console.log("I can buy " + needQuantity + " of my need quantity");
    }
    else if (myMoney >= myNeed * --needQuantity) {
        console.log("I can buy " + needQuantity + " of my need quantity");
    }
    else if (myMoney >= myNeed * --needQuantity) {
        console.log("I can buy " + needQuantity + " of my need quantity");
    }
    else {
        console.log("I can buy " + needQuantity + " of my need quantity");
    }
}