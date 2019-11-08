import { EventsListResolverService } from './../services/events-list-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details.component';
import { EventsListComponent } from '../events/events-list/events-list.component';
import { CreateEventComponent } from 'src/app/events/create-event/create-event.component';
import { NotFoundComponent } from './../errors/not-found.component';
import { EventRouteActivatorService } from './../services/event-route-activator.service';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  // { path: 'events', component: EventsListComponent },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './../user/user.module#UserModule' } // this will be lazy loading: it will load only
  // when the user goes to the 'user' path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
