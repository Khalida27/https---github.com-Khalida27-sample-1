function isPalindrome(num) {
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
        return false;
    }
    
    let reversedNum = 0;
    let originalNum = num;

    while (num > 0) {
        reversedNum = (reversedNum * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    
    return originalNum === reversedNum;
}

var result = isPalindrome(12321);
console.log(result);

//aaaaaa