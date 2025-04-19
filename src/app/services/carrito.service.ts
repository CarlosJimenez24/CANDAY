import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosEnCarrito: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.productosEnCarrito.push(producto);
  }

  obtenerProductos(): Producto[] {
    return this.productosEnCarrito;
  }

  obtenerTotal(): number {
    return this.productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
  }
}


/*
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Esto es fundamental
})
export class CarritoService {
  private productosEnCarrito = new BehaviorSubject<any[]>([]);
  productos$ = this.productosEnCarrito.asObservable();

  agregarProducto(producto: any) {
    const actuales = this.productosEnCarrito.value;
    this.productosEnCarrito.next([...actuales, producto]);
  }

  obtenerProductos() {
    return this.productosEnCarrito.value;
  }

  limpiarCarrito() {
    this.productosEnCarrito.next([]);
  }
}*/
