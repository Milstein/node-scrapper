Given a positive integer n, count the total number of set bits in binary representation of all numbers from 1 to n.  Examples:Source: Amazon Interview Question Method 1 (Simple)
A simple solution is to run a loop from 1 to n and sum the count of set bits in all numbers from 1 to n.Output:
Total set bit count is 6
Time Complexity: O(nLogn) 
Method 2 (Tricky) 
If the input number is of the form 2^b -1 e.g., 1,3,7,15.. etc, the number of set bits is b * 2^(b-1). This is because for all the numbers 0 to (2^b)-1, if you complement and flip the list you end up with the same list (half the bits are on, half off). If the number does not have all set bits, then some position m is the position of leftmost set bit. The number of set bits in that position is n – (1 << m) + 1. The remaining set bits are in two parts:1) The bits in the (m-1) positions down to the point where the leftmost bit becomes 0, and
2) The 2^(m-1) numbers below that point, which is the closed form above.An easy way to look at it is to consider the number 6:The leftmost set bit is in position 2 (positions are considered starting from 0). If we mask that off what remains is 2 (the “1 0″ in the right part of the last row.) So the number of bits in the 2nd position (the lower left box) is 3 (that is, 2 + 1). The set bits from 0-3 (the upper right box above) is 2*2^(2-1) = 4. The box in the lower right is the remaining bits we haven’t yet counted, and is the number of set bits for all the numbers up to 2 (the value of the last entry in the lower right box) which can be figured recursively.Time Complexity: O(Logn).  From the first look at the implementation, time complexity looks more. But if we take a closer look, statements inside while loop of getNextLeftmostBit() are executed for all 0 bits in n. And the number of times recursion is executed is less than or equal to set bits in n. In other words, if the control goes inside while loop of getNextLeftmostBit(), then it skips those many bits in recursion. Thanks to agatsu and IC for suggesting this solution.See this for another solution suggested by Piyush Kapoor.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Amazon