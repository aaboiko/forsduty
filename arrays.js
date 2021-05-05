let arr = ['a','b','c','d','e','f'];
let numbers = [1,2,3,4];

function display(array){
    for(let i in array)
        console.log(i);
};

function isMore2(value){
   return value > 2;
}

let sliced = arr.slice();
display(sliced);

arr.splice(0,1);
display(arr);

let mapped = arr.map(item => item.length);
display(mapped);

arr.forEach(item => {
    console.log(item);
});

let filtered = numbers.filter(isMore2);
display(filtered);

let reduced = numbers.reduce((sum,current) => sum + current, 0);
console.log(reduced);

arr.sort();
display(arr);

let isBigger = numbers.some(isMore2);
console.log(isBigger);

let allBiggerThan2 = numbers.every(isMore2);
console.log(allBiggerThan2);