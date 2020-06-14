import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from "./components/layout/header/header.module";
import { HomeModule } from "./modules/home/home.module";
import { NavigateMenuModule } from "./components/navigate-menu/navigate-menu.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { NewsModule } from "./modules/news/news.module";
import { ThemeService } from "./services/theme.service";
import { LayoutService } from "./services/layout.service";
import { LogoModule } from "./components/logo/logo.module";
import { UpcomingEventsModule } from "./components/upcoming-events/upcoming-events.module";
import { EventsManutdService } from "./services/events-manutd.service";
import { HttpService } from "./services/http.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    UpcomingEventsModule,
    HomeModule,
    NewsModule,
    ProfileModule,
    NavigateMenuModule,
    LogoModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    HttpClient,
    ThemeService,
    LayoutService,
    EventsManutdService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
