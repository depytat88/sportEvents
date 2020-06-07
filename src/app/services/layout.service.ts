import { Injectable } from "@angular/core";

@Injectable()
export class LayoutService {
  currentLayout = true;

  toggleLayout(): void {
    this.currentLayout = !this.currentLayout;
  }
}
