webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_place_add_place__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_place__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(placesService, modalCtrl) {
        this.placesService = placesService;
        this.modalCtrl = modalCtrl;
        this.goToAddPlacePage = __WEBPACK_IMPORTED_MODULE_1__add_place_add_place__["a" /* AddPlacePage */];
        this.places = [];
    }
    HomePage.prototype.onOpenPlace = function (place) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__place_place__["a" /* PlacePage */], { place: place });
        modal.present();
        modal.onDidDismiss(function () {
            _this.ionViewWillEnter();
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.places = this.placesService.loadPlaces();
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesService.fetchPlaces().then(function (places) { return _this.places = places; }).catch(function (err) {
            alert(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\IonicApps\AmazingPlacesApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons end>\n      <button ion-button icon-only [navPush]="goToAddPlacePage">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Awesome Places\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-background-page" >\n  <ion-card *ngFor="let place of places" (click)="onOpenPlace(place)" text-wrap>\n    <img [src]="place.imagePath" >\n        <div class="card-title">\n        {{ place.title }}\n        </div>\n        <div class="card-subtitle">{{place.description}}</div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\IonicApps\AmazingPlacesApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_location_set_location__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_location_interface__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_places_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_place_interface__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddPlacePage = (function () {
    function AddPlacePage(modalCtrl, geolocation, toastCtrl, loadingCtrl, camera, alertCtrl, placesService, navCtrl, file, platform) {
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.placesService = placesService;
        this.navCtrl = navCtrl;
        this.file = file;
        this.platform = platform;
        this.location = {
            lat: 19.458904245220705,
            lng: -70.68689346313477
        };
        this.imageUrl = '';
    }
    AddPlacePage.prototype.onOpenMap = function () {
        var _this = this;
        console.log(this.location);
        var modal;
        if (!this.marker) {
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__set_location_set_location__["a" /* SetLocationPage */], { location: this.location, marker: false });
        }
        else {
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__set_location_set_location__["a" /* SetLocationPage */], { location: this.marker, marker: true });
        }
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.marker = data.location;
                console.log(_this.marker);
            }
        });
    };
    AddPlacePage.prototype.onLocate = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Getting your location...',
            spinner: 'dots'
        });
        loading.present();
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.marker = new __WEBPACK_IMPORTED_MODULE_3__models_location_interface__["a" /* Location */](resp.coords.latitude, resp.coords.longitude);
            console.log(_this.marker);
            console.log(resp);
            var toast = _this.toastCtrl.create({
                message: 'You have been located!',
                duration: 2000,
                cssClass: 'successToast'
            });
            loading.dismiss();
            toast.present();
        })
            .catch(function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Something went wrong, please pick manually or try again!',
                duration: 2000,
                position: 'top',
                cssClass: 'failedToast'
            });
            loading.dismiss();
            toast.present();
        });
    };
    AddPlacePage.prototype.onTakePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.platform.ready().then(function () {
                _this.dataUrl = cordova.file.dataDirectory;
            });
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imageUrl = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.imageUrl);
            var currentName = imageData.replace(/^.*[\\\/]/, '');
            // const currentNameSplit = imageData.split('\\').pop().split('/').pop();
            var path = imageData.replace(/[^\/]*$/, '');
            var imageName = _this.place.title + '.jpg';
            _this.file.moveFile(path, currentName, _this.dataUrl, imageName)
                .then(function (data) {
                _this.imageUrl = data.nativeURL;
                var toast = _this.toastCtrl.create({
                    message: 'Your photo has been added!',
                    duration: 5000,
                    cssClass: "successToast"
                });
                toast.present();
                _this.camera.cleanup();
            })
                .catch(function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Could not save the image in local storage. Please try again!',
                    duration: 5000,
                    cssClass: "failedToast",
                    position: 'top'
                });
                toast.present();
                alert('Failed');
                _this.camera.cleanup();
            });
        }, function (err) {
            _this.displayErrorAlert(err);
        });
    };
    AddPlacePage.prototype.onSubmit = function (form) {
        this.place = new __WEBPACK_IMPORTED_MODULE_8__models_place_interface__["a" /* Place */](form.value.title, form.value.description, this.marker, this.imageUrl);
        var added = this.placesService.addPlace(this.place);
        if (added) {
            var toast = this.toastCtrl.create({
                message: 'You added ' + this.place.title + ' to your places',
                duration: 2000,
                cssClass: 'successToast'
            });
            toast.present();
        }
        if (added == false) {
            var toast = this.toastCtrl.create({
                message: 'The place ' + this.place.title + ' is already added, try editing',
                duration: 2000,
                position: 'top',
                cssClass: 'failedToast'
            });
            toast.present();
        }
        form.reset();
        this.location = {
            lat: 19.458904245220705,
            lng: -70.68689346313477
        };
        this.imageUrl = '';
        this.marker = null;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    AddPlacePage.prototype.markerIconUrl = function () {
        return "../../assets/icon/marker.png";
    };
    AddPlacePage.prototype.displayErrorAlert = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error while trying to capture picture',
            buttons: ['OK']
        });
        alert.present();
    };
    AddPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-place',template:/*ion-inline-start:"C:\IonicApps\AmazingPlacesApp\src\pages\add-place\add-place.html"*/'\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Add a Place</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)" >\n    <ion-list >\n      <ion-item>\n        <ion-label fixed>Title</ion-label>\n        <ion-input\n        type="text"\n        placeholder="Awesome Place"\n        name="title"\n        ngModel\n        required\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Short Description</ion-label>\n          <ion-textarea\n          name="description"\n          ngModel\n          required\n          ></ion-textarea>\n        </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button\n          ion-button\n          block\n          outline\n          type="button"\n          icon-left\n          (click)="onLocate()">\n        <ion-icon name="locate"></ion-icon>Locate me</button>\n        </ion-col>\n        <ion-col >\n          <button\n          ion-button\n          block\n          outline\n          type="button"\n          icon-left\n          (click)="onOpenMap()">\n          <ion-icon name="map"></ion-icon>\n          Select on Map</button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="marker!=null || marker" text-center>\n        <ion-col>\n          <agm-map [latitude]="marker.lat" [longitude]="marker.lng" [zoom]=16 [gestureHandling]="none" [mapDraggable]="false" [clickableIcons]="false">\n            <agm-marker [latitude]="marker.lat" [longitude]="marker.lng"\n            *ngIf="marker" ></agm-marker>\n          </agm-map>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center *ngIf="imageUrl==\'\'" >\n          <h5>Take a Photo!</h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col >\n          <button ion-button\n\n          block\n          outline\n          type="button"\n          (click)="onTakePhoto()"\n          icon-left>\n        <ion-icon name="camera">\n          Open Camera\n        </ion-icon></button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngIf="imageUrl!=\'\'">\n          <div text-center>\n              <img [src]="imageUrl">\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col >\n          <button ion-button\n          color="secondary"\n          block\n          type="submit"\n          [disabled]="!f.valid || !marker || imageUrl==\'\'">Add this place</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\IonicApps\AmazingPlacesApp\src\pages\add-place\add-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], AddPlacePage);
    return AddPlacePage;
}());

