# WIT-Week3-ChallengeOne

#### Blog Post
A [blog post](https://medium.com/@salyn134/algorithms-and-data-structures-for-beginners-de12370688b2) sharing my understanding of algorithms and data structures assuming both technical and non-technical readers.

#### Build 
To use as starter code,
``` sh
$ git clone URL
```
Then install the dependencies;
```sh 
$ cd WIT-Week3-ChallengeOne 
$ yarn install 
```

#### Sorting 
The ```arraySort()``` function takes an array containing numbers and character strings and returns an object with property names evens, odds, and chars. The value for evens is an array of sorted even numbers and odds is an array of sorted odd numbers and chars is an array of sorted character strings.

```
For example:
arraySort([2,0,6,5,1,7,’z’,’a’])
# returns {'evens': [0, 2, 6], 'odds': [1, 5, 7], chars:['a', 'z]}
```
The ```getMissingNumbers()``` function finds missing numbers in an array.

```
For example:
getMissingNumbers([1, 2, 3, 5, 6, 7, 9])
# returns [4, 8]
```
