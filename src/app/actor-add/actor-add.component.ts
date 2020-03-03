import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.css']
})
export class ActorAddComponent implements OnInit {

  @Input() showAdd: boolean;
  @Output() showAddChange = new EventEmitter<boolean>();

  actor: Actor = new Actor();

  constructor(private actorsService: ActorService) { }

  ngOnInit() {
  }

  addActor() {
    this.actor.birthdate = new Date(this.actor.birthdate);
    this.actorsService.addActor(this.actor).subscribe(response => {
      this.actor = response;
      this.actor.birthdate = new Date(this.actor.birthdate);
      if(this.actor !== undefined) {
        alert("Dodano aktora!");
        this.showAdd = false;
        this.showAddChange.emit(this.showAdd);
      } else {
        alert("Wystąpił błąd.");
      }
    });
  }

}
