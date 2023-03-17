import { Modelagem } from 'src/app/Service/interface';

import { Component, OnInit } from '@angular/core';
import { InformacoesService } from 'src/app/Service/informacoes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public dadosInformacoes: Modelagem[] = [];

  public dadosRecebido: any;

  public isDados = false;

  constructor(private service: InformacoesService) {}

  ngOnInit(): void {
    console.log('NgOnInit');
  }

  ionViewDidEnter() {
    console.log('WillEnter');
    this.mostarDados();
  }

  async mostarDados() {
    this.service.mostrarDados().then(async (dados) => {
      console.log(dados);
      
      //Adicionar um evento para recarregar a pagina e mostra os dados
      //ou usar o Firebase DB
      if (dados) {
        this.isDados = true;
        this.dadosInformacoes = [];
      } else {
        this.isDados = false;
      }
    });
  }
}
