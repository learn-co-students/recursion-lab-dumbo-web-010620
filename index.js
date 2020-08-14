function printString(myString){
    console.log(myString[0]);
   
    if(myString.length > 1){
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(myString){
    if(myString.length < 2){
        return myString;
    } else {
        return reverseString(myString.substring(1)) + myString[0];
    }
}

function isPalindrome(myString){
    let l = myString.length
    return myString == myString.split('').reverse().join('');
}