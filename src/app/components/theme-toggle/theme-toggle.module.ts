import { NgModule } from '@angular/core';
import { ThemeToggleComponent } from "./theme-toggle.component";
import { CommonModule } from "@angular/common";
import { LottieAnimationViewModule } from "ng-lottie";

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule,
  ],
  declarations: [ ThemeToggleComponent ],
  exports: [ ThemeToggleComponent ]
})
export class ThemeToggleModule {
}
