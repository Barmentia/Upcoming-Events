import { IEvent } from '../../models/event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  // Input decorator tells Angular this "eventField" variable will be pass from another component.
  @Input() eventField: IEvent;

  // Example of use of Local variable accessed from a different component.
  // someProterty: any = 'some value';

  constructor() { }

  ngOnInit() {
  }

  getStartTimeClass() {
    // if (this.event && this.event.time === '8:00 am') {
    //   return ['green bold'];
    // }
    // return [];
  }

  getStartTimeStyle() {
    if (this.eventField && this.eventField.time === '8:00 am') {
        return { color: '#003300', 'font-weight': 'bold'};
      }
    return {};
  }

  // logFoo() {
  //   console.log('foo');
  // }
}
