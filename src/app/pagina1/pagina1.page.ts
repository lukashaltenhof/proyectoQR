import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: 'pagina1.page.html',
  styleUrls: ['pagina1.page.scss'],
})
export class Pagina1Page implements OnInit, AfterViewInit {
  email: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuCtrl: MenuController,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {
    this.menuCtrl.close();
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'] || 'Usuario';
      console.log('Email received:', this.email);
    });
    this.startClock();
  }

  ngAfterViewInit() {
    // Mueve la animación aquí, cuando la vista ya está cargada
    if (this.email === 'usuario1@profesor.duoc.cl') {
      this.playProfilePhotoAnimation();
    }
  }

  logout() {
    this.router.navigate(['/home']);
  }

  irACuenta() {
    this.router.navigate(['/micuenta']);
  }

  registrarClase() {
    this.router.navigate(['/nuevaclase']);
  }

  registrarAsistencia() {
    this.router.navigate(['/registroasistencia']);
  }

  startClock() {
    const updateTime = () => {
      const now = new Date();

      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const year = now.getFullYear();

      const timeElement = document.getElementById('time');
      const dateElement = document.getElementById('date');

      if (timeElement) {
        timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
      }

      if (dateElement) {
        dateElement.innerHTML = `${day}/${month}/${year}`;
      }
    };

    setInterval(updateTime, 1000);
    updateTime();
  }

  playProfilePhotoAnimation() {
    const userPhotoElement = document.querySelector('.user-photo-circle');

    if (userPhotoElement) {
      // Crea la animación de zoom inicial
      const animation = this.animationCtrl
        .create()
        .addElement(userPhotoElement)
        .duration(1000)
        .keyframes([
          { offset: 0, transform: 'scale(0)', opacity: '0' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.5' },
          { offset: 1, transform: 'scale(1)', opacity: '1' },
        ]);

      animation.play();

      userPhotoElement.addEventListener('click', () => {
        this.playHeartbeatAnimation(userPhotoElement);
      });
    } else {
      console.error('Elemento de la imagen de perfil no encontrado');
    }
  }

  playHeartbeatAnimation(element: Element) {
    const heartbeatAnimation = this.animationCtrl
      .create()
      .addElement(element)
      .duration(600)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.3, transform: 'scale(1.2)', opacity: '1' },
        { offset: 0.6, transform: 'scale(1)', opacity: '1' },
        { offset: 1, transform: 'scale(1.1)', opacity: '1' },
      ]);

    heartbeatAnimation.play();
  }
}
