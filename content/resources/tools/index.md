---
title: Herramientas
date: 2025-08-11T12:00:0+02:00
draft: false
language: es
description: Configuración de IDE, plantillas y script útiles
weight: 50
---

[⬅ Volver a Recursos](../)

Un flujo de trabajo rápido y eficiente te permite concentrarte en lo que de verdad importa: resolver el problema. En esta sección, te mostramos cómo configurar tu entorno de desarrollo, usar plantillas de código para empezar con buen pie y automatizar las tareas repetitivas.

---

## Configuración de Editores e IDEs (Tu Taller)

No hay un "mejor" editor, sino el que mejor se adapta a ti. Aquí tienes las opciones más populares en la comunidad:

*   **Visual Studio Code (La opción versátil y recomendada)**
    *   **Por qué:** Es ligero, rápido, gratuito y extremadamente personalizable. Su principal ventaja son las extensiones.
    *   **Configuración Rápida:**
        1.  Instala VS Code desde su [web oficial](https://code.visualstudio.com/).
        2.  Instala la extensión **"C/C++, Python o Java"** para tener coloreado de sintaxis y autocompletado.


*   **JetBrains IDEs**
    - PyCharm para Python, IntelliJ IDEA para Java, CLion para C++.
    - Potentes, con autocompletado y depuradores visuales.

*   **Editores Ligeros (Sublime Text, Geany, Vim/Neovim):** son increíblemente rápidos y consumen muy pocos recursos. Son para aquellos que prefieren tener un control total sobre su entorno y se sienten cómodos trabajando principalmente desde la terminal.


## Plantillas de Código Base

No empieces cada problema desde cero. Usa plantillas que agilicen la entrada/salida y te preparen para múltiples casos de prueba.

### Python

```python
import sys
input = sys.stdin.readline

def solve():
    # Tu código aquí
    pass

if __name__ == "__main__":
    t = int(input())  # Descomenta si hay múltiples casos
    for _ in range(t):
        solve()
    # O simplemente:
    # solve()
```

*Uso de `sys.stdin.readline` para entrada rápida.*

---

### Java

```java
import java.io.*;
import java.util.*;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static StringTokenizer st;

    static String next() throws IOException {
        while (st == null || !st.hasMoreTokens())
            st = new StringTokenizer(br.readLine());
        return st.nextToken();
    }

    static int nextInt() throws IOException {
        return Integer.parseInt(next());
    }

    static void solve() throws IOException {
        // Tu código aquí
    }

    public static void main(String[] args) throws IOException {
        int t = 1; // Cambia si hay múltiples casos
        // t = nextInt();
        for (int i = 0; i < t; i++) {
            solve();
        }
    }
}
```

> *Uso de BufferedReader y StringTokenizer para lectura rápida.*

### C++

```cpp
#include <bits/stdc++.h> // Incluye todas las librerías estándar (solo para competición)

using namespace std;

// Macros y alias útiles
#define ll long long
#define vi vector<int>
#define pii pair<int, int>
#define fast_io ios_base::sync_with_stdio(false); cin.tie(NULL);

// Función para resolver un caso de prueba
void solve() {
    // Tu código aquí
    
}

int main() {
    fast_io; // Activa la entrada/salida rápida

    // Descomenta la siguiente sección si hay múltiples casos de prueba
    /*
    int t;
    cin >> t;
    while (t--) {
        solve();
    }
    */
    
    // Comenta la siguiente línea si hay múltiples casos de prueba
    solve();

    return 0;
}
```


---

## Bibliotecas de Algoritmos y "Codebooks" de Referencia

Una plantilla base te ayuda a empezar, pero un **codebook** (o dossier) es tu arsenal durante la competición. Es una colección de implementaciones de algoritmos y estructuras de datos complejas, probadas y listas para ser consultadas.

El verdadero objetivo es usar estos ejemplos como inspiración para construir **tu propio** dossier, porque entenderás perfectamente cada línea de tu código.

*   **[KACTL (KTH)](https://github.com/kth-competitive-programming/kactl/blob/main/kactl.pdf):** El estándar de oro. El dossier del equipo del KTH Royal Institute of Technology es posiblemente la referencia más famosa y pulida del mundo. Imprescindible para usuarios de C++.
*   **[dossier-template (U. de Sevilla)](https://github.com/algoritmiaUS/dossier-template):** Un excelente ejemplo en español de un dossier mantenido por un club de algoritmia universitario.
*   **[notebook-unlam-python (U. de la Matanza)](https://github.com/LautaroLasorsa/notebook-unlam-python/blob/main/notebook/notebook.pdf):** Un recurso fantástico y muy completo para los que compiten en Python.
*   **[codelibrary (indy256)](https://github.com/indy256/codelibrary):** Una increíble colección de algoritmos y estructuras de datos con implementaciones en múltiples lenguajes (C++, Java, Python, etc.).
*   **[Template de I/O en Java](https://github.com/jeffrey-xiao/competitive-programming/blob/master/src/codebook/Template.java):** Un ejemplo más específico centrado en optimizar la entrada/salida en Java, un buen complemento a la plantilla básica.

---

## Automatización de Compilación y Testeo

No pierdas tiempo copiando y pegando casos de prueba. Usa la terminal para redirigir la entrada y salida.

### Python
```bash
python3 sol.py < input.txt > output.txt
```

### Java
```bash
# Compilar
javac Main.java
# Ejecutar
java Main < input.txt > output.txt
```

### C++
```bash
# Compilar con optimizaciones y warnings (recomendado)
g++ -std=c++17 -O2 -Wall sol.cpp -o sol
# Ejecutar
./sol < input.txt > output.txt
```