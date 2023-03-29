import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Tipando variavel ':'
  login: FormGroup;

  //Chamando o service dentro da variavel
  constructor(private service: LoginService, private route: Router) {

    //Atribuindo os valores do html, 'email', 'senha';
    this.login = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    })
  }

  //Recebe os dados e envia pra variavel de cadastro do service
  dadosLogin(form: FormGroup){
    this.service.cadastrar(this.login.value).subscribe(res => {
      console.log(res)
    })
    form.reset()
  }

  ngOnInit() {
  }

}
