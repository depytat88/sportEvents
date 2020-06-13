import { NgModule } from '@angular/core';
import { AppRoutingModule } from "../../../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigateItemComponent } from "./navigate-item.component";
import { LottieAnimationViewModule } from "ng-lottie";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    LottieAnimationViewModule,
  ],
  declarations: [NavigateItemComponent],
  exports: [NavigateItemComponent],
})
export class NavigateItemModule {
}
