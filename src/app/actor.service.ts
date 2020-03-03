import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from './actor';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  baseUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.baseUrl+"actors");
  }

  getActor(id: number): Observable<Actor> {
    return this.http.get<Actor>(this.baseUrl+"actors/"+id);
  }

  getActorFilms(id: number): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl+"films/actor/"+id);
  }

  deleteActor(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(this.baseUrl+"actors/"+id, {observe: 'response'});
  }

  addActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(this.baseUrl+"actors", actor);
  }

  updateActor(actor: Actor): Observable<Actor> {
    return this.http.put<Actor>(this.baseUrl+"actors", actor);
  }
}
