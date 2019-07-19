---
layout: detail_caso_exito
permalink: /molino-de-flores
image: molino-de-las-flores.jpg
title: "Molino de Flores"
description: "El Parque Nacional Molino de Flores, ubicado en el municipio de Texcoco, fue escenario de grandes hechos históricos que abarcan desde los tiempos de Nezahualcóyotl..."
---
<section class="bg-white p-0 m-0">
    <div class="container">
        <div class="pt-5 pb-5">
            <h2 class="title sub-title">Hacienda Colonial Molino de las Flores</h2>
            <div class="row">
                <div class="col">
                    <p>
                        Para el equipo de DHC ha sido un honor poder reconstruir y rehabilitar parte de las instalaciones de 
                        la hacienda Molino de las Flores conservando la naturalidad de sus muros, paredes y detalles arquitectónicos 
                        con los que cuenta por el gran valor que representa debido a su antigüedad.
                    </p>
                    <p class="text-inportant-resalt">
                        <em>Todo el trabajo realizado a la hacienda fue con material 100% natural.</em>
                    </p>
                </div>
                <div class="col">
                    <!-- <h2 class="title sub-title text-right text-secondary">Ficha técnica</h2> -->
                    <ul class="list-group ficha-tecnica">
                        <li class="list-group-item"><span>Fecha de creación:</span><span>5 de noviembre de 1937.</span></li>
                        <li class="list-group-item"><span>Ubicación:</span><span>Municipio de Texcoco, Estado de México.</span></li>
                        <li class="list-group-item"><span>Fecha de rehabilitación:</span><span>9 de enero de 2007.</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="gallery" class="container-gallery">
            {% for i in (1..33) %}
            <img alt="Image 1 Title" src="/assets/images/gallerys/molino/thumbnail/{{i}}.jpg"
            data-image="/assets/images/gallerys/molino/{{i}}.jpg" data-description="Image 1 Description">
            {% endfor %}
        </div>
        
    </div>
</section>