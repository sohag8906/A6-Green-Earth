1.### Difference between var, let, and const

- *Scope*:  
  - var → function scoped  
  - let, const → block scoped  

- *Re-declaration*:  
  - var → allowed  
  - let, const → not allowed  

- *Re-assignment*:  
  - var, let → allowed  
  - const → not allowed  

- *Hoisting*:  
  - var → hoisted as undefined  
  - let, const → hoisted but not accessible before declaration (TDZ)  

✅ Use let when value may change, and const when value should remain constant. Avoid using var.


2.### Difference between map(), forEach(), and filter()

- **forEach()** → শুধু লুপ চালায় এবং প্রতিটি আইটেমে কাজ করে, কিন্তু নতুন অ্যারে রিটার্ন করে না।  
- **map()** → প্রতিটি আইটেমে কাজ করে এবং *নতুন অ্যারে রিটার্ন করে* (transformed data)।  
- **filter()** → শর্ত অনুযায়ী কিছু আইটেম বেছে নিয়ে **নতুন অ্যারে রিটার্ন করে**।  

#### Example:
```js
const numbers = [1, 2, 3, 4];

// forEach → শুধু প্রিন্ট করবে
numbers.forEach(n => console.log(n * 2)); // [2,4,6,8] (no return)

// map → নতুন অ্যারে তৈরি করবে
const doubled = numbers.map(n => n * 2); // [2,4,6,8]

// filter → শর্ত মিললে নতুন অ্যারে
const even = numbers.filter(n => n % 2 === 0); // [2,4]

3.### Arrow Functions in ES6

- *Arrow function* হলো ES6 এ পরিচিত একটি শর্টহ্যান্ড ফাংশন সিনট্যাক্স।  
- এটি ছোট এবং readable কোড লেখার জন্য ব্যবহার করা হয়।  
- **this** keyword লেক্সিক্যালি (parent scope থেকে) ইনহেরিট করে।  

#### Syntax:
```js
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

4.
✅ Array Destructuring

const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


---

✅ Object Destructuring

const user = { name: "Alice", age: 25 };
const { name, age } = user;

console.log(name); // "Alice"
console.log(age);  // 25


---

⚡ Extra Features

Default Values


const [x = 10, y = 20] = [5];
console.log(x, y); // 5 20

Rename Variables


const { name: userName } = user;
console.log(userName); // "Alice"

Function Parameters


function greet({ name, age }) {
  console.log(Hello ${name}, age ${age});
}
greet(user); // Hello Alice, age 25

5.
✅ Example: String Interpolation

const name = "Alice";
const age = 25;

// Template literal
console.log(My name is ${name} and I am ${age} years old.);

// Traditional concatenation
console.log("My name is " + name + " and I am " + age + " years old.");


---

✅ Example: Multi-line String

// Template literal
const msg = `This is line 1
This is line 2
This is line 3`;

console.log(msg);

// Traditional concatenation
const msg2 = "This is line 1\n" +
             "This is line 2\n" +
             "This is line 3";
console.log(msg2);


---

🔑 Difference from Concatenation

1. Readability: Template literals বেশি readable, + চিহ্নের ঝামেলা নেই।


2. Interpolation: Variable/Expression embed করতে ${ } ব্যবহার করা যায়।


3. Multi-line support: Direct newline লেখা যায়, \n লাগেনা।