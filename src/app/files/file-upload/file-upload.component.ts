import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilesService } from '../files.service';
import { IFileResponse } from '../types/file-response.interface';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @ViewChild("inputRef") inputRef: ElementRef;
  @Output() fileUploadEvent = new EventEmitter<IFileResponse>();

  constructor(private dialog : MatDialog, private snackbar : MatSnackBar, private filesService : FilesService) { }

  ngOnInit(): void {
    
  }

  onUpload() {
    const file = this.inputRef.nativeElement?.files[0];
    this.filesService.uploadFile(file)
      .subscribe(data => {
        this.fileUploadEvent.emit(data);
        this.snackbar.open("File Was Uploaded", "", { duration: 3000 });
        this.dialog.closeAll();
      })
  }

}
