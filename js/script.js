//Autor:Jefferson Augusto Lopes

$('#btn_menu').click(function(){
  var menu = $('#sideMenu');
  var width = menu.width();
  if(width == 0 || width == 1920){
    console.log('abrir menu');
    menu.animate({width: '300px'}, "slow");
    $('#overlay').fadeIn( "slow", function() {
      $('#overlay').show();
    });
  }else{
    console.log('fechar menu');
    menu.animate({width: '0px'}, "slow");
    $('#overlay').fadeOut( "slow", function() {
      $('#overlay').hide();
    });
  }
});

$('#overlay').click(function(){
  var menu = $('#sideMenu');
  var width = menu.width();
    console.log('fechar menu');
    menu.animate({width: '0px'}, "slow");
    $(this).fadeOut( "slow", function() {
      $(this).hide();
    });
});