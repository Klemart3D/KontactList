var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for device API libraries to load
//
document.addEventListener("deviceready",onDeviceReady,false);

// device APIs are available
//
function onDeviceReady() {
	pictureSource=navigator.camera.PictureSourceType;
	destinationType=navigator.camera.DestinationType;
	//console.log(File);
}

// A button will call this function
//
function capturePhoto(e) {
	e.preventDefault();
	// Take picture using device camera and retrieve image as base64-encoded string
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		destinationType: Camera.DestinationType.FILE_URI,
		targetWidth: 100,
		targetHeight: 100
	});
}

function onSuccess(imageURI) {
	console.log("SUCCESS:", imageURI);
	//var image = document.getElementById('takenPicture');
	//image.src = "data:image/jpeg;base64," + imageURI;
}

function onFail(message) {
	alert('Failed because: ' + message);
}

// A button will call this function
//
function uploadPhoto(e) {
	e.preventDefault();

	//check if last selected folder was set
	if (typeof lastFolderSelected == 'undefined')
		lastFolderSelected = null;

	//create file chooser dialog parameters
	file_Browser_params = {
		directory_browser: false, //this is file browser. Default is false
		new_file_btn: true, //show new file button. Default is true
		new_folder_btn: true, //shoe new folder button. Default is true
		initial_folder: lastFolderSelected, //initial folder when dialog is displayed

		//callback function when file is selected
		on_file_select: function (fileEntry) {
			return false; //close dialog when any file is selected (tapped)
		},

		//callback function when folder is selected
		on_folder_select: function (dirEntry) {
			//don't do anything
		},

		//callback function when OK button is clicked
		on_ok: function (dirEntry) {
			//save the last folder path
			lastFolderSelected = dirEntry;
		}
	}

/*	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

		console.log('file system open: ' + fs.name);
		fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

			console.log("fileEntry is file?" + fileEntry.isFile.toString());
			// fileEntry.name == 'someFile.txt'
			// fileEntry.fullPath == '/someFile.txt'
			writeFile(fileEntry, null);

		}, onErrorCreateFile);

	}, onErrorLoadFs);*/
}

function onErrorCreateFile() {
	console.log('onErrorCreateFile');
}

function onErrorLoadFs() {
	console.log('onErrorLoadFs');
}