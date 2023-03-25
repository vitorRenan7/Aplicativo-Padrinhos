import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router : Router, private platform : Platform) {
    // this.iniciarApp()
  }


//Quando a aplixação inicar, será levado para a tela splash ( Imagem )
   
// Ajustar outra forma para tela Splash aparecer sem ser por aqui! 

iniciarApp(){
  setTimeout(() => {
    this.router.navigateByUrl("home");
  }, 1500)  
  
  //  this.platform.ready().then(( ) => {
    //    this.router.navigateByUrl("splash")
    //  })
    
  }

}


