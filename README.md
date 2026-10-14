# *Compra Producto — Ionic + Angular + Capacitor*
## Descripción del Proyecto
Compra Producto es una aplicación móvil que nos permite:
- Registrar los datos de un producto (nombre, cantidad, precio unitario).
- Aplicar un descuento porcentual y calcular el total a pagar.
- Ingresar el dinero recibido por el cliente y calcular el cambio o saldo pendiente.
- Visualizar un resumen del último pago registrado.
Toda la lógica se ejecuta localmente, sin necesidad de conexión a internet.

### Tecnologias Utilizadas
| Tecnología                 | Versión | Uso |
|---------------------------|-----------|------------|
| Ionic        | 8.x  | Componentes UI y estructura de tabs   |
| Angular  | 17+   | Framework principal (standalone components)   |
| Capacitor  | 6.x   | Puente entre web y nativo (Android)    |
| @capacitor/assets  | Última  | 	Generación de íconos y splash    |
| TypeScript  | 5.x   | Tipado estático    |
| Android Studio | Última   | Compilación del APK   |


---
## Enlace del video de la muestra del splash screen
![VIDEO](https://epnecuador-my.sharepoint.com/:v:/r/personal/fredderick_chulde_epn_edu_ec/_layouts/15/stream.aspx?id=%2Fpersonal%2Ffredderick_chulde_epn_edu_ec%2FDocuments%2FAplicaciones%20Moviles%2FVideo%20-Deber%202%20-%20splash%20screen.mp4&share=cQo-zWH0Sje-R42iHSkDJzYHEgUC6lQSgWGgj6o0haSQJp6CQw&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0)
---
## Estructura del Poryecto
```
├── assets
│   ├── icon-background.png
│   ├── icon-foreground.png
│   ├── icon-only.png
│   ├── splash-dark.png
│   └── splash.png
├── src
│   ├── app
│   │   ├── explore-container
│   │   │   ├── explore-container.component.html
│   │   │   ├── explore-container.component.scss
│   │   │   ├── explore-container.component.spec.ts
│   │   │   └── explore-container.component.ts
│   │   ├── info
│   │   │   ├── info.page.html
│   │   │   ├── info.page.scss
│   │   │   ├── info.page.spec.ts
│   │   │   └── info.page.ts
│   │   ├── services
│   │   │   ├── datos.spec.ts
│   │   │   └── datos.ts
│   │   ├── tab1
│   │   │   ├── tab1.page.html
│   │   │   ├── tab1.page.scss
│   │   │   ├── tab1.page.spec.ts
│   │   │   └── tab1.page.ts
│   │   ├── tab2
│   │   │   ├── tab2.page.html
│   │   │   ├── tab2.page.scss
│   │   │   ├── tab2.page.spec.ts
│   │   │   └── tab2.page.ts
│   │   ├── tab3
│   │   │   ├── tab3.page.html
│   │   │   ├── tab3.page.scss
│   │   │   ├── tab3.page.spec.ts
│   │   │   └── tab3.page.ts
│   │   ├── tabs
│   │   │   ├── tabs.page.html
│   │   │   ├── tabs.page.scss
│   │   │   ├── tabs.page.spec.ts
│   │   │   ├── tabs.page.ts
│   │   │   └── tabs.routes.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets
│   │   ├── icon
│   │   │   └── favicon.png
│   │   ├── icons
│   │   │   ├── icon-128.webp
│   │   │   ├── icon-192.webp
│   │   │   ├── icon-256.webp
│   │   │   ├── icon-48.webp
│   │   │   ├── icon-512.webp
│   │   │   ├── icon-72.webp
│   │   │   └── icon-96.webp
│   │   └── shapes.svg
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── theme
│   │   └── variables.scss
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   ├── manifest.webmanifest
│   └── test-setup.ts
├── .browserslistrc
├── .editorconfig
├── .gitignore
├── angular.json
├── capacitor.config.ts
├── eslint.config.js
├── ionic.config.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```
