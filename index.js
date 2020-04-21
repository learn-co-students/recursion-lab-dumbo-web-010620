// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(myString) {
   
    if (myString === "") {
        return "";
    } else {
        let reverse = reverseString(myString.substring(1)) + myString.charAt(0)
        return reverse
    }
}

function isPalindrome(str) {
    
   const len = str.length;
 
   if (len <= 1) return true;
   if (str[0] !== str[len - 1]) return false; 
 
   return isPalindrome(str.slice(1, -1));
}

function addUpTo(arr, indx) {
    return indx ? arr[indx] + addUpTo(arr, --indx) : arr[indx];
}

function maxOf(arr) {
   
  let nums = arr.slice();

  if (nums.length == 1) { return nums[0]; }

  if (nums[0] < nums[1]) { nums.splice(0,1); }
  else { nums.splice(1,1); }

  return maxOf(nums);
}

function includesNumber(arr, value) {
    if (!arr.length) {
      return false;
    } else if (arr[0] === value) {
      return true;
    } else {
      return includesNumber(arr.slice(1), value);
    }
}

includesNumber([4, 15, 77, 99], 15)
maxOf([5, 44, 88, 285])
addUpTo([11, 12, 13], 2)
isPalindrome("racecar")
printString("pizza")
reverseString("cookie")
