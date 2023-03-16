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
  //Testa as alterações na url e começar com o put/atualizar informações dos inscritos
  //visualizar se os post estão subindo no banco h2
  //Estou na aula 16 da Loiane minuto 11:10



  constructor(private http: HttpClient) {}

  //Método Get
  //Mostrar os dados no Card Component
 async mostrarDados(){
    return await this.http.get<Modelagem[]>(this.API)
  }


  //Método Post
  //CONECTAR COM O CLICK DO BOTÃO INCRITO PARA 
  postarDados(dados: Modelagem): Observable<Modelagem>{
      return this.http.post<Modelagem>(this.API, dados)
  }





}
