---
layout: default
author: Pete
title: Home
date: 2022-08-09
---
  <div class="container">
  {{ content }}
  </div>
  <div class="container marketing">
    <!-- Three columns of text below the carousel -->
    <div class="row">
      {% for data in page.marketings %}
        <div class="col-lg-4">
          <img src="{{ data.image }}" class="bd-placeholder-img rounded-circle" width="140" height="140" />
          <h2 class="fw-normal">{{ data.head }}</h2>
          <p>{{ data.text }}</p>
          <p><a class="btn btn-secondary" href="{{ data.link }}"">{{ data.link_text }} &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
      {% endfor %}
    </div><!-- /.row -->
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
