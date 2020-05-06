### This is Solution of Problem no. 2 of Joint Print Company's Code Test

## Problem Statements :

Somya has task to calculate the average monthly salaries in the EMPLOYEES table, but didn’t
realize her keyboard's key was broken until completing the calculation. She need help finding the
difference between her miscalculation (using salaries with any zeroes removed), and the actual
average salary.
Write a query calculating the differentiate amount of error, and round it up to the next integer.

## Plain Solution:
Solution for this problem is just run this simple query (ex. MySQL):

```bash
SELECT CEIL((AVG(salary)) - (AVG(REPLACE(salary, '0', '')))) AS avg_salary FROM employee;
```

## Explanation:
There are three points I have to explain, there are:
- **CEIL**: it is used for get next rounded integer for error value
- **AVG**: it is used for calculating average of salary
- **REPLACE**: it is used for remove 0 in salary

## Want to have fun?
If you want to try my program for this solution, just follow these instructions:

### Setup
First of all, you have to clone this repo and open ```problem_2``` folder, then run this command:
```bash
npm install
```

Then, make sure you have a mysql database with table employee which contains these fields

| **Column** | **Type**   |
|------------|------------|
| ID         | Integer    |
| Name       | String     |
| Salary     | Integer    |

For the last, create ``.env`` file in ``problem_2`` folder which contains:
```
Password=****
```

**** is mysql password in your local

### Usage
Command this ```node .```, then choose what you want to do at console.

![Choose options](https://github.com/arjunsumarlan/jointprinttest/blob/master/problem_2/screenshot_prob21.png?raw=true)

**show existing table**

If you want to show existing table, then just select ``Show Table`` then press Enter key.
It will show this table.

![Show table image](https://github.com/arjunsumarlan/jointprinttest/blob/master/problem_2/screenshot_prob22.png?raw=true)

**insert new employee**

If you want to insert new employee, then just select ``Insert new Employee`` then press Enter key.
It will ask you about name and salary of new employee. Then will show again new table with new employee included.

![Insert new employee image](https://github.com/arjunsumarlan/jointprinttest/blob/master/problem_2/screenshot_prob23.png?raw=true)

**calculate average**

If you want to calculate average of misscalculated diff, then just select ``Calculate Average`` then press Enter key. It will show you average of misscalculated salary in *avg_salary*

![Calculate average image](https://github.com/arjunsumarlan/jointprinttest/blob/master/problem_2/screenshot_prob24.png?raw=true)