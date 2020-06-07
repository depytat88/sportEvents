import { NgModule } from '@angular/core';
import { LayoutToggleComponent } from "./layout-toggle.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ LayoutToggleComponent ],
  exports: [ LayoutToggleComponent ]
})
export class LayoutToggleModule {
}
