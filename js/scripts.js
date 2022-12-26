//Starting an array of pokemon (array with objects)

let pokemonRepository = (function () {
  
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    //function that uses fetch and promise to load list of pokemon
    function loadList() {
      return fetch(apiUrl).then((response) => {
        return response.json();
      }).then((json) => {
        json.results.forEach((item) => {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      }).catch((e) => {
        console.log(e);
      })
    }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    loadList: loadList,
    addListItem: addListItem,
    getAll: getAll
  };

})();

//iterates through repository/loadlist then uses promise to load through repository/getAll
//forEach(parameter) of repository/addListItem(parameter)
pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});



//practicing event listener/keydown/classList creation 
// window.addEventListener('keydown', event => {
//   let survey_form = document.querySelector('#survey_form');
//   let isFormHidden = survey_form.classList.contains('hidden');
//   if (!isFormHidden && event.key === 'Escape') {
//     survey_form.classList.add('hidden');
//   }
// });


