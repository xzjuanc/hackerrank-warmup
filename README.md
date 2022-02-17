# hackerrank-warmup
coding practice

# Sales by Match
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example

**n=7**
**ar=[1,2,1,2,1,3,2]**

There is one pair of color **1**  and one of color **2** . There are three odd socks left, one of each color. The number of pairs is **2** .

**Function Description**

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

* int n: the number of socks in the pile
* int ar[n]: the colors of each sock

**Returns**

* int: the number of pairs

**Input Format**

The first line contains an integer **n**, the number of socks represented in **ar**.
The second line contains  **n** space-separated integers, **ar[i]**, the colors of the socks in the pile.

**Constraints**

* **1 <= n <= 100**
* **1 <= ar[i] <= 100 where 0 <= i < n**

**Sample input**
n=9, arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

**Sample output**
3

**Explanation**

There are three pairs of socks.

![alt text](https://s3.amazonaws.com/hr-challenge-images/25168/1474122392-c7b9097430-sock.png) 

# Jumping on the clouds

There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus **1** or **2** . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered **0** if they are safe or **2** if they must be avoided.

**Example**

Index the array from **0...6**. The number on each cloud is its index in the list so the player must avoid the clouds at indices **1** and **5**. They could follow these two paths: **0->2->4->6** or **0->2->3->4->6**. The first path takes **3** jumps while the second takes **4**. Return **3**.

**Function Description**

Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):

* int c[n]: an array of binary integers

**Returns**

* int: the minimum number of jumps required

**Input Format**

The first line contains an integer **n**, the total number of clouds. The second line contains **n** space-separated binary integers describing clouds **c[i]** where **0<=i<n**.

**Constraints**

* 2<=n<=100
* c[i] ∈ {0,1}
* c[0] = c[n-1] = 0

**Output Format**

Print the minimum number of jumps needed to win the game.

**Sample Input 0**

7
0 0 1 0 0 1 0

**Sample Output 0**

4

**Explanation 0:**
The player must avoid **c[2]** and **c[5]** . The game can be won with a minimum of **4** jumps:

