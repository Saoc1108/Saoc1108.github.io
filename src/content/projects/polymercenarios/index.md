---
title: "PolyMercenarios: Shooter de Supervivencia"
description: "Shooter en tercera persona de supervivencia contra hordas de zombies para Android. Desarrollado en Unity 3D con C#, cuenta con mecánicas de desmembramiento localizado, gestión de inventario y optimización para móviles de gama baja."
tags: ["Unity", "C#", "Android", "Desarrollo de Videojuegos"]
link: "https://play.google.com/store/apps/details?id=com.WinterStudio.PolyMercenarios"
pubDate: 2026-02-10
image: "./banner.png"
featured: true
---

## Contexto del Proyecto

PolyMercenarios es un videojuego de acción y supervivencia táctica diseñado para dispositivos móviles Android. El juego desafía a los jugadores a sobrevivir a oleadas masivas de zombies utilizando un arsenal diverso y tácticas de posicionamiento. Publicado en la Play Store, cuenta actualmente con una puntuación destacada de 4.5 estrellas y más de 100 descargas activas.

### Desarrollo y Desafíos Técnicos

El desarrollo fue realizado íntegramente utilizando **Unity 3D** y **C#**, enfrentando y resolviendo importantes desafíos de optimización y arquitectura:

- **Optimización de Rendimiento:** Implementación de técnicas avanzadas como *Object Pooling* para la gestión eficiente de proyectiles y enemigos, minimizando las asignaciones del Garbage Collector para mantener 60 FPS estables incluso en dispositivos móviles de gama media y baja.
- **Sistema de Daño Localizado:** Desarrollo de un sistema de física y colisionadores para detectar impactos en extremidades específicas (*Desmembramiento Táctico*), afectando la velocidad y el comportamiento de los zombies en tiempo real.
- **Inteligencia Artificial (IA):** Programación de árboles de comportamiento (Behavior Trees) y máquinas de estado para los zombies, permitiéndoles flanquear y responder a estímulos auditivos y visuales del jugador.
- **Gestión de Inventario:** Diseño e implementación de un inventario modular tipo cuadrícula para la administración y mejora de armas, municiones y consumibles médicos.

### Características Clave

1. **Combos y Multiplicadores:** Sistema dinámico que premia la precisión y la velocidad de eliminación con multiplicadores de puntuación.
2. **Daño Dinámico:** Animaciones y mutilaciones basadas en la zona de impacto del disparo.
3. **Optimización Móvil:** Materiales de sombreado personalizados y mallas poligonales optimizadas (estilo Low Poly) para reducir el consumo de GPU.
