// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	 $('#btn_sonido').click(function(){
//   alert("click btn_sonido");
   if($('#btn_sonido').hasClass('ui-icon-audio'))
   {
//apagar audio
     $('#btn_sonido').removeClass('ui-icon-audio');
	 $('#btn_sonido').addClass('ui-icon-bars');
	 alert('AUDIO APAGADO')
	 
	 }
	 else
	 {
//encender audio
	 $('#btn_sonido').removeClass('ui-icon-bars');
	 $('#btn_sonido').addClass('ui-icon-audio');
	 navigator.notification.beep(1);
	 alert('AUDIO ENCENDIDO');
	 }
	 //alert("click a btn_sonido")
  });//click a btn_sonido
//});
});
