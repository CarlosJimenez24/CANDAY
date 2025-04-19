import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../interfaces/producto';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-formulariopago',
  templateUrl: './formulariopago.component.html',
  imports: [CommonModule],
})
export class FormulariopagoComponent implements OnInit {
  productos: Producto[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.productos = this.carritoService.obtenerProductos();
    this.total = this.carritoService.obtenerTotal();
    console.log('Productos cargados en el carrito:', this.productos);
  }
  
  eliminarProducto(index: number) {
    this.carritoService.eliminarProducto(index);
    this.productos = this.carritoService.obtenerProductos();
    this.total = this.carritoService.obtenerTotal();
  }
  
} 
