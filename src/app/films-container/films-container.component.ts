import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-films-container',
  templateUrl: './films-container.component.html',
  styleUrls: ['./films-container.component.css']
})
export class FilmsContainerComponent implements OnInit {

  films: Film[];

  constructor(private filmsService: FilmService) { }

  ngOnInit() {
    this.getFilms();
  }


  getFilms(): void {
    this.filmsService.getFilms().subscribe(films => {
      this.films = films;
    });
  }

}
