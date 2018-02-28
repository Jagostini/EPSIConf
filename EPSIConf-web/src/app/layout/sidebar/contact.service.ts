import { Injectable } from '@angular/core';

export interface Contact{
    contact: String;
    tel: String;
}

@Injectable()
export class ContactService {

  constructor() { }

}