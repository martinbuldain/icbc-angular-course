import { Component, OnInit } from '@angular/core';
import { User } from './../../../../shared/models/user.model';
import { UserService } from './../../../../shared/services/users.service';

@Component({
  selector: 'app-person-abm-cont',
  templateUrl: './person-abm-cont.component.html',
  styleUrls: ['./person-abm-cont.component.scss']
})
export class PersonAbmContComponent implements OnInit {

  // Si bien userService no esta declarado como variable, injectarlo asi es como declararlo
  // Angular injecta los servicios en un objeto llamado Injector, el cual contiene todas las
  // instancias singleton de lo que insertamos en el Injector
  // En el caso de los servicios, esto se hace indirectamente con la anotation @Injectable
  constructor(private userService: UserService) { }

  users: User[] = [];

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      /** this.users se refiere a la variable de la clase */
      // users se refiere a la lista de usuarios que provienen del servicio
      this.users = users;
    }
    );
  }

  /**
   * @param index que recibe a traves de $event en el html
   */
  deleteHandler(index: number) {
    console.log('[deleteHandler] ', index);
  }

}
