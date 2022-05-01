const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

$ (function(){
  $('.thumbs img').click(function(){
    var cover = $('.cover img');
    var thumb = $(this).attr('src');
    if(cover.attr('src') !== thumb){
    cover.fadeTo('200', '0', function(){
      cover.attr('src', thumb);
      cover.fadeTo('150','1');
    });
    $('.thumbs img').removeClass('active');
    $(this).addClass('active');
  }
  });
});