import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleStatus = true;

  toggleLeftBar(): void {
    this.toggleStatus = !this.toggleStatus;
  }
}
