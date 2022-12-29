//Starting an array of pokemon (array with objects)

let pokemonRepository = (function () {
  
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    button.addEventListener('click', function(event) {
      showDetails(pokemon); 
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

  //uses the detailsUrl property to load the detailed data for a given pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then((response) => {
      return response.json();
    }).then((details) => {
      //come back to add 2nd sprite image
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch((e) => {
      console.error(e);
    });
  }

  //validates typeof pokemon being added, prompts user to try again if failed
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    }else{
      console.log('Invalid pokemon. Please try again');
    }
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      console.log(pokemon);
    });
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
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


