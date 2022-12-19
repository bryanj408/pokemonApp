//Starting an array of pokemon (array with objects)

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
    pokemonList.push(pokemon);
  }

  //function to create li/button/class for pokemon ui layout
  //which iterates through forEach() outside of iife
  function addListItem(pokemon) {
    let list = document.querySelector('ul');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    list.appendChild(listItem);
  }

  // function removePokemon(pokemon) {
  //   pokemonList.remove(pokemon.name);
  //   //return pokemonList;
  // }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    addListItem: addListItem,
    //removePokemon: removePokemon,
    getAll: getAll
  };

})();

//forEach() iterating through addListItem() within iife 
pokemonRepository.getAll().forEach( pokemon => {
  pokemonRepository.addListItem(pokemon);
})

//practicing event listener/keydown/classList creation 
window.addEventListener('keydown', event => {
  let survey_form = document.querySelector('#survey_form');
  let isFormHidden = survey_form.classList.contains('hidden');
  if (!isFormHidden && event.key === 'Escape') {
    survey_form.classList.add('hidden');
  }
});

function runThisLater() {
  console.log('burgers');
}

console.log('pizza');
setTimeout(runThisLater, 1000);
console.log('salad');


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


// let container = document.querySelector('.container');
// let button = document.createElement('button');
// button.innerText = 'Click Me';
// container.appendChild(button);