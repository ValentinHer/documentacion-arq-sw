---
sidebar_position: 1
---

# KConcepto

El patrón Strategy es un patrón de diseño de comportamiento que permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables. Esto permite que el comportamiento de un objeto cambie en tiempo de ejecución sin modificar su código.

El patrón Strategy es un patrón de diseño de comportamiento que permite a un sistema seleccionar dinámicamente un algoritmo en tiempo de ejecución. Esto se logra encapsulando cada algoritmo en una clase separada que implementa una interfaz común.

Este patrón es particularmente útil cuando:
- Existen múltiples variantes de un algoritmo o comportamiento.
- Se quiere evitar el uso excesivo de condicionales (if o switch) para seleccionar el algoritmo.
- Se desea aumentar la flexibilidad y adherirse al principio de Open/Closed (abierto para extensión, cerrado para modificación).

## Cuando aplicarlo
- Utiliza el patrón Strategy cuando quieras utiliza distintas variantes de un algoritmo dentro de un objeto y poder cambiar de un algoritmo a otro durante el tiempo de ejecución.
- Utiliza el patrón Strategy cuando tengas muchas clases similares que sólo se diferencien en la forma en que ejecutan cierto comportamiento.
- Utiliza el patrón para aislar la lógica de negocio de una clase, de los detalles de implementación de algoritmos que pueden no ser tan importantes en el contexto de esa lógica.
- Utiliza el patrón cuando tu clase tenga un enorme operador condicional que cambie entre distintas variantes del mismo algoritm

## Caracteristicas Clave
- Intercambiabilidad: Permite reemplazar estrategias sin modificar el código cliente.
- Separación de preocupaciones: Desacopla el comportamiento del objeto que lo utiliza, lo que mejora la cohesión.
- Extensibilidad: Se pueden añadir nuevas estrategias sin cambiar el código existente.
- Adhesión al Principio de Inversión de Dependencias (DIP): El contexto no depende de implementaciones concretas, sino de una interfaz.

## Ventajas
- Proporciona flexibilidad al asignar diferentes comandos a los invocadores.
- Facilita la implementación de funciones de "deshacer" y "rehacer".
- Se puede encolar y programar la ejecución de comandos para ejecutarse en un momento posterior.

## Desventajas
- Incrementa la cantidad de clases, ya que cada comando generalmente requiere una nueva clase.
- Puede introducir complejidad innecesaria si no se necesitan todas las capacidades del patrón.
