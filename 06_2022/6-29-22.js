// DESCRIPTION:
// Construct a singly linked list with the given input. Then remove every K-th node of the list. Assume that K is always less than or equal to length of the Linked List.

class Node {
    constructor(value) { //the init method inside python is a constructor -> every language has some kind of constructor
        this.value = value;
        this.next = null; //INSIDE of the SLL stuff -> this is what connects us from node to node. Without this, we cannot move through the list.
    }

    // python equivalent of what's happening above:
    // def __init__(self==this, value):
    //     self.value = value
    //     self.next = null
}

class SLList {
    constructor() {
        this.head = null; //the head pointer ALWAYS points to the first thing in the SLL
        this.tail = null; //the tail pointer ALWAYS points to the last thing in the SLL
    }

    addToFront(value) {
        // #1 create our new node
        var newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return this
        }

        // #2 connect the new node to the list
        newNode.next = this.head;

        // #3 change the head pointer to the new node
        this.head = newNode;
    }

    printValues() {
        //what if the list is empty?
        if (this.head == null) {
            console.log('This list is empty.')
        } else { //we use a runner to check through the list
            var runner = this.head
            while (runner != null) { //as long as runner has some value...
                console.log(runner.value); //console.log the value of runner...
                runner = runner.next; //and then move to the next node in the SLL!
            }
            console.log("This is the end of the list!")
        }
    }

    removeEveryNthNode(n) {
        let runner = this.head;
        let counter = 1;
        while (runner) {
            // console.log(runner.value)
            console.log("counter is " + counter)
            console.log("runner is " + runner.value)
            if ((counter + 1) % n == 0 && runner.next) {
                console.log("inside the if statement now")
                runner.next = runner.next.next
                counter += 1;
            }
            counter++;
            console.log("counter incremented and is now " + counter)
            console.log("===========")
            runner = runner.next;
        }
    }
}

let mySLL = new SLList;

mySLL.addToFront(7)
mySLL.addToFront(6)
mySLL.addToFront(5)
mySLL.addToFront(4)
mySLL.addToFront(3)
mySLL.addToFront(2)
mySLL.addToFront(1)
// mySLL.printValues();
mySLL.removeEveryNthNode(4);
mySLL.printValues();


// TESTS:

// Example 1:
// Input : 1->2->3->4->5->6->7->8  
//         k = 3
// Output : 1->2->4->5->7->8

// Example 2:
// Input: 1->2->3->4->5->6  
//        k = 1
// Output: Empty list 