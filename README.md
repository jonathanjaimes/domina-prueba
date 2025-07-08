# Domina - Micro Frontend de Gestión de Usuarios

## Índice

- [Descripción General](#descripción-general)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Principales Features](#principales-features)
- [Arquitectura y Patrones](#arquitectura-y-patrones)
- [Guía de Instalación y Ejecución](#guía-de-instalación-y-ejecución)
- [Detalles de Componentes y Hooks](#detalles-de-componentes-y-hooks)
- [Estilos y Responsividad](#estilos-y-responsividad)
- [Buenas Prácticas y Decisiones Técnicas](#buenas-prácticas-y-decisiones-técnicas)
- [Testing y Mejora Continua](#testing-y-mejora-continua)
- [Posibles Mejoras Futuras](#posibles-mejoras-futuras)
- [Licencia](#licencia)

---

## Descripción General

Este proyecto es un micro frontend de gestión de usuarios desarrollado con React + TypeScript, siguiendo una arquitectura modular basada en features. Permite listar, buscar, paginar y consultar el detalle de usuarios, consumiendo una API externa de ejemplo. El enfoque está puesto en la escalabilidad, la mantenibilidad, la experiencia de usuario y la calidad del código.

---

## Stack Tecnológico

- **React 18+**
- **TypeScript**
- **React Router v6**
- **CSS Modules** para estilos encapsulados y reutilizables
- **Vite** como bundler (puedes adaptarlo a CRA o Next.js fácilmente)
- **API pública:** https://jsonplaceholder.typicode.com/users

---

## Estructura del Proyecto

```plaintext
src/
├── features/
│   └── user/
│       ├── components/
│       │   ├── UserList.tsx
│       │   ├── UserList.module.css
│       │   ├── UserPagination.tsx
│       │   ├── UserPagination.module.css
│       │   ├── UserSearch.tsx
│       │   ├── UserSearch.module.css
│       │   └── UserManager.tsx
│       ├── hooks/
│       │   ├── useUsers.ts
│       │   ├── useUserDetail.ts
│       │   ├── useIsMobile.ts
│       │   └── usePredictiveSearch.ts
│       └── services/
│           └── userService.ts
├── layout/
│   ├── MainLayout.tsx
│   └── MainLayout.module.css
├── pages/
│   ├── Home.tsx
│   ├── UserDetail.tsx
│   └── UserDetail.module.css
├── routes/
│   └── index.tsx
├── styles/
│   ├── global.css
│   └── Loader.module.css
└── index.html
```

---

## Principales Features

- **Listado de usuarios** con paginación adaptativa (botones en desktop, select en móvil).
- **Búsqueda predictiva** de usuarios por nombre, con sugerencias y navegación rápida.
- **Detalle de usuario** con manejo robusto de loading y errores.
- **Responsive design**: UI fluida y adaptada a cualquier dispositivo.
- **Arquitectura feature-based**: componentes, hooks y servicios organizados por dominio.
- **Custom hooks reutilizables** para lógica de negocio y UI.
- **Centralización de llamadas a API** y tipado fuerte en los datos.
- **Estilos consistentes y escalables** con CSS Modules.
- **Manejo de errores y UX amigable** en todos los flujos.

---

## Arquitectura y Patrones

- **Feature-based:** Todo lo relacionado a usuarios está en `/features/user/`, permitiendo escalar y desacoplar fácilmente.
- **Hooks personalizados:** Cada lógica de negocio (fetch, búsqueda, responsividad) está encapsulada en hooks reutilizables.
- **Servicios centralizados:** Todas las llamadas a la API están en `userService.ts`, facilitando el mantenimiento y la extensión.
- **Tipado fuerte:** Uso de TypeScript en todo el flujo, con la interfaz `User` exportada desde el servicio.
- **CSS Modules:** Cada componente tiene su propio archivo de estilos, evitando colisiones y mejorando la mantenibilidad.
- **Lazy loading de rutas:** Mejora el performance y la experiencia de usuario.

---

## Guía de Instalación y Ejecución

1. **Clona el repositorio:**

   ```bash
   git clone <url-del-repo>
   cd domina
   ```

2. **Instala dependencias:**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecuta el proyecto:**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre en tu navegador:**
   ```
   http://localhost:5173
   ```

---

## Detalles de Componentes y Hooks

### Componentes principales

- **UserManager:** Orquesta la búsqueda, listado, paginación y conecta los hooks de usuario.
- **UserList:** Renderiza la lista de usuarios y navega al detalle.
- **UserSearch:** Input con búsqueda predictiva y sugerencias.
- **UserPagination:** Paginación adaptativa (botones o select).
- **UserDetail:** Vista de detalle con back button siempre visible y manejo robusto de errores.

### Hooks personalizados

- **useUsers:** Fetch y paginación de usuarios.
- **useUserDetail:** Fetch de detalle de usuario por ID.
- **useIsMobile:** Detecta si el viewport es móvil, para lógica adaptativa.
- **usePredictiveSearch:** Encapsula la lógica de búsqueda predictiva y sugerencias.

### Servicios

- **userService.ts:** Funciones `fetchUsers` y `fetchUserById` con tipado fuerte y lógica DRY.

---

## Estilos y Responsividad

- **CSS Modules:** Cada componente tiene su propio archivo `.module.css`.
- **Paleta de colores:** Basada en azul (#1c24f3) y amarillo (#f8d34b) para consistencia visual.
- **Loader visual:** Mensaje de cargando centrado y estilizado.
- **Adaptación móvil:** Paginación cambia a select, y los componentes ajustan layout y tamaño.
- **Global.css:** Fuente sans-serif y reset básico.

---

## Buenas Prácticas y Decisiones Técnicas

- **Separación de responsabilidades:** Hooks, servicios y componentes bien delimitados.
- **Facilidad de testing:** Hooks y servicios fácilmente testeables.
- **Escalabilidad:** La estructura permite agregar features (roles, permisos, dashboard, etc.) sin refactor mayor.
- **Accesibilidad:** Inputs y botones accesibles, navegación con teclado, mensajes claros de error y loading.
- **Manejo de errores:** Mensajes amigables y logging en consola para debugging.

---

## Testing y Mejora Continua

- **Hooks y servicios listos para tests unitarios.**
- **Componentes desacoplados y fácilmente testeables.**
- **Sugerencia:** Agregar pruebas con React Testing Library y Jest para robustez en futuras versiones.

---

## Posibles Mejoras Futuras

- Autenticación y rutas protegidas.
- Edición y creación de usuarios.
- Integración con API real y manejo de tokens.
- Dashboard y estadísticas.
- Soporte para temas (dark/light).
- Mejoras de accesibilidad (a11y).
- Internacionalización (i18n).

---

## Licencia

MIT
