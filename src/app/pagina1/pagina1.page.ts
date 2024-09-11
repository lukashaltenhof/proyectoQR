import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: 'pagina1.page.html',
  styleUrls: ['pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || 'Usuario';
      console.log('Email received:', this.email);
    });
    this.startClock();
  }

  logout() {
    this.router.navigate(['/home']);
  }

  irACuenta(){
    this.router.navigate(['/micuenta']);
  }

  registrarClase(){
    this.router.navigate(['/nuevaclase']);
  
  }

  registrarAsistencia(){
    this.router.navigate(['/registroasistencia'])
  }

  startClock() {
    const updateTime = () => {
      const now = new Date();
      
      // Formato de la hora
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      // Formato de la fecha
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JS empiezan desde 0
      const year = now.getFullYear();

      // Asignar la hora y la fecha al HTML
      const timeElement = document.getElementById('time');
      const dateElement = document.getElementById('date');
      
      if (timeElement) {
        timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
      }

      if (dateElement) {
        dateElement.innerHTML = `${day}/${month}/${year}`;
      }
    };

    // Actualiza el reloj cada segundo
    setInterval(updateTime, 1000);
    updateTime(); // Llama inmediatamente para que no haya retraso inicial
  }
}
