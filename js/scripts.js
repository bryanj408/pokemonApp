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

    //logs pokemon details when button is clicked
    button.addEventListener('click', function() {
      console.log(pokemon);
    })
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

//forEach() iterating through addListItem() within iife 
pokemonRepository.getAll().forEach( pokemon => {
  pokemonRepository.addListItem(pokemon);
})

//practicing event listener/keydown/classList creation 
// window.addEventListener('keydown', event => {
//   let survey_form = document.querySelector('#survey_form');
//   let isFormHidden = survey_form.classList.contains('hidden');
//   if (!isFormHidden && event.key === 'Escape') {
//     survey_form.classList.add('hidden');
//   }
// });


