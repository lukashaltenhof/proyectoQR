import { Component, OnInit } from '@angular/core';
import { NavController, AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-reestablecer-password',
  templateUrl: './reestablecer-password.page.html',
  styleUrls: ['./reestablecer-password.page.scss'],
})
export class ReestablecerPasswordPage implements OnInit {
  emailOrUsername: string = '';
  verificationCode: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  loading: boolean = false;
  isCodeSent: boolean = false;
  isCodeVerified: boolean = false;
  successMessage: boolean = false;
  countdown: number = 5;
  countdownInterval: any;

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) {}
  ngOnInit() {}

  sendVerificationEmail() {
    this.loading = true;
    
    setTimeout(() => {
      this.loading = false;
      this.isCodeSent = true;
    }, 2000); 
  }

  verifyCode() {
    this.loading = true;
    
    setTimeout(() => {
      this.loading = false;
      this.isCodeVerified = true;
    }, 2000); 
  }

  updatePassword() {
    if (this.newPassword === this.confirmPassword) {
      this.loading = true;
      
      setTimeout(() => {
        this.loading = false;
        this.successMessage = true;
        this.playSuccessAnimation(); 
        this.startCountdown();
      }, 2000); 
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }

  startCountdown() {
    this.countdown = 5;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
        this.navCtrl.navigateRoot('/home');
      }
    }, 1000); 
  }

  playSuccessAnimation() {
    setTimeout(() => {
      const successMessageElement = document.querySelector('.success-message');
      
      if (successMessageElement) {
        this.animationCtrl.create()
          .addElement(successMessageElement)
          .duration(1000)
          .keyframes([
            { offset: 0, opacity: '0', },
            { offset: 0.5, opacity: '0.5',  },
            { offset: 1, opacity: '1',  }
          ])
          .play();
      } else {
        console.error('Elemento .success-message no encontrado');
      }
    }, 100); 
  }
  
}
