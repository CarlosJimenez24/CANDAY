import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosEnCarrito: Producto[] = [];

  constructor() {
    this.cargarCarrito();
  }

  agregarProducto(producto: Producto) {
    this.productosEnCarrito.push(producto);
    this.guardarCarrito();
  }

  obtenerProductos(): Producto[] {
    return this.productosEnCarrito;
  }

  obtenerTotal(): number {
    return this.productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
  }
  
  eliminarProducto(index: number) {
    this.productosEnCarrito.splice(index, 1);
    this.guardarCarrito();
  }
  
  private guardarCarrito() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('carrito', JSON.stringify(this.productosEnCarrito));
    }
  }

  private cargarCarrito() {
    if (typeof window !== 'undefined' && localStorage) {
      const carritoGuardado = localStorage.getItem('carrito');
      if (carritoGuardado) {
        this.productosEnCarrito = JSON.parse(carritoGuardado);
      }
    }
  }

  limpiarCarrito() {
    this.productosEnCarrito = [];
    localStorage.removeItem('carrito');
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
