// //Starting an array of pokemon (array with objects)

let pokemonRepository = (function () {
  
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

  function add(pokemon) {
    if (typeof pokemon !== 'object' && typeof pokemon !== 'string') {
      console.log('Please enter a pokemon');
    }
    pokemonList.push(pokemon);
  }

  //can't figure out remove. splice erases whole array but not specific pokemon
  // function remove(pokemon) {
  //   delete pokemonList(pokemon);
  //   return pokemonList;
  // }

  //trying to implement filter
  function sortPokemon() {
    pokemonList.filter(pokemon => pokemon.name );
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    sortPokemon: sortPokemon,
    //remove: remove,
    getAll: getAll
  };

})();


//forEach() function instead of for loop
//pokemonRepository.getAll().forEach( pokemon => console.log(pokemon)); 

console.log(pokemonRepository.getAll());


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
