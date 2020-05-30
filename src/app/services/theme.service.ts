import { Injectable } from "@angular/core";

@Injectable()
export class ThemeService {
  currentTheme = true;

  toggleTheme(): void {
    this.currentTheme = !this.currentTheme;
  }
}
