/*

Write a function that takes three strings - a verb, an adjective, and a noun - 
uppercases and interpolates them into the sentence 
"We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
*/

function madLib(verb, adj, noun) {
    console.log(`We ${verb} the ${adj} ${noun}`)
}

function whatTheDeal(subject) {
    console.log(`What's the deal with ${subject}?`)
}

let subject = "Ice Cream"

// whatTheDeal(subject)


/*
Input

1) A String, called searchString.
2) A String, called subString.
    Output: A Boolean.true if the subString is a part of the searchString.
    */


function isSubstring(searchString, subString) {
    
}

 isSubstring("time to program", "time")
// true

isSubstring("Jump for joy", "joys")
// false
