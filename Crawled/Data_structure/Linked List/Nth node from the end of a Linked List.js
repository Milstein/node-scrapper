A simple solution is to traverse the linked list until you find the node you want to delete.  But this solution requires pointer to the head node which contradicts the problem statement.Fast solution is to copy the data from the next node to the node to be deleted  and delete the next node.  Something like following.Program:This solution doesn’t work if the node to be deleted is the last node of the list. To make this solution work we can mark the end node as a dummy node.  But the programs/functions that are using this function should also be modified.You can try this problem for doubly linked list.Tags: Linked Lists, loop