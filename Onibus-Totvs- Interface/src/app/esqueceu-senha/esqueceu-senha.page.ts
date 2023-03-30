import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {

  constructor(private emailComposer: EmailComposer) { }

  OpenEmailComposer(){
    this.emailComposer.open({
      to: 'demo@example.com',
      subject: 'Test email',
      body: 'This is a test email'
    }).then(() => {
      console.log('Email sent');
    }).catch((error) => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
