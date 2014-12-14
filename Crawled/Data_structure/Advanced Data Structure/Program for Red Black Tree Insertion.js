We have discussed AVL insertion in the previous post. In this post, we will follow a similar approach for deletion.Steps to follow for deletion.
To make sure that the given tree remains AVL after every deletion, we must augment the standard BST delete operation to perform some re-balancing. Following are two basic operations that can be performed to re-balance a BST without violating the BST property (keys(left) < key(root) < keys(right)).
1) Left Rotation
2) Right RotationLet w be the node to be deleted
1) Perform standard BST delete for w.
2) Starting from w, travel up and find the first unbalanced node. Let z be the first unbalanced node, y be the larger height child of z, and x be the larger height child of y.  Note that the definitions of x and y are different from insertion here.
3) Re-balance the tree by performing appropriate rotations on the subtree rooted with z. There can be 4 possible cases that needs to be handled as x, y and z can be arranged in 4 ways. Following are the possible 4 arrangements:
a) y is left child of z and x is left child of y (Left Left Case)
b) y is left child of z and x is right child of y (Left Right Case)
c) y is right child of z and x is right child of y (Right Right Case)
d) y is right child of z and x is left child of y (Right Left Case)Like insertion, following are the operations to be performed in above mentioned 4 cases. Note that, unlike insertion, fixing the node z won’t fix the complete AVL tree. After fixing z, we may have to fix ancestors of z as well (See this video lecture for proof)a) Left Left Caseb) Left Right Casec) Right Right Cased) Right Left CaseUnlike insertion, in deletion, after we perform a rotation at z, we may have to perform a rotation at ancestors of z. Thus, we must continue to trace the path until we reach the root. C implementation
Following is the C implementation for AVL Tree Deletion.  The following C implementation uses the recursive BST delete as basis.  In the recursive BST delete, after deletion, we get pointers to all ancestors one by one in bottom up manner.  So we don’t need parent pointer to travel up.  The recursive code itself travels up and visits all the ancestors of the deleted node.
1) Perform the normal BST deletion.
2) The current node must be one of the ancestors of the deleted node.  Update the height of the current node.
3) Get the balance factor (left subtree height – right subtree height) of the current node.
4) If balance factor is greater than 1, then the current node is unbalanced and we are either in Left Left case or Left Right case. To check whether it is Left Left case or Left Right case, get the balance factor of left subtree. If balance factor of the left subtree is greater than or equal to 0, then it is Left Left case, else Left Right case.
5) If balance factor is less than -1, then the current node is unbalanced and we are either in Right Right case or Right Left case. To check whether it is Right Right case or Right Left case, get the balance factor of right subtree. If the balance factor of the right subtree is smaller than or equal to 0, then it is Right Right case, else Right Left case.Output:Time Complexity: The rotation operations (left and right rotate) take constant time as only few pointers are being changed there. Updating the height and getting the balance factor also take constant time. So the time complexity of AVL delete remains same as BST delete which is O(h) where h is height of the tree. Since AVL tree is balanced, the height is O(Logn). So time complexity of AVL delete is O(Logn).References:
IITD Video Lecture on AVL Tree Insertion and DeletionPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Advance Data Structures