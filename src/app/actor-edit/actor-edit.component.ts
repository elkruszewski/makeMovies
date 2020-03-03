import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {

  actor: Actor = new Actor();

  constructor(private actorsService: ActorService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    var id = this.route.snapshot.params.id;
    this.actorsService.getActor(id).subscribe(response => {
      this.actor = response;
      this.actor.birthdate = new Date(this.actor.birthdate);
    });
  }

  editActor() {
    this.actorsService.updateActor(this.actor).subscribe(response => {
      this.actor = response;
      this.actor.birthdate = new Date(this.actor.birthdate);
      if(this.actor !== undefined) {
        alert("Zedytowano aktora!");
        this.router.navigate(['edit/actors']);
      } else {
        alert("Wystąpił błąd.");
      }
    });
  }

}
