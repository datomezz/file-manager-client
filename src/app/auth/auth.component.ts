import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CreateUserDto } from './types/create-user.dto';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loginForm!: FormGroup;
  public registerForm!: FormGroup;
  public isAuth: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "login_username": new FormControl(null, [Validators.required, Validators.minLength(4)]),
      "login_password": new FormControl(null, [Validators.required, Validators.minLength(4)])
    });

    this.registerForm = new FormGroup({
      "reg_username": new FormControl(null, [Validators.required, Validators.minLength(4)]),
      "reg_password": new FormControl(null, [Validators.required, Validators.minLength(4)])
    });

    this.authService.isAuth.subscribe((bool: boolean) => {
      this.isAuth = bool;
    });

    if (this.isAuth) {
      this.router.navigate(["/files"]);
    }
  }

  onLogin() {
    const { value } = this.loginForm;
    const userData: CreateUserDto = {
      username : value.login_username,
      password : value.login_password
    }

    this.authService
      .onLogin(userData)
      .subscribe((token) => {
        this.authService.saveToken(token);
        this.router.navigate(["/files"]);
      });
      
  }

  onRegistration() {
    const { value } = this.registerForm;
    const userData: CreateUserDto = {
      username : value.reg_username,
      password : value.reg_password
    }

    this.authService
      .onRegistration(userData)
      .subscribe((token: string) => {
        this.authService.saveToken(token);
        this.router.navigate(["/files"]);
      })
  }

}
