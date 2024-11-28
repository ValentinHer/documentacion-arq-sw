---
sidebar_position: 2
---

# Estructura UML

![estructura patron observer](./img/observer-image.png)

1. El __Notificador__ envía eventos de interés a otros objetos. Esos eventos ocurren cuando el notificador cambia su estado o ejecuta algunos comportamientos. Los notificadores contienen una infraestructura de suscripción que permite a nuevos y antiguos suscriptores abandonar la lista.

#### Ejemplo de código en TypeScript

```ts
class Subject {
    private observers: Observer[] = [];
    private state: string = "";

    // Método para agregar un observador
    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    // Método para eliminar un observador
    detach(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Método para notificar a todos los observadores
    notify(): void {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }

    // Cambiar el estado y notificar a los observadores
    setState(state: string): void {
        this.state = state;
        this.notify();
    }

    // Obtener el estado actual
    getState(): string {
        return this.state;
    }
}
```

2. La __interfaz Suscriptora__ declara la interfaz de notificación. En la mayoría de los casos, consiste en un único método actualizar. El método puede tener varios parámetros que permitan al notificador pasar algunos detalles del evento junto a la actualización.

#### Ejemplo de código en TypeScript

```ts
interface Observer {
    update(state: string): void;
}
```

3. Los __Suscriptores Concretos__ realizan algunas acciones en respuesta a las notificaciones emitidas por el notificador. Todas estas clases deben implementar la misma interfaz de forma que el notificador no esté acoplado a clases concretas.

#### Ejemplo de código en TypeScript

```ts
class ConcreteObserver implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Implementación del método update
    update(state: string): void {
        console.log(`Observer ${this.name} received state: ${state}`);
    }
}
```

4. El __Cliente__ crea objetos tipo notificador y suscriptor por separado y después registra a los suscriptores para las actualizaciones del notificador.

#### Ejemplo de código en TypeScript

```ts
const subject = new Subject();

// Crear observadores
const observer1 = new ConcreteObserver("A");
const observer2 = new ConcreteObserver("B");

// Agregar observadores al sujeto
subject.attach(observer1);
subject.attach(observer2);

// Cambiar el estado del sujeto
subject.setState("Estado 1"); // Ambos observadores recibirán la notificación
subject.setState("Estado 2"); // Ambos observadores recibirán la actualización

// Eliminar un observador y cambiar el estado
subject.detach(observer1);
subject.setState("Estado 3"); // Solo el observador "B" recibirá la notificación
```