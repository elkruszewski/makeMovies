import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {ModuleWithProviders} from "@angular/core";
import { FilmsContainerComponent } from './films-container/films-container.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ActorsContainerComponent } from './actors-container/actors-container.component';
import { FilmsEditContainerComponent } from './films-edit-container/films-edit-container.component';
import { FilmEditComponent } from './film-edit/film-edit.component';
import { ActorsEditContainerComponent } from './actors-edit-container/actors-edit-container.component';
import { ActorEditComponent } from './actor-edit/actor-edit.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: FilmsContainerComponent},
  {path: 'film/:id', component: FilmDetailsComponent},
  {path: 'actors', component: ActorsContainerComponent},
  {path: 'edit/films', component: FilmsEditContainerComponent, },
  {path: 'edit/films/:id', component: FilmEditComponent, },
  {path: 'edit/actors', component: ActorsEditContainerComponent,},
  {path: 'edit/actors/:id', component: ActorEditComponent, },
  {path: 'actor/:id', component: ActorDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }