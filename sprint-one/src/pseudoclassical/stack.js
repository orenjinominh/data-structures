var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.amount = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.amount] = value;
	this.amount++;
}; 

Stack.prototype.pop = function() {
	if (this.amount > 0) {
		this.amount--;
		var removed = this.storage[this.amount];
		delete this.storage[this.amount];
		return removed; 
	}
}; 

Stack.prototype.size = function() {
	return this.amount; 
}


