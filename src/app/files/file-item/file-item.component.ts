import { EventEmitter, ViewChild, ElementRef, Component, OnInit, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/auth.service';
import { FilesService } from '../files.service';
import { IFileResponse } from '../types/file-response.interface';
import { IUpdateFile } from '../types/update-file.interface';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @ViewChild("titleRef") titleRef!: ElementRef;
  @Input("file") file!: IFileResponse;
  @Output() deleteFileEvent = new EventEmitter<string>();
  public downloadUrl!: string;

  constructor(private authService : AuthService, private snackbar : MatSnackBar, private fileService : FilesService) { }

  ngOnInit(): void {

  }

  onDownload() : void {
    const token = this.authService.getToken;
    const url = `${this.fileService.api_url}/file/download/${this.file._id}/${token}`;
    window.location.href = url;
  }
 
  onEdit() {
    const id = this.file._id || "0";
    const customName = this.titleRef.nativeElement.innerText;

    if (customName === this.file.customName) {
      this.snackbar.open("For Edit Change Title", "", { duration: 3000 });
      return;
    }

    const body: IUpdateFile = {
      id,
      customName 
    }

    this.fileService
      .editFile(body)
      .subscribe(() => {
        this.snackbar.open("File Was Updated", "", {
          duration : 3000
        });
      })
  }

  onDelete() {
    const id = this.file._id || "0";

    this.fileService
      .deleteFile(id)
      .subscribe(() => {
        this.snackbar.open("File Was Deleted", "", {
          duration: 3000
        });

        this.deleteFileEvent.emit(id);
      })
  }


}
