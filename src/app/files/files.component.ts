import { AfterViewChecked, Component, OnInit, ViewChild, SimpleChanges, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(FileUploadComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
