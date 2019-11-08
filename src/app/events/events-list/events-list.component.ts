import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { ToastrService } from '../../services/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.events = this.eventService.getEvents();

    // This way of getting the data will load the page but the data will be displayed 2 seconds later (as in the service).
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events;
    // });

    // Using this way to get the data, the whole page will be delayed 2 senconds to be rendered, making
    // that delay smoother.
    this.events = this.route.snapshot.data.events;

  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
