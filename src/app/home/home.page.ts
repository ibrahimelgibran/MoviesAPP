import { Component } from '@angular/core';
import { videos } from '../../assets/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public movies = videos;
  constructor() {}
}
