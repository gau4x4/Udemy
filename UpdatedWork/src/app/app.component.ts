import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'UpdatedWork';
  menuOption = 'recipe';
  onMenuSelected(option: string) {
    this.menuOption = option;
  }
}
