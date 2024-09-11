import { Component } from '@angular/core';
import { NavController, AnimationController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  password: string = '';
  showPassword: boolean = false;
  email: string = '';
  loading: boolean = false; 

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private route: ActivatedRoute, private router: Router
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  reestablecerPassword() {
    this.router.navigate(['/reestablecer-password']);



  }
  login() {
    if (this.email) {
      
      this.loading = true;

      
      setTimeout(() => {
        
        this.navCtrl.navigateForward('/pagina1', {
          queryParams: { email: this.email },
          animated: true
        });

        
        this.loading = false;
      }, 2000); 
    } else {
      console.log('Email is empty');
    }
  }
}