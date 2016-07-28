function Error(){
  EventEmitter.call(this);
  this._data = [];
}

Error.prototype = Object.create(EventEmitter.prototype);
Error.prototype.constructor = Todo;

Error.prototype.add = function(error){
  this._data.push(error);
  this.emit('error');

  setTimeout(function(){
    this._data.splice(0, 1);
    this.emit('error');
  }.bind(this), 3000);
};
