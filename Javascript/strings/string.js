let x;
const name ='sali';
const age =28;

// somewhat inconvinent
x= 'Hello, my name is '+name+ 'and age is '+age;
console.log(x);
//template literals ES6
x=`Hello, my name is ${name} and age is ${age}`;
console.log(x);

//string proprties and methods

const s = new String('your under dev');
x= s.length;

//Acess Value by Value
x = s[1]

console.log(x);

x= s.__proto__;
x= s.toUpperCase();
console.log(x);

x=s.charAt(0)

console.log(x);

x = s.indexOf('d');

console.log(x);

x = s.substring(3,8)


console.log(x);

x= s.substring(4)

x = s.slice(-4);
console.log(x);

x= s.trim(); //remove space befror text

console.log(x);
x= s.replace('dev','learn');
console.log(x);

x = s.includes('you')
console.log(x);
x= s.valueOf('')
console.log(x);
x= s.split('');
console.log(x);

// captalize first letter
let a = 'astronut';
let b=  a[0].substring(0).toUpperCase()+a.slice(1);
//a.charAt(0).toUpperCase()+a.substring(1);
console.log(b);
