import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InformacoesService } from 'src/app/Service/informacoes.service';
import { Modelagem } from './../../../Service/interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
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

  editar(form: NgForm) {

    if (form.valid) {
      this.service.editarDados(this.inscrito).subscribe(() => {
        // window.location.reload; não esta funcionando este método
        this.router.navigate(['/cards-inscritos']);
        window.location.reload;
      });
       
  }
}



}