// Declation function , Expression function , Arrow function , Callback function , Generation function

function sum (firstNumber , secondNumber){
    console.log(firstNumber + secondNumber);

    return firstNumber + secondNumber;
}

function sum (firstNumber , secondNumber){
    console.log(firstNumber + secondNumber);

    return firstNumber + secondNumber + 10;
}

console.log("Sum",sum(10,20));

// JS Doc
/**
 * 
 * @param {*} firstName Họ và tên đệm
 * @param {*} lastName Tên
 * @returns Tên đầy đủ
 * Author :NVQUY(19/11/2024)
 * ModifiedAt: NVYEN(19/11/2025)
 */
const mergeName = (firstName , lastName) => {
    return `${firstName} ${lastName} `;
};

const result = mergeName("như ","cứt");

console.log("Result",result);


