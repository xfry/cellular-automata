# VECTORES

## Introducción
El objetivo de desarrollar este capítulo de [The Nature Of Code](http://natureofcode.com) es poder entender el uso de **_vectores_** a la hora de agregar desplazamiento, velocidad y posición a un objeto en una simulación del mundo real, ya sea 2D o 3D.

Los vectores típicamente se escriben en negrilla o también con una letra que contiene una flecha arriba. Esto permite que podamos distinguir entre un **_vector_** y un **_escalar_** -Escalar se refiere a un valor, semejante a enteros o números de punto flotante- así que en este ejercicio usaremos la notación de flecha arriba.

![vector](https://i.stack.imgur.com/Gz06o.png)

## ¿Cual es la dinámica que llevaremos a cabo?

Cubriremos algunas de las funcionalidades de un vector de manera practica, mediante ejercicios hechos en el lenguaje de programación `Javascript` 

Las funcionalidades a desmotrar mediante ejercicios concretos en este capítulo son:

[-] add() — Adición de un vectores
[-] sub() — Resta de vectores
[-] mult() — Escalar un vector mediante el uso de multiplicación
[-] div() —  Escalar el vector mediante el uso de División
[-] mag() — calcular la magnitud de un vector
[-] setMag() - Establecer la magnitud de un vector
[-] normalize() — Normalizar el vector a la unidad de longitud 1
[-] limit() — Limitar la magnitud de un vector
[-] heading() — El grado de un vector expresado como un angulo
[-] rotate() — rotar un vector bidimensional (2D) por un angulo
[-] lerp() — Intrapolación linear hacia otro vector.
[-] dist() — La distancia Euclideana entre dos vectores (considerados como puntos)
[-] angleBetween() — Encontrar un angulo entre dos vectores
[-] dot() — the dot product of two vectors
[-] cross() — the cross product of two vectors (only relevant in three dimensions)
[-] random2D() - crear un vector bidimensional aleatorio
[-] random3D() - crear un vector tridimensional aleatorio