import { Component, HostListener } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent, AboutComponent, ExperienceComponent, ContactComponent]
})


export class AppComponent {
  title = 'my-portfolio';
  isScrolled:boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY | document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50; 
  }
  
}
