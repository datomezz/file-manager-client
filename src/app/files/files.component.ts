import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FilesService } from './files.service';
import { IFileResponse } from './types/file-response.interface';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  constructor(private filesService : FilesService, private dialog: MatDialog) {}
  public userFiles!: IFileResponse[];
  public isLoading: boolean = true;
  public isError: boolean = false;
  public dialogClose: boolean = false;

  openDialog() {
    const dialog = this.dialog.open(FileUploadComponent);

    dialog.componentInstance.fileUploadEvent.subscribe((file) => {
      this.userFiles.push(file);
    })
  }

  ngOnInit(): void {
    this.filesService
      .getAllFiles()
      .pipe(catchError((err) => {
        this.isLoading = false;
        this.isError = true;
        throw new Error(err);
      }))
      .subscribe(data => {
        this.userFiles = data;
        this.isLoading = false;
      });
  }

  deleteFile(id: string) {
    const filtredFiles = this.userFiles.filter(item => item._id !== id);
    this.userFiles = filtredFiles;
  }

}
