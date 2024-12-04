---
sidebar_position: 1
---

# Concepto
**Mediator** es un patrón de diseño comportamental que centraliza la comunicación entre múltiples objetos en una aplicación. En lugar de que los objetos se comuniquen directamente entre sí, lo hacen a través de un mediador, lo que reduce las dependencias entre ellos. Este mediador actúa como intermediario, coordinando las interacciones y asegurando un diseño más limpio y flexible.

## Como aplicarlo
Este se aplica cuando un sistema tiene múltiples objetos que necesitan comunicarse entre sí de manera compleja, y estas interacciones generan dependencias difíciles de mantener. Es útil en escenarios donde se busca desacoplar los componentes para facilitar su reutilización y escalabilidad, como en interfaces gráficas con elementos interdependientes (botones, cuadros de texto, listas), sistemas con reglas de negocio centralizadas, o aplicaciones en las que la lógica de interacción entre elementos puede cambiar frecuentemente.

## Características
- El mediador actúa como punto único para gestionar las interacciones entre los objetos, reduciendo las conexiones directas.
- Los objetos interactúan solo con el mediador, no entre ellos, lo que minimiza el acoplamiento y facilita la modularidad.
- La lógica de interacción se concentra en el mediador, lo que facilita el rastreo y modificación de comportamientos.
- Al no estar los componentes directamente acoplados, pueden reutilizarse en otros sistemas con mediadores diferentes.
- A medida que aumenta el número de interacciones y reglas, el mediador puede convertirse en un componente grande y complicado.
- Es más sencillo agregar nuevos componentes o modificar los existentes, siempre que se integren con el mediador.

## Ventajas
- Los objetos no interactúan directamente entre sí, sino a través del mediador, lo que disminuye la dependencia mutua y facilita el mantenimiento.
- Centraliza la lógica de interacción entre los objetos en una sola clase, evitando que la lógica de comunicación se disperse.
- Permite añadir nuevos objetos sin alterar las clases existentes, siempre que se integren con el mediador.
- Los componentes individuales son más reutilizables, ya que no dependen de otros objetos concretos para funcionar.
- Ideal para sistemas donde múltiples objetos deben interactuar, ya que el mediador administra todas las interacciones, reduciendo la complejidad.

## Desventajas
- Toda la lógica de interacción se concentra en el mediador, lo que puede convertirlo en un componente complicado y difícil de mantener.
- En sistemas simples, el uso de un mediador puede ser innecesario y agregar una capa de abstracción innecesaria.
- Aunque reduce la dependencia entre los objetos, introduce una fuerte dependencia hacia el mediador, lo que puede limitar la flexibilidad si este no está bien diseñado.
- Probar el mediador puede ser más complejo, especialmente si contiene lógica extensa para gestionar las interacciones.
- En sistemas de alta frecuencia de interacción, centralizar todas las comunicaciones en un único mediador puede ralentizar el sistema.