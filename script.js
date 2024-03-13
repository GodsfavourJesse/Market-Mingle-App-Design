let navigation = document.querySelector('.navigation');
document.querySelector('.menuToggle').onclick = function(){
  this.classList.toggle('active');
  navigation.classList.toggle('active')
}