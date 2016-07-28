function ErrorView(model){
  EventEmitter.call(this);
  this._model = model;

  this._manageDOM();

  this._model.on('error', this.display.bind(this));
}

ErrorView.prototype = Object.create(EventEmitter.prototype);
ErrorView.prototype.constructor = ErrorView;

ErrorView.prototype._manageDOM = function(){
  this._errors = document.createElement('ul');

  document.getElementById('errors').appendChild(this._errors);
};

ErrorView.prototype.display = function(){
  this._errors.innerHTML = '';
  var data = this._model._data;

  data.forEach(function(val, id){
    var li = document.createElement('li');
    li.innerHTML = val;
    this._errors.appendChild(li);
  }, this);
};
