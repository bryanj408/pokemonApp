//Starting an array of pokemon (array with objects)
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

//for loop iterating through pokemonList array
//
for (i=0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name +  ' (height:' + pokemonList[i].height + ') ' ); 

  if (pokemonList[i].height > 7){
    document.write(' - This one\'s a big guy! ');
  }
}












//for loop
// for (let i = 1; i <=100; i++){
//   console.log(i);
// }

// let ages = [20, 30, 40, 50, 60];

// for (i=0; i < ages.length; i++){
//   console.log(ages[i] - 2);
// } 

//while loop
// let i = 1;
// while( i < 5){
//   console.log(i);
//   i++;
// }


