// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError
{
let letVariable = "I am a let variable"
const constVariable = "I am a const variable"
var varVariable = "I am a var variable"
}

let letVariable = "I am a let variable"
const constVariable = "I am a const variable"
var varVariable = "I am a var variable"