import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component-Amer-PC.html',
  styleUrl: './header.component-Amer-PC.scss',
})
export class HeaderComponent implements OnInit {
  title: string = `hi, angular`;
  _ImgUrl: string = '';
  _ImgName: string = 'Angular';
  _Id: string | number = 5;
  _Width: number = 50;
  _height: number = 20;

  _attrVal: string = 'val-of-attribute';
  _btnName: string = 'Click here';

  _error: boolean = false;

  _applyClass = {
    'txt-danger': !this._error,
    'txt-success': this._error,
    fontSize: this._error,
  };

  _myStyle = {
    'background-color': 'red',
    'font-weight': 'bold',
    'font-size': '30px',
  };

  _btnTitle: string = `Get Data`;
  _inputVal: string = '';
  _liveData: string = '';

  ngOnInit(): void {}
  _Msg() {
    alert(`This is message for you to say welcome to our angular course`);
  }

  _getData(event: any) {
    console.log(event);
    alert(`You click button to get data from database, please confirm`);
  }
  getDate() {
    console.log(new Date());
  }
  getValues(_input: any) {
    this._inputVal = _input.value;
  }
}
