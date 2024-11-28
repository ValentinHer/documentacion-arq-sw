# Estructura UML
![Diagrama UML de Template Method](./img/template-method.png)

## Participantes
- La **Abstract Class** declara métodos que actúan como pasos de un algoritmo, así como el propio método plantilla que invoca estos métodos en un orden específico. Los pasos pueden declararse abstractos o contar con una implementación por defecto.

```js title="AbstractClass"
from abc import ABC, abstractmethod

class AbstractClass(ABC):
    def template_method(self):
        self.step_one()
        self.step_two()
        self.step_three()

    def step_one(self):
        pass

    def step_two(self):
        pass

    def step_three(self):
        print("Paso 3: Este paso tiene una implementación por defecto.")
```

- Las **Concrete Class** pueden sobrescribir todos los pasos, pero no el propio método plantilla.

```js title="ConcreteClass A"
class ConcreteClassA(AbstractClass):
    def step_one(self):
        print("Clase A - Paso 1: Preparando datos específicos.")

    def step_two(self):
        print("Clase A - Paso 2: Procesando datos específicos.")
```

```js title="ConcreteClass B"
class ConcreteClassB(AbstractClass):
    def step_one(self):
        print("Clase B - Paso 1: Inicializando recursos diferentes.")

    def step_two(self):
        print("Clase B - Paso 2: Ejecutando lógica personalizada.")

    # Sobrescribe el paso tres, reemplazando la implementación por defecto.
    def step_three(self):
        print("Clase B - Paso 3: Sobrescribiendo la implementación por defecto.")
```