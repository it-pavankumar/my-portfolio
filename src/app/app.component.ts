import { Component, HostListener, OnInit } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent, AboutComponent, ExperienceComponent, TestimonialsComponent, ContactComponent, CommonModule]
})


export class AppComponent implements OnInit {
  title = 'my-portfolio';
  isScrolled:boolean = false;
  toggleMenu: boolean = false;

  contentObj = [ 
    { scrollTo : 'home-section', text: 'Home'},
    { scrollTo : 'about-sec', text: 'About'},
    { scrollTo : 'experience', text: 'Experience'},
    { scrollTo : 'testimonials', text: 'Testimonials'},
    { scrollTo : 'contact', text: 'Contact'},
  ]


  @HostListener('window:scroll', [])
    onWindowScroll(): void {
      const scrollTop = window.scrollY | document.documentElement.scrollTop;
      this.isScrolled = scrollTop > 50; 
  }

  scrollTo(sectionId: string): void {
    const ele = document.getElementById(sectionId);
    ele && ele.scrollIntoView({ behavior: 'smooth' })
  }

  ngOnInit(): void {
  }
}
