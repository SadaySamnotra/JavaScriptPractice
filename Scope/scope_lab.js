// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "Im a block-level var";
    let functionLet = "I'm a block-level let";
    const functionConst = "I'm a block-level const";
}
show();

// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);
{
    let name="Saday";
    var surnname="Samnotra";
    const phoneNumber=7006202029;
}

let name="Shauryaman";
var surname = "Sharma";
const phoneNumber = 7006406668;

console.log(name);
console.log(surname);
console.log(phoneNumber);
