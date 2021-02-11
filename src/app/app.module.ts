import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/layout/header/header.module';
import { HomeModule } from './modules/home/home.module';
import { NavigateMenuModule } from './components/navigate-menu/navigate-menu.module';
import { ProfileModule } from './modules/profile/profile.module';
import { NewsModule } from './modules/news/news.module';
import { ThemeService } from './services/theme.service';
import { LayoutService } from './services/layout.service';
import { LogoModule } from './components/logo/logo.module';
import { UpcomingEventsModule } from './components/upcoming-events/upcoming-events.module';
import { EventsManutdService } from './services/events-manutd.service';
import { HttpService } from './services/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SvgSpriteModule } from './components/svg-sprite/svg-sprite.module';
import { EventsCommonService } from './services/events-common.service';
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgSpriteModule,
    HeaderModule,
    UpcomingEventsModule,
    HomeModule,
    NewsModule,
    ProfileModule,
    NavigateMenuModule,
    LogoModule,
    HttpClientModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true,
    }),
  ],
  providers: [
    HttpService,
    HttpClient,
    ThemeService,
    LayoutService,
    EventsManutdService,
    EventsCommonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
