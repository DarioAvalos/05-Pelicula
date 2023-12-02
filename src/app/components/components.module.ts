import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { register } from 'swiper/element/bundle';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
register();

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent
  ],
  exports:[
    SlideshowBackdropComponent,
    SlideshowPosterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
