import { NgModule } from '@angular/core';
import { ThemeToggleComponent } from "./theme-toggle.component";
import { CommonModule } from "@angular/common";
import { LottieModule } from 'ngx-lottie';

@NgModule({
  imports: [
    CommonModule,
    LottieModule,
  ],
  declarations: [ ThemeToggleComponent ],
  exports: [ ThemeToggleComponent ]
})
export class ThemeToggleModule {
}
