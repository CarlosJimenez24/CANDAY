import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-formulariopago',
  templateUrl: './formulariopago.component.html',
})
export class FormulariopagoComponent implements OnInit {
  productos: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.productos = this.carritoService.obtenerProductos();
  }

  get total(): number {
    return this.productos.reduce((acc, p) => acc + p.precio, 0);
  }
}
