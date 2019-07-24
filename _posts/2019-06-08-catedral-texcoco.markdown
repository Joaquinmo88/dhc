---
layout: detail_caso_exito
permalink: /catedral-texcoco/
image: catedral-texcoco.jpg
title: "Catedral Texcoco"
description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"
---

<div class="container-fluid mt-3 pb-3">
    <div class="container bg-white">
        <div class="p-5 ">
            <h1 class="cnt-title">{{page.title}}</h1>
            <p>
                Es el sitio perfecto para pasar un agradable fin de semana en familia o entre amigos, ya que se puede
                disfrutar de la naturaleza, orar en algunas de sus dos iglesias y al mismo tiempo conocer las historias
                que guarda el lugar.
            </p>
            <p>
                El Molino de Flores fue una fructífera hacienda durante la época colonia, de la cual sólo quedan parte
                de sus deteriorados edificios como el tinacal, la tienda de raya, el horno de pan, macheros, portero,
                cochera, molino, casa principal, casa de visitas, la iglesia de San Joaquín y la capilla del Señor de la
                Presa, entre otros que pueden ser visitados.
            </p>
            <p>
                Además de conocer el antiguo casco de la hacienda, los visitantes pueden disfrutar de la gastronomía en
                la zona comercial, visitar la cabaña chueca, montar a caballo y dar un paseo en cuatrimotos. También
                podrán realizar un recorrido por el vivero federal, el jardín botánico, las zonas de recuperación o
                permanecer en los espacios de campamento.
            </p>
        </div>
        <div id="gallery" class="container-gallery">
            {% for i in (1..10) %}
            <img alt="{{page.title}}" src="/assets/images/gallerys/catedral-texcoco/catedral/thumbnail/{{i}}.jpg"
                data-image="/assets/images/gallerys/catedral-texcoco/catedral/{{i}}.jpg" data-description="{{page.title}}">
            {% endfor %}
        </div>
        <h2 class="separador-gallery"><span>Escuela-de la Enseñansa</span></h2>
        <div id="gallery-1" class="container-gallery">
            {% for i in (1..13) %}
            <img alt="{{page.title}}" src="/assets/images/gallerys/catedral-texcoco/escuela-de-la-enseniansa/thumbnail/{{i}}.jpg"
                data-image="/assets/images/gallerys/catedral-texcoco/escuela-de-la-enseniansa/{{i}}.jpg" data-description="{{page.title}}">
            {% endfor %}
        </div>
        <h2 class="separador-gallery"><span>Tercera Orden</span></h2>
        <div id="gallery-2" class="container-gallery">
            {% for i in (1..30) %}
            <img alt="{{page.title}}" src="/assets/images/gallerys/catedral-texcoco/tercera-orden/thumbnail/{{i}}.jpg"
                data-image="/assets/images/gallerys/catedral-texcoco/tercera-orden/{{i}}.jpg" data-description="{{page.title}}">
            {% endfor %}
        </div>
    </div>
</div>