function isPalindrome(str) {
    return str === [...str].reverse().join("")
}

const longestPalindromeString = (string) => {
    if (string.length === 1 || isPalindrome(string)) return string

    let sample = "", temp = ""
    for (let i = 0; i < string.length; i++) {
        sample += string[i]
        if (isPalindrome(sample) && sample.length >= temp.length) {
            temp = sample
        } else if (isPalindrome(temp + string[i])) {
            temp += string[i]
        } else if (temp.length <= string[i].length) {
            temp = string[i]
        }
        console.log(sample, temp)
    }
    return temp.length === 1 ? string[0] : temp

    // if (isPalindrome(sample) {
    //     temp = string[i]
    // } else if (isPalindrome(temp + string[i])) {
    //     temp += string[i]
    // } else if(temp.length <= string[i].length) {
    //     temp = string[i]
    // }

    // console.log(sample, temp)
}

const test = str => {
    if (str === "") return ""
    if (str.length === 1) return str[0]
    let temp = ""
    for (let i = 0; i < str.length; i++) {
        if (i !== str.lastIndexOf(str[i])) {
            console.log(str)
            let subString = str.substring(i + 1, str.lastIndexOf(str[i]))
            console.log(`${str[i]},${subString},${str[i]} - ${subString.length + 1}`)
            if (isPalindrome(subString) && temp.length < subString.length + 1) {
                temp = str[i] + subString + str[i]
            }
        }

        // console.log(`char: ${str[i]} -> ${i} - ${str.lastIndexOf(str[i])}, middle: ${str.substring(i + 1, str.lastIndexOf(str[i]))}`)
        console.log(`temp:  ${temp === "" ? `""` : temp}`)
        console.log("******************")
    }
    return temp !== "" ? temp : str[0]
}

//  ashaffaq - affa
//  babad - bab
//  bababcd - babab
//  a - a
//  ac - a
//  cbbd - bb
// console.log("Result: ", test("caba"))
// console.log("Result: ", test("abcbabcbabcb"))
// console.log("Result: ", test("ashaffaq"))
// console.log("Result: ", test("babad"))
// console.log("Result: ", test("cbbdacca"))
// console.log("Result: ", test(""))
// console.log("Result: ", test("ac"))
// console.log("Result: ", test("ac"))
// console.log("Result: ", test("badar"))
console.log("Result: ", test("aacabdkacaa"))
