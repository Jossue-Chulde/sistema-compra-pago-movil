import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonLabel, IonText, IonButton
} from '@ionic/angular';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab3',
  standalone: true,
  templateUrl: './tab3.page.html',
  imports: [
    CurrencyPipe,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonLabel, IonText, IonButton
  ]
})
export class Tab3Page {
  datos = inject(DatosService);
  private router = inject(Router);

  irACompra(): void {
    this.router.navigateByUrl('/tabs/tab1');
  }
}
