import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateUserDto } from "./types/create-user.dto";
import { environment } from "src/environments/environment"; 
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private snackbar : MatSnackBar) { }
  public isAuth: boolean = false;
  public api_url: string = environment.api_url;

  saveToken(token : string) {
    this.isAuth = true;
    localStorage.setItem("accessToken", token);
  }

  removeToken() {
    this.isAuth = false;
    localStorage.removeItem("accessToken");
  }

  get getToken() {
    const token = localStorage.getItem("accessToken");
    return token ? token : "";
  }

  onCheck() {
    return this.http
      .get(`${this.api_url}/user/check`)
      .subscribe((data: any) => {
        console.log("data", data);
        const { message } = data;
        if (message === "SUCCESS") {
          console.log("SUCCESS", message);
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      })
  }

  onLogin(userData: CreateUserDto) {
    const body = JSON.stringify(userData);
    return this.http
      .post(`${this.api_url}/user/login`, body, {
        headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }),
      })
      .pipe(catchError((response) => {
        const { error } = response;
        this.snackbar.open(error.message);
        throw new Error(error.message);
      }))
      .pipe(map((data : any) => {
        return data.token;
      }))

  }

  onRegistration(userData: CreateUserDto) {
    const body = JSON.stringify(userData);
    return this.http
      .post(`${this.api_url}/user/registration`, body, {
        headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }),
      })
      .pipe(catchError((response) => {
        const { error } = response;
        this.snackbar.open(error.message);
        throw new Error(error.message);
      }))
      .pipe(map((data : any) => {
        return data.token;
      }))
    
  }

  onLogout() {

  }
  
}