// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

import { animals } from './animal-data.js';
import { renderAnimal } from './render-animals.js';

import { torches } from './torches-data.js';
import { renderTorch } from './render-torches.js';

import { cars } from './cars-data.js';
import { renderCar } from './render-cars.js';

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

const torchList = document.getElementById('torch-list');
function displayTorches() {
    torchList.innerHTML = '';
    for (let torch of torches) {
        const torchEl = renderTorch(torch);
        torchList.append(torchEl);
    }
}
displayTorches();

const carList = document.getElementById('car-list');
function displayCars() {
    carList.innerHTML = '';
    for (let car of cars) {
        const carEl = renderCar(car);
        carList.append(carEl);
    }
}
displayCars();
