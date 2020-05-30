import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from "./components/layout/header/header.module";
import { HomeModule } from "./modules/home/home.module";
import { NavigateMenuModule } from "./components/navigate-menu/navigate-menu.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { NewsModule } from "./modules/news/news.module";
import {ThemeService} from "./services/theme.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    NewsModule,
    ProfileModule,
    NavigateMenuModule,
  ],
  providers: [ ThemeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
