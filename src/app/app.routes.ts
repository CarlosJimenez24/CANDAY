import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterOutlet } from "@angular/router";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { Top5Component } from "./components/top5/top5.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormulariopagoComponent } from "./components/formulariopago/formulariopago.component";



export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'top5', component: Top5Component},
    { path: 'footer', component: FooterComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'formulariopago', component: FormulariopagoComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];