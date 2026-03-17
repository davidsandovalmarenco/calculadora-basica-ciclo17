<div align="center">

  <img src="assets/icon.png" alt="Calculadora Logo" width="120" />

  # 🧮 Calculadora App (React Native + Expo)

  <p align="center">
    Una <strong>calculadora minimalista, fluida y robusta</strong> diseñada con un enfoque riguroso en la experiencia de usuario (UX) y una arquitectura limpia en React Native.
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
    <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>

</div>

---

## ⚡ La Experiencia
He diseñado esta calculadora para no ser "una del montón". Va un paso más allá integrando validaciones súper exhaustivas, interacciones muy fluidas en botones e inteligencia al renderizar resultados con precisión matemática.

### ✨ Nuevas Características Implementadas
1. **Feedback Táctil Inmersivo (`Pressable`)**: 
   - Transiciones micro-animadas al presionar (`transform: [{ scale: 0.98 }]`).
   - Los botones interactúan dinámicamente si están activos, deshabilitados o siendo presionados en tiempo real.
2. **Sistema de Errores Inteligente**:
   - Mensajes precisos en pantalla: `"No se puede dividir entre cero"`, `"Ingresa números válidos"`.
3. **Manejo de Estado Optimizado (`useMemo`)**:
   - `canCalculate`: El botón "Calcular" se inhabilita nativamente si los campos están vacíos (`disabled={!canCalculate}`). 
   - `expression`: Un historial sutil en la pantalla superior muestra la operación construyéndose (`Ej: 5 + 5`).
4. **Validación de Entradas Super-Estricta**:
   - Limpieza nativa de caracteres: No permite dos signos negativos `--` ni errores con decimales, sustituyendo comas `,` automáticamente por puntos `.`.
5. **UI Resiliente (`ScrollView`)**:
   - Reemplazo del obsoleto teclado `KeyboardAvoidingView` por `ScrollView` usando `keyboardShouldPersistTaps="handled"` permitiendo que nunca se rompa el diseño (Layout) bajo estrés de teclados nativos.
6. **Formateo Numérico Inteligente**:
   - Muestra números enteros limpios y corta automáticamente hasta 4 decimales solo cuando es matemáticamente necesario.

---

## 🏗️ Arquitectura del Código

El código está estructurado en base a **Hooks Personalizados** (Custom Hooks) y una segregación estricta de responsabilidades (UI vs Lógica de Negocio).

- 📄 `App.tsx` $\rightarrow$ Renderiza y orquesta la UI completamente aislada de la matemática usando `Pressable`, `TextInput`, y `ScrollView`.
- 🧠 `useCalculate.ts` $\rightarrow$ Hook principal que lleva toda la carga lógica (Estados, `SanitizeInput`, formato de resultado, y calculos).
- 🎨 `style/calculateStyle.ts` $\rightarrow$ Objeto `StyleSheet` modularizado. Utiliza tokens de diseño basados en paletas modernas (Colors como `#E2E8F0`, `#2563EB`).

---

## 🚀 Guía de Instalación (Cómo correr esto a futuro)

Si necesitas clonar este repositorio en el futuro para continuar con su evolución o revisarlo, aquí tienes el paso a paso exacto.

### 1️⃣ Prerrequisitos en tu Computadora
Asegúrate de tener instalados estos dos componentes en tu sistema operativo:
- **Node.js**: [Descárgalo aquí](https://nodejs.org/) (Recomendado versión `20.x` o superior LTS).
- **Tu teléfono físico** (con la app "Expo Go" de Play Store / App Store) o un **Emulador de Android Studio / XCode**.

### 2️⃣ Levantar el Proyecto

Abre la terminal de tu preferencia (Símbolo de Sistema, PowerShell o Git Bash), navega a esta carpeta y ejecuta en orden:

```bash
# Paso 1: Instalar todas las librerías pesadas (Solo la primera vez)
npm install

# Paso 2: Encender el servidor metro de la aplicación (Levantar la app)
npx expo start
# Alternativa: npm start
```

### 3️⃣ Ver la app en tu pantalla

Cuando ejecutes `npx expo start`, verás un enorme **Código QR** en tu terminal.
- 📱 **Android Físico**: Escanea el QR usando la aplicación **Expo Go**.
- 📱 **iPhone Físico**: Escanea el QR con tu **Cámara nativa** y toca el aviso de abrir en Expo Go.
- 💻 **Emulador de PC (Android)**: Presiona la tecla `a` en tu teclado dentro de la terminal.
- 🌐 **Navegador Web**: Presiona la tecla `w`.

---

## 🛠️ Posibles Soluciones (Troubleshooting)
Si al tratar de levantarlo dentro de un par de meses tienes **pantalla roja** o errores de versiones (Node Modules corrompidos):

```bash
# Limpieza profunda de caché (El "Reinícialo y funcionará" de React Native)
npm start -- --clear

# Borrado completo de librerías para instalación limpia
rm -rf node_modules
npm install
```

---
<br />
<div align="center">
  <sub>Desarrollado y refactorizado con 💙 por <b>David Sandoval M.</b></sub>
</div>
