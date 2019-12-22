class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.amount = 0;
  	this.storage = {};
  }

  push(value) {
  	this.storage[this.amount] = value;
  	this.amount++;
  }

  pop() {
  	if (this.amount > 0) {
      this.amount--;
      var removed = this.storage[this.amount];
      delete this.storage[this.amount];
      return removed; 
  	}	
  }

  size() {
  	return this.amount; 
  }

}