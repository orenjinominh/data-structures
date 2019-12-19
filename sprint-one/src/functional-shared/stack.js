var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    amount: 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.amount] = value;
    this.amount++;
  },

  pop: function(){
    if(this.amount > 0){
      this.amount--;
      var trash = this.storage[this.amount];
      return trash;
    }
  },

  size: function(){
    return this.amount;
  }
};


