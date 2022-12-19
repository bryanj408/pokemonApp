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

  //addListItem() creates and selects ul, li, button, and append to eachother tofunction
  //together. Iterates through forEach() with getAll() to get list of pokemon and connect
  //button to it. 
  function addListItem(pokemon) {
    let list = document.querySelector('ul');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    list.appendChild(listItem);
    //calling function buttonCall() to listen for 'click'
    buttonCall(button, pokemon);
  }

  //listens for 'click' and will implement showDetails() details of each pokemon soon
  function buttonCall(button) {
    button.addEventListener('click', function() {
      showDetails();
    })
  }

  function showDetails() {   
    console.log('test');
    // window.addEventListener('keydown', function(event) {
    //   let buttonHidden = button.classList.contains('hidden');
    //   if (!buttonHidden && event.key === 'Escape') {
    //     button.classList.add('hidden');
    //   }
    // });
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