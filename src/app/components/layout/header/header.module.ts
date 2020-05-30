import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header.component";
import { ThemeToggleModule } from "../../theme-toggle/theme-toggle.module";

@NgModule({
  imports: [
    ThemeToggleModule,
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule {
}
