import { Component } from '@angular/core';
import { NavController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  password: string = '';
  showPassword: boolean = false;
  email: string = '';
  loading: boolean = false; // Variable para controlar la visibilidad del ícono de carga

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.email) {
      // Mostrar el ícono de carga
      this.loading = true;

      // Temporizador para simular la animación de carga
      setTimeout(() => {
        // Navegar a la página después de 3 segundos
        this.navCtrl.navigateForward('/pagina1', {
          queryParams: { email: this.email },
          animated: true
        });

        // Ocultar el ícono de carga (en caso de que se necesite)
        this.loading = false;
      }, 2000); // 3 segundos
    } else {
      console.log('Email is empty');
    }
  }
}