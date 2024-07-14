export const mergeSort = array => {
    if (array.length === 1) return array;
    const middle = Math.floor( array.length / 2);
    const halfOne = mergeSort(array.slice(0, middle));
    const halfTwo = mergeSort(array.slice(middle))
    const sortedArray = [] 

    let i = 0,
    j = 0 

    while (i < halfOne.length && j < halfTwo.length ) {
        if (halfOne[i] < halfTwo[j]) {
            sortedArray.push(halfOne[i++]);
        } else {
            sortedArray.push(halfTwo[j++]);
        }
    }
    while (i < halfOne.length) sortedArray.push(halfOne[i++]);
    while (j < halfTwo.length) sortedArray.push(halfTwo[j++])
    return sortedArray
};