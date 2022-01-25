import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @ViewChild("titleRef") titleRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('title', this.titleRef);
  }
 
  onEdit() {
    console.log('title', this.titleRef.nativeElement.innerText);
  }

  ngAfterViewChecked(): void {
    console.log('title', this.titleRef);
  }


}
