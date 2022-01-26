import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { IFileResponse } from "./types/file-response.interface";

@Injectable()
export class FilesService {
  public api_url: string = this.authService.api_url;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private authService : AuthService
  ) { }

  getAllFiles() : Observable<any> {
    return this.http.get(`${this.api_url}/file`, {
      headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }),
    })
  }

}