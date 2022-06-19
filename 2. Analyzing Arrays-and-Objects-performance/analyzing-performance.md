# Objectives

- Understancd how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- compare and contrast the runtime for arrays and objects as well as built-in methods

## when to use objects

- when you don't need order
- wen you need fast access/ insertion and removal

## Big O of Objects

- Insertion == O(1)
- Removal == O(1)
- Searching == O(N)
- Access == O(1)

when you don't need any ordering, objects are an excellent choice.

## Big O of Objects Methods

- Object.keys == O(N)
- Object.values == O(N)
- Object.entries == O(N)
- hasOwnProperty == O(1)

## When to use arrays

- when you need order
- when you need fast access/insertion and removal(sort of...)

## Big O of Arrays

- Insertion == it depends
- Removal == it depends
- Searching == O(N)
- Access == O(1)

## Big O of Arrays Methods

- Push == O(1)
- Pop == O(1)
- Shift == O(N)
- Unshift == O(N)
- Concat == O(N)
- Slice == O(N)
- Splice == O(N)
- Sort == `O(N * log N)`
- forEach/map/filter/reduce/etc. == O(N)
