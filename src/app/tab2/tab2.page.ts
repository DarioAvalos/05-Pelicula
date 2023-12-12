import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = "";
  ideas: string[] = ["Spiderman","Avengers","Superman","Batman","Iron Man","Capitan America","Capitana Marvel","Thor","Flash"]
  
  buscar( event:any ){
    const valor = event.detail.value;
    console.log( valor );
  }
  
  onCancel(event:any) { 
    // Reset the field
    event.target.value = '';
  }


 

  constructor() {}

}
