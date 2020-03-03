import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmsContainerComponent } from './films-container/films-container.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {DataViewModule} from 'primeng/dataview';
import {MultiSelectModule} from 'primeng/multiselect';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {ToolbarModule} from 'primeng/toolbar';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './/app-routing.module';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ActorsContainerComponent } from './actors-container/actors-container.component';
import { ActorComponent } from './actor/actor.component';
import { FilmsEditContainerComponent } from './films-edit-container/films-edit-container.component';
import { FilmEditComponent } from './film-edit/film-edit.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { ActorsEditContainerComponent } from './actors-edit-container/actors-edit-container.component';
import { ActorAddComponent } from './actor-add/actor-add.component';
import { ActorEditComponent } from './actor-edit/actor-edit.component';
import {DataScrollerModule} from 'primeng/datascroller';
import {DropdownModule} from 'primeng/dropdown';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor } from './jwt.interceptor';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmsContainerComponent,
    FilmDetailsComponent,
    ActorsContainerComponent,
    ActorComponent,
    FilmsEditContainerComponent,
    FilmEditComponent,
    FilmAddComponent,
    ActorsEditContainerComponent,
    ActorAddComponent,
    ActorEditComponent,
    ActorDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CardModule,
    CalendarModule,
    FieldsetModule,
    MultiSelectModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    DataScrollerModule,
    ToolbarModule,
    DataViewModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
