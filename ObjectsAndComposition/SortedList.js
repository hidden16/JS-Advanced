function createSortedList() {
    let array = [];
    let object = {
        add(element) {
            array.push(element);
            array.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index < array.length) {
                array.splice(index, 1);
                array.sort((a, b) => a - b);
                this.size--;
            }
            return;
        },
        get(index) {
            if (index >= 0 && index < array.length) {
                return array[index];
            }
            return;
        },
        size: 0
    }
    return object;
}
let list = createSortedList();
list.add('a');
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);



