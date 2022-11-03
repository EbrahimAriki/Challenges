//https://edabit.com/challenge/FPHnbisnLwrQFYyAg

//Test.assertSimilar(amplify(333), [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333])
//Test.assertSimilar(amplify(25)

function amplify(num) {
    let arr = []
    for (i = 1; i <= num; i++)
        if (i % 4 == 0) {
            arr.push(i * 10)
        }
        else {
            arr.push(i)
        }

    return arr

    console.log(arr)
}

console.log(amplify(25))



///https://edabit.com/challenge/RGQXN4TG2CQoBAReQ

function numberSquares(n) {
    var result = 0

    for (let i = 0; i <= n; i++) {
        result = i**2 + result
        // result  += result ;
        // result += Math.pow(i, 2)
        console.log(result)

    }
    return result
}
console.log(numberSquares(2))



// //https://leetcode.com/problems/add-digits/

// var addDigits = function (num) {
//     var b = 0 
//    var a = num.length

//     for ( i = 0; i < a ; i++) {
//     // if (a > 1){    

//             //  c = parseInt(b)
//        b += parseInt(num[i])
//     }
//       // var b = c 
//         // parseInt(b)
//        // b = parseInt(num[0])+parseInt(num[1])+parseInt(num[2])
//     //     }





//     //     if (b.length>1){

//     //     for ( i = 0; i < b.length ; i++) {
//     //         b += parseInt(b[i])
//     //     } 
//     // }

// // else {return num }



//     // console.log(a);
//     //console.log(b);
//     //return parseInt(b);
//     return b ;

//     }
// ;
// console.log(addDigits('96'))
// //console.log((b))












// //https://leetcode.com/problems/add-digits/  // work 

// var addDigits = function (num) {
//     console.log(num);

//     var b = 0
//     var a = num.length
//     if (a > 1) {
//         for (i = 0; i < a; i++) {
//             b += parseInt(num[i])
//             // h += parseInt(num[i])
//             //var c = "11"
//             var c = "" + b + ""
//             console.log(b)
//             h = parseInt(b)
//             console.log(h)
//             var h = toString(b)
//             console.log("" + b + "")
//             hh = "" + b + ""
//             console.log(hh)


//         }
//         console.log(b);
//         //   if(b.length > 1){  
//         //     console.log(b)
//         //     var b = 0
//         //     var d = c.length

//         //     console.log(c.length)
//         //     console.log(d)
//         //     console.log(c)

//         //     for ( i = 0; i < d ; i++) { 
//         //         console.log(i)       
//         //         c += parseInt(num[i]) 

//         //      }
//         //      console.log(c) 
//         //      return c 

//         // } 

//         if (b <= 9) {
//             return b;
//         }

//         else {
//             var b = 0
//             var d = c.length
//             console.log(b);
//             console.log(c.length)
//             console.log(d) //just to be sure 
//             console.log(c)
//             // c = parseInt(c)

//             s = 0 //delet this 
//             for (j = 0; j < d; j++) {
//                 console.log(c)
//                 console.log(j)
//                 s += parseInt(c[j])
//                 console.log(s)
//             }
//             console.log(s)
//         }

//         //else ({num})
//         //}
//         //} // you can delete it 

//     }
//     else { return parseInt(num) }

//    return s

//     //}
// };
// console.log(addDigits("38"))
// //console.log((b))



// //https://leetcode.com/problems/add-digits/

// var addDigits = function (num) {


//     var b = 0
//    var a = num.length
//  if (a > 1){
//     for ( i = 0;
//          i < (a || b.length );
//           i++) {
//         if (b.length >1 || a>1){
//        b += parseInt(num[i])
//     } }
//     if (b <= 9){
//         return b ;
//        }
//       else ({num})
// }

//  else {return parseInt(num) }

//     return b ;

//     }
// ;
// console.log(addDigits('646'))
// //console.log((b))




// //https://leetcode.com/problems/add-digits/

// var addDigits = function (num) {


//     var b = 0
//    var a = num.length
//  if (a > 1){
//     let i = 0

//     while(num[i]) {
//        b += parseInt(num[i])
//        //if (b.length>1 )
//        i++;

//     }
// }

//  else {return parseInt(num) }

//     return b ;

//     }
// ;
// console.log(addDigits('9266'))
// //console.log((b))




