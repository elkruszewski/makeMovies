import { Component, OnInit, Input, Output } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {

  film: Film = new Film();
  actors: Actor[];
  selectedActors: Actor[];

  constructor(private filmsService: FilmService, private route: ActivatedRoute,
    private actorsService: ActorService, private router: Router) { }

  ngOnInit() {
    var id = this.route.snapshot.params.id;
    this.filmsService.getFilm(id).subscribe(response => {
      this.film = response;
      this.film.premiere = new Date(this.film.premiere);
      this.filmsService.getFilmActors(this.film.id).subscribe(response => this.selectedActors = response);
    });
    this.actorsService.getActors().subscribe(response => this.actors = response);
  }

  editFilm() {
    this.filmsService.updateFilm(this.film).subscribe(response => {
      this.filmsService.updateFilmActors(this.film.id, this.selectedActors).subscribe();
      this.film = response;
      this.film.premiere = new Date(this.film.premiere);
      if(this.film !== undefined) {
        alert("Zedytowano film!");
        this.router.navigate(['edit/films']);
      } else {
        alert("Wystąpił błąd.");
      }
    });
  }

}
