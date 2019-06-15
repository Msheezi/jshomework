const NUMS = [1,2,3,4,5];

//myEach
Array.prototype.myEach = function (cb) {
    for(i=0;i<this.length;i++) {
        cb(this[i]);
    }
};

NUMS.myEach((num) => {
    console.log(num * num);
})

//myMap
Array.prototype.myMap = function(func) {
    let mapped = [];
    this.myEach(ele => mapped.push(func(ele)))
    //the above line is using an anony function and passing the block
    //block with ele as the variable.  equiv to the |ele| {block} in ruby
    return mapped;
}

console.log(NUMS.myMap(num => num / num));

Array.prototype.myReduce = function (func, initialValue){
    let arr = this;
    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }
    let result = initialValue;
    arr.myEach(ele => result = func(result, ele));
    return result;
};

console.log(NUMS.myReduce((total, item)=> total + item));