/*
		Le modèle
*/

// Constructeur du modèle (DAO)
function KontactModel(){
	this.permanentStorage = window.localStorage; // Stockage en dur des contacts
	var data = this.permanentStorage.getItem("kontactData");
	if(data !== '') this._data = JSON.parse(data);
	else this._data = []; // Tableau des Kontacts
	EventEmitter.call(this);
}

KontactModel.prototype = Object.create(EventEmitter.prototype);
KontactModel.prototype.constructor = KontactModel;

KontactModel.prototype.add = function(info){
	this._data.push(info);
	this.permanentStorage.setItem("kontactData", JSON.stringify(this._data));
	this.emit('change');
};

KontactModel.prototype.remove = function(id){
  this._data.splice(id, 1);
  this.emit('change');
};

KontactModel.prototype.empty = function(){
  this._data = [];
	this.permanentStorage.clear();
  this.emit('change');
};

KontactModel.prototype.findAll = function(){
	var data = this.permanentStorage.getItem("kontactData");
  return JSON.parse(data);
};

KontactModel.prototype.find = function(id){
  return this._data[id];
};
