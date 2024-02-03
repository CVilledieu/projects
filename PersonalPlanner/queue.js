class node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
    getNextNode(){
        return this.next;
    }
    setNextNode(node){
        this.next = node;
    }
    getPreviousNode(){
        return this.previous;
    }
    setPreviousNode(node){
        this.previous = node;
    }
}

class LinkedList {
    constructor(data){
        const newNode = new node(data);
        this.head = newNode;
        this.tail = null;
    }
    addToHead(data){
        const newHead = new node(data);
        const currentHead = this.head;
        newHead.setNextNode(currentHead);
        currentHead.setPreviousNode(newHead);
        this.head = newHead;
        if(!this.tail){
            this.tail = currentHead;
        }

    }
    addToTail(data){
        const newTail = new node(data);
        const currentTail = this.tail;
        newTail.setPreviousNode(currentTail);
        currentTail.setNextNode(newTail);
    }
    removeHead(){
        if(!this.head){
            return;
        }
        const newHead = this.head.getNextNode();
        if(!newHead){
            return this.head = null;
        }
        newHead.setPreviousNode(null);
    }
    removeTail(){
        if(!this.tail){
            return;
        }
        const newTail = this.tail.getPreviousNode();
        if(newTail.data === this.head){
            return this.tail = null;
        }
        newTail.setNextNode(null);
    }
    remoevByData(data){

    }
    
}

class queue {
    constructor(data){

    }

}