# Mi Tienda — ISW521 Clase #11 · Laboratorio Tema 6

Proyecto Vite con JavaScript moderno (ES6+, ES Modules).

## Estructura de archivos

```
mi-tienda/
├── index.html          ← entrada, usa <script type="module">
├── package.json
└── src/
    ├── main.js         ← orquestador, importa de los otros dos
    ├── productos.js    ← lógica de datos (agregar, calcular, leer API)
    ├── ui.js           ← capa de presentación (render al DOM)
    └── style.css
```

## Cómo correrlo

1. Tener **Node.js 18+** instalado.
2. Abrir una terminal en la carpeta `mi-tienda/`.
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir el navegador en `http://localhost:5173`

## Checklist de evaluación ✅

- [x] Corre con `npm run dev` sin errores en consola
- [x] Al menos 3 archivos con `import`/`export` (`productos.js`, `ui.js`, `main.js`)
- [x] No queda ningún `var` — todo usa `const` y arrow functions
- [x] `agregarProducto` y `renderProducto` usan **destructuring** al recibir objetos
- [x] `leerProductoAPI` y `calcularTotal` usan **optional chaining** (`?.`) y **nullish coalescing** (`??`)
- [x] Todos los mensajes usan **template literals** — ninguna concatenación con `+`
