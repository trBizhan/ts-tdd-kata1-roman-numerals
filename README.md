# TypeScript project with Tests

This repository can be used as a template for creating a TypeScript project using Jest for testing.

## Instructions

- Click the "Use this template" button

- Click "Create new repository"

- Give your repository a name and click "Create repository from template"

- Clone down your new repository to your computer

- Navigate to the directory on your command line

- Run `npm install` followed by `npm test` to run the tests

## Background information about Roman numeral and conversion

Roman numerals are written in additive and subtractive notation.
Additive notation means that the individual values in a Roman numeral
are added together to get the total value.
In the case of VIII you add up the values for V and three I's. V is 5 and I is 1, so 5+1+1+1 = 8.

Subtractive notation means that value of the Roman numeral is found
by taking the last character value and subtracting the value
of the character that comes just before it.
In the case of XC you subtract the value of X from the value of C.
X is 10 and C is 100, so 100-10 = 90.

The key guide is that pivotal roman values listed below are used
in conversion algorithm.

M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50,
XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,

## pseudocode plus algorithm guide

roman numerals pivotal numbers

M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1

convert a decimal number to roman number

roman numbers are just added, refer to additive notation

1 = I 2 = II 3 = III
number format change after III, the next pivotal number is V = 5 so to obtain 4 we
need to subtract 1 from 5. that is represented as 1 + next number after 4 ---> I + V  
hence IV = 4

lets take a look at 9:

next number is 10 which is X
10 - 1 = 9 so I + X = IX = 9

this algorithm is repeated around the pivotal entries.

converNumToRoman:

    loop pivotal numbers:
    	until the input number >=  key:value listed above
    	pick roman key to add to result as string
    	subtract the input by value of key (i.e. roman string)
    	continue with the loop

    completion of loop is the generated roman numeral

convertRomanToNum:

    loop pivotal numbers:
    	until the key entry in the pivotal object fits start of input roman number
    	take the value of selected key:value and start adding to the final result
    	remove the substring that matched from roman input, hence a new roman input
    	repeat loop until string length of updated roman number becomes 0

    completion of loop is the generated decimal form roman input.