//# sourceMappingURL=add-place.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_location_interface__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetLocationPage = (function () {
    function SetLocationPage(navParams, viewCtrl, toastCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.isMarker = false;
        this.location = this.navParams.get('location');
        this.isMarker = this.navParams.get('marker');
        console.log(this.location);
    }
    SetLocationPage.prototype.onSetMarker = function (event) {
        console.log(event);
        this.isMarker = true;
        this.location = new __WEBPACK_IMPORTED_MODULE_1__models_location_interface__["a" /* Location */](event.coords.lat, event.coords.lng);
    };
    SetLocationPage.prototype.markerIconUrl = function () {
        return "../../assets/icon/marker.png";
    };
    SetLocationPage.prototype.onConfirm = function () {
        this.viewCtrl.dismiss({ location: this.location });
        var toast = this.toastCtrl.create({
            message: "\n    You have selected a location\n    ",
            duration: 2000,
            cssClass: "successToast",
        });
        toast.present();
    };
    SetLocationPage.prototype.onAbort = function () {
        this.viewCtrl.dismiss();
    };
    SetLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-location',template:/*ion-inline-start:"C:\IonicApps\AmazingPlacesApp\src\pages\set-location\set-location.html"*/'\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Choose Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col >\n        <agm-map [latitude]="location.lat" [longitude]="location.lng" [zoom]=15 (mapClick)="onSetMarker($event)">\n          <agm-marker [latitude]="location.lat" [longitude]="location.lng"\n          *ngIf="location && isMarker" ></agm-marker>\n        </agm-map>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <button ion-button\n        block\n        color="primary"\n        (click)="onConfirm()"\n        [disabled]="!isMarker"\n        icon-left>\n        <ion-icon name="checkmark-circle"></ion-icon>\n        Confirm</button>\n      </ion-col>\n      <ion-col >\n        <button ion-button\n        block\n        color="secondary"\n        (click)="onAbort()"\n        icon-left>\n        <ion-icon name="undo"></ion-icon>\n        Abort</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\IonicApps\AmazingPlacesApp\src\pages\set-location\set-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], SetLocationPage);
    return SetLocationPage;
}());

//# sourceMappingURL=set-location.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return Location;
}());

