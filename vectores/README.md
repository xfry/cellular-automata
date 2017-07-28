# VECTORES

## Introducción
El objetivo de desarrollar este capítulo de [The Nature Of Code](http://natureofcode.com) es poder entender el uso de **_vectores_** a la hora de agregar desplazamiento, velocidad y posición a un objeto en una simulación del mundo real, ya sea 2D o 3D. (Aquí su definición)[es.wikipedia.org/wiki/Vector] 

Los vectores típicamente se escriben en negrilla o también con una letra que contiene una flecha arriba. Esto permite que podamos distinguir entre un **_vector_** y un **_escalar_** -Escalar se refiere a un valor, semejante a enteros o números de punto flotante- así que en estos ejercicios se usará la notación de flecha arriba.

![vector](https://i.stack.imgur.com/Gz06o.png)

## ¿Cual es la dinámica que llevaremos a cabo?

Cubriremos algunas de las funcionalidades de un vector de manera practica, mediante ejercicios hechos en el lenguaje de programación `Javascript` 

Las funcionalidades a desmotrar mediante ejercicios concretos en este capítulo son:

- [x] add() — Adición de un vectores
- [ ] sub() — Resta de vectores
- [ ] mult() — Escalar un vector mediante el uso de multiplicación
- [ ] div() —  Escalar el vector mediante el uso de División
- [ ] mag() — calcular la magnitud de un vector
- [ ] setMag() - Establecer la magnitud de un vector
- [ ] normalize() — Normalizar el vector a la unidad de longitud 1
- [ ] limit() — Limitar la magnitud de un vector
- [ ] heading() — El grado de un vector expresado como un angulo
- [ ] rotate() — rotar un vector bidimensional (2D) por un angulo
- [ ] lerp() — Intrapolación linear hacia otro vector.
- [ ] dist() — La distancia Euclideana entre dos vectores (considerados omo puntos)
- [ ] angleBetween() — Encontrar un angulo entre dos vectores
- [ ] dot() — the dot product of two vectors
- [ ] cross() — the cross product of two vectors (only relevant in three imensions)
- [ ] random2D() - crear un vector bidimensional aleatorio
- [ ] random3D() - crear un vector tridimensional aleatorio

## Configurando el entorno html5
Usaremos el canvas html5 y para ello, debemos crear nuestro mundo `world` o plano en el que vamos a agregar nuestros objetos como por ejemplo una bola.

	TBD

## Suma de vectores
Imagina una bola que se desplaza de un lugar a otro en un plano bidimensional. Esta bola tendría que contar con algunas propiedades para poder desplazarse de un punto `A` a un punto `B` y dentro de esas propiedades encontraríamos **_velocidad_** **_ubicación_** así que si este objeto se modela en javascript quedaría así:

```javascript
var ball = {
	radio: 20,
	posX: 200, 		//ubicación en el eje x
	posY: 450, 		//ubicación en el eje y
	velocityX: 2,
	velocityY: 2
}
```
Una vez configurado el objeto bola para moverlo tendríamos que alterar su posición en `x` ó `y` sumándole velocidad.

```javascript
ball.x = ball.x + ball.velocity;
ball.y = ball.y + ball.velocity;
```
En una representación más compleja del objeto bola, podríamos imaginar tener muchas más variables:

	Aceleration								_xaceleration_ _yaceleration_
	Ubicación de un Objetivo	_xtarget_ _ytarget_
	Viento										_xwind _ywind_
	fricción									_xfriction_ _yfriction_

Y así inicia a quedarnos claro que por cada concepto en el plano (Viento, Aceleración, Fricción, Ubicación) necesitaríamos de a dos variables. Esto porque es un mundo bidimensional, pero si fuera tridimensional necesitaríamos de a tres variables para cada concepto.

**Peor espera, ¿Sería genial si reducimos todo este código a unas pocas variables?** Como por ejemplo:

```javascript
this.location = new Vector(130,50); //cada valor numerico representa x ó y
this.speed = new Vector(1,1); 			//x = 1, y = 1
```
Esto nos ayudaría a simplificar nuestro código y proporcionar un conjunto de funciones para ejecutar operaciones matemáticas que ocurren una y otra vez cuando programamos movimientos, ejemplo:
![movimiento vector][http://natureofcode.com/book/imgs/chapter01/ch01_02.png]

	Vector(-15, 3)			Camina quince pasos hacia el oeste; Gire y camine tres pasos hacia el norte.
	Vector(3, 4)				Camine tres pasos hacia el este; Gire y camine cinco pasos hacia el norte.
	Vector(2, -1)				Camine dos pasos hacia el este; Gire y camine un paso hacia el sur.
	

Por amor a la simplicidad, vamos a mantener este ejercicio en un plano bidimensional, quiza más adelante realicemos ejercicios tridimensionales.

