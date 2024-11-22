const color = ["red","green","blue"];

//cách làm thông thường
console.log("Index 0: ",color[0]);
console.log("Index 0: ",color[1]);
console.log("Index 0: ",color[2]);

//destructuring
const [firstColor,secondColor,thirdColor] = color;

console.log(firstColor,secondColor,thirdColor);

//đối với đối tượng
const userInfo = {
id: 1,
userName:"nguyễn văn a",
age:25
}