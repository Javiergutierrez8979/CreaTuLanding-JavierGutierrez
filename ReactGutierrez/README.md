Crea Tu Landing - Javier Gutierrez
Este es un proyecto creado como parte del curso de React en el cual desarrollé una landing page interactiva con React, Vite y Firebase. La aplicación simula una tienda online donde se pueden visualizar productos, filtrarlos por categoría, añadirlos al carrito y realizar una compra.

Descripción
El proyecto consiste en una SPA (Single Page Application) donde se implementan conceptos claves de React como:

Componentes funcionales.
Context API para la gestión global del estado.
React Router para la navegación entre páginas.
Firebase para la base de datos y autenticación.
Además, se aplicaron estilos personalizados con CSS para mejorar la UI y UX, y se incorporó SweetAlert para mostrar alertas de una manera más atractiva.

Características
Visualización de productos: Muestra una lista de productos con detalles como nombre, precio e imagen.
Filtro por categorías: Los usuarios pueden filtrar los productos por categoría.
Carrito de compras: Permite agregar productos al carrito, ver el total y finalizar la compra.
Página de contacto: Sección con un formulario de contacto y la ubicación del negocio integrada con Google Maps.
Responsividad: Diseño optimizado para diferentes tamaños de pantalla.
Tecnologías Utilizadas
React: Librería para construir la interfaz de usuario.
Vite: Herramienta de construcción rápida para React.
Firebase: Usado para almacenar los productos y las órdenes de compra.
Bootstrap: Framework CSS para estilos y responsividad.
SweetAlert: Biblioteca para alertas personalizadas.
React Router: Para la navegación entre páginas.
Estructura del Proyecto
bash
Copiar código
/src
│   /componentes
│       Cart.jsx
│       Contacto.jsx
│       Footer.jsx
│       Item.jsx
│       ItemListContainer.jsx
│       NavBar.jsx
│       ProductDetail.jsx
│       Ubicacion.jsx
│   /context
│       CartContext.js
│   /firebase
│       FirebaseConfig.js
│   /img
│   /styles
│       App.css
│       Cart.css
│       Contacto.css
│   App.jsx
│   main.jsx
/public
Instalación y Ejecución
Clona el repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/crea-tu-landing-javier-gutierrez.git
Navega a la carpeta del proyecto:

bash
Copiar código
cd crea-tu-landing-javier-gutierrez
Instala las dependencias:

bash
Copiar código
npm install
Ejecuta la aplicación:

bash
Copiar código
npm run dev
Abre el navegador y visita http://localhost:3000 para ver la aplicación.

Configuración de Firebase
Asegúrate de configurar Firebase con tus propias credenciales en el archivo firebase/FirebaseConfig.js:

javascript
Copiar código
// firebase/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
Despliegue
El proyecto se puede desplegar en plataformas como Netlify, Vercel o Firebase Hosting. Solo necesitas construir la aplicación:

bash
Copiar código
npm run build
Y luego seguir las instrucciones de despliegue de la plataforma elegida.

Aprendizajes
Este proyecto me permitió reforzar mis conocimientos en React, especialmente en la gestión del estado global y en la integración de Firebase como backend. También aprendí a mejorar la experiencia del usuario con alertas dinámicas y la importancia de un diseño responsivo.

Contribución
Este es un proyecto personal, pero si deseas contribuir o darme algún consejo para mejorar, ¡es bienvenido! Puedes hacer un fork del proyecto o contactarme.

Autor
Javier Gutierrez
