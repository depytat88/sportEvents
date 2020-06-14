import { NgModule } from '@angular/core';
import { UpcomingEventsComponent } from "./upcoming-events.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ UpcomingEventsComponent ],
  exports: [ UpcomingEventsComponent ]
})
export class UpcomingEventsModule {
}
