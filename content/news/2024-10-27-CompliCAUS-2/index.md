---
title: "Celebrado el CompliCAUS II"
date: 2024-10-27T09:00:00+00:00
draft: false
language: es
featured_image: ../assets/images/featured/CompliCAUS-2-Foto-grupal.jpg
summary: La segunda edición de CompliCAUS, organizada por el Club de Algoritmia de la Universidad de Sevilla, reunió a estudiantes de distintas disciplinas y niveles académicos, retándolos a resolver problemas en la plataforma Virtual Judge.
description: El 18 de octubre tuvo lugar la segunda edición de CompliCAUS, una competición de algoritmia organizada por el Club de Algoritmia de la Universidad de Sevilla y patrocinada por la ETSII. Esta competición, que congregó a estudiantes de diferentes facultades de la US y alumnos de bachillerato, ofreció un reto estimulante que puso a prueba las habilidades de resolución de problemas de los participantes. El evento demostró que la pasión por la programación es una fuerza que supera fronteras académicas. Agradecemos profundamente el apoyo de la ETSII y de Mª Lourdes Miró. ¡Esperamos verlos en la próxima edición!
author: Administradores CAUS
authorimage: ../assets/images/global/author-CAUS.webp
categories: Eventos
tags: Eventos
---

El viernes 18 de octubre se celebró la segunda edición de CompliCAUS, una competición de programación organizada por el Club de Algoritmia de la Universidad de Sevilla. Con el apoyo de la Escuela Técnica Superior de Ingeniería Informática (ETSII), el evento reunió a estudiantes de distintas facultades, niveles académicos y centros, incluyendo también bachillerato y formación profesional, para enfrentar un desafiante reto de algoritmia de dos horas.

La competición se llevó a cabo en el juez en línea [Virtual Judge](https://vjudge.net/), que permite seleccionar problemas de múltiples jueces estándar y simula los envíos a cada uno de ellos, lo cual facilitó a los participantes enviar y evaluar automáticamente sus soluciones. Esta plataforma también brindó una experiencia más completa de entrada y salida de datos, similar a competiciones como Ada Byron, diferenciándose de otras como HackerRank, donde el foco es exclusivamente la resolución de algoritmos. Gracias a VJudge, los participantes pudieron practicar tanto la lógica de los algoritmos como el manejo de entrada y salida, una habilidad esencial en competiciones avanzadas.

El evento fue diseñado para que personas de cualquier nivel de experiencia pudieran participar y disfrutar del desafío. Por ello, se incluyeron problemas de diversas dificultades, haciendo que la estrategia de identificar y resolver los problemas más accesibles fuese clave para obtener buenos resultados.

Las diapositivas explicativas de los problemas del CompliCAUS II están disponibles en [Drive](https://drive.google.com/drive/folders/1HRhaTf-Dtha1T21ZTzjj7y-6WswkB9OP), y los interesados pueden encontrar los enunciados y soluciones en nuestro [repositorio de GitHub](https://github.com/algoritmiaUS/complicaus), ideal para quien quiera revivir los desafíos o intentar nuevamente los problemas.


# Participación

En esta edición participaron 27 estudiantes de instituciones como la Universidad de Sevilla (diversos grados de Ingeniería Informática, Matemáticas, Física, entre otros), la Universidad Politécnica de Cataluña, así como alumnos de bachillerato (Colegio Santa Ana, Colegio Esclavas Sevilla - Fundación Spínola) y de Formación Profesional (Grado Superior en Desarrollo de Aplicaciones Multiplataforma - IES El Majuelo).

![alt text](participantes1.jpg)

![alt text](participantes2.jpg)

# Resolución de problemas

Al terminar la competición, los responsables del CAUS, Pablo Dávila, Pablo Reina y Kenny Flores, guiaron una sesión en la sala Multiusos de la ETSII para explicar las estrategias de resolución de los problemas propuestos, brindando valiosos consejos y análisis.

![Resolución problemas](resolucion-problemas.png)
<!-- *Este es el subtítulo de la imagen.* -->


# Entrega de premios 

La competición fue reñida desde el inicio, con cambios frecuentes en los primeros puestos durante la primera hora. Al final, estos fueron los ganadores:


| Pos. | Participante           | Ver Imagen                                                                 |
|------|------------------------|----------------------------------------------------------------------------|
| 1    | Jesús Racero San Román | <div style="display: flex; align-items: center; justify-content: center;"> <img src="camera-icon.png" alt="camera" class="camera" onclick="openModal('primer-lugar.jpg')"> </div> |
| 2    | Jaime Benabent Guerrero | <div style="display: flex; align-items: center; justify-content: center;"> <img src="camera-icon.png" alt="camera" class="camera" onclick="openModal('segundo-lugar.jpg')"> </div> |
| 3    | Jaime Argilés Pérez     | <div style="display: flex; align-items: center; justify-content: center;"> <img src="camera-icon.png" alt="camera" class="camera" onclick="openModal('tercer-lugar.jpg')"> </div> |

<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <img id="modalImage" src="" alt="imagen del equipo">
    </div>
</div>

<script>
    // Obtener el modal
    var modal = document.getElementById("myModal");

    // Función para abrir el modal y cambiar la imagen
    function openModal(imageSrc) {
        var modalImage = document.getElementById("modalImage");
        modalImage.src = imageSrc;
        modal.style.display = "block";
    }

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Cuando el usuario haga clic en <span> (x), cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario haga clic fuera del modal, también se cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>

<style>
    table {
        width: 50%;
        border-collapse: collapse;
    }
    table, th, td {
        border: 1px solid black;
    }
    th, td {
        padding: 10px;
        text-align: center;
    }
    /* Clase para la cámara: ajusta su tamaño a 20x20 píxeles */
    .camera {
        width: 20px;
        height: 20px;
    }
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 60px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 600px;
    }
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    img {
        max-width: 100%;
        height: auto;
    }
</style>


# Agradecimientos 

Agradecemos a la Escuela Técnica Superior de Ingeniería Informática por su patrocinio y apoyo, así como a María Lourdes Miró (Subdirectora de Estudiantes, Innovación y Responsabilidad Social) y Juan Antonio Álvarez García (Subdirector de Investigación, Transferencia y Emprendimiento) quienes han sido clave para hacer de este evento una realidad.


<!-- Este ha sido solo el comienzo de lo que esperamos sea una larga tradición en la Universidad de Sevilla. Estamos seguros de que vendrán más competiciones como esta, donde los estudiantes podrán seguir desafiándose, aprendiendo y, por supuesto, divirtiéndose con la programación y la algoritmia. ¡Nos vemos en la próxima edición de CompliCAUS! -->





