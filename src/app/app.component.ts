import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 5';

  komunikat:string;

  ngOnInit() {
this.komunikat = 'Ala ma kota';
  }
}
