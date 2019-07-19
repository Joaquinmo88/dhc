---
layout: detail_caso_exito
permalink: /casos_exito/:title.html
categories: casos_exito
categorie: "storie"

title:  "Templo Mercedario"
date:   2019-06-07 23:36:38 -0500
image:  mercedario-templo.jpg
description: Aunque en ruinas el templo de la orden de Nuestra Señora de la Merced del Siglo XVIII es una
            exquisita Joya de arte barroco y por su belleza de su arcada real es el emblema representativo
            de Quecholac.
---

<div class="container-fluid mt-3 pb-3">
    <div class="container bg-white">
        <div class="p-5 ">
            <h1 class="cnt-title">TEMPLO MERCEDARIO, QUECHOLAC</h1>
            <p>
                Aunque en ruinas el templo de la orden de Nuestra Señora de la Merced del Siglo XVIII es una exquisita
                Joya de arte barroco y por su belleza de su arcada real es el emblema representativo de Quecholac.
            </p>
            <p>
                Compuesto de dos cuerpos y una torre campanario, la estructura principal es de cruz atina, en la fachada
                una ventana coral es una estrella mixtilínea y el triple arco de medio punto están densamente esculpidos
                en relieve en estuco, ejemplo distintivo del barroco popular.<br />
                Tanto la fachada del templo como la puerta de entrada o arcada triple abarcan una vertiginosa mezcla de
                estilos arquitectónicos.<br />
                En este conjunto arquitectónico esta plasmada la distinción que la Corona Española otorgo a Quecholac,
                dada la importancia del lugar por mandato de los reyes de España de la época ordenaron que se edificara
                una arcada real en donde quedaran plasmados ellos.
            </p>
        </div>
        <div id="gallery" class="container-gallery">
            {% for i in (1..85) %}
            <img alt="Image 1 Title" src="/assets/images/gallerys/mercedario/thumbnail/{{i}}.jpg"
                data-image="/assets/images/gallerys/mercedario/{{i}}.jpg" data-description="Image 1 Description">
            {% endfor %}
        </div>
    </div>
</div>
