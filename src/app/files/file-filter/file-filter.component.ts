import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-filter',
  templateUrl: './file-filter.component.html',
  styleUrls: ['./file-filter.component.scss']
})
export class FileFilterComponent implements OnInit {
  @ViewChild("inputRef") inputRef: ElementRef;
  @Output() fileFilterEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submit");
    const { value } = this.inputRef.nativeElement;
    this.fileFilterEvent.emit(value);
    this.inputRef.nativeElement.value = "";
  }

}
