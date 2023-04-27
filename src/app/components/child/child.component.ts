import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item = ''; // receiving data from the parent component

  @Output() newItemEvent = new EventEmitter<string>(); // Sending data to the parent component


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
