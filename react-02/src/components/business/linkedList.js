export class ListNode {
    constructor(subject, amount) {
        this.forwardNode = null
        this.subject = subject
        this.amount = amount
    }
    show() {
        return `Subject: ${this.subject}, Amount: ${this.amount}`
    }
}


export class LinkedList {
    constructor() {
        this.headNode = null;
        this.currentNode = null;
    }

    addNode(subject, amount) {
        const newListNode = new ListNode(subject, amount)
        if (!this.headNode) {
            this.headNode = newListNode;
            return this.deadNode
        }
        this.currentNode = this.headNode;
        while (this.currentNode.forwardNode !== null) {
            this.currentNode = this.currentNode.forwardNode
        }
        this.currentNode.forwardNode = newListNode
    }

    first() {
        this.currentNode = this.headNode;
        return this.currentNode
    }

    last() {
        this.currentNode = this.headNode;
        while (this.currentNode.forwardNode !== null) {
            this.currentNode = this.currentNode.forwardNode
        }
        return this.currentNode
    }

    next() {
        this.currentNode = this.currentNode.forwardNode;
        return this.currentNode
    }

    previous() {
        let prevNode = this.headNode;
        while (prevNode.forwardNode !== this.currentNode) {
            prevNode = prevNode.forwardNode
        }
        this.currentNode = prevNode
        return this.currentNode
    }

    insert(subject, amount) {
        const newListNode = new ListNode(subject, amount)
        newListNode.forwardNode = this.currentNode.forwardNode
        this.currentNode.forwardNode = newListNode;
    }

    delete() {
        let prevNode = this.headNode;
        while (prevNode.forwardNode !== this.currentNode) {
            prevNode = prevNode.forwardNode
        };
        prevNode.forwardNode = this.currentNode.forwardNode;
        this.currentNode = prevNode.forwardNode
    }

    total() {
        let sum = 0;
        let tempNode = this.headNode
        while(tempNode !== null){
            sum += tempNode.amount;
            tempNode = tempNode.forwardNode;
        }
        return sum
    }
}