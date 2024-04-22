// map, filter arrows fn

// function sum(a,b) {
//     return a + b;             // normal way to right function
// }



// const sum = (a,b) =>  {
//     return a + b;
// }


// const ans = sum(1, 2);
// console.log(ans);


// given an array give me back a new array in ehich every value is multiplied by 2
//[1,2,,3,4,5]
//[2,4,6,8,10]

const  input = [1,2,3,4,5];

// function transform (i) {
//     return i*2;
// }

// const ans  = input.map(transform);
// console.log(ans);

function filterLogic(n) {
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const ans = input.filter( (n) => {
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);