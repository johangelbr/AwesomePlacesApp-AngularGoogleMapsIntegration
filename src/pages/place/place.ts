import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';
import { Place } from '../../models/place.interface';
import { PlacesService } from '../../services/places.service';


@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  place: Place;
  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private placesService: PlacesService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.place = this.navParams.get('place');
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }
  onRemove(){
    const alert = this.alertCtrl.create({
      title: 'Delete',
      message: 'Sure want to delete '+ this.place.title+'?',
      buttons:[{
        text: 'No',
        role: 'cancel',
        handler: ()=>{
          this.onDismiss();
        }
      },
    {
      text: "Yes, I'm sure",
      handler: () =>{

        this.placesService.removePlace(this.place);
        const toast= this.toastCtrl.create({
          message:'You successfully remove '+ this.place.title,
          duration: 2000,
          position:'top',
          cssClass:'failedToast'
        });
        toast.present();
        this.onDismiss();
      }
    }]
    });
    alert.present();

  }
  onEdit(){

  }
}
