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
    this.cargarFavoritos();
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

    let existe = false!;
    let mensaje = ""!;

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

    return !existe;

  }

  async cargarFavoritos() {

    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;

  }

  async existePelicula( id: any ) {

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id );

    // Eso es como se hace mas largo la condiciones de if
    // if ( existe ) {
    //   true
    // }else {
    //   false
    // }

    //Esta es la version mas corta
    return (existe) ? true : false;


  }


}
