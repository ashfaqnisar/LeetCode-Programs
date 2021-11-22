const sortAndMerge = (arr1, arr2) => {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length || j < arr2.length) {
        if (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                sortedArr.push(arr1[i]);
                i++;
            } else {
                sortedArr.push(arr2[j]);
                j++;
            }
        } else if (i < arr1.length) {
            sortedArr.push(arr1[i])
            i++
        } else {
            sortedArr.push(arr2[j])
            j++
        }
    }
    return sortedArr;
}

function findMedianSortedArrays(nums1, nums2) {
    const merged = sortAndMerge(nums1, nums2);

    const length = merged.length;
    if (length % 2 !== 0) {
        return merged[Math.floor(length / 2)];
    } else {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    }
}

//TestCases
console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 3], [2, 4]))
console.log(findMedianSortedArrays([0, 0], [0, 0]))
console.log(findMedianSortedArrays([], [1]))
console.log(findMedianSortedArrays([2], []))

