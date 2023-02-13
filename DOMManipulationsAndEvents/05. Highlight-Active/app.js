function focused() {
    const text = document.querySelectorAll('input[type="text"]');
    for (const item of text) {
        item.addEventListener('focus', () => {
            item.parentElement.className = 'focused';
        });
        item.addEventListener('blur', () => {
            item.parentElement.className = '';
        });
    }
}