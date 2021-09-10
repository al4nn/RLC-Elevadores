$('nav.mobile').click(function(){
	var listaMenu = $('nav.mobile ul')
	if(listaMenu.is(':hidden') == true){
		$("h3").css({"color": "black"})
		var icone = $('.mobile h3').find('i')
		icone.removeClass('fa-bars')
		icone.addClass('fa-times')
		listaMenu.slideToggle()
	}else{
		$("h3").css({"color": "black"})
		var icone = $('.mobile h3').find('i')
		icone.removeClass('fa-times')
		icone.addClass('fa-bars')
		listaMenu.slideToggle()
	}
})