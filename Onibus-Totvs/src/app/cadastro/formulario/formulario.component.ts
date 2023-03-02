import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  
  constructor(private router: Router) {
    
   }

  ngOnInit(): void {}

  cadastrar(form: NgForm){
    //Trocar de paginá se o cliente está conforme o solicitado
    if(form.valid){
    console.log("Cadastrado");
  }else{
    alert("Formulário invalido")
  }

  }

}
