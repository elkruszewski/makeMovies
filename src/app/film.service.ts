import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Film } from "./film";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Actor } from "./actor";
import { FILM_MOCK } from "./mocks/film-mock";
import { ACTOR_MOCK } from "./mocks/actor-mock";

@Injectable({
  providedIn: "root"
})
export class FilmService {
  baseUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  getFilms(): Observable<any> {
    return of(FILM_MOCK.content);
  }

  getFilm(id: number): Observable<any> {
    return of(FILM_MOCK.content.find(x => x.id == id));
  }

  checkids(id) {
    return;
  }
  getFilmActors(id: number): Observable<any> {
    const film = FILM_MOCK.content.find(v => v.id == id);

    const filteredFIlms = ACTOR_MOCK.content.filter(value => {
      let movie;
      film.actors.forEach(element => {
        if (value.id == element) {
          movie = value;
        }
      });

      return movie;
    });

    return of(filteredFIlms);
  }

  updateFilmActors(id: number, actors: Actor[]): Observable<Film> {
    return this.http.put<Film>(
      this.baseUrl + "films/" + id + "/actors",
      actors
    );
  }

  deleteFilm(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(this.baseUrl + "films/" + id, {
      observe: "response"
    });
  }

  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.baseUrl + "films", film);
  }

  updateFilm(film: Film): Observable<Film> {
    return this.http.put<Film>(this.baseUrl + "films", film);
  }
}
