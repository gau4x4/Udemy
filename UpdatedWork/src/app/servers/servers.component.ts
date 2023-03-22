import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  currentItem = "Test Data";

  addItem(newItem: string) {
   this.currentItem = newItem.trim();
  }
}
