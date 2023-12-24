import { Component, OnInit, ViewChild } from '@angular/core';
import { RightNavComponent } from './right-nav/right-nav.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component-Amer-PC.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit {
  _msg: string = 'Hello, Child I am Your Parent.';
  childMsg: string = '';

  ToDoList = ['Study', 'Work', 'Play'];

  addToList(value: string) {
    this.ToDoList.push(value);
  }

  @ViewChild(RightNavComponent) navChild: RightNavComponent | undefined;
  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.ToDoList;
  }
}
