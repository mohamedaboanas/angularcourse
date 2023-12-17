import { Component, OnInit } from '@angular/core';
import { Init } from 'v8';

@Component({
  selector: 'app-hooks-component',
  templateUrl: './hooks-component.component.html',
  styleUrl: './hooks-component.component.scss',
})
export class HooksComponentComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChange(): void {
    console.log('ngOnChange');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
