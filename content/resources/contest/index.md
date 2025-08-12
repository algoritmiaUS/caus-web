---
title: Concursos
date: 2025-08-11
draft: false
language: es
description: Qué concursos hay y cómo son
weight: 60
---

[⬅ Volver a Recursos](../)

Participar en tu primer concurso puede parecer intimidante, pero en realidad es una de las experiencias más divertidas y enriquecedoras del club. Esta guía desglosa todo lo que necesitas saber, desde el formato y las reglas hasta las estrategias clave para que llegues con confianza.

---


## Cómo es una competición?

Aunque hay variaciones, la mayoría de concursos comparten una estructura similar:

- **Duración**: son maratones de concentración. La duración típica es de **2 a 5 horas**.
- **Problemas**: se presenta un conjunto de **5 a 12 problemas** de dificultad variada. El objetivo no es resolverlos todos, sino tantos como puedas, lo más rápido posible.
- **Participantes**: las competiciones pueden ser individuales o en equipos de hasta 3 integrantes que colaboran para resolver los problemas.
- **Lenguajes permitidos**: generalmente se permite usar los lenguajes más populares como **C++, Java y Python**.
- **El juez online**: no entregas tu solución a una persona. La subes a una plataforma automatizada (un "juez") que compila tu código y lo evalúa contra un conjunto de casos de prueba secretos para dar su veredicto.


### La comunidad

La mejor forma de entenderlo es verlo. El siguiente vídeo muestra el ambiente, la tensión y la emoción de la final nacional de la competición **Ada Byron**, un excelente ejemplo de un concurso por equipos de alto nivel en España.

<br>
<div style="display: flex; justify-content: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/H7emGqxE3NI?si=Pf-P1Z9GS7BHN8AK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<br>


### Elementos

Cuando participas, interactúas con estos tres elementos clave:

- **El enunciado**: una página con la descripción del problema, el formato exacto de la entrada y la salida, los límites de tiempo y memoria, y uno o dos casos de ejemplo para que puedas probar tu lógica. A veces incluyen una buena dosis de humor.
- **El veredicto del juez**: tras enviar tu código, recibirás una respuesta instantánea. Las más comunes son:
  - `Accepted (AC)`: ¡Felicidades! Tu solución es correcta.
  - `Wrong Answer (WA)`: tu programa da una respuesta incorrecta para algún caso.
  - `Time Limit Exceeded (TLE)`: tu solución es demasiado lenta.
  - `Runtime Error (RE)`: tu programa falló durante la ejecución (ej: división por cero, acceso a memoria inválida).
  - `Compilation Error (CE)`: tu código ni siquiera compila.
- **La tabla de puntuaciones**: muestra el progreso de todos los participantes. ¡Ver tu nombre subir en la tabla es una gran sensación!


### Reglas comunes y código de honor

- **Penalizaciones**: ¡El tiempo es crucial! Tu puntuación final no solo depende de cuántos problemas resuelvas, sino también de cuándo los resuelvas. El sistema más común (ICPC) funciona así: tu tiempo total es la suma de los minutos desde el inicio hasta cada envío correcto, **más una penalización (generalmente 20 minutos) por cada envío incorrecto** que hayas hecho en los problemas que finalmente resolviste.

- **Material permitido**: generalmente puedes usar tu propio teclado y ratón, y consultar material de referencia personal que hayas traído (tu "codebook" o dossier impreso). Lo que está _prohibido_ es cualquier tipo de comunicación con el exterior o el uso de internet (excepto para acceder al juez).

- **Individual vs. Equipo**: los concursos de plataformas como Codeforces o AtCoder suelen ser _individuales_. Las grandes competiciones universitarias como el **ICPC** o **Ada Byron** son en _equipos de tres personas con un único ordenador_ lo que añade una capa extra de estrategia y comunicación.


## Competiciones anuales

Existen grandes competiciones anuales que son hitos en el calendario de todo programador competitivo.


### Estudiantes universitarios

- **[ICPC (International Collegiate Programming Contest)](https://icpc.global)**: La competición de programación universitaria más prestigiosa del mundo. Se compite en equipos de 3, a través de fases regionales que dan acceso a la final mundial.
- **[SWERC (Southwestern Europe Regional Contest)](https://swerc.eu)**: Está abierta únicamente a equipos de estudiantes del suroeste de Europa y da acceso a la final de la ICPC.
- **[Ada Byron](https://ada-byron.es/)**: Competición por equipos de 3 para estudiantes de grado. Hay una primera ronda de fases regionales y una fase final nacional. Está organizada por la Universidad Complutense de Madrid.
  - Aquí tienes nuestra [recopilación de enunciados de ediciones anteriores de AdaByron](https://drive.google.com/drive/folders/1xleZ_-1_LyoHV7SDbyXg_fQ2m_BMrO82?usp=sharing)
  - [Echa un vistazo a nuestro dossier](https://github.com/algoritmiaUS/dossier-template/tree/master/output)!
- **[Las 12 Uvas](https://las12uvas.es)**: Resolver 12 problemas de dificultad creciente durante el día 31 de diciembre.


### Estudiantes no universitarios

  - **[International Olympiad in Informatics (IOI)](https://ioinformatics.org/)**: Para estudiantes de secundaria, FP y bachillerato. Si consigues una medalla, las mejores universidades del mundo se pelearán por que estudies en ellas.
  - **[Olimpiada Informática Española (OIE)](https://olimpiada-informatica.org)**: Para estudiantes de secundaria, FP y bachillerato. Es el clasificatorio para la competición internacional (IOI).
  - **[Olimpiada Informática Femenina (OIFem)](https://oifem.es)**: Formato similar a la OIE, pero únicamente para chicas. Tiene el objetivo de fomentar la participación femenina.
  - **[ProgramaMe](https://programame.com)**: Competición muy popular para estudiantes de FP, con fases regionales y final nacional.
  - **[Las 12 Uvas](https://las12uvas.es)**: Resolver 12 problemas de dificultad creciente durante el día 31 de diciembre.
  - **[CALICO](https://calico.cs.berkeley.edu/)**: Organizada por la Universidad de California en Berkeley.
    - Si no eres estudiante pre-universitario también puedes participar, aunque no optas a premio.
  - **[CAMA](https://www.camacontest.org/)**
    - Si no eres estudiante pre-universitario también puedes participar, aunque no optas a premio.


### Abiertas a todo el mundo

- **[Advent of Code](https://adventofcode.com)**: Un evento anual donde se liberan dos retos de programación cada día desde el 1 hasta el 25 de diciembre. La dificultad aumenta progresivamente.
  > Tenemos nuestra propia leaderboard de *Advent of Code*! Para unirte solo tienes que entrar [aquí](https://adventofcode.com/2023/leaderboard/private), introducir el código `2502719-7da75a09` y hacer click en "Join". Esta leaderboard sirve para tener las puntuaciones de todo el club en el mismo sitio y que podamos picarnos un poco entre todos
- **[Meta Hacker Cup](https://www.facebook.com/codingcompetitions/hacker-cup)**: Una de las competiciones individuales más famosas, organizada por Meta. Consta de varias rondas online hasta llegar a una final presencial.

DEP competiciones de Google en 2023: Kickstart, CodeJam y HashCode