//https://leetcode.com/problems/add-digits/  // FINAL
var addDigits = function (num) {
    console.log(num);

    var b = 0
    var a = num.length
    if (a > 1) {
        for (i = 0; i < a; i++) {
            b += parseInt(num[i])
            //var c = "11"
            var c = "" + b + ""
            console.log(b)
        }
        console.log(b)

        if (b <= 9) {
            return b;
        }

        else {
            var d = c.length
            console.log(c)
            console.log(b);
            console.log(c.length)
            console.log(d) //just to be sure 
            s = 0 //delet this 

            for (j = 0; j < d; j++) {
                console.log(c)
                console.log(j)
                s += parseInt(c[j])
                console.log(s)
            }
            console.log(s)
            if (b <= 9) {
                return s;
            }
            else {
                var c = "" + s + ""
                var d = c.length
                console.log(b);
                console.log(c.length)
                console.log(d) //just to be sure 
                s = 0 //delet this 

                for (j = 0; j < d; j++) {
                    console.log(c)
                    console.log(j)
                    s += parseInt(c[j])
                    console.log(s)
                }
            }
        }
    }
    else { return parseInt(num) }
    return s
};
console.log(addDigits("3697"))



//edabit.com/challenge/kbFhwaDyrd79JrgeB   
//Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.


function charCount(myChar, str) {
    let sentence = "Ebrahim Ali ibb";
    // let a = sentence.length
    // console.log(a)
    const newarray = sentence.split("");
    console.log(newarray)
    let b = newarray.length
    console.log(b)
    let empty = []  // with counter
    //     let str1 = 'JavaScript,Python,C++,PHP';

    // const split_string = str1.split(",");
    // console.log(split_string)

    for (i = 0; i <= b; i++)
        if (newarray[i] === myChar) {
            console.log(newarray[i])
            empty.push(newarray[i])

        }
    // let s = empty.length
    // console.log(s)
    return (empty.length)
    //         else {
    // s = 0 
    //         }
    // console.log(empty)
    // return sentence

}
console.log(charCount("i", "EbrahimAliibb"))

/// another way for the solution you can use this

const array1 = "lklg";

for (const letter of array1) {
    console.log(letter);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"


// //leetcode.com/problems/palindrome-number/
// //For example, 121 is a palindrome while 123 is not.
function isPalindrome(x) {

    let b = [1, 6, 8]
    x = 9
    y = 9
    if (x === y) {
        return b
    }
    else {
        return "yes"
    }
    //empty.reverse
    console.log(b)
};
console.log(isPalindrome("654"))




// //leetcode.com/problems/palindrome-number/ 
function reverseString() {
    number = 656
    let str = number.toString()
    // console.log(str)
    // let  str = "" + a + ""
    let com = str.split("").reverse().join("")
    console.log(com)


    if (com === str) {
        return true
    }
    else {
        return false
    }
    //return str.split("").reverse().join("")
}
console.log(reverseString());



// /// 28.07.2022
// //https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
// //Create a function that takes a string and returns the number (count) of vowels contained within it.

// function countVowels(str) {
//     // str = "bg"
//     let vowels = ["a", "e", "i", "o", "u"]
//     console.log(vowels.includes('e'));
//     console.log(vowels);
//     console.log(str.length);
//     // console.log(str.charAt(0));
//     let count = 0;
//     for (i = 0; i <= str.length; i++) {
//         if (vowels.includes(str.charAt(i))) {
//            // if (str.charAt(i) ==="a" || str.charAt(i) ==="e") || str.charAt(i) ==="i"  ....{
//             console.log(str.charAt(i))
//             count++
//             console.log(count)

//         }


//     }
//     return count;
// }

// console.log(countVowels("halilesuagfhjodfen"));


// clean code
function countVowels(str) {
    // str = "bg" // you can change it to lower case then control 
    let vowels = ["a", "e", "i", "o", "u", "A", , "E", "I", "O"]
    // or with regex (vowels)
    //or 
    console.log(str.length);
    let count = 0;

    for (i = 0; i <= str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            console.log(str.charAt(i))
            count++
        }
    }
    return count;
}

console.log(countVowels(" cnf"));


//28.07.2022
//https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/

var checkZeroOnes = function (s) {
    let count1 = 0;
    let count2 = 0;
    oldone = 0    /// use math.max(largestone , ++one)
    one = 0
    longestones = 0
    longestzeros = 0

    console.log(s.length);
    for (i = 0; i <= s.length; i++) {
        if ((s.charAt(i)) == "1") {
            //count1 += count1
            longestones = Math.max(longestones, ++count1)
            count2 = 0
        }

        else {
            longestzeros = Math.max(longestzeros, ++count2)
            count1 = 0
        }

    }

    return longestones + "ones" + " " + "zeros" + longestzeros


};
console.log(checkZeroOnes("0000001111010101011111111111"));


