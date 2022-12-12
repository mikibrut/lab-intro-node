class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.items.length){
      throw new Error('OutOfBounds');
    };
    return this.items[pos];
    }
    

  max() {
    if(!this.items.length){
      throw new Error('EmptySortedList');;
    };
    return Math.max(...this.items);
  }

  min() {
    if(!this.items.length){
      throw new Error('EmptySortedList');;
    };
    return Math.min(...this.items);
  }

  sum() {
    let sumatory = this.items.reduce((a, b) => a + b, 0);
    return sumatory;
    if (sumatory <= 0){
      return '0';
    }
  }

  avg() {
    if(!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    let average = this.items.reduce((a, b) => a + b, 0) / this.items.length;
    return average; 
   };
        
  }
}

module.exports = SortedList;
