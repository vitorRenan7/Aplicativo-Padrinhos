import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Modelagem } from 'src/app/interface';
import { InformacoesService } from 'src/app/Service/informacoes.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  
  public msgErrorFormulario: string = 'Formulário inválido, Por favor preencher corretamente.'
  public msgIncritoToast: string = 'Inscrição realizada, Seja Bem-Vindo'


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
      //Carregamento em enquanto troca a tela
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
            //Postando os dados no db.Json no Banco de dados
            this.service.postarDados(this.dadosPessoais).subscribe()
            //Troca de pagina com tempo de load
            this.router.navigate(['./card']);
            //Criando Toast de Incrito
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
