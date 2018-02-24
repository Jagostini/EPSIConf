import { Component } from '@angular/core';

@Component({
  selector: 'epsiconf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    goToPlanning() {
        console.log("planning");
    }

    goToVideo() {
        console.log("Video");
    }

    goToContact() {
        console.log("contact");
    }
}
