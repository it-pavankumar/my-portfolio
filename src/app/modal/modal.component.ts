import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, Input, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonServService } from '../common-serv.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalComponent implements OnInit {

  pdfUrl: string = '';

  constructor(private _commonServ: CommonServService) {
    effect(() => {
      console.log('effect triggered');
      this.pdfUrl= this._commonServ.pathUrl();
      console.log(this.pdfUrl);
    });
  }

  ngOnInit () {}
  
}
