function colorize() {
    const test = document.getElementsByTagName('tr');
    const array = Array.from(test);
    for (let index = 1; index < array.length; index++) {
        if(index % 2 == 1){
            test[index].style.backgroundColor = 'Teal';
        }
    }
}