---
sidebar_position: 1
---

# Concepto
**Template Method** es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en una operación, delegando algunos pasos específicos a las subclases. Este patrón permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar la estructura general del mismo. Es útil cuando se tiene un algoritmo con pasos fijos, pero se desea permitir la personalización de algunos de esos pasos en las clases derivadas.

## Cuando aplicarlo
Este se aplica cuando se necesita estructurar un algoritmo con pasos fijos pero que permiten personalización en ciertos detalles, como en procesos repetitivos que requieren consistencia en su flujo general. Es útil para reutilizar código común, mantener estándares y garantizar que las variaciones se implementen de forma controlada, siendo especialmente adecuado en frameworks o procesos estandarizados.

## Caracteristicas
- El método plantilla define un algoritmo general y establece el flujo de ejecución, con algunos pasos específicos delegados a métodos auxiliares, que las subclases pueden sobrescribir.
- El comportamiento común del algoritmo se mantiene en la clase base, mientras que las subclases implementan solo los detalles específicos.
- El flujo de control del algoritmo está predefinido en la clase base, y las subclases completan las implementaciones de los pasos definidos.

## Ventajas
- Permite mantener la lógica compartida en una clase base, reduciendo duplicaciones y errores.
- Centraliza la lógica del algoritmo, facilitando los cambios en su estructura general sin afectar las implementaciones específicas.
- Las subclases pueden redefinir solo los pasos necesarios, lo que simplifica la personalización sin modificar el flujo principal.
- Garantiza que todas las implementaciones sigan un patrón coherente, útil para mantener estándares o reglas de negocio.

## Desventajas
- Las subclases dependen de la estructura de la clase base, lo que puede limitar su independencia y flexibilidad.
- Puede añadir complejidad innecesaria en casos donde no hay muchas variaciones en los pasos específicos.
- Si la estructura del algoritmo cambia significativamente, puede ser complicado adaptar las subclases ya implementadas.
- Las subclases podrían sobrescribir métodos de forma incorrecta, rompiendo el comportamiento esperado del algoritmo.
