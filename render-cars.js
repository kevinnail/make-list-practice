export function renderCar(car) {
    const li = document.createElement('li');
    li.classList.add('car-list');
    const headerEl = document.createElement('h3');
    headerEl.textContent = car.name;
    const pEl = document.createElement('p');
    pEl.textContent = car.type;
    const pEl2 = document.createElement('p');
    pEl2.textContent = 'has stereo? ' + car.accessories.stereo + ','; // more?
    pEl2.textContent += ' has A/C? ' + car.accessories.AC + ',';
    pEl2.textContent += ' has 4wd? ' + car.accessories.FWD;
    li.append(headerEl, pEl, pEl2);
    return li;
}
