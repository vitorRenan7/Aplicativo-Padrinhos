import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})

export class SplashPage implements OnInit {

  constructor(private router : Router){ }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl("home");
    }, 1500)
  }
}
