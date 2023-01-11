function aggregateElements(numbers){
    function sum(){
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }
    function inverseSum(){
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += 1/numbers[i];
        }
        return sum;
    }
    function concat(){
        let string = '';
        for (let i = 0; i < numbers.length; i++) {
            string += numbers[i];
        }
        return string;
    }
    console.log(sum());
    console.log(inverseSum());
    console.log(concat());
}

let nums = [1, 2, 3];
aggregateElements(nums);