//!called app.js and import your custom module.
const myModule = require("./sample");//

//! enkalina inka call pannina module la irunthu export pannina module la irunthu oru function i call panram.
myModule.sayHello("john"); //Output: Hello, John!

//!enkalinta inka call pannina module la irunthu export pannina module la irukkira oru function i call panram.
console.log(myModule.multiply(3, 4)); // Output: 12
