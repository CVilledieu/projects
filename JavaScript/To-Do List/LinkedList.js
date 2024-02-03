class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(data){
        if(data instanceof node){
            this.next = data;
        } else {
            this.next = new node(data);
        }
    }

    getNextNode(){
        return this.next;
    }

}

class linkedList {
    constructor(max){
        this.head = null;
        this.size = 0;
        this.maxSize = max;
    }

    addToHead(data){
        let current = this.head;
        if(data instanceof node){
           this.head = data; 
        }
        else {
            this.head = new node(data);
        }
        this.head.setNextNode(current);
        this.size += 1;
    }
    
    getSize(){
        return this.size;
    }

    removeNode(data){
        let currentNode = this.head;
        let nextNode = null;
        if(this.size <= 0){
            return;
        }
        if(this.head.data === data){
            this.head = this.head.next;
        }
        while(currentNode.data){
            nextNode = currentNode.next;
            if(nextNode.data === data){
                currentNode.next = nextNode.next;
                this.size -= 1;
                return;
            }
            currentNode = nextNode;
        }   
    }
    
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}

module.exports = linkedList;