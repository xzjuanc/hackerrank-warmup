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