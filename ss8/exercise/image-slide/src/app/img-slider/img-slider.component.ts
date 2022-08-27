import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImage = [
    'https://toanthaydinh.com/wp-content/uploads/2020/04/tai-anh-thien-nhien-20-1400x788-9.jpg',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://toanthaydinh.com/wp-content/uploads/2020/04/tai-anh-thien-nhien-20-1400x788-9.jpg',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  itemWidth: number;
  config = 1;
  page = 1;
  pageSize = 1;
  p = 1;
  constructor(  @Inject(GalleryConfig)
                @Optional()
                  config: number) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
  }

}
