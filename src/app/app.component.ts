import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLeftBarOpened = true;
  isReversedVariableLayout = false;

  toggleLeftBar(): void {
    this.isLeftBarOpened = !this.isLeftBarOpened;
  }

  toggleVariableLayout(): void {
    this.isReversedVariableLayout = !this.isReversedVariableLayout;
  }
}
