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
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UwRaZXxhwZ3tGaSK3P1TfW1uWwx1p5iNrA&s"
      },
      {
        "id": 3,
        "nombre": "Chicles de Frutas",
        "descripcion": "Chicles con sabores tropicales.",
        "precio": 14.75,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UwRaZXxhwZ3tGaSK3P1TfW1uWwx1p5iNrA&s"
      },
      {
        "id": 4,
        "nombre": "Barra de Chocolate",
        "descripcion": "Chocolate con leche relleno.",
        "precio": 13.20,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UwRaZXxhwZ3tGaSK3P1TfW1uWwx1p5iNrA&s"
      },
      
  ];
  constructor(private carritoService: CarritoService, private router: Router) {}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    this.router.navigate(['/formulariopago']);
  }
}