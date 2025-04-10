import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterOutlet } from "@angular/router";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { Top5Component } from "./components/top5/top5.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormulariopagoComponent } from "./components/formulariopago/formulariopago.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { DetalleProductoComponent } from "./components/detalle-producto/detalle-producto.component";
import { CatalogoProductosComponent } from "./components/catalogo-productos/catalogo-productos.component";



export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'top5', component: Top5Component},
    { path: 'formulariopago', component: FormulariopagoComponent},
    { path: 'catalogo', component: CatalogoProductosComponent },
    { path: 'detalle/:id', component: DetalleProductoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: NotfoundComponent }
];