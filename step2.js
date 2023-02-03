const perf = require('execution-time')();

function addToZero(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0 && arr.includes(arr[i]*-1)){
            return true
        }
    }
    return false
}

//Space Complexity O(n)

// Try it with first function
perf.start();                     // Starts timer
addToZero([])
let results = perf.stop();  // Stops timer and save time results

console.log('Results for the addToZero');
console.log(results.preciseWords);

// console.log("Zero " + addToZero([]))
// console.log("Zero " + addToZero([1]))
// console.log("Zero " + addToZero([1,2,3]))
// console.log("Zero " + addToZero([1,2,3,-2]))

function hasUniqueChars(word){
    let copy = word
    for(let i = 0; i < word.length; i++){
        copy = copy.replaceAll(word[i], "")
        if(copy.length < word.length-1){
            return false
        }
        copy = word
    }
    return true
}

//Space Complexity O(n)

perf.start();                     // Starts timer
hasUniqueChars("Moonday")
results = perf.stop();  // Stops timer and save time results

console.log('Results for the hasUniqueChars');
console.log("insert", results.preciseWords);

// console.log("Unique " + hasUniqueChars("Moonday"))
// console.log("Unique " + hasUniqueChars("Monday"))

function isPangram(arr){
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let panagram = false
    for(let i = 0; i < alph.length; i++){
        if(arr.includes(alph[i])){
            panagram = true
        }else{
            return false
        }
    }
    return panagram
}

//Space Complexity O(n)

perf.start();                     // Starts timer
isPangram("The quick brown fox jumps over the lazy dog!")
results = perf.stop();  // Stops timer and save time results

console.log('Results for the isPangram');
console.log(results.preciseWords);

// console.log("Pang " + isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log("Pang " + isPangram("I like cats, but not mice"))

function findLongestWord(arr){
    let longest = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length
        }
    }
    return longest
}

//Space Complexity O(n)

perf.start();                     // Starts timer
findLongestWord(["hi","hello"])
results = perf.stop();  // Stops timer and save time results

console.log('Results for the findLongestWord');
console.log(results.preciseWords);