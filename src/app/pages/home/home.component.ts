import { Component } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
  //imports: [NgbCarouselModule, NgIf],
  //providers: [NgbCarouselConfig],
})
export class HomeComponent {
  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );

  active = 1;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
  }
}
