import { InformacoesService } from 'src/app/Service/informacoes.service';
import { Modelagem } from 'src/app/Service/interface';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cards-inscritos',
  templateUrl: './cards-inscritos.page.html',
  styleUrls: ['./cards-inscritos.page.scss'],
})
export class CardsInscritosPage implements OnInit {

  public dadosInformacoes: Modelagem[] = [];

  
  constructor(
    private service: InformacoesService,
    private alertController: AlertController) { }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Deseja realmente excluir sua inscrição?',
        cssClass: 'custom-alert',
        buttons: [
          {
            text: 'Sim',
            cssClass: 'alert-button-confirm',
          },
          {
            text: 'Não',
            cssClass: 'alert-button-cancel',
          },
        ],
      });
  
      await alert.present();
    }
  
  
    ngOnInit() {
    this.service.mostrarDados().subscribe((inscritos)=>{      
      this.dadosInformacoes = inscritos
      console.log(this.dadosInformacoes);
      
    });
  
  }



  // async mostarDados() {
  //   this.service.mostrarDados().then(async (dados) => {
      
      // console.log(dados);
      
      //Adicionar um evento para recarregar a pagina e mostra os dados
      

      // if (dados) {
      //   this.isDados = true;
      //   console.log(this.isDados);
      //   this.dadosInformacoes = [];
      // } else {
      //   this.isDados = false;

}
