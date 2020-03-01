import { NgModule } from '@angular/core';
import { NavigateMenuComponent } from "./navigate-menu.component";
import { CommonModule } from "@angular/common";
import { NavigateItemModule } from "./navigate-item.component/navigate-item.module";

@NgModule({
  imports:      [
    CommonModule,
    NavigateItemModule,
  ],
  declarations: [ NavigateMenuComponent ],
  exports: [ NavigateMenuComponent ],
})
export class NavigateMenuModule {}
