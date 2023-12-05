import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { register } from 'swiper/element/bundle';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';
register();

@NgModule({
  // Ya no se falta colocar esto en la actualizacion
  // entryComponents: [
  //   DetalleComponent
  // ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  exports:[
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
