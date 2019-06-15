const y = [1, 2, 3, 4, 5]

Array.prototype.myEach = function(func) {
    for (i=0;i< this.length; i++) {
        func(this[i]);
    }
};


y.myEach(num) => { 
    console.log(num * 2);
}
//     console.log(num * 2);
// }


// console.log(multiBy2(4))