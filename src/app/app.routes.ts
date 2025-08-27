import { Routes } from '@angular/router';

export const routes: Routes = [
    {   // REDIRIGIR A OTRO PATH
        path: '',
        redirectTo: 'bienvenida',
        pathMatch: 'full'
    },
    {
        path: 'bienvenida',
        loadComponent: () => import('./pages/bienvenida/bienvenida').then(archivo => archivo.Bienvenida)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(archivo => archivo.Login)
    },
    {
        path: 'registro',
        loadComponent: () => import('./pages/registro/registro').then(archivo => archivo.Registro)
    },
    {
        path: 'error',
        loadComponent: () => import('./pages/error/error').then(archivo => archivo.Error)
    },
    {
        path: 'sobre-mi',
        loadComponent: () => import('./pages/sobre-mi/sobre-mi').then(archivo => archivo.SobreMi)
    },
    {   // CUALQUIER RUTA NO DEFINIDA
        path: '**',
        loadComponent: () => import('./pages/error/error').then(archivo => archivo.Error)
    }
];
