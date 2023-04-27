import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChildParentCommunication';

  currentItem = 'Television'; // sending this data to the child component

  items = ['item1', 'item2', 'item3', 'item4']; // receiving input to this data from the child component

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
