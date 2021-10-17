function burger(){
  var elem = document.querySelector('.hamburger__wrapper');
  elem.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}
function hideMenu(){
  var elem = document.querySelector('.hamburger__wrapper');
  elem.classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

