//ANTES DE ES+6
function newFunction(name,age,country){
    var name=name||'oscar';
    var age=age||32;
    var country=country||'MX';
    console.log(name,age,country);
}

//CON LA NUEVA IMPLEMENTACION DE ES+6
function newFunction2(name='oscar',age=32,country="MX"){
    console.log(name,age,country);
};
//Para llamar la funcion hay 2 formas, la primera llama por defecto
//y la segunda llama con los valores que le hemos dado al argumento
newFunction2();
newFunction2('Ricardo','23','CO');


let hello="Hello";
let world="World";

//Concatenacion antes ES+6
let epicPhrase=hello+' '+world;
console.log(epicPhrase);

//Con los templates es mejor concatenar
let epicPhrase2=`${hello} ${world}`;
console.log(epicPhrase2);


/**
 * Multiline
 */
 //Anter de ES6 se usaba el salto de linea con \n
 let lorem =
 'Mollit ea veniam ad magna. Voluptate qui commodo do commodo elit officia. \n' +
 'Sit quis mollit esse quis reprehenderit labore esse nisi.';
console.log('Before ES6 -> ', lorem);

// Ahora con ES6 no es necesario hacer el salto de linea con las comilla francesa
let loremES6 = `Velit aliqua culpa nisi aute nulla sit.
Reprehenderit deserunt id officia excepteur excepteur
adipisicing ut sit enim dolor laboris nulla exercitation.`;
console.log(`After ES6 -> ${loremES6}`);

/**
* Destructuring
*/
let person = {
 name: 'Oscar',
 age: '32',
 country: 'MX'
};
console.log(person.name, person.age, person.country);

// con ES6+
let { name, age, country } = person;
console.log(`${name} ${age} ${country}`);

/**
* Spread Operator
*/
let team1 = ['Oscar', 'Julián', 'Ricardo'];
let team2 = ['Valeria', 'Yeasica', 'Camila'];
let education = ['David', 'Oscar', 'Julián', 'Ricardo', 'Valeria', 'Yeasica', 'Camila'];
console.log('Before ES6 -> ', education);

// con ES6+
let educationES6 = ['David', ...team1, ...team2];
console.log(`After ES6 -> ${educationES6}`);

/**
* Var, Let and Const
*/
{
 var globalVar = 'Global Var';
 let globalLet = 'Global Let';
 const globalConst = 'Global Const';
 //recuerda que let y const se tiene que imprimir desde dentro
 console.log(`globalLet -> ${globalLet}`);
 console.log(`globalConst -> ${globalConst}`);
}
//Var si se puede ejecutar en cualquier lado
console.log(`globalVar -> ${globalVar}`);



/**
 * Parameters in Objects
 */
 let name = 'Oscar';
 let age = 32;
 
 const obj = { name: name, age: age};
 console.log('Before ES6 -> ', obj);
 
 // es6
 const objES6 = { name, age };
 console.log(`After ES6 -> `, objES6);
 

 /**
  * Arrow Functions
  */
 const names = [
   { name: 'Jose', age: 7 },
   { name: 'Yesica', age: 27 }
 ];
 
 let listOfNames = names.map(function(item) {
   console.log('Before ES6 -> ', item.name);
 });
 
 // es6 => la flechita hace que retorne algo, en este caso retorna la consola
 let listOfNamesES6 = names.map(item => console.log(`After ES6 -> ${item.age}`));
 
 /**
  * Promises
  */
 const helloPromise = () => {
   return new Promise((resolve, reject) => { //se introduce las condiciones
     if (true) {
       resolve('Hey!'); //si es verdadero resuelve esto
     } else {
       reject('Upss!');
     }
   });
 };
 
 helloPromise()
   .then(response => console.log('response -> ', response)) //resuelve response
   .then(() => console.log('message -> Hello World!')) //imprimimos mensaje
   .catch(error => console.log('error -> ', error)); //para el error



   class calculator{
    constructor(){
      this.valueA=0;
      this.valueB=0;
    }
  sum(valueA,valueB){
    this.valueA=valueA;
    this.valueB=valueB;
    return this.valueA+this.valueB;}
  }
  const calc=new calculator();
  console.log(calc.sum(2,2));
 
/**
 * Modules
 */
 import { hello } from './module.js';
 console.log('Hello Module -> ', hello());
 
 /**
  * Generators
  */
 function* helloWorld() {
   if (true) {
     yield 'Hello, ';
   }
 
   if (true) {
     yield 'World!';
   }
 }
 const generatorHello = helloWorld();
 console.log('generatorHello first call -> ', generatorHello.next().value);
 console.log('generatorHello second call -> ', generatorHello.next().value);
 console.log('generatorHello third call -> ', generatorHello.next().value);