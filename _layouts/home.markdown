---
layout: default
author: Pete
title: Home
date: 2022-08-09
---
<section class="py-5 text-center container-fluid" style="margin-top: 150px; background-image: url('/assets/images/IMG_0777.JPG'); max-height: 430px; background-size: cover; background-position: top right" >
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="text-black">Give your home the perfect finishing touch!</h1>
      <p class="">Take a look at the best modern options by Norman Window Fashions!</p>
      <p>
        <a href="#" class="btn btn-primary my-2">Setup a Consultation</a>
        <a href="#" class="btn btn-secondary my-2">Professional Installation</a>
      </p>
    </div>
  </div>
</section>
  <div class="container">
  {{ content }}
  </div>
  <div class="container marketing">
    <!-- START THE FEATURETTES -->
    <hr class="featurette-divider">
    <div class="row featurette">
      {% for data in page.featurettes %}
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">
          {{ data.header }}
          <span class="text-muted">{{ data.text }}</span>
        </h2>
        <p class="lead">{{ data.lead }}</p>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="{{ data.image }}"/>
      </div>
      <hr class="featurette-divider">
      {% endfor %}
    </div>
