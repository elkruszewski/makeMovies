import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Film } from "./film";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Actor } from "./actor";
import { FILM_MOCK } from "./mocks/film-mock";

@Injectable({
  providedIn: "root"
})
export class FilmService {
  baseUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  getFilms(): Observable<any> {
    return of(FILM_MOCK.content);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(this.baseUrl + "films/" + id);
  }

  getFilmActors(id: number): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.baseUrl + "actors/film/" + id);
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
