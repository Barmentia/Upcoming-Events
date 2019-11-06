import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details.component';
import { EventsListComponent } from '../events/events-list/events-list.component';
import { CreateEventComponent } from 'src/app/events/create-event/create-event.component';
import { NotFoundComponent } from './../errors/not-found.component';
import { EventRouteActivatorService } from './../services/event-route-activator.service';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
