// //Starting an array of pokemon (array with objects) (array with objects)
// let pokemonList = [
//   { name: 'Bulbasaur', 
//     height: 7, 
//     types: ['grass', 'poison'] 
//   },
//   { 
//     name: 'Charmander', 
//     height: 8, 
//     types: ['fire'] 
//   },
//   { 
//     name: 'Weedle', 
//     height: 5, 
//     types: ['bug,', 'poison']
//   }
// ];


// //for loop iterating through pokemonList array
// //remember, you can use HTML inside a string within JavaScript i.e. '<p>'
// //nested for loop inside printArrayDetails function
// function printArrayDetails(){
//   for (i=0; i < pokemonList.length; i++) {
//     document.write('<p>' + pokemonList[i].name +  ' (height:' + pokemonList[i].height + ') ' ); 

//     //calls out pokemon with a height less then 7 and prints next to it's name
//     if (pokemonList[i].height > 7){
//       document.write(' - This one\'s a big guy! ');
//     }
//   }
// }

// printArrayDetails();



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



//external function
// let array = [1,2,3,4,5,6,7,8,9,10];

// array.forEach(logToConsole);

// function logToConsole(item) {
//   console.log(item);
// }

//internal anonymous function
// array.forEach(function(item){
//   console.log(item);
// })

// arrow function
// if you have it on one line, you don't need curly braces around your statements (code fired)
// also, you have an implied return statement when on one line. if multiple lines, write return statement
//array.forEach( item => console.log(item) );
