import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from './../../../../shared/models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  @Input() index: number;
  @Input() person: Person;
  @Output() deletePerson: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  onDelete() {
    this.deletePerson.emit(this.index);
  }

  get ageNotAllowed() {
    return 60;
  }

}
