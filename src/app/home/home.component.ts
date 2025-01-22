import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  scrollTo(sectionId: string): void {
    const ele = document.getElementById(sectionId);
    ele && ele.scrollIntoView({ behavior: 'smooth' })
  }
  
}
