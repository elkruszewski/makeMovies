import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class FilmAddComponent implements OnInit {

  @Input() showAdd: boolean;
  @Output() showAddChange = new EventEmitter<boolean>();

  film: Film = new Film();
  actors: Actor[];
  selectedActors: Actor[] = [];

  constructor(private filmsService: FilmService, private actorsService: ActorService) { }

  ngOnInit() {
    this.actorsService.getActors().subscribe(response => this.actors = response);
  }

  addFilm() {
    this.film.premiere = new Date(this.film.premiere);
    this.film.actors = this.selectedActors;
    this.filmsService.addFilm(this.film).subscribe(response => {
      this.film = response;
      if(this.selectedActors.length > 0)
        this.filmsService.updateFilmActors(this.film.id, this.selectedActors).subscribe();

      this.film.premiere = new Date(this.film.premiere);
      if(this.film !== undefined) {
        alert("Dodano film!");
        this.showAdd = false;
        this.showAddChange.emit(this.showAdd);
      } else {
        alert("Wystąpił błąd.");
      }
    });
  }

}
