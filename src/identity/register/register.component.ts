import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../../app/Classes/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  favorites: string[] = ['Quraan', 'Reading', 'Swimming', 'Football'];
  hasError: boolean = false;
  registerModel = new Register(
    '',
    'mohamedamer283@gmail.com',
    '01003946056',
    'default',
    'Egypt'
  );
  constructor() {}

  Favisvalid(value: string) {
    if (value === 'default') this.hasError = true;
    else this.hasError = false;
  }
}
