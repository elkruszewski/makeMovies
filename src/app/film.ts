import { Actor } from "./actor";

export class Film {
  id: number;
  director: string;
  genre: string;
  premiere: Date;
  title: string;
  img: string;
  actors: Actor[];
}
