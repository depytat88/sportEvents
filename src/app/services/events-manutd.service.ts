import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';
import { HttpConstants } from '../constants/http.constants';
import { EventConstants } from '../constants/event.constants';

@Injectable({providedIn: 'root'})
export class EventsManutdService {
  events: EventModel[] = [];
  changeManutdEvents: Subject<EventModel[]> = new Subject<EventModel[]>();

  constructor(
    private httpService: HttpService,
  ) {
    this.getNext5Games();
  }

  getNext5Games() {
    this.httpService.get(
      HttpConstants.URL.FOOTBALL.NEXT_5_CLUB_GAMES(
        HttpConstants.URL.FOOTBALL.MANUTD.CLUB_ID
      )
    ).subscribe(
      data => {
        console.error(data);
        data.results.map( it => this.events.push(
          new EventModel(
            it.strEvent,
            EventConstants.TYPES.FOOTBALL,
            it.dateEvent,
            it.strTime,
          )
        ));
        this.changeManutdEvents.next(this.events);
      }
    );
  }
}
