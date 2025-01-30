import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { CommonServService } from '../common-serv.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [CommonModule, ModalComponent]
})
export class AboutComponent {

  cvPath: string = 'assets/CV_Naga Pavan Kumar_FS_Dev.pdf';
  clPath: string = 'assets/CL_Naga Pavan Kumar_FS_Dev.pdf';

  constructor(private _commonServ: CommonServService) {}
  
  setPath(val: string) {
    val == 'cv' ? this._commonServ.setFilePath(this.cvPath) : this._commonServ.setFilePath(this.clPath); 
  }

}
