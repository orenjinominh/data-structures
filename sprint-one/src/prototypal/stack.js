var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.amount = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.amount] = value;
    this.amount++;
  }, 
  pop: function() {
  	if (this.amount > 0) {
  		this.amount--;
  		var removed = this.storage[this.amount];
  		delete this.storage[this.amount];
  		return removed;
  	};
  },
  size: function() {
  	return this.amount;
  }
};




