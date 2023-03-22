import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: [],
})
export class ServerComponent {
  @Input() Item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    console.log(value);
    this.newItemEvent.emit(value);
  }

}
