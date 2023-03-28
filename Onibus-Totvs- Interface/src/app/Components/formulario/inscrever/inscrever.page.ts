import { NgForm } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { InformacoesService } from 'src/app/Service/informacoes.service';
import { Modelagem } from 'src/app/Service/interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscrever',
  templateUrl: './inscrever.page.html',
  styleUrls: ['./inscrever.page.scss'],
})
export class InscreverPage implements OnInit {
  public msgErrorFormulario: string =
    'Formulário inválido, Por favor preencher corretamente.';
  public msgIncritoToast: string = 'Inscrição realizada, Seja Bem-Vindo';

  dadosPessoais: Modelagem = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
  };

  constructor(
    private router: Router,
    private service: InformacoesService,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {}

  
  ngOnInit() {}

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.loadingCtrl
        .create({
          message: 'Carregando...',
          duration: 1000,
          cssClass: 'custom-loading',
        })
        .then((load) => {
          load.present();
        })
        .then(() => {
          setTimeout(() => {
            this.service.postarDados(this.dadosPessoais).subscribe();

            this.router.navigate(['./cards-inscritos']);
            
            // window.location.reload();
            
            this.toastController
              .create({
                message: this.msgIncritoToast,
                duration: 1500,
                icon: 'checkmark-circle',
                color: 'success',
              })
              .then((toast) => { 
                toast.present();                
              });
          }, 1500);
        });
    } else {
      this.toastController
        .create({
          message: this.msgErrorFormulario,
          duration: 1500,
          icon: 'close-circle',
          color: 'danger',
          cssClass: 'toast',
        })
        .then((toast) => {
          toast.present();
        });
    }
  }
}
