import { Component } from '@angular/core';
import { AddPlacePage } from '../add-place/add-place';
import { Place } from '../../models/place.interface';
import { PlacesService } from '../../services/places.service';
import { ModalController } from 'ionic-angular';
import { PlacePage } from '../place/place';
import { OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  goToAddPlacePage = AddPlacePage;
  places: Place [] = [];
  constructor(
    private placesService: PlacesService,
    private modalCtrl: ModalController) {

  }
  onOpenPlace(place: Place){
    const modal = this.modalCtrl.create(PlacePage, {place: place});
    modal.present();
    modal.onDidDismiss(()=>{
      this.ionViewWillEnter();
    })
  }

  ionViewWillEnter(){
      this.places = this.placesService.loadPlaces();
  }
  ngOnInit(){
    this.placesService.fetchPlaces().then(
      (places: Place[]) => this.places= places
    ).catch(err => {
      alert(err);
    });


  }
}
