import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Dialogs } from '@ionic-native/dialogs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
		/*let navigator:any = (<any>window).navigator;
		navigator.notification.alert(
			'I am from Typescript!',  // message
			null,         // callback
			'Plugin found Over',            // title
			'Done'                  // buttonName
    );*/
      let dialog : Dialogs = new Dialogs();
      dialog.alert("I am from Plugin","Cordova Plugin","Done");
	    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
