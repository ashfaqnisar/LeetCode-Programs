class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const list1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
const list2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))


/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
// var reverseLinkedList = (list) => {
//     let nextNode = null, prevNode = null, node = list
//     while (node != null) {
//         nextNode = node.next //Node(4, Node(3, Null)) //Node(3, null) //null
//         node.next = prevNode //Node(2, Null) //Node(4, Node(2,null)) //Node(3, Node(4, Node(2,null)))
//         prevNode = node //Node(2, Null) // Node(4, Node(2,null)) //Node(3, Node(4, Node(2,null)))
//         node = nextNode // Node(4, Node(3, Null)) //Node(3, null) //null
//     }
//     return prevNode
// }

var addTwoNumbers = function (l1, l2) {
    console.log(l1, l2)
    let carry = 0, resultList = new ListNode(0, null);
    while (l1 != null && l2 != null) {
        let l1Value = l1.val, l2Value = l2.val
        resultList.val = l1Value + l2Value
        resultList.next = null
    }
    return


    // for (let node of l1){
    //     console.log(node.val, " - ", node.next)
    // }
    // for (let node of l2)
    //     console.log(node.val, " - ", node.next)

};

addTwoNumbers(list1, list2)
