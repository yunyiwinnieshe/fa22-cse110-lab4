## A little more of a challenge ##
1. 3 will be produced by line 12 i is declared as a var variable, and we can access i in any scope
2. 150 will be produced by line 13 because it will output the discounted price for the original price 300. Because the for loop, the variable discountedPrice has been updating, therefore, we would only get the discountedPrice for the last element of the discounted array. Also, because discountedPrice is declared as a var variable, we can have access to it anywhere in the function. 
3. 150 should be expected from line 14 because it should print the rounded discounted price of the last element from the original prices array. Since the discounted price is 150, then there is no rounding happening so we should still get 150 from the finalPrice. Also, because finalPrice is declared as a var variable, we can have access to it anywhere in the function. 
4. we should expect line 16 to return an array that contains [50, 100, 150], which represents the discounted price of the original prices array. Also, because discounted is declared as a var variable, we can have access to it anywhere in the function. 
5. error should be produced because i at line 12 is not declared in the block, in fact, i is in the block of the for loop. 
6. error should be produced because discountedPrice is not declared in the current block. Instead, it is inside the for loop block, therefore, we would receive error when we run discountedPrice outside of the block. 
7. we should get 15 from line 14. Since finalPrice is declared in the same block as line 14, therefore, finalPrice is reachable. 
8. we should expect line 16 to return an array that contains [50, 100, 150], which represents the discounted price of the original prices array. Also, because discounted is declared as a var variable, we can have access to it anywhere in the function. 
9. It would give us error because i is a let variable, therefore it can not have access outside of the block, here is the for loop block. Because line 11 is outside of the for loop block, we cannot have access to i. 
10. we should get 3 from line 12 because we know that the length of the array prices is 3, and it has not been changed. 
11. The function will return an array with [50, 100, 150], which represents the discounted prices for the original prices array. 
12. a. student.name, b. student["Grad Year"], c. studnet.greeting, d.student["Favorite Teacher"].name, e. student["courseLoad"][0]
13. 
    1.  32 because '3' is converted into a number, and concatenate with 2
    2.  1 because '3' is converted into a number, and 3-2 = 1
    3.  3 becasue null equals to the number 0
    4.  3null because 3 is a string and it concatenate with null as a string. 
    5.  4 becasue true is 1, 1 +3 =4
    6.  3 because false is 0, 0+3=3
    7.  3undefined because undefined is NaN as a number it is not 0, and it concatenate with 3
    8.  NaN because 3 - NaN would be Nan
14. 
    1.  True because '2' converts to 2, and 2>1 is true
    2.  false because dictionary comparision, first char '2' is greater than '1' so output should be false
    3. true because '2' converts to 2, and 2 equals to 2 so output true
    4.  false because strict equality is strict. Different types from both sides lead to false.  
    5.  false because true equals to 1, and 1 does not equals to 2
    6.  True because Boolean(2) equals to true, and it is the same type as true so output true
15. The == operation does the type conversion of the operands before comparison. The === operation makes sure the values to have the same data types and as well as comparing the values. 
16. N/A
17. The modifyArray function has two parameters, the array as [1,2,3], and the callback is the function doSomething. At line 2, we created an empty array. We then iterate the array [1,2,3], and then inside the for loop, each iteration we would use the callback function to call the doSomething function with the inputs [1,2,3], and the result would be pushed into the newArr array. We can see that the doSomething function multiply a number by 2, this means that the output of modifyArray([1,2,3], doSomething) should be [2,4,6] where it multiply all the number inside the array. 
18. N/A
19. The out put should be 1, 4, 3, 2