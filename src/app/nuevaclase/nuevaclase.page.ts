import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-nuevaclase',
  templateUrl: './nuevaclase.page.html',
  styleUrls: ['./nuevaclase.page.scss'],
})
export class NuevaClasePage implements OnInit {
  selectedClass: string = '';
  selectedSection: string = ''; // Para almacenar la sección seleccionada
  isClassAndSectionSelected: boolean = false; // Estado para habilitar/deshabilitar el botón
  showQrCode: boolean = false; // Estado para mostrar/ocultar el código QR
  loading: boolean = false; // Controla el estado de carga
  isProyectar: boolean = false; // Estado para el botón de proyectar

  clases: string[] = ['Programación de Bases de Datos', 'Calidad de Software', 'Gestión Ágil de Proyectos']; // Opciones de clases
  secciones: string[] = ['003A', '004D', '003C']; // Opciones de secciones

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  // Método que se llama al seleccionar una clase o sección
  onClassOrSectionSelected() {
    // Habilita el botón solo si se ha seleccionado tanto clase como sección
    this.isClassAndSectionSelected = !!this.selectedClass && !!this.selectedSection;
  }

  generarQr() {
    this.loading = true; // Muestra el icono de carga
    this.showQrCode = false; // Oculta el QR mientras se carga
  
    // Añade la clase 'loading' a la tarjeta
    const cardElement = document.querySelector('.custom-card');
    if (cardElement) {
      cardElement.classList.add('loading');
    }
  
    // Simula un tiempo de carga de 3 segundos
    setTimeout(() => {
      this.loading = false; // Oculta el icono de carga
      this.showQrCode = true; // Muestra el código QR
      
      // Elimina la clase 'loading' cuando se haya generado el QR
      if (cardElement) {
        cardElement.classList.remove('loading');
      }
    }, 3000); // 3 segundos
  }

  // Método para manejar el cambio en el toggle de proyectar
  onProyectarChange() {
    console.log('Proyectar:', this.isProyectar);
  }

  logout() {
    this.router.navigate(['/home']);
  }

  irACuenta(){
    this.router.navigate(['/micuenta']);
  }

  irAInicio(){
    this.router.navigate(['/pagina1']);
  
  }

  registrarAsistencia(){
    this.router.navigate(['/registroasistencia'])
  }
}
