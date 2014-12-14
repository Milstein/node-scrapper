Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.  There are many different versions of quickSort that pick pivot in different ways.
1) Always pick first element as pivot.
2) Always pick last element as pivot (implemented below)
3) Pick a random element as pivot.
4) Pick median as pivot.The key process in quickSort is partition().  Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x.  All this should be done in linear time. Partition Algorithm
There can be many ways to do partition, following code adopts the method given in CLRS book. The logic is simple, we start from the leftmost element and keep track of index of smaller (or equal to) elements as i.  While traversing, if we find a smaller element, we swap current element with arr[i]. Otherwise we ignore current element.Implementation:
Following is C++ implementation of QuickSort. Output:
Sorted array:
1 5 7 8 9 10
Analysis of QuickSort
Time taken by QuickSort in general can be written as following.

 T(n) = T(k) + T(n-k-1) + (n)
The first two terms are for two recursive calls, the last term is for the partition process.  k is the number of elements which are smaller than pivot.
The time taken by QuickSort depends upon the input array and partition strategy. Following are three cases.Worst Case:  The worst case occurs when the partition process always picks greatest or smallest element as pivot. If we consider above partition strategy where last element is always picked as pivot, the worst case would occur when the array is already sorted in increasing or decreasing order.  Following is recurrence for worst case.

 T(n) = T(0) + T(n-1) + (n)
which is equivalent to  
 T(n) = T(n-1) + (n)

The solution of above recurrence is (n2).Best Case:  The best case occurs when the partition process always picks the middle element as pivot. Following is recurrence for best case.

 T(n) = 2T(n/2) + (n)
The solution of above recurrence is (nLogn). It can be solved using case 2 of Master Theorem.Average Case:
To do average case analysis, we need to consider all possible permutation of array and calculate time taken by every permutation which doesn’t look easy.
We can get an idea of average case by considering the case when partition puts O(n/9) elements in one set and O(9n/10) elements in other set. Following is recurrence for this case.

 T(n) = T(n/9) + T(9n/10) + (n)
Solution of above recurrence is also O(nLogn)Although the worst case time complexity of QuickSort is O(n2) which is more than many other sorting algorithms like Merge Sort and Heap Sort,  QuickSort is faster in practice, because its inner loop can be efficiently implemented on most architectures, and in most real-world data. QuickSort can be implemented in different ways by changing the choice of pivot, so that the worst case rarely occurs for a given type of data. However, merge sort is generally considered better when data is huge and stored in external storage.    References:
http://en.wikipedia.org/wiki/QuicksortPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.