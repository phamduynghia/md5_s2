//đối với mảng
const array1 = [1,2,3,4,5];

const array2 = [6,7,8,9];

// const array3 = array1.concat(array2);
// const array3 = [...array1];
const array3 = [...array1,...array2,10,11,12];

console.log("array3: " ,array3);

// đối với đối tượng
const userInfo = {
    id: 1,
userName:"yến O",
age: 25,
};

userInfo.address = "hà nội";

const newUserInfo = {...userInfo , address:"hà nội" , xemail:"yendt@gmail.com"};

console.log("newUserInfo: ",newUserInfo);
