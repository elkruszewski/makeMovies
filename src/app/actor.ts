import { Film } from "./film";

export class Actor {
    id: number;
    name: string;
    surname: string;
    birthdate: Date;
    img: string;
    films: Film[];
}