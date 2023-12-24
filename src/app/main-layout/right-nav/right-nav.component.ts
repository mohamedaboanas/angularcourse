import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrl: './right-nav.component.scss',
})
export class RightNavComponent implements OnInit {
  // @Input() msg :string = "";
  @Input('msg') message: any;

  @Output() outMessage = new EventEmitter();

  @Output() newListEvent = new EventEmitter<string>();

  addNewItems(value: string) {
    this.newListEvent.emit(value);
    this, this.clearItems();
  }
  clearItems() {
    let val = <HTMLInputElement>document.getElementById('txtVal');
    val.value = '';
  }

  childMsg() {
    this.outMessage.emit('Hello, Parent, I am your child.');
  }

  ngOnInit(): void {}
  
}
