import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  // interactionPlugin,
]);

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {
}
