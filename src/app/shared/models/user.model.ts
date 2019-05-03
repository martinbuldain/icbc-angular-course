export interface BaseUser {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        };
    };
    phone: string;
    website?: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    age: number;
}

export class User implements BaseUser {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    age: number;

    constructor(user: BaseUser) {
        this.id = user.id;
        this.name = user.name.toUpperCase();
        // Para la edad genero numero aleatorios en el rango de 0 a 80
        this.age = Math.floor(Math.random() * 80);
    }
}
