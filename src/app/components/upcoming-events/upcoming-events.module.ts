import { NgModule } from '@angular/core';
import { UpcomingEventsComponent } from './upcoming-events.component';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  imports: [
    CommonModule,
    SvgModule,
  ],
  declarations: [ UpcomingEventsComponent ],
  exports: [ UpcomingEventsComponent ]
})
export class UpcomingEventsModule {
}
