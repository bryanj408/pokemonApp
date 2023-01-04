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
    button.addEventListener('click', function() {
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

  //deleting console.log(pokemon) to no longer log details to console. Building modal instead
  function showDetails(pokemon) {
    
      
      //modalContainer will be 100% x 100% full screen behind modal
      let modalContainer = document.querySelector('#modal-container');
      let pokemonHeight = pokemon.height;
      let pokemonTypes = pokemon.types;

          //clears all existing modal content every time
          modalContainer.innerHTML = '';
          
          //creating the actual modal that will be discplayed
          let modal = document.createElement('modal');
          modal.classList.add('modal');
  
          //adds the new modal content
          let closeModalButton = document.createElement('button-close');
          closeModalButton.classList.add('modal-close');
          closeModalButton.innerText = 'Close';
          closeModalButton.addEventListener('click', hideModal);

          let modalTitle = document.createElement('h1');
          modalTitle.innerText = pokemon.name;

          let modalText = document.createElement('p');
          modalText.innerText = pokemonHeight; 

          let modalSprite = document.createElement('img');
          modalSprite.classList.add('modal-sprite');

          modal.appendChild(closeModalButton);
          modal.appendChild(modalTitle);
          modal.appendChild(modalText);
          modal.appendChild(modalSprite);
          modalContainer.appendChild(modal);

          modalContainer.classList.add('is-visible');

      function hideModal() {
        modalContainer.classList.remove('is-visible');
      }
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
    pokemonRepository.loadDetails(pokemon);
  });
});


