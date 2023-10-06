import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isNavbarCollapsed = false;
  isNavbarFixed: boolean = false;
  activeSectionId: string | null = null;

  @ViewChild('navigationLinks') navigationLinks!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }

    const sections = document.querySelectorAll('section[id]');

    let scrollY = window.scrollY || document.documentElement.scrollTop;

    let activeSectionId: string | null = null;

    sections.forEach((element) => {
      const current = element as HTMLElement;
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        activeSectionId = sectionId;
      }
    });

    if (activeSectionId !== null) {
      this.activeSectionId = activeSectionId;
    } else {
      this.activeSectionId = null;
    }
  }

  ngOnInit(): void {}
}
