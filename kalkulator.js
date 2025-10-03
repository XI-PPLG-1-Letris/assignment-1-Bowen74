const tambah = (a,b) => a + b;
const kurang = (a,b) => a - b;
const kali = (a,b) => a * b;
const bagi = (a,b) => a / b;
const modulus = (a,b) => a % b;

let a = 10
let b = 20

console.log("a =", a)
console.log("b =", b)
console.log("")

console.log("a + b =", tambah (a,b));
console.log("a - b =", kurang (a,b));
console.log("a x b =", kali (a,b));
console.log("a : b =", bagi (a,b));
console.log("a % b =", modulus (a,b));
