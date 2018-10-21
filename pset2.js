/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
//------- result 1

// const removeNegatives = function (arr){
// const newArr = []


//     for(let i = 0; i < arr.length; i++) { 
//         newArr.push(arr[i])
//         if (newArr[i] < 0){

//              newArr[i] = newArr[i] * -1
//         }
//     } 
//     return newArr

//     }

console.log('----------Test removeNegatives----------')
console.log()
// console.log(removeNegatives([-3,-2,1,2,3,-4]));


//---------------------------------------------------------------

/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns - 1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
// let arr = [1,2,3]
// arr[1]
//------- result 2

// const findVal = (arr, val) => {
//     // create a for loop

//     if (typeof val === 'undefined'){
//         throw new Error('input must be array')
//     }
// for (let i = 0; i < arr.length; i++){
//     // create an if statement in the for loop
//     if(arr[i] === val){
//         // return the INDEX (position of each value) of each value
//         return i
//     } 
//  }
//  // return -1 if the value is outside of the ARRAY
//  return -1
// };

// console.log(findVal([1,2,3,4], 1)); // 0
// console.log(findVal([1,2,3,4], 4)); // 3
// console.log(findVal([1,2,3,4], 9)); // -1

//---------------------------------------------------------------
/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/

//------- result 3

// const removeOdds = (arr) => {
// let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] ==='number' && arr[i] % 2 === 0){
//         newArr.push(arr[i])
//           }
//     }
//     return newArr

// }


// console.log(removeOdds([1,'2',3,4])); // [2,4]

//---------------------------------------------------------------
/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/

//------- result 4

// const addSquares = (arr) => {
// let copyArr = [...arr]
// for(let i = 0; i < arr.length; i++){
//     copyArr.push(arr[i] * arr[i])
// }
// return copyArr

// }


// console.log(addSquares([1,2,3,4]));



//---------------------------------------------------------------

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/


//------- result 5


const doubleify = (arr) => {
if(Array.isArray(arr) === false){
    return []
}

    let newArr = []
    //let position = 0
    
    
    for(let i = 0; i < arr.length; i++){
        
      newArr.push(arr[i],arr[i]);

    }

return newArr
}
 console.log(doubleify([1,2,3,4]));

// const doubleify = arr => {
//     const arrCopy = arr.slice();
//     for (let i = 0; i < arrCopy.length; i += 2){
//         arrCopy.splice(i, 0, arrCopy[i])
//     }
//     return arrCopy;
//     }

//---------------------------------------------------------------
/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

// const findMax = (array) => {
// let max = array[0]
// for(let i = 0; i < array.length; i++) {
//     if (max < array[i]) {

//         max = array[i]
//     }
// } 
// return max

// }

// console.log(findMax([1,2,3,99,4]));

//------- result 6



/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/


// const findLow = (array) => {

//     let lowestNum = array[0]

//     for(let i = 0; i < array.length; i++) {
//         if(lowestNum > array[i]){
//         return lowestNum = array[i]
//         }
//     }
// return lowestNum

// }



// console.log(findLow([30, 50, 2, 11]));



// const firstSecThi = (array) => {
//     let first = array[0]
//     let second = array[0]
//     let third = array[0]

//     for (let i = 0; i < array.length; i++){
//         if(first < array[i]){
//             return first = array[i]
//         } if (first > array[i] > second){
//             return second = array[i]
//         } if ( second > third < array[i]){
//             return third = array[i]
//         }
//     }

// return first

// }






// console.log(firstSecThi([30, 50, 2, 11]));


