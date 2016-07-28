/*
	La vue
*/

// Constructeur de la vue
function AddKontactView(model){

	EventEmitter.call(this);
  this._model = model;

  this._manageDOM();
  this._bindListeners();

  this._model.on('change', this.display.bind(this));
}

AddKontactView.prototype = Object.create(EventEmitter.prototype);
AddKontactView.prototype.constructor = AddKontactView;

AddKontactView.prototype._bindListeners = function(){

	this._submit.addEventListener('click', function(e) {
		e.preventDefault(); // Empêche la soumission du formulaire

		var newKontact = new KontactModel(); // On instancie un nouveau Kontact

		newKontact.lastName = $('#kontactLastName').val();
		newKontact.firstName = $('#kontactFirstName').val();
		newKontact.phone = $('#kontactPhone').val();
		newKontact.mail = $('#kontactMail').val();
		newKontact.birth = $('#kontactBirth').val();
		newKontact.picture = $('#kontactPicture').val();

		if(newKontact.lastName === '') alert('Le nom est obligatoire');
		else if(newKontact.firstName === '') alert('Le prénom est obligatoire');
		else if(newKontact.phone === '') alert('Le téléphone est obligatoire');
		else {
			this.emit('add', newKontact); // La vue un événement d'ajout d'un nouveau kontact
			document.getElementById("formAddKontact").reset(); // On vide tous les champs du formulaire
			$.mobile.changePage("#pageKontactList"); // On retourne sur la vue des listes
		}
	}.bind(this)); // On bind "this" pour qu'il corresponde au formulaire et non au bouton de soumission

/*  this._emptyBtn.addEventListener('click', function(e){
    this.emit('empty');
  }.bind(this));*/
};

AddKontactView.prototype._manageDOM = function(){
	// On récupère le bouton de soumission
  this._submit = document.getElementById('submitAddKontact');

	// On déclare la liste comme objet jQuery listview
	$("#kontactList").listview();

	// On défini les options de la liste (<ul>)
	this._kontactList = document.getElementById('kontactList');
	this._kontactList.setAttribute("data-role", "listview"); // On crée la liste (vide)
	this._kontactList.setAttribute("data-inset", "true"); // Vue en liste
	this._kontactList.setAttribute("data-autodividers", "true"); // Liste triée par lettre
	this._kontactList.setAttribute("data-theme", "b"); // On repasse sur le thème clair

	//this._emptyBtn = document.getElementById('empty');
};

AddKontactView.prototype.display = function(){
	// Masquer la phrase "Pas de contact"
	$('#NoKontact').attr('style', 'display:none');
	this._kontactList.setAttribute("data-filter", "true");
	this._kontactList.setAttribute("data-filter-theme", "a");

	// Supprimer les éventuels résultats précédents
	this._kontactList.innerHTML = '';
	var data = this._model.findAll(); // On récupère les données dans un tableau "data"

	if(data != null) {
		data.forEach(function (val, id) { // On parcourt chaque élément du tableau "data"
			var li = document.createElement('li');

			// On récupère les infos du nouveau Kontact
			var a = document.createElement('a');
			a.setAttribute('href', '#');

			var img = document.createElement('img');
			img.setAttribute('src', 'img/avatar.jpg');

			var h2 = document.createElement('h2');
			h2.innerText = val.lastName + val.firstName;

			var p = document.createElement('p');
			p.innerText = val.phone;

			a.appendChild(img);
			a.appendChild(h2);
			a.appendChild(p);
			li.appendChild(a);

			this._kontactList.appendChild(li);
			$("#kontactList").listview('refresh'); // On rafraichi la liste
		}, this);
	}
};
