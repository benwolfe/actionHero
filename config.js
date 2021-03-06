// actionHero Config File
// For use in version 3.0.0 or greater
// I will be loded into api.configData

var configData = {};

/////////////////////////
// General Information //
/////////////////////////

configData.general = {
	"apiVersion": "3.0.9",
	"serverName": "actionHero API",
	// The welcome message seen by TCP and webSocket clients upon connection
	"welcomeMessage" : "Hello! Welcome to the actionHero api",
	// The location of this package relative to your project
	"apiBaseDir": "./node_modules/actionHero/",
	// The directory which will be the root for the /public route
	"flatFileDirectory": "./public/",
	// The body message to acompany 404 (file not found) errors regading flat files
 	"flatFileNotFoundMessage": "Sorry, that file is not found :(",
 	// The body message to acompany 404 (file not found) errors regading directories
	"flatFileIndexPageNotFoundMessage": "Sorry, there is no index page for this folder :(",
	// the chatRoom that TCP and webSocket clients are joined to when the connect
	"defaultChatRoom": "defaultRoom",
	// defaultLimit & defaultOffset are useful for limiting the length of response lists.  
	// These params will always be appended to any request as "limit" and "offest" unless set by the client
	"defaultLimit": 100,
	"defaultOffset": 0,
	// The number of internal "workers" this node will have.
	// Remember these are logical timers (not threads) so they will block if they are computationally intense
	"workers" : 3,
	// watch for changes in actions and tasks, and reload them on the fly
	// This will not work in all operating systems [ http://nodejs.org/docs/latest/api/fs.html#fs_fs_watchfile_filename_options_listener ] 
	"developmentMode": false,
};

/////////////
// logging //
/////////////

configData.log = {
	"logging" : true,
	"logFolder" : "./log/",
	"logFile" : "api.log",
	// Should we log the actual requests coming in (and their params)?
	"logRequests" : true,
};

///////////
// Redis //
///////////

configData.redis = {
	"enable": false,
	"host": "127.0.0.1",
	"port": 6379,
	"password": null,
	"options": null,
	"DB": 0
};

///////////////////////////////////////
// Common HTTP & HTTPS Configuration //
///////////////////////////////////////

configData.commonWeb = {
	// Any additional headers you want actionHero to respond with
	"httpHeaders" : { },
	// route which actions will be served from
	// secondary route against this route will be treated as actions, IE: /api/?action=test == /api/test/
	"urlPathForActions" : "api",
	// route which static files will be served from
	// folder path (relitive to your project root) to server static content from
	"urlPathForFiles" : "public",
	// when visiting the root URL, should visitors see "api" or "public"?
	// visitors can always visit /api and /public as normal
	"rootEndpointType" : "api",
	// the default filetype to server when a user requests a directory
	"directoryFileType" : "index.html",
	// the header which will be returend for all flat file served from /public.  I am defiend in seconds
	"flatFileCacheDuration" : 60,
};

/////////////////
// HTTP Server //
/////////////////

configData.httpServer = {
	"enable": true,
	"port": 8080,
	// which IP to listen on (use 0.0.0.0 for all)
	"bindIP": "0.0.0.0"
};

//////////////////
// HTTPS Server //
//////////////////

configData.httpsServer = {
	"enable": true,
	"port": 4443,
	"keyFile": "./certs/server-key.pem",
	"certFile": "./certs/server-cert.pem",
	// which IP to listen on (use 0.0.0.0 for all)
	"bindIP": "0.0.0.0"
};

////////////////
// TCP Server //
////////////////

configData.tcpServer = {
	"enable": true,
	"port": 5000,
	// which IP to listen on (use 0.0.0.0 for all)
	"bindIP": "0.0.0.0"
};

/////////////////
// Web Sockets //
/////////////////

configData.webSockets = {
	// You must have either the http or https server enabled for websockets
	"enable": true,
	// which web interface to bind the websockets to (http or https)
	"bind" : "http",
	"logLevel" : 1,
	"settings" : [
		"browser client minification",
		"browser client etag",
		"browser client gzip"
	]
};

//////////////////////////////////

exports.configData = configData;