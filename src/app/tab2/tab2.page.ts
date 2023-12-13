import { Component } from '@angular/core';

import { MoviesService } from 'src/app/services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula [] = [];
  ideas = ["Spiderman","Avengers","Superman","Batman","Iron Man","Capitan America","Capitana Marvel","Thor","Flash"]
  
  constructor( private movieService: MoviesService,
               private modalCtrl: ModalController ) {}

  buscar( event:any ){
    const valor: string = event.detail.value;

    if ( valor.length ===0 ) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    // console.log( valor );
    this.buscando = true;

    this.movieService.getBuscarPelicula( valor )
        .subscribe( resp=> {
          console.log( resp );
          this.peliculas = resp['results'];
          this.buscando = false;
        });
  }

  async verDetalle( id: number ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
  
  // onCancel(event:any) { 
  //   // Reset the field
  //   event.target.value = '';
  // }
}
