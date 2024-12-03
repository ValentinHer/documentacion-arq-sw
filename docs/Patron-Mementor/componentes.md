---
sidebar_position: 2
---
 # Estructura UML
![Diagrama](./img/image.png)

## 1. Originator (Originador)
El objeto cuyo estado se desea guardar.
 - Responsabilidad: Crear un memento que capture su estado actual y restaurar su estado desde un memento.

### Código de Ejemplo
```js
class Originator {
    constructor(state) {
        this.state = state;
    }

    setState(state) {
        console.log(`Estado cambiado a: ${state}`);
        this.state = state;
    }

    getState() {
        return this.state;
    }

    createMemento() {
        return new Memento(this.state);
    }

    restoreFromMemento(memento) {
        this.state = memento.getState();
        console.log(`Estado restaurado a: ${this.state}`);
    }
}
```

## 2. Memento
Un objeto que almacena el estado interno del Originador.
 - Responsabilidad: Proveer acceso al estado únicamente al Originador.

### Código de Ejemplo
```js
class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}
```

## 3. Caretaker (Cuidador)
Gestiona los mementos y decide cuándo guardar o restaurar el estado del Originador.
 - Responsabilidad: Mantener un historial de mementos y coordinar el proceso de guardado y restauración.

### Código de Ejemplo
```js
class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
}
```
