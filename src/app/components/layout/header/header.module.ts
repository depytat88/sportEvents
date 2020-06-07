import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header.component";
import { ThemeToggleModule } from "../../theme-toggle/theme-toggle.module";
import { LayoutToggleModule } from "../../layout-toggle/layout-toggle.module";

@NgModule({
  imports: [
    ThemeToggleModule,
    LayoutToggleModule,
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule {
}
