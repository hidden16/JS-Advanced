function addItem() {
    const text = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = text.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(deleteBtn);

    document.getElementById('items').appendChild(li);
}