![alt text](https://s3.amazonaws.com/hr-challenge-images/20832/1461134731-c258160d15-jump2.png)  

**Sample Input 1**

6
0 0 0 0 1 0

**Sample Output 1**

3

**Explanation 1:**
The only thundercloud to avoid is **c[4]**. The game can be won in **3** jumps:

![alt text](https://s3.amazonaws.com/hr-challenge-images/20832/1461136358-764298d363-jump5.png) 

# Repeated String

There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

**Example**

**s = 'abcac'**

**n=10**

The substring we consider is **abcacabcac**, the first **10** characters of the infinite string. There are  **4** occurrences of a in the substring.

**Function Description**

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider

**Returns**

int: the frequency of a in the substring

**Input Format**

The first line contains a single string, **s** .
The second line contains an integer, **n**.

**Constraints**

* 1<= |s| <=100
* 1 <= n <= 10^12
* For **25%** of the test cases, **n<= 10^6**.

**Sample Input**

**Sample Input 0**

aba
10

**Sample Output 0**

7

**Explanation 0**

The first **n=10**  letters of the infinite string are abaabaabaa. Because there are **7** a's, we return **7**.

**Sample Input 1**

a
1000000000000

**Sample Output 1**

1000000000000

**Explanation 1**
Because all of the first **n=1000000000000** letters of the infinite string are a, we return **1000000000000**.

# Counting Valleys
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly **steps** steps, for every step it was noted if it was an uphill, **U**, or a downhill, **D** step. Hikes always start and end at sea level, and each step up or down represents a **1** unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

**Example**

**steps= 8path=[DDUUUUDD]**

The hiker first enters a valley  **2** units deep. Then they climb out and up onto a mountain  **2** units high. Finally, the hiker returns to sea level and ends the hike.

**Function Description**

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

* int steps: the number of steps on the hike
* string path: a string describing the path

**Returns**

* int: the number of valleys traversed

**Input Format**

The first line contains an integer **steps**, the number of steps in the hike.
The second line contains a single string **path** , of **steps** characters that describe the path.

**Constraints**
* 2<= steps <= 10^6
* path[i] ∈ {UD}

**Sample Input**

8
UDDDUDUU

**Sample Output**

1

**Explanation**

If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

_/\      _
   \    /
    \/\/
The hiker enters and leaves one valley.

# Disk Space Analysis
A company is performing an analysis on the computers at its main office. The computers are spaced
along a single row. For each group of contiguous computers of a certain length, that is, for each
segment, determine the minimum amount of disk space available on a computer.

Return the maximum of thesse values as your answer.

**Example**
n=4, the number of computers 
space = [8,2,4,6]
x = 2, the segment length

The free disk space of computers in each of the segments is [8,2],[2,4],[4,6]. The minimum of 
the three segments are [2,2,4]. The maximum of these is 4.

# Arrays: Left Rotation

A left rotation operation on an array shifts each of the array's elements **1** unit to the left. For example, if **2** left rotations are performed on array **[1,2,3,4,5]**, then the array would become **[3,4,5,1,2]**. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array **a** of **n** integers and a number, **d**, perform **d** left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

**Function Description**

Complete the function rotLeft in the editor below.

rotLeft has the following parameter(s):

* int a[n]: the array to rotate
* int d: the number of rotations

**Returns**

* int a'[n]: the rotated array

**Input Format**

The first line contains two space-separated integers **n** and **d**, the size of **a** and the number of left rotations.
The second line contains **n** space-separated integers, each an **a[i]**.

**Constraints**
* 1<= n <= 10^5
* 1<= d <= n
* 1<= a[i] <= 10^6

**Sample Input**

5 4
1 2 3 4 5

**Sample Output**

5 1 2 3 4

**Explanation**

When we perform  **d=4** left rotations, the array undergoes the following sequence of changes:
**[1,2,3,4,5]** -> **[2,3,4,5,1]** -> **[3,4,5,1,2]** -> **[4,5,1,2,3]** -> **[5,1,2,3,4]**





**Find Digits**
An integer  is a divisor of an integer  if the remainder of .

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Example

Check whether ,  and  are divisors of . All 3 numbers divide evenly into  so return .


Check whether , , and  are divisors of . All 3 numbers divide evenly into  so return .


Check whether  and  are divisors of .  is, but  is not. Return .

Function Description

Complete the findDigits function in the editor below.

findDigits has the following parameter(s):

int n: the value to analyze
Returns

int: the number of digits in  that are divisors of 
Input Format

The first line is an integer, , the number of test cases.
The  subsequent lines each contain an integer, .

Constraints



Sample Input

2
12
1012
Sample Output

2
3
Explanation

The number  is broken into two digits,  and . When  is divided by either of those two digits, the remainder is  so they are both divisors.

The number  is broken into four digits, , , , and .  is evenly divisible by its digits , , and , but it is not divisible by  as division by zero is undefined.


**Minimum Distances**
The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return .

Example

There are two matching pairs of values:  and . The indices of the 's are  and , so their distance is . The indices of the 's are  and , so their distance is . The minimum distance is .

Function Description

Complete the minimumDistances function in the editor below.

minimumDistances has the following parameter(s):

int a[n]: an array of integers
Returns

int: the minimum distance found or  if there are no matching elements
Input Format

The first line contains an integer , the size of array .
The second line contains  space-separated integers .

Constraints

Output Format

Print a single integer denoting the minimum  in . If no such value exists, print .

Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
7 1 3 4 1 7     arr = [7, 1, 3, 4, 1, 7]
Sample Output

3
Explanation
There are two pairs to consider:

 and  are both , so .
 and  are both , so .
The answer is .

**Nimble Game**
Two people are playing Nimble! The rules of the game are:

The game is played on a line of  squares, indexed from  to . Each square  (where ) contains  coins. For example:
nimble.png
The players move in alternating turns. During each move, the current player must remove exactly  coin from square  and move it to square  if and only if .
The game ends when all coins are in square  and nobody can make a move. The first player to have no available move loses the game.
Given the value of  and the number of coins in each square, determine whether the person who wins the game is the first or second person to move. Assume both players move optimally.

Input Format

The first line contains an integer, , denoting the number of test cases.
Each of the  subsequent lines defines a test case. Each test case is described over the following two lines:

An integer, , denoting the number of squares.
 space-separated integers, , where each  describes the number of coins at square .
Constraints

Output Format

For each test case, print the name of the winner on a new line (i.e., either  or ).

Sample Input

2
5
0 2 3 0 6
4
0 0 0 0
Sample Output

First
Second
Explanation

Explanation for  testcase:
The first player will shift one coin from  to . Hence, the second player is left with the squares . Now whatever be his/her move is, the first player can always nullify the change by shifting a coin to the same square where he/she shifted it. Hence the last move is always played by the first player, so he wins.

Exlanation for  testcase:
There are no coins in any of the squares so the first player cannot make any move, hence second player wins.