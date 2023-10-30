/*
1. let 和 const 
let 和 var 类似,作用域不同,变量一旦初始化之后，还可以重新赋值
const 声明常量,常量一旦初始化，就不能重新赋值了，否则就会报错
如果常量里的值是引用类型(放的是地址不会动了),引用类型内部值可动

2. let const var 区别
*/
// 下面这种表示非全局的
// (function () {})()
var user = 'zhangsan';
let age = 15;
const sex = { name: 'male' };
const ok = true;
sex.name = 'female';
console.log(user, age, sex, ok);
console.log('重复声明,var允许重复声明,let const不允许');
var a = 1;
var a = 2;
let b = 1;
// 无法重新声明块范围变量“b”。
// let b = 2;
// Uncaught SyntaxError: Identifier 'a' has already been declared
// function f(a) {
//     let a = 1;
// }
// f(a);
console.log('变量提升,var可以变量提升,let const不允许');
console.log(a);
var a = 1;
// console.log(b);
// let b = 2;
console.log('暂时性死区,只要作用域内存在 let const,对应的变量就自动"绑定"这个区域,不受外部作用域影响,var 没有这个特性');
let aa = 1;
function f() {
    // Uncaught ReferenceError: Cannot access 'aa' before initialization
    console.log(aa);
    // 下面这行注释就不会报错了
    // let aa = 1;
}
f();
console.log('window的属性和方法: 全局作用域中,var声明的变量,通过function 声明的函数会自动变成 window 对应的属性,let const 不会');
var ooo = 100;
function sb() { }
console.log(window.ooo, window.sb == sb);
let kkk = 33;
const ff = function () { };
console.log(window.kkk, window.ff == ff);
console.log('块级作用域: var 没有块级作用域, let const 有,从内层作用域->外层作用域,全局(函数,循环,条件判断,switch),函数,块级作用域 {let a = 1} ');

for(var i=0;i<3;i++){}
console.log(i);
for(let j=0;j<3;j++){}
// Uncaught ReferenceError: j is not defined
// console.log(j);
{const ee = 100}
// Uncaught ReferenceError: ee is not defined
// console.log(ee);
