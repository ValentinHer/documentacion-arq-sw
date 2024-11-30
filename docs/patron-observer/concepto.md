---
sidebar_position: 1
---

# Concepto

El patrón de diseño Observer permite observar los cambios producidos por un objeto, de esta forma, cada cambio que afecte el estado del objeto observado lanzará una notificación a los observadores; a esto se le conoce como Publicador-Suscriptor. Observer es uno de los principales patrones de diseño utilizados en interfaces gráficas de usuario (GUI), ya que permite desacoplar al componente gráfico de la acción a realizar.

![Patron Observer](./img/observer.png)

## Cuando aplicarlo

- Cuando varios objetos dependen del estado de uno:
Si un cambio en un objeto central (el sujeto) debe reflejarse automáticamente en otros objetos relacionados.

- Cuando necesitas desacoplar el sujeto de sus dependientes:
Si no quieres que el sujeto tenga conocimiento específico sobre los objetos que dependen de él, manteniendo una relación más flexible.

- Cuando implementas un sistema de eventos:
Si necesitas notificar automáticamente a otros componentes que un evento ha ocurrido.

- Cuando necesitas sincronizar datos o estados:
Si múltiples componentes del sistema deben mantenerse en sincronía con un estado compartido.

- En sistemas de publicación y suscripción (Pub/Sub):
Si tienes un modelo donde los interesados (observadores) se suscriben a eventos generados por un publicador (el sujeto).

- En arquitecturas Modelo-Vista-Controlador (MVC):
Cuando necesitas que las vistas se actualicen automáticamente al cambiar el modelo.

- Cuando necesitas manejar notificaciones en tiempo real:
Si deseas enviar actualizaciones o cambios a los usuarios o sistemas inmediatamente después de que ocurren.

## Caraterísticas
- **Relación uno-a-muchos**:
Define una relación entre un objeto _sujeto_ (subject) y múltiples _observadores_ (observers).
Cuando el sujeto cambia de estado, notifica a todos los observadores suscritos.

- **Desacoplamiento**:
Los observadores no necesitan conocer detalles internos del sujeto, y viceversa.
Esto promueve un diseño más modular y flexible, ya que los objetos están débilmente acoplados.

- **Suscripción y notificación**:
Los observadores pueden suscribirse al sujeto para recibir actualizaciones.
El sujeto mantiene una lista de observadores y se encarga de notificarlos cuando hay cambios.

- **Actualización automática**:
Los observadores son notificados automáticamente cuando el sujeto cambia de estado.
Esto asegura que los observadores siempre tengan información actualizada.

- **Extensibilidad**:
Es fácil agregar nuevos observadores sin modificar el código existente del sujeto o de otros observadores.
Esto hace que el patrón sea escalable para sistemas con requisitos en evolución.

- **Propagación de cambios**:
Los cambios en el estado del sujeto pueden desencadenar una cascada de actualizaciones en los observadores, lo que puede ser útil, pero debe manejarse con cuidado para evitar bucles o sobrecarga de notificaciones.

- **Dependencia invertida**:
Los observadores se registran en el sujeto, invirtiendo la responsabilidad de notificación.
El sujeto no tiene que buscar activamente quién necesita la información; simplemente informa a quienes están suscritos.

- **Implementación típica**:
Sujeto (Subject): Define la interfaz para agregar, eliminar y notificar observadores.
Observadores (Observers): Implementan una interfaz para recibir actualizaciones del sujeto.
Notificación: El sujeto llama a un método en los observadores registrados cuando ocurre un cambio.

## Ventajas y Desventajas

- ✅Principio de abierto/cerrado. Puedes introducir nuevas clases suscriptoras sin tener que cambiar el código de la notificadora (y viceversa si hay una interfaz notificadora).

- ✅Puedes establecer relaciones entre objetos durante el tiempo de ejecución.

- ❌Los suscriptores son notificados en un orden aleatorio.