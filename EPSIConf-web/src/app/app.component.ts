import { Component, Directive, TemplateRef, ViewContainerRef, Input, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private appRef: ApplicationRef) { }
  ngOnInit() {

   }
}
