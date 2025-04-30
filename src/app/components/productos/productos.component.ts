import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(
    private http: HttpClient,
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/productos.json').subscribe(data => {
      this.productos = data;
    });
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    this.router.navigate(['/formulariopago']);
  }
}