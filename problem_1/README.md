### This is Solution of Problem no. 1 of Joint Print Company's Code Test

## Problem Statements :

We has lowercase string in range ascii[‘a’..’z’]. We want to reduce the string to its shortest
length by doing a series of operations. In each operation we select a pair of adjacent lowercase
letters that match, and he deletes them. For instance, the string aab could be shortened to b in
one operation.
The Function is to delete as many characters as possible using this method and print the
resulting string. If the final string is empty, print Empty String.

## Plain Solution:
Solution for this problem is just like this:

```javascript
    // init result
    let result = [];

    // convert string to array
    const strings = input.split("");

    for (let i = 0; i < strings.length; i++) {

        // pick a char from strings with index of i
        let char = strings[i];

        if (result.length > 0) {

            // remove char from result when doubled
            if (result[result.length - 1] === char) result.pop();

            // add char to result when not doubled
            else result.push(char);

        } else {
            // add char to result when empty
            result.push(char);
        }
    }

    // return this when empty string
    if (result.length === 0) {
        return "Empty String";
    }

    // join strings
    return result.join("");
```

## Explanation:
There are 8 steps to solve this problem:
- First of all, initialize the result variable with type of Array Object
- Then, convert the input string to Array before we run the looping
- At the beginning process of i-th loop, pick a character from that strings array with index i
- If result is empty, just push that character to result
- If result is not empty, check its element whether it same with character we picked, if yes then pop out from the result
- If no then just push that character to result
- then after finish looping process, check length of result, if zero then return Empty String.
- If not, join result to become string then return it

## Want to have fun?
If you want to try my program for this solution, just follow these instructions:

### Setup
First of all, you have to clone this repo and open ```problem_1``` folder, then run this command:
```bash
npm install
```

### Usage
Command this ```node .```, then enter the input string you want.

![Input string](https://github.com/arjunsumarlan/jointprinttest/blob/master/problem_1/screenshot_prob11.png?raw=true)

**result**

Then the result will come with output and processing time.

![Show result](https://github.com/arjunsumarlan/jointprinttest/blob/master/problem_1/screenshot_prob12.png?raw=true)