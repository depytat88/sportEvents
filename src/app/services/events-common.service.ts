import { ChangeDetectorRef, Injectable } from "@angular/core";
import { EventModel } from "../models/event.model";
import { EventsManutdService } from "./events-manutd.service";
import { HttpService } from "./http.service";

@Injectable()
export class EventsCommonService {
  events: EventModel[] = [];
  subscriptions: any[] = [];

  constructor(
    readonly eventsManutdService:  EventsManutdService,
    private httpService: HttpService,
    private cdr: ChangeDetectorRef
  ) {
    this.subscriptions.push(this.eventsManutdService.changeManutdEvents.subscribe((value) => {
      this.events = value;
      this.cdr.detectChanges();
    }));
  }

  dispose() {
    this.subscriptions.forEach(subscription =>subscription.unsubscribe());
  }
}
