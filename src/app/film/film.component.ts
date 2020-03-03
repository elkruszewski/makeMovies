import { Component, OnInit, NgModule, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Film } from '../film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
@NgModule({
  declarations: [FilmComponent],
  imports: [NgbModule]
})
export class FilmComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

}
