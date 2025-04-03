import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterOutlet } from "@angular/router";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { OpinionesComponent } from "./components/opiniones/opiniones.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { Top5Component } from "./components/top5/top5.component";
import { RegisterComponent } from "./components/register/register.component";



export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'opiniones', component: OpinionesComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'top5', component: Top5Component},
    { path: 'footer', component: FooterComponent},
    { path: 'header', component: HeaderComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];