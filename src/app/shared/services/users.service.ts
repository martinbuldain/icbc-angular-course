import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../models/user.model';

// @Injectable injecta el servicio en el objeto Injector de Angular. Mantiene singletons
@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    /**
     * HttpClient es provisto por el modulo HttpClientModule, que se injecta en el app.module.ts
     * Todos los verbos http en Angular retornan todos un Observable, a los cuales nos podemos
     * suscribir.
     * Para aprender mas acerca de Rxjs y sus operadores, pueden ver esta guia completa:
     * @see https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-1-e911e68f6063
     */
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
            .pipe(
                map((users: User[]) => users.map(user => new User(user)))
            );
    }

}
