---
layout: post
title: Contact Us
subtitle: we like getting emails!
---

## Contact Us

Via email at: <a href="mailto:info@aandcwindowcoverings.com?subject=Window Covering Consultation" target="_BLANK">info@aandcwindowcoverings.com</a>

Via Phone/Text at: <a href="tel:+13852299682" target="_BLANK">(385) 229-9682</a>


### Setup a Consultation
<form action="https://formspree.io/f/{{ site.formspreeid }}" method="post">
  <div class="row py-2">
    <div class="col-2">Name</div>
    <div class="col-8"><input name="name" type="text" required="true" /></div>
  </div>
  <div class="row py-2">
    <div class="col-2">Email Address</div>
    <div class="col-8"><input name="email" id="email" type="email" required="true"/></div>
  </div>
    <div class="row py-2">
    <div class="col-2">Phone <span class="text-secondary">(123-456-7890)</span></div>
    <div class="col-8"><input name="phone" id="phone" type="tel" pattern="[0-9]{3}.?[0-9]{3}.?[0-9]{4}" required="true" /></div>
  </div>
  <div class="row py-2">
    <div class="col-2">Number of Windows</div>
    <div class="col-8"><input name="windows" type="number" min="1"/></div>
  </div>
  <div class="row py-2">
    <div class="col-2">Body</div>
    <div class="col-8">
      <textarea name="body" cols="80" rows="3">


Please include your preferred contact method! :)
      </textarea>
    </div>
  </div>
  <div class="row py-2">
    <div class="col-2"></div>
    <div class="col-8"><button type="submit">Submit</button></div>
  </div>
</form>
