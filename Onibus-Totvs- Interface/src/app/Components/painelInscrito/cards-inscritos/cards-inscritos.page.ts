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

  constructor(private service: InformacoesService) {}

  ngOnInit() {
    this.service.mostrarDados().subscribe((inscritos) => {
      this.dadosInformacoes = inscritos;
      console.log(this.dadosInformacoes);
    });
    
  }



}
