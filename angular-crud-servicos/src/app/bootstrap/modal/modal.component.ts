import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare let $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @ViewChild('divModal')
  divModal: ElementRef;

  ngOnInit(): void {
  }

  open() {
    $(this.divModal.nativeElement).modal('show')
  }

  close() {
    $(this.divModal.nativeElement).modal('hide')
  }
}
