---
sidebar_position: 2
---

# Estructura UML

![Estructura UML del Patrón Iterator](./img/iterator-image.png)

1. La __interfaz Iteradora__ declara las operaciones necesarias para recorrer una colección: extraer el siguiente elemento, recuperar la posición actual, reiniciar la iteración, etc.

#### Ejemplo de código en TypeScript

```ts
interface Iterator<T> {
    next(): T | null;  // Devuelve el siguiente elemento o null si no hay más
    hasNext(): boolean; // Indica si hay más elementos
}
```

2. Los __Iteradores Concretos__ implementan algoritmos específicos para recorrer una colección. El objeto iterador debe controlar el progreso del recorrido por su cuenta. Esto permite a varios iteradores recorrer la misma colección con independencia entre sí.

#### Ejemplo de código en TypeScript

```ts
class ArrayIterator<T> implements Iterator<T> {
    private collection: T[];
    private position: number = 0;

    constructor(collection: T[]) {
        this.collection = collection;
    }

    next(): T | null {
        if (this.hasNext()) {
            return this.collection[this.position++];
        }
        return null; // No hay más elementos
    }

    hasNext(): boolean {
        return this.position < this.collection.length;
    }
}
```

3. La __interfaz Colección__ declara uno o varios métodos para obtener iteradores compatibles con la colección. Observa que el tipo de retorno de los métodos debe declararse como la interfaz iteradora de forma que las colecciones concretas puedan devolver varios tipos de iteradores.

#### Ejemplo de código en TypeScript

```ts
interface Aggregate<T> {
    createIterator(): Iterator<T>; // Crea un iterador para la colección
}
```

4. Las __Colecciones Concretas__ devuelven nuevas instancias de una clase iteradora concreta particular cada vez que el cliente solicita una.

#### Ejemplo de código en TypeScript

```ts
class NumberCollection implements Aggregate<number> {
    private items: number[] = [];

    addItem(item: number): void {
        this.items.push(item);
    }

    getItems(): number[] {
        return this.items;
    }

    createIterator(): Iterator<number> {
        return new ArrayIterator(this.items);
    }
}
```

5. El __Cliente__ debe funcionar con colecciones e iteradores a través de sus interfaces. De este modo, el cliente no se acopla a clases concretas, permitiéndote utilizar varias colecciones e iteradores con el mismo código cliente.

#### Ejemplo de código en TypeScript

```ts
const collection = new NumberCollection();
collection.addItem(1);
collection.addItem(2);
collection.addItem(3);

const iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next()); // Imprime: 1, 2, 3
}
```
