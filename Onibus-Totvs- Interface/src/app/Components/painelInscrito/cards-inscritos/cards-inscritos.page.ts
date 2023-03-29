import { InformacoesService } from 'src/app/Service/informacoes.service';
import { Modelagem } from 'src/app/Service/interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards-inscritos',
  templateUrl: './cards-inscritos.page.html',
  styleUrls: ['./cards-inscritos.page.scss'],
})
export class CardsInscritosPage implements OnInit {

  public dadosInformacoes: Modelagem[] = [];

  constructor(
    private service: InformacoesService,
  ) {}

  ngOnInit() {
    this.service.mostrarDados().subscribe((inscritos) => {
      this.dadosInformacoes = inscritos;
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