//  if(s.charAt(i) === 1){
//           count1++
//             // }
//             // else


// && (s.charAt(i)) ===1)



//https://edabit.com/challenge/cKQA9N9Yg7ExeWusQ

function fizzBuzz(num) {
    let arr = []
    for (i = 1; i <= num; i++)


        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz")
        }
        else if (i % 3 == 0) {
            arr.push("Fizz")
        }
        else if (i % 5 == 0) {
            arr.push("Buzz")
        }

        else {
            arr.push(i)
        }

    return arr

    console.log(arr)
}
console.log(fizzBuzz(15))







//11-08-2022
// let arr = [1,2,3,2,1]
// let B = 5
// function Paircount(arr , B) {

//     // let arr = [1,2,3,2,1]
//     // let B = 5
//     var result = 0 
// console.log(arr.length)
// console.log(B)

//     for ( i = 0; i < arr.length; i++){
//           for (j = i+1 ; j < arr.length ; j++) {
//            if (arr[i] + arr[j] == B){
//             result  = result + 1
//             // result  = arr[i] +arr[j]
//             console.log(result)
//            }}

//     } 
//     return result 

//     console.log(arr)
// }
// console.log(Paircount([1,2 ,3,2, 1], 2))


function Paircount(arr, B) { ///this is working with 2 for loop 

    // let arr = [1,2,3,2,1]
    // let B = 5
    var result = 0
    console.log(arr.length)
    console.log(B)

    for (i = 0; i < arr.length; i++) {

        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == B) {
                result = result + 1
                // result  = arr[i] +arr[j]
                console.log(result)
            }
        }

    }
    return result

    console.log(arr)
}
console.log(Paircount([1, 3, 1, 3, 1], 4))

// [1,1,34,4,55,10,10,8,12,1], 20
//[1,1,34,4,55,10,10,10,8,12], 20
// [1,1,12,8,34,4,55,10,10,10,8,12], 20
// [1,3,3,1],4
// [1,3,1,3,1],4


function Paircount1(arr, B) { ///this is not working with 1 for loop 

    // let arr = [1,2,3,2,1]
    // let B = 5
    var result = 0
    console.log(arr.length)
    console.log(B)

    for (i = 0; i < arr.length; i++) {
        //  var k = i
        //   for (j = i+1 ; j < arr.length ; j++) {
        if (arr[i] + arr[i + 1] == B) {
            result = result + 1
            if (arr[arr.length - i] + arr[arr.length - 2] == B) {
                // if (arr[k-1] + arr[k] == B){
                result = result + 1
            }
            // result  = arr[i] +arr[j]
            console.log(result)
        }

    }
    return result

    console.log(arr)
}
console.log(Paircount1([1, 3, 1, 3, 1], 4), "final")
console.log(Paircount1([1, 2, 3, 2, 1], 5), "final")
console.log(Paircount1([1, 1, 34, 4, 55, 10, 10, 10], 20), "final")
console.log(Paircount1([1, 1, 34, 4, 55, 10, 10, 10, 8, 12], 20), "final")


// [1,3,3,1],4

// The solution of Mr Ammmar 
let solve = function (A, B) {
    let count = 0;
    let pivot = 0
    for (let i = 0; pivot !== A.length - 1; i++) {
        if (A[pivot] + A[i] === B && pivot !== i) {
            count += 1;
        }
        if (i === A.length - 1) {
            pivot += 1;
            i = pivot;
        }
    }
    return count;
}


console.log(solve([1, 2, 3, 2, 1], 5));
console.log(solve([1, 1, 1], 2));
console.log(solve([1, 1, 3], 4));
console.log(solve([1, 1, 34, 4, 55, 10, 10, 10], 20));
console.log(solve([1, 1, 34, 4, 55, 10, 10, 10, 8, 12], 20));
console.log(solve([1, 1, 12, 8, 34, 4, 55, 10, 10, 10, 8, 12], 20));
// solve([1,2,3,2,1],5)
// 2
// solve([1,1,1],2)
// 3
// solve([1,1,1],3)
// 0
// solve([1,1,3],4)
// 2
// solve([1,1,34,4,55,10,10,10],20)
// 3
// solve([1,1,34,4,55,10,10,10,8,12],20)
// 4
// solve([1,1,12,8,34,4,55,10,10,10,8,12],20)
// 7



