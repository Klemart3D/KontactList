// Attendre que les API du mobile soient chargées
document.addEventListener("deviceready", onDeviceReady, false);

// Quand les API du mobile sont prêtes
function onDeviceReady() {
	var model = new KontactModel(); // Le modèle
	//var error = new Error();
	var view = new AddKontactView(model); // La vue
	//var errorView = new ErrorView(error);
	var controller = new KontactController(model, view); // Le controlleur
}

