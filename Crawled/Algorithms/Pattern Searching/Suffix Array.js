Given a Binary Tree, find size of the Largest Independent Set(LIS) in it. A subset of all tree nodes is an independent set if there is no edge between any two nodes of the subset.
For example, consider the following binary tree.  The largest independent set(LIS) is {10, 40, 60, 70, 80} and size of the LIS is 5.A Dynamic Programming solution solves a given problem using solutions of subproblems in bottom up manner.  Can the given problem be solved using solutions to subproblems? If yes, then what are the subproblems?  Can we find largest independent set size (LISS) for a node X if we know LISS for all descendants of X? If a node is considered as part of LIS, then its children cannot be part of LIS, but its grandchildren can be. Following is optimal substructure property.1) Optimal Substructure:
Let LISS(X) indicates size of largest independent set of a tree with root X.

     LISS(X) = MAX { (1 + sum of LISS for all grandchildren of X),
                     (sum of LISS for all children of X) }

The idea is simple, there are two possibilities for every node X, either X is a member of the set or not a member. If X is a member, then the value of LISS(X) is 1 plus LISS of all grandchildren.  If X is not a member, then the value is sum of LISS of all children.2) Overlapping Subproblems
Following is recursive implementation that simply follows the recursive structure mentioned above.Output:
Size of the Largest Independent Set is 5
Time complexity of the above naive recursive approach is exponential. It should be noted that the above function computes the same subproblems again and again. For example, LISS of node with value 50 is evaluated for node with values 10 and 20 as 50 is grandchild of 10 and child of 20.
Since same suproblems are called again, this problem has Overlapping Subprolems property. So LISS problem has both properties (see this and this) of a dynamic programming problem. Like other typical Dynamic Programming(DP) problems, recomputations of same subproblems can be avoided by storing the solutions to subproblems and solving problems in bottom up manner.Following is C implementation of Dynamic Programming based solution. In the following solution, an additional field ‘liss’ is added to tree nodes.  The initial value of ‘liss’ is set as 0 for all nodes.  The recursive function LISS() calculates ‘liss’ for a node only if it is not already set.Output
Size of the Largest Independent Set is 5
Time Complexity: O(n) where n is the number of nodes in given Binary tree. Following extensions to above solution can be tried as an exercise.
1) Extend the above solution for n-ary tree. 2) The above solution modifies the given tree structure by adding an additional field ‘liss’ to tree nodes.  Extend the solution so that it doesn’t modify the tree structure.3) The above solution only returns size of LIS, it doesn’t print elements of LIS.  Extend the solution to print all nodes that are part of LIS.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Dynamic Programming