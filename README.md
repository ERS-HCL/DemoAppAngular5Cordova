# DemoAppAngular5Cordova
Angular 5 Hero App Integrated with Cordova for Android Phone &amp; Tables 

## Set up 

Clone the repository in your machine and run following command to fetch dependencies

```
npm install 
```
Demo app is already configured to use  Device and Dialogs plugin of cordova.
You will find the entery of these plugins in Plugin & config.xml folder 
However to use the code in Angular 5 Typescript code we need definition files for these plugins. 

## Set up definition files for plugins
```
npm install @ionic-native/core --save
npm install --save @ionic-native/dialogs
npm install --save @ionic-native/device
```

## Build Angular 5 app

Run following command to build the Angular 5 app
```
ng build        (develop version)
ng build --prod        (production  version AOT mode by default enabled) 
```
Output is generated in **www** folder , which is ready to be processed by cordova hooks

## Build Cordova app

Run following command to build cordova app

```
cordova build android 
cordova run android
```

## ToDo 
1. Configuring npm script  to build app with one command






