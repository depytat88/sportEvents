import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutService } from "../../services/layout.service";

@Component({
  selector: 'app-layout-toggle',
  templateUrl: './layout-toggle.component.html',
  styleUrls: ['./layout-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutToggleComponent {

  constructor(
    private layoutService: LayoutService,
  ) {};

  get currentLayout(): boolean {
    return this.layoutService.currentLayout;
  }

  toggleLayout(): void {
    this.layoutService.toggleLayout();
  }
}
