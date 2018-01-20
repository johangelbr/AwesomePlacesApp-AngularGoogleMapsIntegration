import { Component } from '@angular/core';
import { AddPlacePage } from '../add-place/add-place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  goToAddPlacePage = AddPlacePage;
  constructor() {

  }

}
