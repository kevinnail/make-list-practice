// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

import { animals } from './animal-data.js';
import { renderAnimal } from './render-animals.js';

import { torches } from '.torches-data.js';
import { renderTorch } from './render-torches.js';

const candyList = document.getElementById('candy-list');
function displayCandies() {
    candyList.innerHTML = '';
    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyList.append(candyEl);
    }
}
displayCandies();

const animalList = document.getElementById('animal-list');
function displayAnimals() {
    animalList.innerHTML = '';
    for (let animal of animals) {
        const animalEl = renderAnimal(animal);
        animalList.append(animalEl);
    }
}
displayAnimals();
