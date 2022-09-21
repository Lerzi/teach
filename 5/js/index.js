let a = 1
// Number 数字
console.log(a)

let b = '1123123'
// String 字符串

let c = undefined
// undefined

let d = null
// null

let f = [{ name: 1 }, 2, 3, 4]
// Array

let baby = {
  name: '包李凤',
  age: 18,
  sex: undefined,
  cap: ["a", 77],
  say: function () {
    console.log('hahahhaha ');
  }
}
// Object

console.log('baby.name :>> ', baby.k);

let k = 'sex'

baby.say()

console.log('baby[k] :>> ', baby[k]);

let e = true
e = false
// Boolean


function main(a = 'main') {
  console.log('我是', a);
}

main(1)


function sum(x, y) {
  return x + y
}

let fun = function () {
}

console.log('baobaoshidashabi ', fun);


console.log('sum :>> ', sum(1, 2));

function getName(name) {
  return name
}

let N = getName('zhangsan')

function getage(age = 10) { return age }
let m = getage(11)

let getName2 = function (name) {
  return name
}

let n2 = getName2('lifeng')

let getage2 = function (age) {
  return age + 10
}
let a2 = getage2(10)


let getName3 = (name) => {
  return name
}

let n3 = getName3('ligoudan')
let getage3 = (age) => {
  return age
}
let a3 = getage3(10)


let string = 123

let str2 = '321'



let str3 = `123123123${str2}123123`

console.log('str3 :>> ', str3);
