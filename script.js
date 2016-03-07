$(document).ready(function(){

	/*$(".toggleMobileMenu").on("click", function(){

		if ( $( ".mobile_nav" ).is( ".mobile_menu_active" ) ){
			$( ".mobile_nav").removeClass( "mobile_menu_active" );
		}
		else{
			$( ".mobile_nav" ).addClass( "mobile_menu_active" );
		}
	});*/

	$(".toggleMobileMenu").on("click", function(){

		if ( $( "header .container" ).is( ".mobile_menu_active" ) ){
			$( "header .container").removeClass( "mobile_menu_active" );
		}
		else{
			$( "header .container" ).addClass( "mobile_menu_active" );
		}
	});
	$( window ).resize(function() {
		if ( $(window).width() >= 768 ) {
			$( "header .container").removeClass( "mobile_menu_active" );
		}
	});

	/*$('nav a[href^="#"]').click(function(){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if($.browser.webkit&&!$.browser.safari){$('body').animate( { scrollTop: destination }, 1300 );}
        else {$('html').animate( { scrollTop: destination }, 1300 );};
        $('html').animate( { scrollTop: destination }, 1300 );            
        return false;    
    });*/

	/*$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top 
        }, 1300, 'swing', function () {
            window.location.hash = target;
        });
    });*/

    $('a[href^="#"]').click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });

	/*$( "#starters-tab" ).on( "click", function() {
	  
	  if ( $("#starters").is(":checked") ){
	  	$("input").prop('checked',false); почему-то совсем не работало ?
	  	//$("#starters-panel").css("display", "none"); 
	  }
	});

	$( "#main-tab" ).on( "click", function() {
	  
	  if ( $("#main").is(":checked") ){
		  var el1 = document.getElementById("main");
		  el1.checked = false;
		}

	});*/

//загрузка firefox помнит checked, ghrome не помнит и начинает с первой заклаадки (?) 
// Это все работает, кроме каких-то проблем при ресайзе
/*if ( $("#desserts").is(":checked") ){
	var $this = this;
	var h = parseInt($("#desserts-panel").css("height")) + 44;
	//alert (h);
	$(".radio-tabs").css("height", h + "px");
}

$( "label" ).on( "click", function() {
	if ( $(window).width() >= 768 ) {	//( ($(window).width() >= 768) && ($(window).width() < 930) )
		var $this = this;
		var h = parseInt($("#" + $(this).attr("for")+"-panel").css("height")) + 44;
		//alert (h);
		$(".radio-tabs").css("height", h + "px");
	}
});


$( window ).resize(function() {
	if ( $(window).width() >= 768 ) {	// ПОДУМАТЬ
		if ( $("input").is(":checked") ){
			var $this = this;
			var h = parseInt($ ("#" + $("input:checked").attr("id") + "-panel").css("height")) + 44;
			//alert ($("input:checked").attr("id") + "-panel");
			//alert (h);
			$(".radio-tabs").css("height", h + "px");
		}
	}
});*/

}); // document ready


/*	
	/*var h = parseInt($("#starters-panel").css("height")) + 44;
			$(".radio-tabs").css("height", h + "px");
			var $this = this;
			var a = $(this).attr("for");
			alert ( a);

			var x = this.htmlFor;
			alert (x);


$( "#main-tab" ).on( "click", function() {
		if ( ($(window).width() >= 768) && ($(window).width() < 930) ) {
			var h = parseInt($("#main-panel").css("height")) + 44;
			$(".radio-tabs").css("height", h + "px");
		}
	});
	$( "#desserts-tab" ).on( "click", function() {
		if ( ($(window).width() >= 768) && ($(window).width() < 930) ) {
			var h = parseInt($("#desserts-panel").css("height")) + 44;
			$(".radio-tabs").css("height", h + "px");
		}
	});
	$( "#drinks-tab" ).on( "click", function() {
		if ( ($(window).width() >= 768) && ($(window).width() < 930) ) {
			var h = parseInt($("#drinks-panel").css("height")) + 44;
			$(".radio-tabs").css("height", h + "px");
		}
	});
*/

// при загрузке
/*	if ( $("#starters").is(":checked") ){
		if ( ($(window).width() >= 768) && ($(window).width() < 930) ) {
			var h = parseInt($("#starters-panel").css("height")) + 44;
			$(".radio-tabs").css("height", h + "px");
		}
	}

	if ( $("#main").is(":checked") ){
		if ( ($(window).width() >= 768) && ($(window).width() < 930) ) {
			var h = parseInt($("#main-panel").css("height")) + 44;
			$(".radio-tabs").css("height", h + "px");
		}
	}

	if ( $("#desserts").is(":checked") ){
		if ( ($(window).width() >= 768) && ($(window).width() < 930) ) {
			var h = parseInt($("#desserts-panel").css("height")) + 44;
			$(".radio-tabs").css("height", h + "px");
		}
	}

	if ( $("#drinks").is(":checked") ){
		if ( ($(window).width() >= 768) && ($(window).width() < 930) ) {
			var h = parseInt($("#drinks-panel").css("height")) + 44;
			$(".radio-tabs").css("height", h + "px");
		}
	}

	var aa = $("#starters").attr("id");
	menuHeight(aa);
	function menuHeight(a){
		a = a + "-panel"
		alert (a);
		if ( ($(window).width() >= 768) && ($(window).width() < 930) ) {
			var h = parseInt($("#" + a).css("height")) + 44;h
			alert(h);
			$(".radio-tabs").css("height", h + "px");
		}

	}
*/	

