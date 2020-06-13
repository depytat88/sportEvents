import { NgModule } from '@angular/core';
import { LogoComponent } from "./logo.component";
import { LottieAnimationViewModule } from "ng-lottie";

@NgModule({
  imports: [
    LottieAnimationViewModule,
  ],
  declarations: [ LogoComponent ],
  exports: [ LogoComponent ]
})
export class LogoModule {
}
