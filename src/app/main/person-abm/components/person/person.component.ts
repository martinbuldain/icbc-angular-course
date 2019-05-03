import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './../../../../shared/models/user.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  /**
   * @Input tiene que ver con property binding. Va con []
   */
  @Input() index: number;
  @Input() user: User;
  /**
   * @Output para enviar informacion al padre
   * Siempre respeta esta forma definiendo el tipo con el operador diamante indicando el tipo
   * Luego la asignacion del = con el new y los () para crear la instancia
   */
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  onDelete() {
    this.deleteUser.emit(this.index);
  }

  /**
   * get + nombreVariable es una alternativa para definir una variable
   * Esto es lo mismo que definir la variable ageNotAllowed = 60
   * Es mas comun usarlo cuando el valor es muy usando en esta clase y es mas largo
   * Ej: en lugar de siempre usar ese return enorme, uso solo arrayControl
   * get arrayControl() {
      return this.participantsForm.get('participants') as FormArray;
    }
   */
  get ageNotAllowed() {
    return 60;
  }

}
