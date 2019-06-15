//range
/*range(start, end) - 
receives a start and end value, r
eturns an array from start up to end*/

function range(start, end) {
    if (start === end) {
        return [];
    }
    let r = range(start, end - 1);
    r.push(end - 1);
    return r;
    }
    
console.log(range(3,10))

//sumRc
//sumRec(arr) - receives an array of numbers and recursively sums them
function sumRec(arr) {
    if (arr.length === 0)
    return 0; {
    }
        let result = arr[0] + sumRec(arr.slice(1))
    return result;
}
    
console.log(sumRec([1,2,3,10]))

/*
exponent(base, exp) - receives a base and exponent, 
returns the base raise to the power of the exponent 
(base ^ exp)
*/

function exponent(base, exp) {
    if(exp === 0)
    return 1; {
        let result = base * exponent(base, exp - 1)
        return result;
    }
}

console.log(exponent(3,3))
//  fibs receives an integer, n, and returns the first n Fibonacci numbers
function fibsRec (n) {
   switch (n) {
       case  0: {
           return [];
       }
       case 1: {
           return [0]

       }
       case 2: {
        return [0,1]
       } 
   }

   let result = fibsRec(n-1)
   result.push(result[result.length - 1]+ result[result.length -2]); 
   // the above line is finding the values based on the array length
//    i.e. the next value to input is the sum of the current last + the second to last
   return result

}
console.log(fibsRec(5));
console.log(fibsRec(1));
console.log(fibsRec(0));
// = ${ fibsRec(5) }


//deepDup

function deepDup(arr) {
    if (!(arr instanceof Array)) { //check if the variable is an array, 
        // if not, return it else map it
        return arr
    }
    return arr.map(el => {
        return deepDup(el);
    })
}
const array = [[2], 3];
const dupedArray = deepDup(array);
console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

//bearch
function bsearch(numbers, target) {
    if (numbers.length === 0) {
        return -1;
    }

    const probeIdx = Math.floor(numbers.length / 2);
    const probe = numbers[probeIdx];

    if (target === probe) {
        return probeIdx
    }
    else if (target < probe) {
        const left = numbers.slice(0,probeIdx);
        bsearch (left, target);
    } else {
        const right = numbers.slice(probeIdx + 1);
        const subAns = bsearch(right, target);
        return subAns === -1 ? -1 : subAns + (probeIdx + 1)
    }
}


console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);

// merge sort

function merge(left, right) {
   const merged = [];

   while (left.length > 0 && right.length > 0) { 
    let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(nextItem)
}

return merged.concat(left, right);
}

function mergeSort(array){
    if (array.length < 2) {
        return array;
    } else {
        const middle = Math.floor(array.length / 2)
        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle));
        return merge(left, right)
    }
}


console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);
