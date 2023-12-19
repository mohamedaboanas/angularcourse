import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  title: string = `hi, angular`;
  _ImgUrl: string = '';
  _ImgName: string = 'Angular';
  _Id: string | number = 5;
  _Width: number = 50;
  _height:number = 20;

  ngOnInit(): void {}
  _Msg() {
    alert(`This is message for you to say welcome to our angular course`);
  }
}
