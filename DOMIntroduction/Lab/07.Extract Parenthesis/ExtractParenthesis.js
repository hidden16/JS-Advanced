function extract(content) {
    const regex = /\(([^)]+)\)/g;
    let matches = [];
    let match = '';
    const text = document.getElementById(content).textContent;
    while(match = regex.exec(text)){
        matches.push(match[1]);
    }
    return matches.join('; ');
}