//bubblesort

Array.prototype.bubbleSort = function () {
    let isSorted = false;

    while(!isSorted) {
        isSorted = true;
        for(i = 0; i < this.length - 1;i++) {
            if(this[i] > this[i + 1]) {
                [this[i], this[i+1]] = [this[i + 1], this[i]];
                isSorted = false;
            }
        }
    }
    return this;
}

console.log([2,3,4,2,1,3,4,5,6,2,4,3,2,3,4,5].bubbleSort())

//substrings

String.prototype.substrings = function () {
    let results = []
    for(i=0;i<this.length;i++) {
        for(j=i + 1; j< this.length; j++) {
            results.push(this.slice(i,j));
        }
    }
    return results;
}

console.log("test".substrings())