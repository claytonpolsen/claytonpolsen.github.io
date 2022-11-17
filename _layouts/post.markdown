---
author: Pete
date: 2022-10-13
---
<!doctype html>
<html lang="en">
  {% include head.html %}
  <style>
    main {
      margin-top: 200px;
    }
  </style>
  <body>
    {% include header_nav.html %}
    <main>
      <div class="container">
        {{ content }}
      </div>
      <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2022 {{ site.name }} &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
    </main>
  </body>
</html>
