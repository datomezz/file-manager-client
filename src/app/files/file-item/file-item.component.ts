import { ViewChild, ElementRef, Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { FilesService } from '../files.service';
import { IFileResponse } from '../types/file-response.interface';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @ViewChild("titleRef") titleRef!: ElementRef;
  @Input("file") file!: IFileResponse;
  public downloadUrl!: string;

  constructor(private authService : AuthService, private router : Router, private fileService : FilesService) { }

  ngOnInit(): void {
    console.log("file", this.file._id)
    console.log('title', this.titleRef);
  }

  onDownload() : void {
    const token = this.authService.getToken;
    const url = `${this.fileService.api_url}/file/download/${this.file._id}/${token}`;
    window.location.href = url;
  }
 
  onEdit() {
    console.log('title', this.titleRef.nativeElement.innerText);
  }



}
