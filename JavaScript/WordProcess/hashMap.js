const linkedList = require('./LinkedList');

class Map {
    constructor(mapSize){
        this.size = mapSize;
        this.map = [];
        for(let index = 0; index < this.size; index++){
            this.map.push(new linkedList());
        }
    }

    printWidth(){
        this.map.forEach(list => {
            console.log(list);
        });
    }

    addToMap(input){
        const index = this.funWithHash(input);
        let list = this.map[index];
        list.addToHead(input);
    }

    funWithHash(inputToHash){
        return inputToHash.length % this.map.length;
    }

}

const map = new Map(5);

map.addToMap('one');
map.addToMap('two');
map.addToMap('four');
map.addToMap('seven');
map.printWidth();