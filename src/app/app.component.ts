import {ChangeDetectionStrategy, Component} from '@angular/core';
import { ThemeService } from "./services/theme.service";
import { LayoutService } from "./services/layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isLeftBarOpened = true;
  isReversedVariableLayout = false;

  constructor(
    private themeService: ThemeService,
    private layoutService: LayoutService,
  ) {};

  get currentTheme(): boolean {
    return this.themeService.currentTheme;
  }

  get currentLayout(): boolean {
    return this.layoutService.currentLayout;
  }

  toggleLeftBar(): void {
    this.isLeftBarOpened = !this.isLeftBarOpened;
  }
}
