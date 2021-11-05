import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// Le digo a angular que es una funcion global(esta en el archivo custom.js)
declare function customInitFunctions(): any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {
    // Es una funcion de manera global
    //customInitFunctions();
  }

}
