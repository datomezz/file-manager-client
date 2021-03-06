import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { IUpdateFile } from "./types/update-file.interface";

@Injectable()
export class FilesService {
  public api_url: string = this.authService.api_url;

  constructor(
    private http: HttpClient,
    private authService : AuthService
  ) { }

  getAllFiles() : Observable<any> {
    return this.http.get(`${this.api_url}/file`, {
      headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }),
    })
  }

  editFile(body : IUpdateFile): Observable<any> {
    return this.http
      .put(`${this.api_url}/file/edit`, body)
  }

  deleteFile(id: string): Observable<any> {
    return this.http
      .post(`${this.api_url}/file/delete`, {id})
  }

  uploadFile(file) : Observable<any> {
    const formData = new FormData();
    formData.append("file", file);

    return this.http
      .post(`${this.api_url}/file/upload`, formData); 
  }

  filterFiles(filename: string): Observable<any> {
    return this.http
      .get(`${this.api_url}/file/search/${filename}`)
  }

}