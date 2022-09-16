export function renderTorch(torch) {
    const li = document.createElement('li');
    li.classList.add('torch-list');
    const headerEl = document.createElement('h3');
    headerEl.textContent = torch.name;
    const pEl = document.createElement('p');
    pEl.textContent = torch.controls;
    const pEl2 = document.createElement('p');
    for (let size of torch.size) {
        // pEl2.append()
        console.log(size);
    }
}
