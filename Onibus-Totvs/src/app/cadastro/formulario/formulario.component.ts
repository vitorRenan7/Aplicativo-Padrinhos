import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 1000,
      cssClass: 'custom-loading',
    });

    loading.present().then(async () => {
      setTimeout(() => {
        this.presentToast();
      }, 1200);
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Formulário inválidado',
      duration: 1500,
      icon: 'close-circle',
      color: 'danger',
      cssClass: 'toast',
    });

    toast.present();
  }

  //Ajustar o método / colocar o if primeiro depois as criaçoes e validações POPs
  cadastrar(form: NgForm) {
    if (form.valid) {
      //Criando
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
          //Adicionando um tempo de espera para validar os dados
          setTimeout(() => {
            //Troca de pagina com tempo de load
            this.router.navigate(['./cadastro-concluido']);
            //Criando Toast de Incrito
            this.toastController
              .create({
                message: 'Inscrição realizada',
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
          message: 'Formulário inválidado',
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
