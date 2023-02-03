const perf = require('execution-time')();

// Results for the extraLargeArray
// insert 966.2449 ms
// append 2.4471 ms
// Results for the largeArray 
// insert 7.6422 ms
// append 140.8 μs
// Results for the mediumArray
// insert 754 μs
// append 838.9 μs
// Results for the smallArray 
// insert 8.8 μs
// append 6.5 μs
// Results for the tinyArray
// insert 18.9 μs
// append 7.2 μs


//4 of Step 1
//No matter the array size is it almost always faster to use append then insert. 
//The bigger the array the slower the insert function is in comparison to the append function.
//The time difference changes exponentially depending on the size of the array


//5 of Step 1
//The reason why the unshift function is slower than the append function is because with the 
//unshift function you have to do and operation on every item in the array everytime you
// want to use add something to an array where as append just adds it to the end of array 
//with no extra steps.


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
resultsInsert = perf.stop();


console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
resultsInsert = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
resultsInsert = perf.stop();


console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

