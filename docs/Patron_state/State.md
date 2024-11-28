---
sidebar_position: 1
---

# Concepto

**State** es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.
    
El patrón extrae comportamientos relacionados con el estado, los coloca dentro de clases de estado separadas y fuerza al objeto original a delegar el trabajo de una instancia de esas clases, en lugar de actuar por su cuenta.

## Cuando aplicarlo

Este se emplea cuando un determinado objeto tiene diferentes estados y también distintas responsabilidades según el estado en que se encuentre en determinado instante. También puede utilizarse para simplificar casos en los que se tiene un complicado y extenso código de decisión que depende del estado del objeto

## Caracteristicas

- Encapsulación de estados: Cada estado se representa como una clase separada que implementa una interfaz común, lo que permite encapsular el comportamiento asociado a cada estado.
- Cambio dinámico de comportamiento:
Un objeto puede cambiar su comportamiento en tiempo de ejecución al delegar la lógica al estado actual.
- Separación de lógica:La lógica relacionada con cada estado se aísla en clases específicas, lo que simplifica el mantenimiento y extensión del código.
- Reducción de condiciones: El patrón elimina o reduce la necesidad de usar estructuras condicionales largas como if-else o switch para manejar estados. 
- Contexto como mediador: El objeto principal (llamado Contexto) mantiene una referencia al estado actual y delega las solicitudes a este. El contexto puede cambiar el estado en función de las condiciones.
- Fácil extensibilidad: Es posible agregar nuevos estados sin modificar las clases existentes, siguiendo el principio abierto/cerrado.
- Uso de interfaz o clase base: Todos los estados implementan una interfaz común o heredan de una clase base, lo que garantiza un comportamiento consistente al interactuar con el contexto.
- Comunicación entre estados y contexto: Los estados pueden invocar métodos del contexto para realizar acciones adicionales o cambiar el estado interno.

## Ventajas

- Se localizan fácilmente las responsabilidades de los estados específicos, dado que se encuentran en las clases que corresponden a cada estado. Esto brinda una mayor claridad en el desarrollo y el mantenimiento posterior. Esta facilidad la brinda el hecho que los diferentes estados están representados por un único atributo (state) y no envueltos en diferentes variables y grandes condicionales.
- Hace los cambios de estado explícitos puesto que en otros tipos de implementación los estados se cambian modificando valores en variables, mientras que aquí al estar representado cada estado.
- Los objetos State pueden ser compartidos si no contienen variables de instancia, esto se puede lograr si el estado que representan esta enteramente codificado en su tipo. Cuando se hace esto estos estados son Flyweights sin estado intrínseco.

## Desventajas

- Aplicar el patrón puede resultar excesivo si una máquina de estados sólo tiene unos pocos estados o raramente cambia.
- Se incrementa el número de subclases.

