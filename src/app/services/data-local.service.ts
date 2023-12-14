import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor( private storage: Storage,
               private toastCtrl: ToastController) { 
    this.init();
  }

  async presentToast( message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storage = storage;
  }

  guardarPelicula( pelicula: PeliculaDetalle ){

    let existe = false;
    let mensaje = "";

    for ( const peli of this.peliculas ) {
      if ( peli.id === pelicula.id ){
        existe = true;
        break;
      }
    }

    if( existe ) {

      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = "Removido de favoritos";
      
    }else {

      this.peliculas.push( pelicula );
      mensaje = "Agregada a favoritos";

    }

    this.presentToast( mensaje );
    this.storage.set('peliculas', this.peliculas );

  }


}
