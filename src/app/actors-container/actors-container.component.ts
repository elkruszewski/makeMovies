import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actors-container',
  templateUrl: './actors-container.component.html',
  styleUrls: ['./actors-container.component.css']
})
export class ActorsContainerComponent implements OnInit {

  actors: Actor[];

  constructor(private actorsService: ActorService) { }

  ngOnInit() {
    this.getFilms();
  }


  getFilms(): void {
    this.actorsService.getActors().subscribe(actors => this.actors = actors);
  }

}
