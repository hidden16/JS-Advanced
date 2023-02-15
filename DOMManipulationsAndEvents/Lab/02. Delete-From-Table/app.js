function deleteByEmail() {
    const items = Array.from(document.querySelectorAll("tbody tr td"));
    const text = document.querySelector('input[name="email"]').value;
    const foundItem = items.find(item => item.textContent === text);
    if(foundItem != undefined){
        foundItem.parentElement.remove();
        document.getElementById('result').textContent = 'Deleted.';
        return;
    }
    document.getElementById('result').textContent = 'Not found.';
}