function Paircount1(arr, B) { ///this is not working with 1 for loop 

    var result = 0
    console.log(arr.length)
    console.log(B)

    for (i = 0; i < arr.length; i++) {
        //  var k = i
        //   for (j = i+1 ; j < arr.length ; j++) {
        if (arr[i] + arr[i + 1] == B) {
            result = result + 1
            if (arr[arr.length - i] + arr[arr.length - i - 1] == B) {
                // if (arr[k-1] + arr[k] == B){
                result = result + 1
            }
            // result  = arr[i] +arr[j]
            console.log(result)
        }

    }
    return result

    console.log(arr)
}
console.log(Paircount1([1, 3, 1, 3, 1], 4), "final")
console.log(Paircount1([1, 2, 3, 2, 1], 5), "final")
console.log(Paircount1([1, 1, 34, 4, 55, 10, 10, 10], 20), "final")
console.log(Paircount1([1, 1, 34, 4, 55, 10, 10, 10, 8, 12], 20), "final")
// hgh 



//15.08.22//
//https://leetcode.com/problems/length-of-last-word/


function charCount(myChar, str) {
    let sentence = "Ebrahim Ali  ibb Yemen  ";
    // let a = sentence.length
    // console.log(a)

    console.log(sentence.length)
    sentence = sentence.trim()
    console.log(sentence.length)
    const newarray = sentence.split(" ");
    console.log(newarray)
    let b = newarray.length
    console.log(b)
    LastWord = newarray[newarray.length - 1];
    console.log(LastWord);
    console.log(LastWord.length);


    // if (LastWord!== " ") {
    //     LastWordLength = LastWord.length
    // }

    // else{
    //     LastWordLength = LastWord.length
    // }

    return (LastWord.length)


}
console.log(charCount())


// function charCount(myChar, str) {
//     let sentence = "Ebrahim Ali  ibb     ";
//     // let a = sentence.length
//     // console.log(a)
//     console.log(sentence.length)
//     sentence = sentence.trim()
//     console.log(sentence.length)
//     const newarray = sentence.split(" ");
//     console.log(newarray)
//     let b = newarray.length  
//      console.log(b)
//     LastWord = newarray[newarray.length - 1];
//     console.log(LastWord);
//     console.log(LastWord.length);
//     if (LastWord!== " ") {
//         LastWordLength = LastWord.length
//     }

//     else{
//         LastWordLength = LastWord.length
//     }

//     let empty = []  // with counter
//     //     let str1 = 'JavaScript,Python,C++,PHP';

//     // const split_string = str1.split(",");
//     // console.log(split_string)

//     for (i = 0; i <= b; i++)
//         if (newarray[i] === myChar) {
//             console.log(newarray[i])
//             empty.push(newarray[i])

//         }
//     // let s = empty.length
//     // console.log(s)
//     return (empty.length)


// }
// console.log(charCount("i", "EbrahimAliiibb"))





//16.08.2022
///https://leetcode.com/problems/happy-number/

function isHappy(n) {
    var result = 0
    var numarr = n.toString().split("")
    console.log(numarr)
    let iteration = 0

    for (let i = 0; i <= numarr.length; i++) {
        if (iteration <= 5000) {
            for (let i = 0; i < numarr.length; i++) {
                result += Math.pow(numarr[i], 2)
                console.log(result, "result")
                var tempnum = result
                console.log(tempnum, "temp")
            }
            if (result !== 1) {
                numarr = result.toString().split("")
                console.log(numarr, "temp")
                i = 0
                result = 0
                ++iteration
                console.log(iteration, "iteration")
            }
            else return true
        }
        else {
            return false
        }
    }
}
console.log(isHappy(19))


//https://leetcode.com/problems/majority-element/

function majority(nums) {
    var result = 0
    var nums = [1, 2, 3, 2, 1, 1]
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {

        /////////// didnt finish this
    }
}
console.log(majority(19))



//https://leetcode.com/problems/isomorphic-strings/
var isIsomorphic = function (s, t) {
    console.log(s.length)
    console.log(t.length)

};
console.log(isIsomorphic("hi", "bi"))



//22.08.2022
// https://leetcode.com/problems/remove-element/
var removeElement = function (nums, val) {
    let tempk = 0
    let k = 0
    console.log(nums.length)
    for (var i = 0; i < nums.length; i++) {
        console.log("hi", nums[i])
        if (nums[i] === val) {
            console.log(nums[i])
            nums.splice(i, 1)
            i = i - 1
            nums.splice(nums.length, 0, '_')
            tempk++
            k = nums.length - tempk
            console.log(k)
        }
    }
    console.log("k=", k, "nums", nums)
    return (k)
};
console.log(removeElement([1, 2, 3, 2, 1, 1], 2))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement([3, 2, 2, 3], 3))

