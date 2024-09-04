import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  password: string = '';
  showPassword: boolean = false;
  email: string = '';

  constructor(private navCtrl: NavController) {}

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
