/*
	DTO
*/

// Constructeur du modèle (DTO) d'un Kontact

var KontactObject = function() {
	this.lastName = '';
	this.firstName = '';
	this.phone = '';
	this.mail = '';
	this.birth = '';
	this.picture = '';
};

// Méthodes (getters)
KontactObject.prototype.getLastName = function() {
	return this.lastName;
};

KontactObject.prototype.getFirstName = function() {
	return this.firstName;
};

KontactObject.prototype.getPhone= function() {
	return this.phone;
};

KontactObject.prototype.getMail = function() {
	return this.mail;
};

KontactObject.prototype.getBirth = function() {
	return this.birth;
};

KontactObject.prototype.getPicture = function() {
	return this.picture;
};