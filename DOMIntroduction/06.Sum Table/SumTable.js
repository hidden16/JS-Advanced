function sumTable() {
    let element = document.getElementsByTagName('tr');
    const array = Array.from(element);
    let sum = 0;
    for (let index = 1; index < array.length; index++) {
        sum += Number(element[index].lastChild.textContent)
    }
    document.getElementById('sum').textContent = sum;
}