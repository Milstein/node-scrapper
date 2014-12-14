Given two binary strings that represent value of two integers, find the product of two strings. For example, if the first bit string is “1100” and second bit string is “1010”, output should be 120.For simplicity, let the length of two strings be same and be n.A Naive Approach is to follow the process we study in school. One by one take all bits of second number and multiply it with all bits of first number. Finally add all multiplications. This algorithm takes O(n^2) time.Using Divide and Conquer, we can multiply two integers in less time complexity. We divide the given numbers in two halves. Let the given numbers be X and Y.For simplicity let us assume that n is evenThe product XY can be written as following.If we take a look at the above formula, there are four multiplications of size n/2, so we basically divided the problem of size n into for sub-problems of size n/2. But that doesn’t help because solution of recurrence T(n) = 4T(n/2) + O(n) is O(n^2). The tricky part of this algorithm is to change the middle two terms to some other form so that only one extra multiplication would be sufficient. The following is tricky expression for middle two terms.So the final value of XY becomesWith above trick, the recurrence becomes T(n) = 3T(n/2) + O(n) and solution of this recurrence is O(n1.59).What if the lengths of input strings are different and are not even?  To handle the different length case, we append 0’s in the beginning. To handle odd length, we put floor(n/2) bits in left half and ceil(n/2) bits in right half. So the expression for XY changes to following.The above algorithm is called Karatsuba algorithm and it can be used for any base.Following is C++ implementation of above algorithm.Output:Time Complexity: Time complexity of the above solution is O(n1.59).Time complexity of multiplication can be further improved using another Divide and Conquer algorithm, fast Fourier transform. We will soon be discussing fast Fourier transform as a separate post.Exercise
The above program returns a long int value and will not work for big strings. Extend the above program to return a string instead of a long int value.References:
Wikipedia page for Karatsuba algorithm
Algorithms 1st Edition by Sanjoy Dasgupta, Christos Papadimitriou and Umesh Vazirani
http://courses.csail.mit.edu/6.006/spring11/exams/notes3-karatsuba
http://www.cc.gatech.edu/~ninamf/Algos11/lectures/lect0131.pdfPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Divide and Conquer