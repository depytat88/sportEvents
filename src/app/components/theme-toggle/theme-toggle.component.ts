import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from "../../services/theme.service";
import { LottiConfigModel } from "../../models/lotti-config.model";
import { IconsConstants } from "../../constants/icons.constants";

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {


  constructor(
    private themeService: ThemeService,
  ) {};

  get currentTheme(): boolean {
    return this.themeService.currentTheme;
  }

  get lottieConfig(): any {
    return new LottiConfigModel(
      `../../assets/animated-icons/icons8/${this.getThemeIcon()}`,
      );
  }

  getThemeIcon(): any {
    return this.currentTheme ?
      IconsConstants.ANIMATED_ICONS.DAY_ICON :
      IconsConstants.ANIMATED_ICONS.NIGHT_ICON;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
