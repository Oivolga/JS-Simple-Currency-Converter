const input = require('sync-input');

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);
while (true) {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    let action = input();
    if (action === "2") {
        console.log("Have a nice day!")
        break;
    } else if (action === "1") {
        console.log("What do you want to convert?")
        let source = input("From: ").toUpperCase();
        if (check(source)) {
            let cur = input("To: ").toUpperCase();
            if (check(cur)) {
                let num = Number(input("Amount: "));
                if (isNaN(num)) {
                    console.log("The amount has to be a number");
                } else if (num < 1) {
                    console.log("The amount can not be less than 1");
                } else {
                    result(source, cur, num);
                }
            }
        }
    } else {
        console.log("Unknown input")
    }
}

function check(currency) {
    if (currency !== "USD" && currency !== "JPY" && currency !== "EUR" && currency !== "RUB" && currency !== "GBP") {
        console.log("Unknown currency");
    } else return true;
}

function result(source, cur, num) {
    const val = [{name: "USD", course: 1}, {name: "JPY", course: 113.5}, {name: "EUR", course: 0.89},
        {name: "RUB", course: 74.36}, {name: "GBP", course: 0.75},];
    let res = (num / val.find(e => e.name === source).course * val.find(e => e.name === cur).course).toFixed(4);
    console.log(`Result: ${num} ${val.find(e => e.name === source).name} equals ${res} ${val.find(e => e.name === cur).name}`)
}



