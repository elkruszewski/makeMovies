import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film = new Film();

  constructor(private filmsService: FilmService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.filmsService.getFilm(this.route.snapshot.params.id).subscribe(response => {
      this.film = response;
      this.filmsService.getFilmActors(this.film.id).subscribe(response => this.film.actors = response);
    });
  }

}
