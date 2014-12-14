Difficulty Level: Rookie
Write a C function to insert a new value in a sorted Circular Linked List (CLL).  For example, if the input CLL is following. After insertion of 7, the above CLL should be changed to following
Algorithm:
Allocate memory for the newly inserted node and put data in the newly allocated node. Let the pointer to the new node be new_node. After memory allocation, following are the three cases that need to be handled.Output:
1 2 11 12 56 90Time Complexity: O(n) where n is the number of nodes in the given linked list.Case 2 of the above algorithm/code can be optimized.  Please see this comment from Pavan.   To implement the suggested change we need to modify the case 2 to following.Please write comments if you find the above code/algorithm incorrect, or find other ways to solve the same problem.