//# sourceMappingURL=location.interface.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacePage = (function () {
    function PlacePage(navParams, viewCtrl, placesService, alertCtrl, toastCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.placesService = placesService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.place = this.navParams.get('place');
    }
    PlacePage.prototype.onDismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlacePage.prototype.onRemove = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete',
            message: 'Sure want to delete ' + this.place.title + '?',
            buttons: [{
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        _this.onDismiss();
                    }
                },
                {
                    text: "Yes, I'm sure",
                    handler: function () {
                        _this.placesService.removePlace(_this.place);
                        var toast = _this.toastCtrl.create({
                            message: 'You successfully remove ' + _this.place.title,
                            duration: 2000,
                            position: 'top',
                            cssClass: 'failedToast'
                        });
                        toast.present();
                        _this.onDismiss();
                    }
                }]
        });
        alert.present();
    };
    PlacePage.prototype.onEdit = function () {
    };
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place',template:/*ion-inline-start:"C:\IonicApps\AmazingPlacesApp\src\pages\place\place.html"*/'<!--\n  Generated template for the PlacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary" text-center>\n\n    <ion-title>\n        <button ion-button icon-left clear (click)="onDismiss()">\n            <ion-icon name="arrow-back"></ion-icon>{{place.title | uppercase}}\n        </button></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <img [src]="place.imagePath" >\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-wrap text-center>\n        <p>{{place.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n          <agm-map [latitude]="place.location.lat" [longitude]="place.location.lng" [zoom]=16 [gestureHandling]="none" [mapDraggable]="false" [clickableIcons]="false">\n              <agm-marker [latitude]="place.location.lat" [longitude]="place.location.lng"></agm-marker>\n            </agm-map>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <button ion-button icon-left block outline color="secondary" (click)="onEdit()">\n            <ion-icon name="create"></ion-icon>Edit\n        </button>\n        <button ion-button icon-left block outline (click)="onRemove()">\n            <ion-icon name="remove-circle"></ion-icon>\n            Remove\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <button ion-button block icon-left (click)="onDismiss()">\n            <ion-icon name="close"></ion-icon>\n          Dismiss\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\IonicApps\AmazingPlacesApp\src\pages\place\place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_place_add_place__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_place_place__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_set_location_set_location__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_places_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_place_add_place__["a" /* AddPlacePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_place_place__["a" /* PlacePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_set_location_set_location__["a" /* SetLocationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAx3WbsZCxDyaNe1ySdH3gX-AtSIejk_lo'
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_place_add_place__["a" /* AddPlacePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_place_place__["a" /* PlacePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_set_location_set_location__["a" /* SetLocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__services_places_service__["a" /* PlacesService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\IonicApps\AmazingPlacesApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\IonicApps\AmazingPlacesApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
var Place = (function () {
    function Place(title, description, location, imagePath) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.imagePath = imagePath;
    }
    return Place;
}());

//# sourceMappingURL=place.interface.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesService = (function () {
    function PlacesService(storage, alertCtrl, toastCtrl, file, platform) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.platform = platform;
        this.places = [];
    }
    PlacesService.prototype.addPlace = function (place) {
        var _this = this;
        if (this.places.length === 0) {
            this.places.push(place);
        }
        else {
            var pos = this.places.findIndex(function (placeEl) {
                return placeEl.title === place.title;
            });
            if (pos === -1) {
                this.places.push(place);
            }
            else {
                return false;
            }
        }
        this.storage.set('places', this.places).then(function (data) {
            return true;
        }).catch(function (err) {
            _this.places.splice(_this.places.indexOf(place), 1);
        });
    };
    PlacesService.prototype.loadPlaces = function () {
        return this.places.slice();
    };
    PlacesService.prototype.fetchPlaces = function () {
        var _this = this;
        return this.storage.get('places')
            .then(function (places) {
            _this.places = places != null ? places : [];
            var toast = _this.toastCtrl.create({
                message: 'Places loaded (' + _this.places.length + ')',
                duration: 3000,
                cssClass: "successToast"
            });
            toast.present();
            return _this.places.slice();
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error getting data from storage',
                message: 'You may need to try again!',
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    PlacesService.prototype.removePlace = function (place) {
        var _this = this;
        var pos = this.places.findIndex(function (placeEl) {
            return placeEl.title === place.title;
        });
        this.places.splice(pos, 1);
        this.storage.set('places', this.places).then(function () {
            _this.removeFile(place);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PlacesService.prototype.removeFile = function (place) {
        var _this = this;
        this.platform.ready().then(function () {
            _this.dataUrl = cordova.file.dataDirectory;
        });
        var currentName = place.imagePath.replace(/^.*[\\\/]/, '');
        this.file.removeFile(this.dataUrl, currentName).then(function () {
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PlacesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], PlacesService);
    return PlacesService;
}());

//# sourceMappingURL=places.service.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map