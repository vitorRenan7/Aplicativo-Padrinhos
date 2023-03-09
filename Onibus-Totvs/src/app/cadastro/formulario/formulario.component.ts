import { Modelagem } from './../../interface';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { InformacoesService } from 'src/app/Service/informacoes.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  
  dadosPessoais:Modelagem = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    cpf:''
  }
  
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private service: InformacoesService
  ) {}

  ngOnInit(): void {}

  //Ajustar o método / colocar o if primeiro depois as criaçoes e validações POPs
  cadastrar(form: NgForm) {
    if (form.valid) {
      //Carregamento em enqunato troca a tela
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
            //Postando os dados na Template Card
            this.service.postarDados(this.dadosPessoais).subscribe
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
