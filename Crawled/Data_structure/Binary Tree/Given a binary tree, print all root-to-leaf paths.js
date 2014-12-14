Given a binary tree, write a function that returns true if the tree satisfies below property. For every node, data value must be equal to sum of data values in left and right children. Consider data value as 0 for NULL children. Below tree is an exampleAlgorithm:
Traverse the given binary tree. For each node check (recursively) if the node and both its children satisfy the Children Sum Property, if so then return true else return false.Implementation:Time Complexity:  O(n), we are doing a complete traversal  of the tree.As an exercise, extend the above question for an n-ary tree.This question was asked by Shekhar.Please write comments if you find any bug in the above algorithm or a better way to solve the same problem.