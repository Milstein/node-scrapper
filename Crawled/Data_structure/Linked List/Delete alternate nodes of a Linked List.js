Write a removeDuplicates() function which takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once. For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60. Algorithm:
Traverse the list from the head (or start) node. While traversing, compare each node with its next node. If data of next node is same as current node then delete the next node. Before we delete a node, we need to store next pointer of the node Implementation:
Functions other than removeDuplicates() are just to create a linked linked list and test removeDuplicates(). 
Time Complexity: O(n) where n is number of nodes in the given linked list.References:
cslibrary.stanford.edu/105/LinkedListProblems.pdfLike arrays, Linked List is a linear data structure.  Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers.Why Linked List?
Arrays can be used to store linear data of similar types, but arrays have following limitations.
1) The size of the arrays is fixed:  So we must know the upper limit on the number of elements in advance.  Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
2) Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to shifted. For example, in a system if we maintain a sorted list of IDs in an array id[].  id[] = [1000,  1010,  1050,  2000,  2040]. And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).
Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete 1010 in id[], everything after 1010 has to be moved.Advantages over arrays
1) Dynamic size
2) Ease of insertion/deletionDrawbacks:
1) Random access is not allowed.  We have to access elements sequentially starting from the first node.  So we cannot do binary search with linked lists.
2) Extra memory space for a pointer is required with each element of the list.Representation in C:
A linked list is represented by a pointer to the first node of the linked list.  The first node is called head.  If the linked list is empty, then value of head is NULL.
Each node in a list consists of at least two parts:
1) data
2) pointer to the next node
In C, we can represent a node using structures.  Below is an example of a linked list node with an integer data.First Simple Linked List in C Let us create a simple linked list with 3 nodes.Linked List Traversal
In the previous program, we have created a simple linked list with three nodes.  Let us traverse the created list and print the data of each node.  For traversal, let us write a general purpose function printList() that prints any given list.Output:
 1  2  3
You may like to try Practice MCQ Questions on Linked ListWe will soon be publishing more posts on Linked Lists.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.