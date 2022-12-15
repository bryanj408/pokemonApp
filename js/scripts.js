//IIFE holding pokemon array to iterate through with forEach() to read
//off a list of pokemon to display to user with more details option

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

  function addListItem(pokemon) {
    let list = document.querySelector('ul');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    list.appendChild(listItem);
    //called function buttonCall() to listen for 'click'
    buttonCall(button, pokemon);
  }

  function buttonCall(button, pokemon) {
    button.addEventListener('click', function() {
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    addListItem: addListItem,
    getAll: getAll
  };

})();

//forEach() function instead of for loop 
pokemonRepository.getAll().forEach( pokemon => {
  pokemonRepository.addListItem(pokemon);
})

window.addEventListener('keydown', event => {
  let survey_form = document.querySelector('#survey_form');
  let isFormHidden = survey_form.classList.contains('hidden');
  if (!isFormHidden && event.key === 'Escape') {
    survey_form.classList.add('hidden');
  }
});



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