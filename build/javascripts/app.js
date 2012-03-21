
$(function() {
  function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
  }
  
  goToByScroll('grid-wax')
  
});
