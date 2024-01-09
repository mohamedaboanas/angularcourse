import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../../app/Classes/register';
import { EnrolmentService } from '../../app/Services/enrolment.service';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  favorites: string[] = ['Quraan', 'Reading', 'Swimming', 'Football'];
  hasError: boolean = false;
  finshed: boolean = false;

  registerModel = new Register(
    '',
    'mohamedamer283@gmail.com',
    '01003946056',
    'default',
    'Egypt'
  );
  constructor(private _service: EnrolmentService) {}

  submitData(formInfo: any) {
    console.log(formInfo);
    this._service.FormPost(this.registerModel).subscribe({
      next: (data) => console.log('Success', data),
      error: (error) => console.log('error', error),
      complete: () => console.info('Done'),
    });
    this.finshed = true;
  }

  Favisvalid(value: string) {
    if (value === 'default') this.hasError = true;
    else this.hasError = false;
  }
}
