import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }
}
