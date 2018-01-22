import { Injectable } from "@angular/core";

import { Place } from "../models/place.interface";
import { Storage } from '@ionic/storage';
import { AlertController, ToastController, Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';
declare var cordova:any;
@Injectable()
export class PlacesService{
  private places: Place[] = [];
  dataUrl:string;
  constructor(private storage: Storage,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private file: File,
    private platform: Platform){


  }
  addPlace(place: Place){
    if(this.places.length === 0){
      this.places.push(place);
    } else {
      const pos = this.places.findIndex((placeEl: Place) => {
        return placeEl.title === place.title;
      });
      if(pos === -1){
        this.places.push(place);
      } else {
        return false;
      }
    }
    this.storage.set('places', this.places).then(
      data =>{
        return true;
      }
    ).catch(err => {
      this.places.splice(this.places.indexOf(place),1);
    });
  }
  loadPlaces(){
    return this.places.slice();
  }
  fetchPlaces(){
    return this.storage.get('places')
    .then(
      (places: Place[])=>{
        this.places = places != null? places:[];
        let toast = this.toastCtrl.create({
          message: 'Places loaded ('+this.places.length+')',
          duration: 3000,
          cssClass: "successToast"
        });
        toast.present();
        return this.places.slice();
      }
    )
    .catch(err => {
      let alert = this.alertCtrl.create({
        title: 'Error getting data from storage',
        message : 'You may need to try again!',
        buttons: ['Ok']
      });
      alert.present();
    });
  }
  removePlace(place:Place){

    const pos = this.places.findIndex((placeEl: Place) => {
      return placeEl.title === place.title;
    });
    this.places.splice(pos,1);
    this.storage.set('places', this.places).then(
      ()=> {
        this.removeFile(place);
      }
    )
    .catch(err =>{
      console.log(err);
    });

  }
  private removeFile(place: Place){
    this.platform.ready().then(() => {
      this.dataUrl = cordova.file.dataDirectory;

    });
    const currentName = place.imagePath.replace(/^.*[\\\/]/, '');
    this.file.removeFile(this.dataUrl,currentName).then(()=>{

    })
    .catch(err => {
     console.log(err);
    });
  }
}
