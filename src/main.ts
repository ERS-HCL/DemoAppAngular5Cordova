import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}



let bootstrap = () => {
platformBrowserDynamic().bootstrapModule(AppModule);
};

if(!!window['cordova']){
document.addEventListener('deviceready',bootstrap);
}else{
bootstrap();
}

//platformBrowserDynamic().bootstrapModule(AppModule);
