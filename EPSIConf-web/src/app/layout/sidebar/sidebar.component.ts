import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from './contact.service';

@Component({
  selector: 'epsiconf-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
    constructor(private contactService: ContactService) {}

    contactJules: Contact = { contact:'Jules', tel: '06'};
    contactRomain: Contact = { contact:'Romain', tel: '07'};
    contact: boolean = false;
    contactList: Contact[] = [{contact:'Romain', tel: '07'},{ contact:'Jules', tel: '06'}]
    

    ngOnInit() {
        console.log(this.contactJules, this.contactRomain);
    }

    goToContact(){
        if(this.contact) {
            this.contact = false
        } else {
            this.contact = true;
        }
    }
    
}