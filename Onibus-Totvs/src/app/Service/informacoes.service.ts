import { Modelagem } from './../interface';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformacoesService {

  private readonly API = 'http://localhost:8080/api/app'
  // Estou mundando a url para um novo banco
  //Está dando de Proxy o angular está em uma porta e banco está em outra porta
  //Estou na aula 16 da Loiane minuto 11:10



  constructor(private http: HttpClient) {}

  //Método Get
  //Mostrar os dados no Car Component
  mostrarDados(){
    return this.http.get<Modelagem[]>(this.API)
  }



  //Método Post
  //CONECTAR COM O CLICK DO BOTÃO INCRITO PARA 
  postarDados(dados: Modelagem): Observable<Modelagem>{
      return this.http.post<Modelagem>(this.API, dados)
  }





}
