import { Component } from '@angular/core';
import { Location } from '../../models/location.interface';
import { NavParams } from 'ionic-angular';
import { ViewController, ToastController } from 'ionic-angular';



@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
  location: Location;
  isMarker = false;
  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController){
    this.location = this.navParams.get('location');
    this.isMarker = this.navParams.get('marker');
    console.log(this.location);
  }
  onSetMarker(event: any){
    console.log(event);
    this.isMarker = true;
    this.location = new Location(event.coords.lat, event.coords.lng);

  }
  markerIconUrl() {
    return "../../assets/icon/marker.png"
}
onConfirm(){
  this.viewCtrl.dismiss({location: this.location});
  let toast= this.toastCtrl.create({
    message: `
    You have selected a location
    `,
    duration: 2000,
    cssClass: "successToast",
  });
  toast.present();
}
onAbort(){
 this.viewCtrl.dismiss();
}
}
