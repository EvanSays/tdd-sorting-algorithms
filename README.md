# tdd-sorting-algorithms

Includes project & test files for bubble, insertion, merge, and quick sort.

### Bubble Sort
Iterates through the array and swaps the pair if they are not in the correct order.

### Insertion Sort
The sorted array starts on the left at initiation. When the while loops starts, the element at the second index is pulled out and compared to the sorted array. If the element is less, it places it to the farthest left, if not, it is placed after the sorted element. This process is iterated through the whole array, until all elements where compared and placed in to their appropriate locations.

### Merge Sort
At initiation, the array is split into a left and right array by dividing it in half. The mergeSort does this until each element in the array, has been placed inside a left or right array, individually. During the merge, it compares the first left and the first right array and merges them in order. As this iterates, each first element is compared till the final array is in order.

# Quick Sort
A left and right empty array is declared, along with a current element (ce), wall element (we), and pivot (p).
The quick sort function divides the array by comparing elements with the pivot and swapping elements till the pivot is directly in the middle. At this point, everything to the left of the pivot is spliced into the left or right array. The pivot, we know is in the right place, now. The while loops keeps dividing the left and right arrays till all elements index equal the pivot or are singled out. At this point, the original array is put back together with the element in order.
