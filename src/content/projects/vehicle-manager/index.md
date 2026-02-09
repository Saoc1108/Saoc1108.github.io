---
title: "Gestor de Mantenimiento Vehicular"
description: "Como Ingeniero y entusiasta de la restauración automotriz, desarrollé esta herramienta para centralizar el historial técnico de un Chevrolet Corsa 2010. La aplicación transforma datos técnicos dispersos en un panel analítico mediante gráficos dinámicos con Recharts, asegurando la integridad de la información a través de un tipado estricto en TypeScript.Incluye un sistema de respaldo JSON para la soberanía de los datos y un flujo de CI/CD mediante GitHub Actions para despliegue automatizado. La interfaz está optimizada para dispositivos móviles, permitiendo su uso fluido directamente en el taller mientras se interviene el motor."
tags: ["React", "TypeScript", "Vite", "Tailwind CSS"]
repo: "https://github.com/Saoc1108/mantenimiento-auto"
link: "https://saoc1108.github.io/mantenimiento-auto/" 
image: "./dashboard_gestor.png"
pubDate: 2026-02-04
featured: true
---

## Descripción General

Este proyecto nace de la necesidad de abandonar las bitácoras en papel y tener un registro digital, accesible y persistente del historial de servicios de un vehículo. La aplicación permite registrar intervenciones (cambios de aceite, repuestos, reparaciones), visualizando costos y fechas clave.

### Detalles Técnicos

La arquitectura se centró en el rendimiento y la experiencia de usuario (DX/UX):

- **React & TypeScript:** Utilizado para crear componentes modulares y estrictamente tipados, reduciendo errores en tiempo de ejecución.
- **Vite:** Elegido como bundler por su velocidad de compilación y HMR (Hot Module Replacement) instantáneo.
- **Tailwind CSS:** Implementación de un diseño *mobile-first* responsivo, esencial para consultar la app desde el taller o el garaje.
- **Persistencia:** (Opcional: Menciona si usaste LocalStorage o Firebase) Gestión de estado optimizada para carga inmediata de datos.

### Funcionalidades Clave

1. **Historial Cronológico:** Línea de tiempo de todos los mantenimientos realizados.
2. **Control de Costos:** Sumatoria y categorización de gastos en repuestos y mano de obra.
3. **Responsive Design:** Interfaz adaptada 100% a dispositivos móviles para uso en terreno.