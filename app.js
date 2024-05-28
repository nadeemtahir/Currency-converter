import inquirer from "inquirer";
let c_value = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1,
    RIYAL: 74.13,
    INDIAN_RUPEE: 3.33,
    SOUTH_KOREAN_WON: 0.20,
    CHINESE_YUAN: 38.47,
    JAPENES_YAWN: 1.78
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "converting from",
        choices: ["PKR", "UAE", "USD", "RIYAL", "INDIAN_RUPEE", "SOUTH_KOREAN_WON", "CHINESE_YUAN", "JAPENES_YAWN",]
    },
    {
        type: "list",
        name: "to",
        message: "converting to",
        choices: ["PKR", "UAE", "USD", "RIYAL", "INDIAN_RUPEE", "SOUTH_KOREAN_WON", "CHINESE_YUAN", "JAPENES_YAWN"]
    },
    {
        type: "number",
        name: "amount",
        message: "your amount to convert",
    }
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
