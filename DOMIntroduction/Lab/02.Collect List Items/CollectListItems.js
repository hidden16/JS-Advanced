function extractText() {
    const items = document.getElementById('items').children;
    const arrayItems = Array.from(items);
    const result = arrayItems.map(li => li.textContent).join('\n');
    document.getElementById('result').textContent = result;
}