import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-nuevaclase',
  templateUrl: './nuevaclase.page.html',
  styleUrls: ['./nuevaclase.page.scss'],
})
export class NuevaClasePage implements OnInit {
  selectedClass: string = '';
  selectedSection: string = ''; 
  isClassAndSectionSelected: boolean = false; 
  showQrCode: boolean = false; 
  loading: boolean = false; 
  isProyectar: boolean = false; 

  clases: string[] = ['Programación de Bases de Datos', 'Calidad de Software', 'Gestión Ágil de Proyectos']; 
  secciones: string[] = ['003A', '004D', '003C']; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

 
  onClassOrSectionSelected() {
    
    this.isClassAndSectionSelected = !!this.selectedClass && !!this.selectedSection;
  }

  generarQr() {
    this.loading = true; 
    this.showQrCode = false; 
  
    
    const cardElement = document.querySelector('.custom-card');
    if (cardElement) {
      cardElement.classList.add('loading');
    }
  
    
    setTimeout(() => {
      this.loading = false; 
      this.showQrCode = true; 
      
      
      if (cardElement) {
        cardElement.classList.remove('loading');
      }
    }, 3000); 
  }

 
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
