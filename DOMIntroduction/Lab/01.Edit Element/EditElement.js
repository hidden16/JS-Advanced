function editElement(element, match, replace) {
    const regex = new RegExp(match, 'g');
    const result = element.textContent.replace(regex, replace);
    element.textContent = result;
}