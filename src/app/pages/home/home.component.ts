import { Component, ViewEncapsulation } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  //imports: [NgbCarouselModule, NgIf],
  //providers: [NgbCarouselConfig],
})
export class HomeComponent {
  closeResult!: string;
  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );

  active = 1;

  constructor(config: NgbCarouselConfig, private modalService: NgbModal) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
