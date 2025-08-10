---
title: Temarios y Hojas de Referencia
date: 2024-08-22T11:18:36+08:00
draft: false
language: es
description: A test with @tailwindcss/typography & Prose
---

[⬅ Volver a Recursos](../)

Esta sección es tu mapa y tu brújula. El mapa te muestra el camino a seguir (qué temas aprender y en qué orden), mientras que la brújula son las herramientas de referencia rápida que te mantendrán orientado cuando estés resolviendo problemas.

---

## Roadmap de temas

La programación competitiva es un campo muy amplio y abrumador si intentas abordarlo todo a la vez. Este roadmap te guiará desde los conceptos básicos hasta los más avanzados, con énfasis en las estructuras y algoritmos fundamentales y también en aspectos prácticos para los lenguajes más usados como Python, Java y C++.


### Nivel fundamental (El Kit de supervivencia)

Domina estos temas para resolver la mayoría de problemas de nivel introductorio:

* **Complejidad algorítmica:**
  aprende la notación Big O para estimar el tiempo y espacio que consume tu algoritmo antes de implementarlo.
  
  > *Consejo:*  todos los lenguajes son compatibles con esta evaluación conceptual.

* **Estructuras de Datos Básicas:**
  arreglos (arrays), matrices, pilas (stacks), colas (queues), listas enlazadas.
  *Python:* Listas (`list`), `collections.deque` para colas.
  *Java:* `ArrayList`, `LinkedList`, `Stack`, `Queue`.
  *C++:* Arrays nativos, `std::vector`, `std::stack`, `std::queue`.

* **Algoritmos de Ordenamiento y Búsqueda:**
  *Ordenamiento:* implementa Merge Sort o usa funciones estándar como `std::sort` (C++), `Arrays.sort()` (Java) o `sorted()` (Python).
  *Búsqueda:* Domina la búsqueda binaria.
  > *Consejo:*  en Python usa el módulo `bisect` para búsqueda binaria eficiente.

* **Estructuras de Datos Clave:**
  mapas/diccionarios, conjuntos (sets), colas de prioridad.
  *Python:* `dict`, `set`, `heapq`.
  *Java:* `HashMap`, `TreeMap`, `HashSet`, `PriorityQueue`.
  *C++:* `std::map`, `std::unordered_map`, `std::set`, `std::priority_queue`.


### Nivel Intermedio (Construyendo tu Arsenal)

Aquí agregas armas potentes para problemas más complejos:

* **Teoría de Grafos:**
  *recorridos:* BFS, DFS.
  *caminos más cortos:* Dijkstra, Bellman-Ford, Floyd-Warshall.
  *MST:* Prim, Kruskal.
  > *Consejo:*  implementa grafos con listas de adyacencia en todos los lenguajes.

* **Programación Dinámica (DP):**
  problemas clásicos como Fibonacci, Knapsack, LCS.
  > *Consejo:*  aprende a memoizar funciones (ejemplo: decoradores en Python, memoización con mapas en Java/C++).

* **Técnicas Voraces (Greedy):**
  entiende cuándo una solución local óptima es globalmente óptima.

* **Estructuras de Datos Avanzadas:**
  Segment Tree, Fenwick Tree (BIT), Union-Find (DSU).
  *Consejo:*  Aunque no están en librerías estándar, las implementaciones son muy útiles y comunes.

### Nivel Avanzado

Temas para competir a nivel élite:

* **Algoritmos de Strings:**
  KMP, Z-Algorithm, hashing de cadenas, tries, suffix arrays/trees.

* **Teoría de Números:**
  primalidad (Criba de Eratóstenes), MCD (Euclides), aritmética modular.

* **Geometría Computacional:**
  operaciones con puntos, líneas, polígonos, envolvente convexa (Convex Hull).

* **Flujo Máximo y Redes:**
  algoritmos como Edmonds-Karp, Dinic.

--- 

## Hojas de Referencia y "Cheat Sheets"

La clave para optimizar tu tiempo en competiciones:

* **Tu propio Dossier personal:**
  guarda implementaciones probadas y optimizadas para no tener que escribir código complejo desde cero.
  *Ejemplos:*

  * Segment Tree
  * Dijkstra
  * KMP
  * DSU (Union-Find)
    > *Consejo:* Construye tu código para que funcione en Python, Java y C++ con adaptaciones mínimas.

* **"Cheat Sheet" de Sintaxis por Lenguaje:**
  Ten a mano fragmentos para:

  * Entrada y salida rápida (`fast I/O` en C++ con `ios::sync_with_stdio(false)` y en Java con BufferedReader)
  * Manipulación de estructuras de datos estándar
  * Uso de funciones lambda, operadores ternarios, expresiones cortas


## Visualizador de Algoritmos

Usa sitios como **[VisuAlgo](https://visualgo.net/en)** para ver animaciones de algoritmos y estructuras de datos. Es especialmente útil para entender grafos, árboles y algoritmos de búsqueda.

