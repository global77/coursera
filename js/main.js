$("#btn_menu").click(function(){
	//alert("!");
	if($("#btn_menu").hasClass("collapsed")){
		$("#menu_control").removeClass('fa-bars').addClass('fa-times').css('color','red');
	}else{
		$("#menu_control").removeClass('fa-times').addClass('fa-bars').css('color','yellow');
	}
});
