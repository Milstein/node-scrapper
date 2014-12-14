Given a string, print all permutations of it in sorted order.  For example, if the input string is “ABC”, then output should be “ABC, ACB, BAC, BCA, CAB, CBA”.We have discussed a program to print all permutations in this post, but here we must print the permutations in increasing order.Following are the steps to print the permutations lexicographic-ally1. Sort the given string in non-decreasing order and print it. The first permutation is always the string sorted in non-decreasing order.2. Start generating next higher permutation. Do it until next higher permutation is not possible. If we reach a permutation where all characters are sorted in non-increasing order, then that permutation is the last permutation.Steps to generate the next higher permutation:
1. Take the previously printed permutation and find the rightmost character in it, which is smaller than its next character. Let us call this character as ‘first character’.2. Now find the ceiling of the ‘first character’. Ceiling is the smallest character on right of ‘first character’, which is greater than ‘first character’. Let us call the ceil character as ‘second character’.3. Swap the two characters found in above 2 steps.4. Sort the substring (in non-decreasing order) after the original index of ‘first character’.Let us consider the string “ABCDEF”. Let previously printed permutation be “DCFEBA”.  The next permutation in sorted order should be “DEABCF”.  Let us understand above steps to find next permutation. The ‘first character’ will be ‘C’. The ‘second character’ will be ‘E’.  After swapping these two, we get “DEFCBA”.  The final step is to sort the substring after the character original index of ‘first character’.  Finally, we get “DEABCF”.Following is C++ implementation of the algorithm.Output:

ABCD
ABDC
....
....
DCAB
DCBA

The upper bound on time complexity of the above program is O(n^2 x n!).  We can optimize step 4 of the above algorithm for finding next permutation.  Instead of sorting the subarray after the ‘first character’, we can reverse the subarray, because the subarray we get after swapping is always sorted in non-increasing order.  This optimization makes the time complexity as O(n x n!).  See following optimized code.The above programs print duplicate permutation when characters are repeated. We can avoid it by keeping track of the previous permutation. While printing, if the current permutation is same as previous permutation, we won’t print it.This article is compiled by Aashish Barnwal and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: MathematicalAlgo