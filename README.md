# Parking Lot Project
## Description :
This is Solution of Take Home Test from DKatalis Company.

## Problem Statements :
### Problem no 1:
We has lowercase string in range ascii[‘a’..’z’]. We want to reduce the string to its shortest
length by doing a series of operations. In each operation we select a pair of adjacent lowercase
letters that match, and he deletes them. For instance, the string aab could be shortened to b in
one operation.
The Function is to delete as many characters as possible using this method and print the
resulting string. If the final string is empty, print Empty String

**Sample Input**

``bash
aaabccddd
``

**Sample Output**

``bash
abd
``

### Problem no 2:
Somya has task to calculate the average monthly salaries in the EMPLOYEES table, but didn’t
realize her keyboard's key was broken until completing the calculation. She need help finding the
difference between her miscalculation (using salaries with any zeroes removed), and the actual
average salary.
Write a query calculating the differentiate amount of error, and round it up to the next integer.

**Sample Input**

| ID | Name   | Salary |
|----|--------|--------|
| 1  | Gavin  | 1420   |
| 2  | Norie  | 2006   |
| 3  | Somya  | 2210   |
| 4  | Waiman | 3000   |

**Sample Output**

``bash
2061
``

### Problem no 3:
Write simple login logout with below constraint:
- pure reactjs without any other third party external state management (redux/mobx)
- Create with bootstrap 4 and maintain mobile view
- Hardcode the login to support@joinprint.com.hk, password: support@joinprint.com.hk
other than that shouldn’t not able to login
- Logged in user go to Dashboard, with text welcoming the user email
- Logged in user should not be able to see the login page,
- Non-login user should not able to see dashboard
- Make sure can compile/build into standalone assets