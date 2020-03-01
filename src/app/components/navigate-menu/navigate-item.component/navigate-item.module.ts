import { NgModule } from '@angular/core';
import { AppRoutingModule } from "../../../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigateItemComponent } from "./navigate-item.component";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [NavigateItemComponent],
  exports: [NavigateItemComponent],
})
export class NavigateItemModule {
}
