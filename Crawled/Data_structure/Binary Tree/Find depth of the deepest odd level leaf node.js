We have discussed level order traversal of a post in previous post. The idea is to print last level first, then second last level, and so on. Like Level order traversal, every level is printed from left to right.Example TreeReverse Level order traversal of the above tree is “4 5 2 3 1″.  Both methods for normal level order traversal can be easily modified to do reverse level order traversal.METHOD 1 (Recursive function to print a given level)
We can easily modify the method 1 of the normal level order traversal. In method 1, we have a method printGivenLevel() which prints a given level number. The only thing we need to change is, instead of calling printGivenLevel() from first level to last level, we call it from last level to first level.Output: 
Level Order traversal of binary tree is
4 5 2 3 1
Time Complexity: The worst case time complexity of this method is O(n^2). For a skewed tree, printGivenLevel() takes O(n) time where n is the number of nodes in the skewed tree. So time complexity of printLevelOrder() is O(n) + O(n-1) + O(n-2) + .. + O(1) which is O(n^2).
METHOD 2 (Using Queue and Stack)
The method 2 of normal level order traversal can also be easily modified to print level order traversal in reverse order. The idea is to use a stack to get the reverse level order. If we do normal level order traversal and instead of printing a node, push the node to a stack and then print contents of stack, we get  “5 4 3 2 1″ for above example tree, but output should be  “4 5 2 3 1″.  So to get the correct sequence (left to right at every level), we process children of a node in reverse order, we first push the right subtree to stack, then left subtree. Output:
Level Order traversal of binary tree is
4 5 6 7 2 3 1
Time Complexity: O(n) where n is number of nodes in the binary tree.Please write comments if you find any bug in the above programs/algorithms or other ways to solve the same problem.