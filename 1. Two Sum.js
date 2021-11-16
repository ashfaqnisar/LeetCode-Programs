/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var temp = 0
    const result = new Map()
    for (let index in nums) {
        const value = target - nums[index]
        if (result.has(value)) {
            return [result.get(value), index]
        }
        result.set(nums[index], index)
    }
};
