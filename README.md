# Vatio: gimnasio

Web de un gimnasio hecha con Astro 7. Diseño: **marcador de estadio sobre hormigón** (gris, negro, amarillo señal, cinta de peligro, cifras de matriz de puntos con la tipografía Doto y títulos gigantes en Big Shoulders; fotos en blanco y negro).

## Qué incluye (17 páginas)

- **Marcador de hoy** en la portada: las clases de hoy con plazas libres, calculadas con la hora real (si ya no quedan, muestra las de mañana).
- **Horario** (`/clases/`) de 35 sesiones con filtros por tipo, día y nivel, y reserva de plaza en un diálogo accesible.
- **Calculadora de tarifas** (`/tarifas/`): plan, periodo (mensual, trimestral -8 %, anual -15 % y sin matrícula), sesiones de entrenamiento personal, taquilla y descuento de pareja.
- Instalaciones, entrenadores, semana gratis, consejos, contacto y textos legales.

## Dónde está cada cosa

Clases, sesiones, tarifas y entrenadores: `src/content/datos/` (se regenera con `_fotos-gimnasio/generar.py`). Pruebas: `_herramientas/flujo-gimnasio.cjs`. La ocupación de las clases es simulada y estable por fecha: con un cliente real saldría de su sistema de reservas.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Pasar el contenido a Sanity

Las páginas solo llaman a `src/lib/contenido.ts`. Hay que crear en Sanity un tipo de documento por cada colección de `src/content.config.ts` (con los mismos campos) y un documento único `ajustes` con los datos de `src/lib/sitio.ts`, y reescribir `contenido.ts` con consultas GROQ. Un webhook que lance un despliegue al publicar completa el circuito.

## Formularios y privacidad

Los formularios funcionan en modo demostración y validan en el navegador. Para enviarlos de verdad, define `PUBLIC_FORM_ENDPOINT` (por ejemplo, una función serverless que mande el correo). La web no usa cookies ni analítica, no carga recursos de terceros (tipografías y fotos están alojadas en la propia web) y los textos legales son plantillas que debe revisar el asesor del cliente. Las fotografías proceden de Wikimedia Commons con licencias libres; la autoría está en `/creditos/` y se sustituyen por las del cliente.
