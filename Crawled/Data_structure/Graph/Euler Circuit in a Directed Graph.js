Given a Directed Graph and two vertices in it, check whether there is a path from the first given vertex to second.  For example, in the following graph, there is a path from vertex 1 to 3. As another example, there is no path from 3 to 0.We can either use Breadth First Search (BFS) or Depth First Search (DFS) to find path between two vertices. Take the first vertex as source in BFS (or DFS), follow the standard BFS (or DFS). If we see the second vertex in our traversal, then return true.  Else return false.Following is C++ code that uses BFS for finding reachability of second vertex from first vertex.Output:As an exercise, try an extended version of the problem where the complete path between two vertices is also needed.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Graph