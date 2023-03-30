import { ActivatedRoute, Router } from '@angular/router';
import { InformacoesService } from 'src/app/Service/informacoes.service';
import { Modelagem } from './../../../Service/interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluindo',
  templateUrl: './excluindo.page.html',
  styleUrls: ['./excluindo.page.scss'],
})
export class ExcluindoPage implements OnInit {
  public inscrito: Modelagem = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
  };

  constructor(
    private service: InformacoesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.bucarDadosId(id).subscribe((inscrito) => {
      this.inscrito = inscrito;
    });
  }

  removerInscrito() {
    this.service.deletarDados(this.inscrito.id).subscribe((inscrito) => {
      this.inscrito = inscrito;
      this.router.navigate(['/inscrever'])
    });
    window.location.reload;
  }
}
