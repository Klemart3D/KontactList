/*
	Le contrôleur
*/

// Constructeur du controlleur
function KontactController(kontactModel, view){
//function KontactController(todo, error, view){
  this._kontactModel = kontactModel;
  //this._error = error;
  this._view = view;

  this._view.on('add', this.addAction.bind(this)); // Le controlleur écoute la vue
  //this._view.on('empty', this.emptyAction.bind(this));
}

KontactController.prototype.addAction = function(val){
  this._kontactModel.add(val);
};

KontactController.prototype.emptyAction = function(){
	this._kontactModel.empty();
};