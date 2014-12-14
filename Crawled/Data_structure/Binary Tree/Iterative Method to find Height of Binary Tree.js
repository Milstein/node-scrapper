A complete binary tree is a binary tree where each level ‘l’ except the last has 2^l nodes and the nodes at the last level are all left aligned.  Complete binary trees are mainly used in heap based data structures.
The nodes in the complete binary tree are inserted from left to right in one level at a time. If a level is full, the node is inserted in a new level.Below are some of the complete binary trees.Below binary trees are not complete:Complete binary trees are generally represented using arrays. The array representation is better because it doesn’t contain any empty slot. Given parent index i, its left child is given by 2 * i + 1 and its right child is given by 2 * i + 2.  So no extra space is wasted and space to store left and right pointers is saved.  However, it may be an interesting programming question to created a Complete Binary Tree using linked representation. Here Linked mean a non-array representation where left and right pointers(or references) are used to refer left and right children respectively. How to write an insert function that always adds a new node in the last level and at the leftmost available position?
To create a linked complete binary tree, we need to keep track of the nodes in a level order fashion such that the next node to be inserted lies in the leftmost position. A queue data structure can be used to keep track of the inserted nodes. Following are steps to insert a new node in Complete Binary Tree.
1. If the tree is empty, initialize the root with new node.2. Else, get the front node of the queue.
…….If the left child of this front node doesn’t exist, set the left child as the new node.
…….else if the right child of this front node doesn’t exist, set the right child as the new node.3. If the front node has both the left child and right child, Dequeue() it.4. Enqueue() the new node.Below is the implementation:Output:
1 2 3 4 5 6 7 8 9 10 11 12
This article is compiled by Aashish Barnwal and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Complete Binary Tree