import { Component } from '@angular/core';

import { GiphyService } from '../api/giphy.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  protected item: any = {image: ''};

  constructor(
    protected giphyService: GiphyService
  ) {
    this.initialize();
  }

  initialize() {
  this.getImage();
  }

  getImage(): void {
    const emotions = ['happy', 'sad', 'depressed', 'healthy'];
    const randomNumber: number = Math.floor(Math.random() * 4) + 1; 
    this.giphyService.getImage(emotions[randomNumber - 1]).subscribe(
          (image) => {
            this.item.image = image.data[0].images.downsized_medium.url;
          }
    );
  }

  shuffle() {
    this.getImage();
  }

}
