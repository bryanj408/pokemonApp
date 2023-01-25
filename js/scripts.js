//Starting an array of pokemon (array with objects)
let pokemonRepository = (function () {
  
  let pokemonList = [];

  // added . to search but may have to come back to it
  let inputField = document.querySelector('.search');

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
          detailsUrl: item.url
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
    item.image = details.sprites.back_default;
    item.height = details.height;
    item.types = []

    details.types.forEach((detail) => {
      item.types.push(' ' + detail.type.name);
    });
  }).catch((e) => {
    console.error(e);
  });
}

//implementing search feature for search box
function filterPokemon(query) {
  return pokemonList.filter(function (pokemon) {
    //toLowerCase() method to make input not case-sensitive
    let pokemonLowerCase = pokemon.name.toLowerCase();
    let queryLowerCase = query.toLowerCase();
    return pokemonLowerCase.startsWith(queryLowerCase);
  });
}
inputField.addEventListener('keyup', function (e) {
  let query = inputField.value;
  let filteredList = filterPokemon(query);

  if (e.key === 'Delete' || e.key === 'Backspace') {
    console.log('backspace was pressed');
    hideModal();
  }else{
    filteredList.forEach(showDetails);
  }

      
 
    // inputField.addEventListener('keyup', (e) => {
    //   if (e.key === 'Delete' || e.key === 'Backspace') {
    //     console.log('backspace was pressed');
    //     hideModal();
    //   }
    // });
});

function showModal(title, text, types, img) {

    //modalContainer will be 100% x 100% full screen behind modal
    let modalContainer = document.querySelector('#modal-container');

    //clears all existing modal content every time
    modalContainer.innerHTML = '';
    
    //creating the actual modal that will be displayed
    let modal = document.createElement('modal');
    modal.classList.add('modal');

    //adds the new modal content
    let closeModalButton = document.createElement('button');
    closeModalButton.classList.add('modal-close');
    closeModalButton.innerText = 'X';
    closeModalButton.addEventListener('click', hideModal);

    let modalTitle = document.createElement('h1');
    modalTitle.classList.add('h1');
    modalTitle.innerText = title;

    let modalText = document.createElement('p');
    modalText.classList.add('p');
    modalText.innerText = text;

    let modalTypes = document.createElement('p');
    modalTypes.classList.add('modal-types');
    modalTypes.innerText = types;

    let modalSprite = document.createElement('img');
    modalSprite.classList.add('modal-img');
    modalSprite.setAttribute('src', img);
    modalSprite.setAttribute('alt', 'Pokemon image');
    
    modal.appendChild(closeModalButton);
    modal.appendChild(modalTitle);
    modal.appendChild(modalText);
    modal.appendChild(modalSprite);
    modal.appendChild(modalTypes);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

    //exits the modal when clicking off of the modal area
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

    //exits the modal when pressing the escape key
    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
}

  function hideModal () {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  };

  //pushes pokemon to pokemonList[] from apiUrl
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //deleting console.log(pokemon) to no longer log details to console. Building modal instead
  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      showModal(pokemon.name, 'Height: ' + pokemon.height, 'Type: ' + pokemon.types, pokemon.imageUrl );
    })
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
    filterPokemon: filterPokemon,
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
