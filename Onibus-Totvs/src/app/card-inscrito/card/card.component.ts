import { Modelagem } from './../../interface';
import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from 'src/app/cadastro/formulario/formulario.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  
  dadosPessoais: Modelagem = {
    id:0,
    nome:'',
    email:'',
    telefone:'',
    cpf:''
  }


  constructor() {
    
   }

  
  
  ngOnInit() {}

}
