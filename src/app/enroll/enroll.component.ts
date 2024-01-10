import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from '../Shared/custom-validation';
import { passwordConfirm } from '../Shared/password-validator';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.scss',
})
export class EnrollComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder, private _serviceEnroll: EnrollService) {}

  // we can use formbuilder to be dynamic
  registerForm = this._formBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          forbiddenNameValidator(/admin/),
        ],
      ],
      password: [''],
      confirmPassword: [''],
      email: [''],
      newEmail: this._formBuilder.array([]),
      subscribe: [false],
      address: this._formBuilder.group({
        country: [''],
        state: [''],
      }),
    },
    { validators: [passwordConfirm] }
  );

  setEmailValidation() {
    this.registerForm.get('subscribe')?.valueChanges.subscribe((checkedVal) => {
      const email = this.registerForm.get('email');

      if (checkedVal) {
        email?.setValidators(Validators.required);
      } else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });
  }

  get _name() {
    return this.registerForm.get('name');
  }

  get _email() {
    return this.registerForm.get('email');
  }

  get _newEmail() {
    return this.registerForm.get('newEmail') as FormArray;
  }

  // patch specific properties
  loadData() {
    this.registerForm.patchValue({
      name: 'Mison Amer',
      address: {
        country: 'Egypt',
        state: 'Cairo',
      },
    });
  }

  addNewEmailControl() {
    this._newEmail.push(this._formBuilder.control(''));
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this._serviceEnroll.enroll(this.registerForm.value).subscribe({
      next(value){console.log('Success',value)},
      error(error){console.error('Failed',error)}
    })
  }

  ngOnInit(): void {}
  // loadData(){
  //     this.registerForm.setValue({
  //       name: 'Mison Amer',
  //       password: 'password',
  //       confirmPassword: 'password',
  //       address: {
  //         country: 'Egypt',
  //         state: 'Cairo'
  //       },
  //       checkval: null
  //     });
  // }

  // static method to load data but it is create every time we need to get tha data, we can use formbuilder to be dynamic
  // registerForm = new FormGroup({
  //   name: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   checkval: new FormControl(''),

  //   address: new FormGroup({
  //     country: new FormControl(''),
  //     state: new FormControl(''),
  //   }),
  // });
}
