Given a set of points in the plane. the convex hull of the set is the smallest convex polygon that contains all the points of it.We strongly recommend to see the following post first.
How to check if two given line segments intersect?We have discussed Jarvis’s Algorithm for Convex Hull. Worst case time complexity of Jarvis’s Algorithm is O(n^2).  Using Graham’s scan algorithm, we can find Convex Hull in O(nLogn) time.  Following is Graham’s algorithm Let points[0..n-1] be the input array.1) Find the bottom-most point by comparing y coordinate of all points.  If there are two points with same y value, then the point with smaller x coordinate value is considered. Put the bottom-most point at first position. 2) Consider the remaining n-1 points and sort them by polor angle in counterclockwise order around points[0]. If polor angle of two points is same, then put the nearest point first.  3) Create an empty stack ‘S’ and push points[0], points[1] and points[2] to S.4) Process remaining n-3 points one by one. Do following for every point ‘points[i]’
        4.1) Keep removing points from stack while orientation of following 3 points is not counterclockwise (or they don’t make a left turn).
            a) Point next to top in stack
            b) Point at the top of stack
            c) points[i]
         4.2) Push points[i] to S5) Print contents of SThe above algorithm can be divided in two phases.Phase 1 (Sort points): We first find the bottom-most point. The idea is to pre-process points be sorting them with respect to the bottom-most point.  Once the points are sorted, they form a simple closed path (See following diagram).

What should be the sorting criteria? computation of actual angles would be inefficient since trigonometric functions are not simple to evaluate.  The idea is to use the orientation to compare angles without actually computing them (See the compare() function below)Phase 2 (Accept or Reject Points): Once we have the closed path, the next step is to traverse the path and remove concave points on this path. How to decide which point to remove and which to keep? Again, orientation helps here. The first two points in sorted array are always part of Convex Hull.  For remaining points, we keep track of recent three points, and find the angle formed by them.  Let the three points be prev(p), curr(c) and next(n).  If orientation of these points (considering them in same order) is not counterclockwise, we discard c, otherwise we keep it.  Following diagram shows step by step process of this phase (Source of these diagrams is Ref 2).
Following is C++ implementation of the above algorithm.Output:
(0, 3)
(4, 4)
(3, 1)
(0, 0) 
Time Complexity: Let n be the number of input points.  The algorithm takes O(nLogn) time if we use a O(nLogn) sorting algorithm.
The first step (finding the bottom-most point) takes O(n) time.  The second step (sorting points) takes O(nLogn) time.  In third step, every element is pushed and popped at most one time. So the third step to process points one by one takes O(n) time, assuming that the stack operations take O(1) time.  Overall complexity is O(n)  + O(nLogn) + O(n) which is O(nLogn)References:
Introduction to Algorithms 3rd Edition by Clifford Stein, Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest
http://www.dcs.gla.ac.uk/~pat/52233/slides/Hull1x1.pdf

Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: geometric algorithms, MathematicalAlgo