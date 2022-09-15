// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

import { animals } from './animal-data.js';
import { renderAnimal } from './render-animals.js';

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
