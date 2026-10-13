import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  // Datos de la compra
  nombre = signal('');
  cantidad = signal(0);
  precioUnitario = signal(0);

  // Datos del pago
  descuento = signal(0);
  dineroRecibido = signal(0);

  // Estado del flujo
  enviado = signal(false);

  // Signals derivados (se recalculan automáticamente)
  subtotal = computed(() =>
    this.cantidad() * this.precioUnitario()
  );

  montoDescuento = computed(() =>
    this.subtotal() * (this.descuento() / 100)
  );

  totalFinal = computed(() =>
    this.subtotal() - this.montoDescuento()
  );

  cambio = computed(() =>
    this.dineroRecibido() - this.totalFinal()
  );

  // Guardar datos desde la pestaña Compra
  guardar(
    nombre: string,
    cantidad: number,
    precioUnitario: number
  ): void {
    this.nombre.set(nombre);
    this.cantidad.set(cantidad);
    this.precioUnitario.set(precioUnitario);
    this.enviado.set(true);
  }

  // Actualizar datos desde la pestaña Pago
  setDescuento(valor: number): void {
    this.descuento.set(valor);
  }

  setDineroRecibido(valor: number): void {
    this.dineroRecibido.set(valor);
  }

  // Reiniciar todo el flujo
  reset(): void {
    this.nombre.set('');
    this.cantidad.set(0);
    this.precioUnitario.set(0);
    this.descuento.set(0);
    this.dineroRecibido.set(0);
    this.enviado.set(false);
  }
}