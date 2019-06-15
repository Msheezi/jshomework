//uniq
Array.prototype.uniq = function() {
    let uniqueArray = [];
    for (i=0;i<this.length;i++) {
        if (!uniqueArray.includes(this[i])) {
            uniqueArray.push(this[i]);
        }
    }
    return uniqueArray
}
let sampleArray = [2,2,3,3,4,4,5,6,7,10]

console.log(sampleArray.uniq())


//two sum
Array.prototype.twoSum = function(){
    let result = [];
    for(i=0;i < this.length - 1; i++) {
        for(j= i+1;j< this.length; j++) {
            if (this[i]+ this[j]===0){
                result.push([i,j])
            }
        }
    }
return result
}

let sampleArray2 = [1,-1,2,4,5,-5,10,-10]

console.log(sampleArray2.twoSum())

Array.prototype.transpose = function() {
    let transposed =[];
    for(i=0;i < this.length; i++) {
        let layer = []; {
            for(j=0;j < this.length;j++) {
                layer.push(this[j][i]);
            }
            transposed.push(layer);
        }
    }
    return transposed
}

let trans =  [[1,2,3],[4,5,6],[7,8,9]]
console.log(trans.transpose())