Continuing further on dynamic programming series, edit distance is an interesting algorithm.Problem: Given two strings of size m, n and set of operations replace (R), insert (I) and delete (D) all at equal cost. Find minimum number of edits (operations) required to convert one string into another.Identifying Recursive Methods: What will be sub-problem in this case? Consider finding edit distance of part of the strings, say small prefix. Let us denote them as [1…i] and [1…j] for some 1< i < m and 1 < j < n. Clearly it is solving smaller instance of final problem, denote it as E(i, j). Our goal is finding E(m, n) and minimizing the cost.In the prefix, we can right align the strings in three ways (i, -), (-, j) and (i, j). The hyphen symbol (-) representing no character. An example can make it more clear.Given strings SUNDAY and SATURDAY. We want to convert SUNDAY into SATURDAY with minimum edits. Let us pick i = 2 and j = 4 i.e. prefix strings are SUN and SATU respectively (assume the strings indices start at 1). The right most characters can be aligned in three different ways.Case 1: Align characters U and U. They are equal, no edit is required. We still left with the problem of i = 1 and j = 3, E(i-1, j-1).Case 2: Align right character from first string and no character from second string. We need a deletion (D) here. We still left with problem of i = 1 and j = 4, E(i-1, j).Case 3: Align right character from second string and no character from first string. We need an insertion (I) here. We still left with problem of i = 2 and j = 3, E(i, j-1).Combining all the subproblems minimum cost of aligning prefix strings ending at i and j given byE(i, j) = min( [E(i-1, j) + D], [E(i, j-1) + I],  [E(i-1, j-1) + R if i,j characters are not same] )We still not yet done. What will be base case(s)?When both of the strings are of size 0, the cost is 0. When only one of the string is zero, we need edit operations as that of non-zero length string. Mathematically,E(0, 0) = 0, E(i, 0) = i, E(0, j) = jNow it is easy to complete recursive method. Go through the code for recursive algorithm (edit_distance_recursive).Dynamic Programming Method:We can calculate the complexity of recursive expression fairly easily.T(m, n) = T(m-1, n-1) + T(m, n-1) + T(m-1, n) + CThe complexity of T(m, n) can be calculated by successive substitution method or solving homogeneous equation of two variables. It will result in an exponential complexity algorithm. It is evident from the recursion tree that it will be solving subproblems again and again. Few strings result in many overlapping subproblems (try the below program with strings exponential and polynomial and note the delay in recursive method).We can tabulate the repeating subproblems and look them up when required next time (bottom up). A two dimensional array formed by the strings can keep track of the minimum cost till the current character comparison. The visualization code will help in understanding the construction of matrix.The time complexity of dynamic programming method is O(mn) as we need to construct the table fully. The space complexity is also O(mn). If we need only the cost of edit, we just need O(min(m, n)) space as it is required only to keep track of the current row and previous row.Usually the costs D, I and R are not same. In such case the problem can be represented as an acyclic directed graph (DAG) with weights on each edge, and finding shortest path gives edit distance.Applications:There are many practical applications of edit distance algorithm, refer Lucene API for sample. Another example, display all the words in a dictionary that are near proximity to a given word\incorrectly spelled word.— Venki. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Dynamic Programming