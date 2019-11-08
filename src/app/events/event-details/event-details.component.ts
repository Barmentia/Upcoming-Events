import { EventService } from './../../services/event-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  reviewed: false;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // + is to cast the value as a number, otherwise it'll pass a string.
    this.event = this.eventService.getEvent(+ this.route.snapshot.params.id);
  }

}
