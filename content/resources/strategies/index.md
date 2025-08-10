---
title: Consejos y estrategias
date: 2024-08-22T11:18:36+08:00
draft: false
language: es
---

[⬅ Volver a Recursos](../)


Tener los conocimientos es solo la mitad de la batalla. La otra mitad es saber aplicarlos bajo la presión del reloj. Esta sección se centra en las estrategias y hábitos mentales que te ayudarán a maximizar tu rendimiento durante un concurso.

---

## Cómo Abordar un Problema: El Ciclo de 5 Pasos

Para cada problema que decidas resolver, sigue un proceso metódico. Evitará que te pierdas y te ayudará a escribir código correcto a la primera.

1.  **Lee y entiende:** lee el enunciado **dos veces**. Presta atención a los **límites (Constraints)**, ya que te dan la pista más grande sobre la complejidad algorítmica requerida.
2.  **Piensa y Diseña en Papel:** NO te lances a programar. Coge papel y lápiz. Resuelve los casos de ejemplo a mano y piensa en casos límite (N=0, números grandes, etc.).
3.  **Implementa tu Solución:** traduce tu idea a código limpio. Usa nombres de variables claros y comenta las partes complejas.

4.  **Testea Rigurosamente:** antes de enviar, prueba tu código con los casos de ejemplo y, sobre todo, con los casos límite que pensaste en el paso 2.

5.  **Envía y Analiza el Veredicto:** si obtienes `Accepted`, ¡genial! Pasa al siguiente. Si no, comienza el proceso de debugging.

## Técnicas de Debugging: La Checklist del Veredicto

Cuando tu código falla, la clave es no entrar en pánico. Respira hondo y sigue una checklist sistemática. Esta guía está basada en las recomendaciones del equipo de competición del KTH Royal Institute of Technology (KACTL).

**Checklist Final Antes de Enviar:**
Antes de cada envío, hazte estas preguntas rápidas:
*   ¿He probado con casos simples más allá de los ejemplos?
*   Si los límites son ajustados, ¿he generado un caso máximo para probar el tiempo?
*   ¿Podría alguna variable (`int`, `long long`) desbordarse (overflow)?
*   ¿Estoy enviando el archivo correcto?

**Cuando recibes `Wrong Answer (WA)`:**
Este es el error más común. Significa que tu lógica es incorrecta.

*   ¡Entendido! Aquí te dejo el texto adaptado para C++, Python y Java, explicando cómo depurar con impresión en consola en cada uno:

---

* **Depura con impresión en consola:** imprime los valores de tus variables en puntos clave para observar cómo cambia el flujo o el resultado.
    - **En C++ usa `cout` o mejor `cerr`:**
  `cerr << "Variable x: " << x << endl;` imprime en la salida de error, que no afecta la salida estándar que se envía al juez.
    - **En Python usa `print`:**
  `print(f"Variable x: {x}")` imprime en la salida estándar. Si quieres separar la salida de debug, usa `print(f"Variable x: {x}", file=sys.stderr)` importando el módulo `sys`.
  - **En Java usa `System.err.println`:**
  `System.err.println("Variable x: " + x);` imprime en la salida de error, evitando mezclar el debug con la salida estándar.
*   **Lee el enunciado OTRA VEZ:** ¿Has entendido mal alguna condición? ¿El formato de salida es exactamente el que piden (espacios, saltos de línea)?
*   **Revisa la limpieza entre casos de prueba:** en problemas con múltiples `test cases`, ¿estás reseteando todas tus variables y estructuras de datos (vectores, mapas, etc.)?
*   **Errores tontos pero comunes:** ¿Estás confundiendo `N` y `M`, `i` y `j`, filas con columnas? ¿Hay alguna variable sin inicializar?
*   **Comprueba los límites:** ¿Tu algoritmo funciona para los valores más pequeños y más grandes permitidos? (Ej: N=1, N=10^5).
*   **Explica tu algoritmo en voz alta (Rubber Ducking):** explícale tu solución a un compañero o a la pared. El simple acto de verbalizar la lógica a menudo revela el fallo.
*   **Reescribe desde cero:** si todo lo demás falla, a veces es más rápido reescribir la solución desde una perspectiva fresca (o pedírselo a un compañero en una competición por equipos).

**Cuando recibes `Time Limit Exceeded (TLE)`:**
Tu algoritmo es demasiado lento.

*   **Analiza la complejidad:** ¿Cuál es la complejidad Big O de tu solución? ¿Es adecuada para los límites del problema?
*   **¿Hay bucles infinitos?** Revisa las condiciones de parada de tus bucles `while` y tu recursión.
*   **Optimiza la Entrada/Salida:** ¿Estás usando `fast_io`? En problemas con mucha E/S, `cin/cout` (o el equivalente en Python o Java) puede ser lento sin esta optimización.
*   **¿Copias innecesarias?:** ¿Estás pasando estructuras de datos grandes (vectores, strings) por valor en lugar de por referencia (`&`) a tus funciones?
*   **Estructuras de datos:** ¿Estás usando la estructura correcta? Un `std::map` (O(log n)) puede ser demasiado lento si un `std::unordered_map` (O(1) en promedio) es suficiente. Lo mismo aplica para `std::vector` vs. arrays estáticos.

**Cuando recibes `Runtime Error (RE)`:**
Tu programa se ha roto durante la ejecución.

*   **Acceso fuera de los límites:** Es la causa #1. ¿Estás intentando acceder a `v[v.size()]` o `v[-1]`? Activa los "bounds checks" si tu compilador lo permite para depurar localmente.
*   **División por cero (o módulo cero).**
*   **Recursión infinita:** Si la recursión es demasiado profunda, puede agotar la memoria de la pila (Stack Overflow).
*   **Punteros o iteradores inválidos:** ¿Estás modificando una estructura de datos mientras la iteras?

**Cuando recibes `Memory Limit Exceeded (MLE)`:**
Tu programa usa demasiada memoria.

*   **Calcula la memoria en papel:** ¿Cuánto ocupa tu estructura de datos más grande? Un `long long` ocupa 8 bytes. Un array `int dp[10000][10000]` son `10^8` enteros * 4 bytes/entero = 400 MB, probablemente demasiado.
*   **Limpieza entre casos de prueba:** De nuevo, asegúrate de que no acumulas memoria de casos de prueba anteriores.

#### Gestión del Tiempo y Estrategia General del Concurso

1.  **Haz un Primer Escaneo (Los Primeros 10 Minutos):** Lee todos los enunciados y clasifícalos mentalmente por dificultad.
2.  **Ataca la Fruta Madura (La Primera Hora):** Empieza por el problema más fácil para asegurar puntos y ganar confianza.
3.  **No te Atasques (El Resto del Concurso):** Si llevas más de 20-30 minutos en un problema sin progresar, déjalo y pasa a otro. Siempre puedes volver más tarde.