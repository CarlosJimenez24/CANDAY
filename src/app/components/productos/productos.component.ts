import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',  
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
      {
        "id": 1,
        "nombre": "Gomitas de Osito",
        "descripcion": "Gomitas dulces con sabor a frutas.",
        "precio": 13.50,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UwRaZXxhwZ3tGaSK3P1TfW1uWwx1p5iNrA&s"
      },
      {
        "id": 2,
        "nombre": "Paleta de Caramelo",
        "descripcion": "Paleta redonda de sabores surtidos.",
        "precio": 15.50,
        "imagen": "/assets/img/CHUCHE1.jpg"
      },
      {
        "id": 3,
        "nombre": "Chicles de Frutas",
        "descripcion": "Chicles con sabores tropicales.",
        "precio": 14.75,
        "imagen": "/assets/img/CHUCHE2.jpg"
      },
      {
        "id": 4,
        "nombre": "Mix de chuches",
        "descripcion": "Chuche party",
        "precio": 13.20,
        "imagen": "/assets/img/CHUCHE3.jpg"
      },
      
  ];
  constructor(private carritoService: CarritoService, private router: Router) {}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    this.router.navigate(['/formulariopago']);
  }
}