import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, NavController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  password: string = '';
  showPassword: boolean = false;
  email: string = '';

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private aCtrl:AnimationController,
    private aRoute: ActivatedRoute
  ) {}


  private animation!:Animation;
  
  ngAfterViewInit() {
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.square') as HTMLElement)
    .iterations(3)
    .duration(1000)
    .fromTo('transform','translateX(0)','translateX(100)')
    
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.email) {
      this.navCtrl.navigateForward('/pagina1', {
        queryParams: { email: this.email }
      });
    } else {
      console.log('Email is empty');
    }
  }
}
