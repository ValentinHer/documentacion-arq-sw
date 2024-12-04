---
sidebar_position: 1
---

# Concepto

Este patrón de diseño permite recorrer una estructura de datos sin que sea necesario conocer la estructura interna de la misma. Es especialmente útil cuando trabajamos con estructuras de datos complejas, ya que nos permite recorrer sus elementos mediante un Iterador, el Iterador es una interface que proporciona los métodos necesarios para recorrer los elementos de la estructura de datos, los métodos más comunes son:

- __hasNext__: Método que regresa un booleano para indicar si existen más elementos en la estructura por recorrer. True si existen más y false si hemos llegado al final y no hay más elementos por recorrer.
- __next__: Regresa el siguiente elemento de la estructura de datos

![Patron Iterator](./img/iterator-es.png)

## Cuando aplicarlo

- Acceso uniforme a una colección:
Cuando tienes diferentes tipos de colecciones (listas, pilas, árboles, etc.) y deseas recorrerlas con una interfaz uniforme sin preocuparte de los detalles internos de cada estructura.

- Separar la lógica de recorrido:
Cuando quieres separar la lógica de iteración de la lógica de la colección en sí. Esto ayuda a cumplir el principio de responsabilidad única.

- Recorrer una colección compleja:
Cuando trabajas con estructuras de datos no lineales, como grafos o árboles, donde el recorrido puede no ser obvio (por ejemplo, preorden, postorden, amplitud, etc.).

- Proveer múltiples formas de recorrido:
Cuando necesitas ofrecer diferentes formas de recorrer una colección (por ejemplo, en orden directo o inverso).

- Facilitar la extensión y reutilización:
Si necesitas agregar nuevas formas de iterar una colección sin modificar su estructura o lógica interna, el patrón Iterator permite implementar nuevos iteradores sin alterar el código base.

- Ocultar la implementación interna:
Cuando no quieres exponer los detalles internos de la colección al cliente (por ejemplo, índices o punteros), y prefieres que el iterador sea la única interfaz pública para acceder a los elementos.

## Características

- **Recorrido secuencial sin exponer detalles internos**:
Permite acceder a los elementos de una colección uno por uno, sin revelar su representación interna.
La estructura subyacente (lista, árbol, grafo, etc.) permanece encapsulada.

- **Proporciona una interfaz uniforme**:
Ofrece un conjunto de métodos estándar, como next(), hasNext() y, a veces, remove(), que funcionan independientemente del tipo de colección.

- **Compatible con diferentes estructuras de datos**:
Puede usarse con cualquier tipo de colección: listas, pilas, colas, árboles, grafos, etc.
Se pueden crear iteradores específicos según el tipo de colección o la forma de recorrido (por ejemplo, preorden, postorden, o amplitud).

- **Separa la lógica de iteración**:
La lógica para recorrer la colección se encapsula en el iterador, manteniendo la colección libre de responsabilidades adicionales.

- **Admite múltiples iteradores concurrentes**:
Una misma colección puede tener múltiples iteradores activos al mismo tiempo, cada uno con su propio estado de recorrido.

- **Soporte para iteración personalizada**:
Es posible implementar iteradores específicos que sigan criterios particulares, como recorrer solo elementos que cumplan cierta condición (filtros).

- **Flexibilidad para agregar nuevos recorridos**:
Permite extender la funcionalidad creando nuevas formas de iterar una colección sin modificar su implementación base.

- **Simplifica la interacción con colecciones complejas**:
Al abstraer el recorrido, se vuelve más sencillo trabajar con estructuras de datos no triviales, como árboles y grafos.

- **Compatible con el Principio de diseño de Iterador**:
Encapsula el recorrido en una clase independiente, respetando el principio de diseño de responsabilidad única y el principio de apertura/cierre.

## Ventajas y Desventajas

- ✅Principio de responsabilidad única. Puedes limpiar el código cliente y las colecciones extrayendo algoritmos de recorrido voluminosos y colocándolos en clases independientes.

- ✅Principio de abierto/cerrado. Puedes implementar nuevos tipos de colecciones e iteradores y pasarlos al código existente sin descomponer nada.

- ✅Puedes recorrer la misma colección en paralelo porque cada objeto iterador contiene su propio estado de iteración.

- ✅Por la misma razón, puedes retrasar una iteración y continuar cuando sea necesario.

- ❌Aplicar el patrón puede resultar excesivo si tu aplicación funciona únicamente con colecciones sencillas.

- ❌Utilizar un iterador puede ser menos eficiente que recorrer directamente los elementos de algunas colecciones especializadas.