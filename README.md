<div align="center">
  <img src="assets/icon.png" width="100" height="100" />
  <h1>Calculadora Básica 🧮</h1>
  <p>Una aplicación de calculadora fluida, elegante y totalmente funcional desarrollada con <b>React Native</b> y <b>Expo</b>.</p>
</div>

---

## 📱 Características Principales

- **Operaciones Matemáticas Básicas:** Suma, Resta, Multiplicación y División.
- **Validación Robusta de Entradas:** Manejo inteligente de números decimales, evitando dobles puntos y signos negativos mal ubicados.
- **Interfaz Limpia y Dinámica:** Diseño atractivo utilizando un sistema de diseño propio (estilos en `calculateStyle`). Uso de `SafeAreaView` y `KeyboardAvoidingView` para una excelente experiencia de usuario en cualquier pantalla.
- **Alta Precisión:** Formateo automático de resultados mostrando hasta 4 decimales cuando se requiere.
- **Limpieza Instantánea:** Función dedicada para restablecer todos los valores de la calculadora a su estado inicial.
- **Soporte Multiplataforma:** Totalmente compatible y escalable en **iOS**, **Android** y la **Web**.

## 🚀 Tecnologías Utilizadas

- **React Native** - Framework de aplicaciones nativas
- **Expo** (SDK ~54) - Entorno y plataforma para aplicaciones React de forma universal
- **TypeScript** - Tipado estático para asegurar calidad del código
- **React Hooks** - Gestión del estado (`useState`) y la lógica encapsulada en `useCalculate`

## ⚙️ Requisitos Previos

Antes de comenzar a correr la aplicación, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js** (Se recomienda la versión LTS actual, v18 o superior)
- **npm** (Incluido con Node.js) o `yarn`
- Emulador de Android / Simulador de iOS configurado, o bien la aplicación **Expo Go** instalada en tu dispositivo móvil físico (buscala en tu App Store o Play Store).

## 🛠️ Instalación y Uso Local

Sigue estos sencillos pasos para tener la aplicación corriendo en tu entorno local:

1. **Abrir la terminal en la carpeta del proyecto:**
   Asegúrate de estar ubicado en la raíz del proyecto (`calculadora`):
   ```bash
   cd calculadora
   ```

2. **Instalar las dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo de Expo:**
   ```bash
   npm start
   ```

4. **Correr la aplicación:**
   Al ejecutar el comando anterior, se abrirá la terminal de Metro Bundler mostrando un código QR (o también puedes presionar `w`, `a`, `i` para abrir menús).

   - **📱 En un dispositivo físico (Android):** Escanea el código QR con la app de **Expo Go**.
   - **📱 En un dispositivo físico (iOS):** Escanea el código QR con la **aplicación de Cámara** de tu iPhone/iPad y ábrelo en Expo Go.
   - **💻 En simuladores:** 
     - Presiona la tecla `a` en tu terminal para abrir la aplicación en tu **Emulador de Android Studio**.
     - Presiona la tecla `i` para abrir la aplicación en tu **Simulador de iOS** (solo si usas Mac).
   - **🌐 En el navegador web:** Presiona la tecla `w` para abrir la aplicación directamente en tu navegador por defecto.

## 🤝 Contribución

Siéntete libre de clonar y modificar la aplicación para agregar nuevas funciones como porcentajes, raíces cuadradas, o el log de los últimos cálculos realizados.


<br />

<div align="center">
  <sub>Desarrollado con ❤️ por <b>David Sandoval M.</b></sub>
</div>
