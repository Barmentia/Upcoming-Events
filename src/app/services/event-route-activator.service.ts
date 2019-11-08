import { EventService } from './event-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+ route.params.id);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }

    return eventExists;

  }

  // canDeactivate(component: EventDetailsComponent) {
  //   return component.reviewed;
  // }
}
