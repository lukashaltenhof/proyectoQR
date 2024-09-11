import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/pagina1.module').then(m => m.Pagina1PageModule)
  },
  {
    path: 'micuenta',
    loadChildren: () => import('./micuenta/micuenta.module').then( m => m.MicuentaPageModule)
  },
  {
    path: 'registroasistencia',
    loadChildren: () => import('./registroasistencia/registroasistencia.module').then( m => m.RegistroasistenciaPageModule)
  },
  {
    path: 'nuevaclase',
    loadChildren: () => import('./nuevaclase/nuevaclase.module').then( m => m.NuevaclasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
