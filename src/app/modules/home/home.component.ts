import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventsManutdService } from '../../services/events-manutd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [],
  };

  constructor(
    readonly eventsManutdService: EventsManutdService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.eventsManutdService.changeManutdEvents.subscribe((value) => {
      this.calendarOptions.events = value;
      this.cdr.detectChanges();
    });
  }
}
