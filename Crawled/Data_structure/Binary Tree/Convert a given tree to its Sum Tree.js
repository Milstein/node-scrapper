Write a program that converts a given tree to its Double tree. To create Double tree of the given tree, create a new duplicate for each node, and insert the duplicate as the left child of the original node. So the tree…is changed to…And the treeis changed toAlgorithm:
Recursively convert the tree to double tree in postorder fashion. For each node, first convert the left subtree of the node, then right subtree, finally create a duplicate node of the node and fix the left child of the node and left child of left child.Implementation:Time Complexity: O(n) where n is the number of nodes in the tree.References:
http://cslibrary.stanford.edu/110/BinaryTrees.htmlPlease write comments if you find any bug in above code/algorithm, or find other ways to solve the same problem.