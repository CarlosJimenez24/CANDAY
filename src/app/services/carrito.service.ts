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
}
