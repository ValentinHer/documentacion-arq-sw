# Estructura UML
![Diagrama UML de mediator](./img/mediator.png)

## Participantes
Los **Componentes** son varias clases que contienen cierta lógica de negocio. Cada componente tiene una referencia a una interfaz mediadora, declarada con su tipo. El componente no conoce la clase de la interfaz mediadora, por lo que puedes reutilizarlo en otros programas vinculándolo a una mediadora diferente.

```js title="Mediator"
from abc import ABC, abstractmethod

class Mediador(ABC):
    @abstractmethod
    def notificar(self, emisor, evento):
        """Método para que los componentes envíen eventos al mediador."""
        pass
```

La interfaz **Mediadora** declara métodos de comunicación con los componentes, que normalmente incluyen un único método de notificación. Los componentes pueden pasar cualquier contexto como argumentos de este método, incluyendo sus propios objetos, pero sólo de tal forma que no haya acoplamiento entre un componente receptor y la clase del emisor.

```js title="ConcreteMediator"
class MediadorConcreto(Mediador):
    def __init__(self, componente_a, componente_b):
        self._componente_a = componente_a
        self._componente_b = componente_b

        # Configurar el mediador en los componentes.
        self._componente_a.set_mediador(self)
        self._componente_b.set_mediador(self)

    def notificar(self, emisor, evento):
        """Coordina las acciones entre los componentes según los eventos recibidos."""
        if evento == "evento_a":
            print("Mediador: Detectó 'evento_a'. Instruyendo ComponenteB.")
            self._componente_b.accion_b()
        elif evento == "evento_b":
            print("Mediador: Detectó 'evento_b'. Instruyendo ComponenteA.")
            self._componente_a.accion_a()
```

Los **Mediadores Concretos** encapsulan las relaciones entre varios componentes. Los mediadores concretos a menudo mantienen referencias a todos los componentes que gestionan y en ocasiones gestionan incluso su ciclo de vida.

```js title="ComponentA"
class ComponenteA:
    def __init__(self):
        self._mediador = None

    def set_mediador(self, mediador):
        self._mediador = mediador

    def accion_a(self):
        print("ComponenteA: Ejecutando acción A.")

    def activar_evento(self):
        print("ComponenteA: Activando 'evento_a'.")
        self._mediador.notificar(self, "evento_a")
```
```js title="ComponentB"
class ComponenteB:
    def __init__(self):
        self._mediador = None

    def set_mediador(self, mediador):
        self._mediador = mediador

    def accion_b(self):
        print("ComponenteB: Ejecutando acción B.")

    def activar_evento(self):
        print("ComponenteB: Activando 'evento_b'.")
        self._mediador.notificar(self, "evento_b")
```

Los componentes no deben conocer otros componentes. Si le sucede algo importante a un componente, o dentro de él, sólo debe notificar a la interfaz mediadora. Cuando la mediadora recibe la notificación, puede identificar fácilmente al emisor, lo cual puede ser suficiente para decidir qué componente debe activarse en respuesta.

Desde la perspectiva de un componente, todo parece una caja negra. El emisor no sabe quién acabará gestionando su solicitud, y el receptor no sabe quién envió la solicitud.
