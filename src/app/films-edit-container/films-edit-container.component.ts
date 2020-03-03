import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-films-edit-container',
  templateUrl: './films-edit-container.component.html',
  styleUrls: ['./films-edit-container.component.css']
})
export class FilmsEditContainerComponent implements OnInit {

  films: Film[];
  showAdd: boolean = false;

  sortOptions = [
    {label: 'Tytuł', value: 'title'},
    {label: 'Reżyser', value: 'director'},
    {label: 'Gatunek', value: 'genre'}
  ];
  sortKey: string;
  sortField: string;

  constructor(private filmsService: FilmService) { }

  
  ngOnInit() {
    this.getFilms();
  }


  getFilms(): void {
    this.filmsService.getFilms().subscribe(films => this.films = films);
  }

  deleteFilm(film: Film): void {
    this.filmsService.deleteFilm(film.id).subscribe(response => {
      if(response.status == 200) {
        this.getFilms();
      } else {
        alert("Wystąpił błąd. Kod: "+response.status);
      }
    })
  }

  afterFilmAdded() {
    this.showAdd = !this.showAdd;
    this.getFilms();
  }

  onSortChange(event) {
    let value = event.value;
    this.sortField = value;
  }

}
