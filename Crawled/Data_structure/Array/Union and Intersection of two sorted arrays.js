Question: Given an array of positive numbers, find the maximum sum of a subsequence with the constraint that no 2 numbers in the sequence should be adjacent in the array. So 3 2 7 10 should return 13 (sum of 3 and 10) or 3 2 5 10 7 should return 15 (sum of 3, 5 and 7).Answer the question in most efficient way. Algorithm:
Loop for all elements in arr[] and maintain two sums incl and excl where incl = Max sum including the previous element and excl = Max sum excluding the previous element.Max sum excluding the current element will be max(incl, excl) and max sum including the current element will be excl + current element (Note that only excl is considered because elements cannot be adjacent). At the end of the loop return max of incl and excl.Example:Thanks to Debanjan for providing code.Implementation:Time Complexity: O(n)Now try the same problem for array with negative numbers also.Please write comments if you find any bug in the above program/algorithm or other ways to solve the same problem. Tags: array