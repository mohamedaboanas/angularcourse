import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.scss',
})
export class EnrollComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    password : new FormControl(''),
    confirmPassword: new FormControl(''),
    checkval: new FormControl(''),

    address: new FormGroup({
      country: new FormControl(''),
      state: new FormControl('')
    })
  });

  constructor() {}

  ngOnInit(): void {

  }
}
