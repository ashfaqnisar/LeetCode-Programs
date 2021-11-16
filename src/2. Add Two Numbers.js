// For testing the sample testcases create a node class
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// For creating the linked list using this class.
class LinkedList {
    constructor() {
        this.head = null;
    }
}


//Declaring all the sample testcases.
// const list1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
// const list2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(2, null))))
const list1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))))
const list2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))


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
    // console.log(l1, l2)
    let list = new LinkedList(), current = null, carry = 0

    //LoLooping through the both the lists until the carry is zero.
    while (!(l1 == null && l2 == null && carry === 0)) {
        let l1Value = l1 ? l1.val : 0, l2Value = l2 ? l2.val : 0;

        // Process the value and handling the carry.
        let value = (l1Value + l2Value + carry)
        carry = Number(value.toString().substring(0, value.toString().length - 1));
        let number = value % 10
        console.log("value: ", value, "Carry: ", carry, "Number: ", number)

        const node = new ListNode(number)

        // Adding the node to the list.
        if (list.head == null) {
            list.head = node
        } else {
            current = list.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        // console.log("list: ", list.head)


        // console.log("\n--------\n")

        // console.log("currentNode: ", currentNode)


        // 2 -> 3 -> 4
        // Node(2, Node(3, Node(4, null)))
        // Node(2, null),  prev = null, current = node(2,null), next = node(0, null)
        // Node(2, Node(3 ,null)) prev = node(2, Node(0 , null), current = node(3, null), next = node(0, null)
        // Node(2, Node(3 ,Node(4, null))) prev = node(2, null), current = node(3, null), next = node(0, null)

        // Updating both the nodes, if they have next or using the same one.
        l1 = l1 ? l1.next : l1, l2 = l2 ? l2.next : l2
    }
    return list.head
};

let current = addTwoNumbers(list1, list2)
while (current) {
    console.log(current.val)
    current = current.next
}
