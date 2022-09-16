export function renderTorch(torch) {
    const li = document.createElement('li');
    li.classList.add('torch-list');
    const headerEl = document.createElement('h3');
    headerEl.textContent = torch.name;
    const pEl = document.createElement('p');
    pEl.textContent = torch.controls;
    const pEl2 = document.createElement('p');
    pEl2.textContent = torch.sizes;
    li.append(headerEl, pEl, pEl2);
    return li;
}
