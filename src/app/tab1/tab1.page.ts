import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonInput, IonButton } from '@ionic/angular';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonInput, IonButton
  ]
})
export class Tab1Page {
  nombre = '';
  cantidad: number | null = null;
  precioUnitario: number | null = null;
  mensaje = '';

  private datos = inject(DatosService);
  private router = inject(Router);

  enviar(): void {
    const nombreLimpio = this.nombre.trim();

    // Validaciones
    if (!nombreLimpio) {
      this.mensaje = 'Ingresa el nombre del producto antes de continuar.';
      return;
    }

    const cantidad = Number(this.cantidad);
    if (this.cantidad === null || isNaN(cantidad) || !Number.isInteger(cantidad) || cantidad <= 0) {
      this.mensaje = 'La cantidad debe ser un número entero mayor a cero.';
      return;
    }

    const precio = Number(this.precioUnitario);
    if (this.precioUnitario === null || isNaN(precio) || precio <= 0) {
      this.mensaje = 'El precio unitario debe ser mayor a cero.';
      return;
    }
    
    this.mensaje = '';

    this.datos.guardar(nombreLimpio, cantidad, precio);

    this.router.navigateByUrl('/tabs/tab2');
  }
}
