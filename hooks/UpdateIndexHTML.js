#!/usr/bin/env node
 
// this plugin replaces arbitrary text in arbitrary files
//
// Look for the string CONFIGURE HERE for areas that need configuration
//
 
var fs = require('fs');
var path = require('path');
 
var rootdir = process.argv[2];
 
function replace_string_in_file(filename, to_replace, replace_with) {
	var data = fs.readFileSync(filename, 'utf8');
	var result = data.replace(new RegExp(to_replace, "g"), replace_with);
	fs.unlinkSync(filename);
	fs.writeFileSync(filename, result, 'utf8');

}

 
function add_cordova_content(filename, to_replace, replace_with) {
	var data = fs.readFileSync(filename, 'utf8');
	var result = data.replace(new RegExp(to_replace, "g"), replace_with);
	fs.unlinkSync(filename);
	fs.writeFileSync(filename, result, 'utf8');

}
 
var target = "stage";
if (process.env.TARGET) {
    target = process.env.TARGET;
}
 
 function modifyBaseRef(){

            replace_string_in_file("platforms/android/app/src/main/assets/www/index.html", 
                "<!--BASE_REF-->", 
                "<base href='file:///android_asset/www/'\>");
			add_cordova_content ("platforms/android/app/src/main/assets/www/index.html",
				"<!--CORDOVA_JS-->",
				"<div class='app'>" + 
				"<h1>Apache Cordova</h1>"+
				"<div id='deviceready' class='blink'>"+
                "<p class='event listening'>Connecting to Device</p>"+
                "<p class='event received'>Device is Ready</p>"+
				"</div>"+
				"</div>"+
				"<script type='text/javascript' src='cordova.js'></script>"+
				"<script type='text/javascript' src='index.js'></script>");	
		
 }

function deleteMapFile()
{
	var filesToDelete = [
        // android
		"platforms/android/app/src/main/assets/www/inline.bundle.js.map",
		"platforms/android/app/src/main/assets/www/main.bundle.js.map",
		"platforms/android/app/src/main/assets/www/polyfills.bundle.js.map",
		"platforms/android/app/src/main/assets/www/styles.bundle.js.map",
		"platforms/android/app/src/main/assets/www/vendor.bundle.js.map",

        // ios
        //"platforms/ios/www/index.html",
    ];
    filesToDelete.forEach(function(val, index, array) {
		var fullfilename = path.join('', val);
				console.log ('fullfilename :: ' + fullfilename);

        if (fs.existsSync(fullfilename)) {
            fs.unlinkSync(fullfilename);
        } else {
            //console.log("missing: "+fullfilename);
        }
    });
}


modifyBaseRef();
deleteMapFile();