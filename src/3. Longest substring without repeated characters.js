var lengthOfLongestSubstring = function (str) {
    let count = 0, temp = ""
    //  If string is empty then return zero.
    if (str === "") {
        return count
    }
    for (let i = 0; i < str.length; i++) {
        //  Check whether the character is present in the temp or not
        if (temp.includes(str[i])) {
            //  If the temp includes str[i] then remove the same character and previous chars before it.
            temp += str[i]
            temp = temp.substring(temp.indexOf(str[i]) + 1)
        } else {
            //  Add the char to the temp and compare the length of the temp and count
            temp += str[i]
            //  Update the value of the count if temp is higher.
            if (temp.length > count) {
                count = temp.length
            }
        }
    }
    return count

};

//abcabcbb - 3 - abc
//bbbbbb - 1 - b
//"" - 0
//pwwkew - 3 - kew
// hello_world_ - 6 - world_
//ashfaq_nisnr - 8 - hfaq_nis
//ashfaq_aisnr - 7 - q_aisnr
console.log(lengthOfLongestSubstring(""));
