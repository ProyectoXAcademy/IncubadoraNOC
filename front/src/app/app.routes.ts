import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    // Rutas de autenticación
    {path:'/register', component:RegisterComponent},
    {path:'/login', component:LoginComponent},
    // Ruta comodín para manejar rutas no encontradas
    { path: '**', component: NotFoundComponent }

];
