---
layout: detail_caso_exito
permalink: /el-carmen-texcoco
image: el-carmen-texcoco.jpg
title: "El Carmen Texcoco"
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
            {% for i in (1..19) %}
            <img alt="{{page.title}}" src="/assets/images/gallerys/el-carmen-texcoco/thumbnail/{{i}}.jpg"
                data-image="/assets/images/gallerys/el-carmen-texcoco/{{i}}.jpg" data-description="{{page.title}}">
            {% endfor %}
        </div>
    </div>
</div>