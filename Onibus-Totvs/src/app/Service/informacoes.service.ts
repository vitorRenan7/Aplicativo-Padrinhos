import { Modelagem } from './../interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformacoesService {

  private readonly API = 'http://localhost:3000/informacoes'

  constructor(private http: HttpClient) {}

  //Método Get
  //Mostrar os dados no Car Component
  mostrarDados(): Observable<Modelagem>{
    return this.http.get<Modelagem>(this.API)
  }



  //Método Post
  //CONECTAR COM O CLICK DO BOTÃO INCRITO PARA 
  postarDados(dados: Modelagem): Observable<Modelagem>{
      return this.http.post<Modelagem>(this.API, dados)
  }





}
