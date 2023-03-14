import { Modelagem } from './../../../interface';

import { Component, OnInit } from '@angular/core';
import { InformacoesService } from 'src/app/Service/informacoes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  public dadosInformacoes: Modelagem[] = [] 

  constructor(private service: InformacoesService) {
    this.mostarDados();
  }

  ngOnInit(): void {}
    
    mostarDados(){
      this.service.mostrarDados().subscribe((dados) => {
        console.log(dados);
        this.dadosInformacoes = dados;
      });
    }
  

 
}
