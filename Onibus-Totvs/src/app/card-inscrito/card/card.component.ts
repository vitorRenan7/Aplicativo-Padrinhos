import { Modelagem } from './../../interface';
import { Component, OnInit } from '@angular/core';
import { InformacoesService } from 'src/app/Service/informacoes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  dadosInformacoes: Modelagem = {
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
  };

  constructor(private service: InformacoesService) {}

  ngOnInit(): void {
    
  }

  mostrarDados(){
    this.service.mostrarDados().subscribe((dados) => {
      this.dadosInformacoes = dados;
    });
  }
}
