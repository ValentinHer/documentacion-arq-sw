---
sidebar_position: 1
---

# Concepto

**State** es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.
    
El patrón extrae comportamientos relacionados con el estado, los coloca dentro de clases de estado separadas y fuerza al objeto original a delegar el trabajo de una instancia de esas clases, en lugar de actuar por su cuenta.

# Cuando aplicarlo

Este se emplea cuando un determinado objeto tiene diferentes estados y también distintas responsabilidades según el estado en que se encuentre en determinado instante. También puede utilizarse para simplificar casos en los que se tiene un complicado y extenso código de decisión que depende del estado del objeto