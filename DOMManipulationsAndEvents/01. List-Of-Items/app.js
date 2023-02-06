function addItem() {
    const text = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = text.value;
    const ul = document.getElementById('items');
    ul.appendChild(li);
}