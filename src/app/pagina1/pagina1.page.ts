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
  }

  logout() {
    // Puedes agregar aquí la lógica para cerrar sesión si es necesario

    // Redirigir a la página de inicio
    this.router.navigate(['/home']);
  }
}
