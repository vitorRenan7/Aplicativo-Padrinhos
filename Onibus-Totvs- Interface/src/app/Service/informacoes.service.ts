import { Modelagem } from './interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformacoesService {
  private readonly API = 'http://localhost:8080/api/app';

  constructor(private http: HttpClient) {}

  mostrarDados() {
    return this.http.get<Modelagem[]>(this.API);
  }

  postarDados(dados: Modelagem): Observable<Modelagem> {
    return this.http.post<Modelagem>(this.API, dados);
  }

  deletarDados(id: any): Observable<Modelagem> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Modelagem>(url);
  }

  editarDados(inscrito: Modelagem): Observable<Modelagem> {
    const url = `${this.API}/${inscrito.id}`;
    return this.http.put<Modelagem>(url, inscrito);
  }

  bucarDadosId(id: any): Observable<Modelagem> {
    const url = `${this.API}/${id}`;
    return this.http.get<Modelagem>(url);
  }
}
