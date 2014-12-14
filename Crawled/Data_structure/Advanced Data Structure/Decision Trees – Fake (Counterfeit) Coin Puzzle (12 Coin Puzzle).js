We have introduced segment tree with a simple example in the previous post.  In this post, Range Minimum Query problem is discussed as another example where Segment Tree  can be used. Following is problem statement.We have an array arr[0 . . . n-1]. We should be able to efficiently find the minimum value from index qs (query start) to qe (query end) where 0 . The array is static (elements are not deleted and inserted during the series of queries).A simple solution is to run a loop from qs to qe  and find minimum element in given range.  This solution takes O(n) time in worst case. Another solution is to create a 2D array where an entry [i, j] stores the minimum value in range arr[i..j].  Minimum of a given range can now be calculated in O(1) time, but preprocessing takes O(n^2) time. Also, this approach needs O(n^2) extra space which may become huge for large input arrays.Segment tree  can be used to do preprocessing and query in moderate time.  With segment tree, preprocessing time is O(n) and time to for range minimum query is O(Logn). The extra space required is O(n) to store the segment tree.Representation of Segment trees
1. Leaf Nodes are the elements of the input array.
2. Each internal node represents minimum of all leaves under it.An array representation of tree is used to represent Segment Trees. For each node at index i, the left child is at index 2*i+1, right child at 2*i+2 and the parent is at .Construction of Segment Tree from given array
We start with a segment arr[0 . . . n-1]. and every time we divide the current segment into two halves(if it has not yet become a segment of length 1), and then call the same procedure on both halves, and for each such segment, we store the minimum value in a segment tree node.
All levels of the constructed segment tree will be completely filled except the last level. Also, the tree will be a Full Binary Tree because we always divide segments in two halves at every level. Since the constructed tree is always full binary tree with n leaves, there will be n-1 internal nodes. So total number of nodes will be 2*n – 1.
Height of the segment tree will be .  Since the tree is represented using array and relation between parent and child indexes must be maintained, size of memory allocated for segment tree will be .Query for minimum value of given range
Once the tree is constructed, how to do range minimum query using the constructed segment tree.  Following is algorithm to get the minimum.Implementation:Output:
 
Minimum of values in range [1, 5] is = 2
Time Complexity:
Time Complexity for tree construction is O(n).  There are total 2n-1 nodes, and value of every node is calculated only once in tree construction.Time complexity to query is O(Logn).  To query a range minimum, we process at most two nodes at every level and number of levels is O(Logn).  Please refer following links for more solutions to range minimum query problem.
http://community.topcoder.com/tc?module=Static&d1=tutorials&d2=lowestCommonAncestor#Range_Minimum_Query_(RMQ)
http://wcipeg.com/wiki/Range_minimum_queryPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Advance Data Structures, Advanced Data Structures