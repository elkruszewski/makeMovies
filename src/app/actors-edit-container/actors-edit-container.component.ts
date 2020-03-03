import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actors-edit-container',
  templateUrl: './actors-edit-container.component.html',
  styleUrls: ['./actors-edit-container.component.css']
})
export class ActorsEditContainerComponent implements OnInit {

  actors: Actor[];
  showAdd: boolean = false;

  sortOptions = [
    {label: 'Imie', value: 'name'},
    {label: 'Nazwisko', value: 'surname'}
  ];
  sortKey: string;
  sortField: string;

  constructor(private actorsService: ActorService) { }

  ngOnInit() {
    this.getActors();
  }

  getActors(): void {
    this.actorsService.getActors().subscribe(actors => this.actors = actors);
  }

  deleteActor(actor: Actor): void {
    this.actorsService.deleteActor(actor.id).subscribe(response => {
      if(response.status == 200) {
        this.getActors();
      } else {
        alert("Wystąpił błąd. Kod: "+response.status);
      }
    })
  }

  afterActorAdded() {
    this.showAdd = !this.showAdd;
    this.getActors();
  }
  
  onSortChange(event) {
    let value = event.value;
    this.sortField = value;
  }

}
