import {ChangeDetectionStrategy, Component} from '@angular/core';
import { ThemeService } from "./services/theme.service";

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
  ) {};

  get currentTheme(): boolean {
    console.error(this.themeService.currentTheme);
    return this.themeService.currentTheme;
  }

  toggleLeftBar(): void {
    this.isLeftBarOpened = !this.isLeftBarOpened;
  }

  toggleVariableLayout(): void {
    this.isReversedVariableLayout = !this.isReversedVariableLayout;
  }
}
