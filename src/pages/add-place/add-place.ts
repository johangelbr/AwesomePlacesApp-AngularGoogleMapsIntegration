import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController, LoadingController, AlertController, NavController, Platform } from 'ionic-angular';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location.interface';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file'
import { PlacesService } from '../../services/places.service';
import { Place } from '../../models/place.interface';
import { HomePage } from '../home/home';

declare var cordova: any;





@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  location: Location ={
    lat: 19.458904245220705,
    lng:-70.68689346313477
  };
  marker: Location;
  imageUrl = '';
  place: Place;
  dataUrl:string;
  constructor(private modalCtrl: ModalController,
    private geolocation: Geolocation,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private camera: Camera,
    private alertCtrl: AlertController,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private file: File,
    private platform: Platform) {

  }


  onOpenMap(){
    console.log(this.location);
    let modal;
    if(!this.marker){
       modal = this.modalCtrl.create(SetLocationPage, {location: this.location , marker: false});
    }else{
       modal = this.modalCtrl.create(SetLocationPage, {location: this.marker,  marker: true});
    }

    modal.present();
    modal.onDidDismiss( (data) => {
      if(data){
        this.marker = data.location;
        console.log(this.marker);
      }

    });

  }
  onLocate(){
    let loading = this.loadingCtrl.create({
      content: 'Getting your location...',
      spinner: 'dots'
    });
    loading.present();
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.marker = new Location(resp.coords.latitude,resp.coords.longitude);
      console.log(this.marker);
      console.log(resp);
      let toast = this.toastCtrl.create({
        message: 'You have been located!',
        duration: 2000,
        cssClass: 'successToast'
      });
      loading.dismiss();
      toast.present();

    })
    .catch((error) => {
      console.log(error);
      let toast = this.toastCtrl.create({
        message: 'Something went wrong, please pick manually or try again!',
        duration: 2000,
        position: 'top',
        cssClass: 'failedToast'
      });
      loading.dismiss();
      toast.present();

    });

  }
  onTakePhoto(){


    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.platform.ready().then(() => {
        this.dataUrl = cordova.file.dataDirectory;

      });
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.imageUrl = 'data:image/jpeg;base64,' + imageData;
     console.log(this.imageUrl);
    const currentName: string = imageData.replace(/^.*[\\\/]/, '');
    // const currentNameSplit = imageData.split('\\').pop().split('/').pop();
    const path: string = imageData.replace(/[^\/]*$/,'');
    const imageName = this.place.title+'.jpg';
    this.file.moveFile(path, currentName, this.dataUrl, imageName)
    .then(
      (data) => {
        this.imageUrl = data.nativeURL;
        const toast = this.toastCtrl.create({
          message:'Your photo has been added!',
          duration: 5000,
          cssClass:"successToast"
        });
        toast.present();
        this.camera.cleanup();
      }
    )
    .catch(
      err => {
        let toast = this.toastCtrl.create({
          message: 'Could not save the image in local storage. Please try again!',
          duration: 5000,
          cssClass: "failedToast",
          position: 'top'
        });
        toast.present();
        alert('Failed');
        this.camera.cleanup();
      }
    );
    }, (err) => {
      this.displayErrorAlert(err);
    });
  }
  onSubmit(form: NgForm){
    this.place = new Place(form.value.title, form.value.description, this.marker,this.imageUrl);
    let added = this.placesService.addPlace(this.place);
    if(added){
      let toast = this.toastCtrl.create({
        message: 'You added '+ this.place.title+' to your places',
        duration: 2000,
        cssClass: 'successToast'
      });
      toast.present();
    }
    if(added == false){
      let toast = this.toastCtrl.create({
        message: 'The place '+ this.place.title+' is already added, try editing',
        duration: 2000,
        position: 'top',
        cssClass: 'failedToast'
      });
      toast.present();

    }
    form.reset();
      this.location = {
        lat: 19.458904245220705,
        lng:-70.68689346313477
      };
      this.imageUrl = '';
      this.marker = null;
      this.navCtrl.setRoot(HomePage);
  }
  markerIconUrl() {
    return "../../assets/icon/marker.png"
}
displayErrorAlert(err){
  console.log(err);
  let alert = this.alertCtrl.create({
     title: 'Error',
     subTitle: 'Error while trying to capture picture',
     buttons: ['OK']
   });
   alert.present();
}
}