// https://leetcode.com/problems/remove-element/
var removeElement = function (nums, val) {
    let tempk = 0
    let k = 0

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i = i - 1
            nums.splice(nums.length, 0, '_')
            tempk++
            k = nums.length - tempk

        }
    }
    console.log("k2=", k, "nums", nums)
    return (k, nums)
};
console.log(removeElement([3, 2, 2, 3], 3))



//22.08.2022
//leetcode.com/problems/move-zeroes/submissions/
var moveZeroes = function (nums) {
    let tempk = 0
    let k = 0

    for (var i = 0; i < nums.length; i++) {
        // nums.map ( (i)=> {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            i = i - 1
            nums.splice(nums.length, 0, '_')
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == '_') {
            nums.splice(i, 1)
            i = i - 1
            nums.splice(nums.length, 0, 0)
        }
    }
    // const newNums =nums.map ( (i)=> {
    //     (nums[i] === '_') ?
    //   nums.splice(nums.length,0,0) 
    //     : tempk++
    // } )
    return (nums)
};
console.log(moveZeroes([3, 0, 0, 2, 0, 3]))


//23.08.2022 // read about stack and queue
//https://leetcode.com/problems/valid-parentheses/
var isValid = function (s) {
    // last in last out 
    let tempk = 0
    let k = s.split("")
    console.log(k)
    var brackets = ['(', ')', '{', '}', '[', ']']

    let resultArray = []
    let rev = k.reverse();
    console.log(s.length)
    console.log(s)
    console.log(rev)

    for (var i = 0; i < s.length; i++) {
        if (s[i] === brackets[0] && s[i + 1] === brackets[1 || 3 || 5]) {
            resultArray.push(brackets[i], brackets[i + 1])
            console.log(brackets[i], "result")
        }
    }
    console.log(resultArray)
    return (resultArray)
};
console.log(isValid("(]"))




// //leetcode.com/problems/palindrome-number/ 
function reverseString() {
    number = 656
    let str = number.toString()
    // console.log(str)
    // let  str = "" + a + ""
    let com = str.split("").reverse().join("")
    console.log(com)


    if (com === str) {
        return true
    }
    else {
        return false
    }
    //return str.split("").reverse().join("")
}
console.log(reverseString());





// random number generator
function random() {
    let randArray = [];
    for (let i = 0; i < 10; i++) {
        number = Math.floor(Math.random() * 20) - 10
        randArray.push(number)
    }
    console.log(randArray)
    return this.number
}
console.log(random());

//or
function random1(min, max) {
    let arr = [15, 16, 18, 25, 7, 13, 10, 8, 19, 7]
    arr.sort()
    let randArray = [];
    for (let i = 0; i < 10; i++) {
        number = Math.floor(Math.random() * (max - min)) + min
        randArray.push(number)
    }
    randArray = randArray
    console.log(randArray)
    console.log(randArray.sort(), "Sorted array"); // dosent work with negative num
    console.log(arr.sort((a, b) => b - a), "sbt arr sorted")

    return number
}

console.log(random1(1, 20));



//26.08.2022
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/


// var removeDuplicates = function (nums, val) {
//     let tempk = 0
//     let k = 0
//     console.log(nums.length)
//     for (var j = 0; j < nums.length; j++) {
//         if (nums[j] == "_") {
//             return ("k=", k, "nums", nums)
//         }
//         else {
//             var tempi = nums[j]
//         }
//         for (var i = 0; i < nums.length; i++) {
//             if (tempi == nums[i + 1]) {
//                 console.log(nums[i])
//                 nums.splice(i, 1)
//                  i = i - 1
//                 nums.splice(nums.length, 0, '_')
//                 tempk++
//                 k = nums.length - tempk
//                 console.log(k)
//                 console.log(nums)
//             }
//         }
//     }
//     console.log("k=", k, "nums", nums)
//     return (k)
// };
// console.log(removeDuplicates([1, 2, 3, 2, 1]))


var removeDuplicates1 = function(nums) {
    let res = [];
    let k = 0 
    let b = 0
    for(var i = 0; i < nums.length; i++) {
        if(!res.includes(nums[i])) {
            res.push(nums[i]) 
            k++ ; 
        console.log(k)
        }
         
        else{
        b++
         //res.splice(res.length, 0, '_')
console.log(res)}
        // res.push("_") 
    }
    console.log("k=", k, "res", res)
    console.log(i)

    if (nums.length == nums.length){
        res.splice(res.length, 0, '_')

    }
    return k
  //  return restruct(res)[0];
};
console.log(removeDuplicates1([1,3 ,1 ,2, 3, 2, 1]))
