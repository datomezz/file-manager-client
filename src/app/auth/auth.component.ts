import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loginForm!: FormGroup;
  public registerForm!: FormGroup;

  constructor(private readonly snackbar : MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "login_username": new FormControl(null, [Validators.required, Validators.minLength(4)]),
      "login_password": new FormControl(null, [Validators.required, Validators.minLength(4)])
    });

    this.registerForm = new FormGroup({
      "reg_username": new FormControl(null, [Validators.required, Validators.minLength(4)]),
      "reg_password": new FormControl(null, [Validators.required, Validators.minLength(4)])
    })
  }

  onSubmit() {
    console.log("submit");
  }

  openSnackbar(msg : string, action :any) {
    this.snackbar.open(msg, action, {
      duration: 2000,
    });
  }

}
