import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonLabel, IonInput, IonText, IonButton
} from '@ionic/angular';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab2',
  standalone: true,
  templateUrl: './tab2.page.html',
  imports: [
    FormsModule,
    CurrencyPipe,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonText, IonButton
  ]
})
export class Tab2Page {
  datos = inject(DatosService);
  private router = inject(Router);

  descuento: number | null = null;
  dineroRecibido: number | null = null;
  mensaje = '';

  // Validaciones
  onDescuentoChange(valor: number | null): void {
    this.descuento = valor;
    const num = Number(valor);

    if (valor === null || isNaN(num)) {
      this.datos.setDescuento(0);
      return;
    }

    if (num < 0 || num > 100) {
      this.mensaje = 'El descuento debe estar entre 0 y 100.';
      return;
    }

    this.mensaje = '';
    this.datos.setDescuento(num);
  }

  onDineroChange(valor: number | null): void {
    this.dineroRecibido = valor;
    const num = Number(valor);

    if (valor === null || isNaN(num)) {
      this.datos.setDineroRecibido(0);
      return;
    }

    if (num < 0) {
      this.mensaje = 'El dinero recibido no puede ser negativo.';
      return;
    }

    this.mensaje = '';
    this.datos.setDineroRecibido(num);
  }

  volver(): void {
    this.router.navigateByUrl('/tabs/tab1');
  }

  finalizar(): void {
    if (this.descuento === null || this.dineroRecibido === null) {
      this.mensaje = 'Debes completar el descuento y el dinero recibido.';
      return;
    }

    if (this.datos.cambio() < 0) {
      this.mensaje = 'El dinero recibido no cubre el total. Aún hay saldo pendiente.';
      return;
    }

    this.mensaje = '';
    this.router.navigateByUrl('/tabs/tab3');
  }
}