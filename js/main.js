document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',function(){
      nav.classList.toggle('open');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var href=this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        if(nav && nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });
});
