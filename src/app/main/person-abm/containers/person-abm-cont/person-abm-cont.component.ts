import { Component, OnInit } from '@angular/core';
import { Person } from './../../../../shared/models/person.model';

@Component({
  selector: 'app-person-abm-cont',
  templateUrl: './person-abm-cont.component.html',
  styleUrls: ['./person-abm-cont.component.scss']
})
export class PersonAbmContComponent implements OnInit {

  constructor() { }

  persons: Person[] = [
    { name: 'Martin', age: 27 },
    { name: 'Franco', age: 27 },
    { name: 'Juan', age: 30 },
    { name: 'Pepe', age: 65 },
    { name: 'Domingo', age: 70 }
  ];

  ngOnInit() {
  }

  deleteHandler(index: number) {
    console.log('[deleteHandler] ', index);
  }

}
