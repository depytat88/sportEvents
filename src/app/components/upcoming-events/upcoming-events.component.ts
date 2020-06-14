import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core';
import { EventsCommonService } from "../../services/events-common.service";
import { EventModel } from "../../models/event.model";
import { EventConstants } from "../../constants/event.constants";

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventsCommonService],
})
export class UpcomingEventsComponent implements OnDestroy {
  events: EventModel[] = [];

  constructor(
    private eventsCommonService: EventsCommonService,
  ) {}

  get eventsList() {
    return this.eventsCommonService.events;
  }

  ngOnDestroy(){
    this.eventsCommonService.dispose();
  }

  setColorIndicatorClass(eventType: string): string {
    let className = '';

    switch (eventType) {
      case EventConstants.TYPES.FOOTBALL:
        className = "_football";
        break;
      case EventConstants.TYPES.UFC:
        className = "_ufc";
        break;
      case EventConstants.TYPES.BOXING:
        className = "_boxing";
        break;
    }

    return className;
  }
}
