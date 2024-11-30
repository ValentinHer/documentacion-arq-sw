---
sidebar_position: 1
---

# Concepto
**Singleton** es un patrón de diseño creacional que asegura que una clase tenga una única instancia global accesible y proporciona un punto de acceso controlado a ella. Es comúnmente utilizado cuando se requiere una única instancia para coordinar acciones a lo largo de un sistema, como un administrador de configuración, un registro de eventos o una conexión a una base de datos.

## Cuando aplicarlo
Este se aplica cuando es necesario garantizar la existencia de una única instancia de una clase durante el ciclo de vida de una aplicación y proporcionar un punto global de acceso a dicha instancia. Es útil en escenarios donde se requiere una instancia centralizada para gestionar o coordinar ciertos aspectos del sistema.

## Características
- Se garantiza que solo exista una instancia de la clase a lo largo de la aplicación.
- Ofrece un mecanismo centralizado para obtener la instancia.
- Evita la creación directa mediante constructores, restringiéndola al propio patrón.

## Ventajas
- Asegura que una clase tenga solo una instancia, evitando inconsistencias en su uso.
- Ideal para componentes como administradores de configuración, registros de logs, o controladores de dispositivos.
- Proporciona un punto centralizado para acceder a la instancia única desde cualquier parte de la aplicación.
- Reduce la necesidad de pasar referencias explícitas.
- Evita la creación de múltiples instancias de objetos pesados en memoria.
- Promueve la reutilización de una única instancia.
- Útil para administrar recursos compartidos o coordinar acciones entre diferentes partes de un sistema.
- Puede servir como base para otros patrones de diseño, como el patrón de Fábrica (Factory).

## Desventajas
- El acceso global a la instancia puede aumentar la dependencia entre componentes, dificultando el mantenimiento y la extensibilidad del sistema.
- Dificulta la simulación (mocking) de objetos, ya que el Singleton no permite reemplazar su instancia fácilmente.
- Hace que las pruebas sean menos aisladas debido a la dependencia de un estado global.
- Un abuso del Singleton puede llevar a un diseño poco modular y difícil de depurar.
- Puede actuar como una variable global disfrazada, lo que es considerado una mala práctica.
- Aunque el concepto es simple, su implementación segura en entornos complejos, como sistemas concurrentes, puede requerir lógica adicional (bloqueos, sincronización, etc.).