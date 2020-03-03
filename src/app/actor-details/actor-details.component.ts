import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  actor: Actor = new Actor();

  constructor(private actorsService: ActorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.actorsService.getActor(this.route.snapshot.params.id).subscribe(response => {
      this.actor = response;
      this.actorsService.getActorFilms(this.actor.id).subscribe(response => this.actor.films = response);
    });
  }

}
