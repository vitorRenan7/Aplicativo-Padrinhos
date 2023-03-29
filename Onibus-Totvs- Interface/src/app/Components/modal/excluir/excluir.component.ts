import { Router, ActivatedRoute } from '@angular/router';
import { InformacoesService } from './../../../Service/informacoes.service';
import { Modelagem } from './../../../Service/interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
})
export class ExcluirComponent implements OnInit {
  public dadosInformacoes: Modelagem = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
  };

  constructor(
    private service: InformacoesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.bucarDadosId(parseInt(id!)).subscribe((inscrito) => {
      this.dadosInformacoes = inscrito;
    });
  }

  removeInscrito() {
    if (this.dadosInformacoes.id) {
      this.service.deletarDados(this.dadosInformacoes.id).subscribe(() => {
        this.router.navigate(['/inscrever']);
      });
    }
    
  }
}
