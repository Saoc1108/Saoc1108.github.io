---
title: "TecnoFix: Gestión de Servicio Técnico"
description: "Plataforma integral para la administración de talleres de reparación. Controla flujos de trabajo desde la recepción de equipos hasta la entrega, gestionando inventario, estados de reparación y facturación."
tags: ["Python", "Django", "SQL", "Bootstrap"]
repo: "https://github.com/Saoc1108/TecnoFix"
pubDate: 2025-11-15
image: "./dashboard.png"
featured: false
---

## Contexto del Proyecto
TecnoFix nace para solucionar la desorganización operativa común en servicios técnicos de informática y electrónica. El objetivo fue eliminar la pérdida de información y optimizar los tiempos de respuesta al cliente mediante un sistema centralizado y trazable.

### Arquitectura y Desarrollo

El sistema fue construido con un enfoque monolítico modular para garantizar un despliegue rápido y estabilidad en entornos de recursos limitados.

- **Backend:** Implementado con **Django (Python)** para aprovechar su ORM robusto y sistema de administración seguro.
- **Base de Datos:** Modelado relacional complejo para vincular Clientes, Dispositivos, Órdenes de Servicio y Repuestos.
- **Seguridad:** Implementación de roles de usuario (Técnico, Recepcionista, Administrador) para restringir el acceso a módulos sensibles.

### Funcionalidades Destacadas

1.  **Trazabilidad en Tiempo Real:** Seguimiento del estado de reparación (Ingresado, En Diagnóstico, Esperando Repuesto, Terminado).
2.  **Generación de Documentos:** Emisión automática de órdenes de trabajo y comprobantes de recepción en PDF.
3.  **Gestión de Inventario:** Descuento automático de stock al utilizar repuestos en una orden de servicio.