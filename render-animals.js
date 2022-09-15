export function renderAnimal(animal) {
    const li = document.createElement('li');
    li.classList.add('animal-list');
    const headerEl = document.createElement('h2');
    headerEl.textContent = animal.name;
    const pEl = document.createElement('p');
    pEl.textContent = animal.type + ' ' + animal.color;
    li.append(headerEl, pEl);
    return li;
}
