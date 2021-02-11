import { NgModule } from '@angular/core';
import { LogoComponent } from "./logo.component";
import { LottieModule } from 'ngx-lottie';

@NgModule({
  imports: [ LottieModule ],
  declarations: [ LogoComponent ],
  exports: [ LogoComponent ]
})
export class LogoModule {
}
