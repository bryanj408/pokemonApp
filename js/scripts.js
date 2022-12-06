// //Starting an array of pokemon (array with objects)
let pokemonList = [
  { name: 'Bulbasaur', 
    height: 7, 
    types: ['grass', 'poison'] 
  },
  { 
    name: 'Charmander', 
    height: 8, 
    types: ['fire'] 
  },
  { 
    name: 'Weedle', 
    height: 5, 
    types: ['bug,', 'poison']
  }
];

//forEach() function instead of for loop
pokemonList.forEach(function(pokemon) {
  document.write( '<p>' + pokemon.name + ' ' + pokemon.height + ' ' + pokemon.types);

  //logged to show array iteration
  console.log(pokemon);

  if(pokemon.height > 7) {
    document.write(' -- That is one big pokemon');
  }

})

//printArrayDetails();


//----------------------------------------------------------------------------------------------------------------------

// arrow function
// if you have it on one line, you don't need curly braces around your statements (code fired)
// also, you have an implied return statement when on one line. if multiple lines, write return statement
//array.forEach( item => console.log(item) );

//IIFE (immediately invoked function expression)
// (function name () {
//   let data = {};
//   //code here
// })();

// //standard function
// function name () {
//   let data = {};
//   //code here
// }
