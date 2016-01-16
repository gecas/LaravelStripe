	$(document).ready(function(){
		$("#starskiInfo").hide();
		$("#fleurInfo").hide();
		$("#grenvilleInfo").hide();
		$("#jetteInfo").hide();
		$("#andersInfo").hide();

		$("#openStarski").on( "click", function() {
		//$(".panel-heading > .pull-right").removeClass("fa-plus").addClass("fa-minus");
		//$( "#showComments" ).addClass("hideComments");
		 var time = 1500;
			if($(this).hasClass("triangle-down")){
				$("#starskiInfo").stop(0).slideDown(time);
				$(this).toggleClass("triangle-down triangle-up");
			}else if($(this).hasClass("triangle-up")){
				$("#starskiInfo").stop(0).slideUp(time);
				$(this).toggleClass("triangle-up triangle-down");
			}
		});


		$("#openFleur").on( "click", function() {
		//$(".panel-heading > .pull-right").removeClass("fa-plus").addClass("fa-minus");
		//$( "#showComments" ).addClass("hideComments");
		 var time = 1500;
			if($(this).hasClass("triangle-down")){
				$("#fleurInfo").stop(0).slideDown(time);
				$(this).toggleClass("triangle-down triangle-up");
			}else if($(this).hasClass("triangle-up")){
				$("#fleurInfo").stop(0).slideUp(time);
				$(this).toggleClass("triangle-up triangle-down");
			}
		});


		$("#openGrenville").on( "click", function() {
		//$(".panel-heading > .pull-right").removeClass("fa-plus").addClass("fa-minus");
		//$( "#showComments" ).addClass("hideComments");
		 var time = 1500;
			if($(this).hasClass("triangle-down")){
				$("#grenvilleInfo").stop(0).slideDown(time);
				$(this).toggleClass("triangle-down triangle-up");
			}else if($(this).hasClass("triangle-up")){
				$("#grenvilleInfo").stop(0).slideUp(time);
				$(this).toggleClass("triangle-up triangle-down");
			}
		});

		$("#openJette").on( "click", function() {
		//$(".panel-heading > .pull-right").removeClass("fa-plus").addClass("fa-minus");
		//$( "#showComments" ).addClass("hideComments");
		 var time = 1500;
			if($(this).hasClass("triangle-down")){
				$("#jetteInfo").stop(0).slideDown(time);
				$(this).toggleClass("triangle-down triangle-up");
			}else if($(this).hasClass("triangle-up")){
				$("#jetteInfo").stop(0).slideUp(time);
				$(this).toggleClass("triangle-up triangle-down");
			}
		});

		$("#openAnders").on( "click", function() {
		//$(".panel-heading > .pull-right").removeClass("fa-plus").addClass("fa-minus");
		//$( "#showComments" ).addClass("hideComments");
		 var time = 1500;
			if($(this).hasClass("triangle-down")){
				$("#andersInfo").stop(0).slideDown(time);
				$(this).toggleClass("triangle-down triangle-up");
			}else if($(this).hasClass("triangle-up")){
				$("#andersInfo").stop(0).slideUp(time);
				$(this).toggleClass("triangle-up triangle-down");
			}
		});

});

if($(window).width()>992){
	//$("#meniu-line").css('z-index', '50').show().stop();
	$(document).ready(function(){
		$("#logo").hide();
		setTimeout(function(){ 
		$("#logo").show(500) }, 1500);
		$("#meniu-list").show(500);
	$("#meniu-list").hide(2500);
	});
	
	// $("#meniu-line").show();
	// $("#logo").hide();
	// $("#antras").hide();
	// $("#trecias").hide();

	// $(document).on("scroll", function(){
	// 	if($(this).scrollTop() > 100 && $("#meniu-list").hasClass('menu-list-open')){
	// 		$("#meniu-line").show();
	// 		$("#meniu-list").show(500).hide(2500).removeClass('menu-list-open');
	// 		//$("#meniu-list").show(500).addClass('menu-list-open');
	// 		$("#logo").show(500);
	// 		$("#antras").show(500);
	// 		$("#trecias").show(500);

	// // 		if($("#meniu-list").hasClass('menu-list-open')){
	// // 	$("#meniu-list").hide(2500).removeClass('menu-list-open');
	// // }
	// 	}
	// 	else if ($(this).scrollTop() <= 100 && !$("#meniu-list").hasClass('menu-list-open')){
	// 		$("#meniu-list").hide(500).addClass('menu-list-open');
	// 		$("#meniu-line").hide(500);
	// 		// $("#meniu-list").hide(500);
	// 		$("#logo").hide();
	// 		$("#antras").hide(500);
	// 		$("#trecias").hide(500);
	// 	}
	// });

$(document).on("scroll", function(){
	if($(this).scrollTop() <= 200){
		$("#scrollFromTop").show(500);
	
}else{
	$("#scrollFromTop").hide(500);
	//$("#logo").show(2500);
}

});

$("#scrollFromTop").on('click', function(){
  		//window.scrollTo('+=400px', 0, { axis:'y' });

  		var body = $("html, body");
  		body.stop().animate({scrollTop:700}, '500', 'swing', function() { 
		   //console.log("Finished animating");
		});
 		//return false;
	});


}
if($(window).width() > 992) {
if($('.menu-list:visible').length == 0){
	var menuHeight = $(".menu-list").height();
	$(".menu-line").css("height", menuHeight);
}
}

if($(window).width() > 992) {
// $("#main-menu-line").on('mouseover', function(){
// 	$("#navbar").stop().show(500);
// });

//  $("#navbar").on('mouseleave', function(){
//  	$("#navbar").stop().hide(500);
//  });

 $("#logo img").on('mouseover', function(){
 	$(this).attr("src", $(this).attr("src"));
 });

 $("#logo >img").on('mouseover', function(){
 	$(this).attr("src", $(this).attr("src"));
 });
}
if($(window).width() <= 992) {
	$("#logo").show();
	$("#logo2").show();
	$("#logo").appendTo(".menu-list");


}

$(document).ready(function(){
	$(document).on("mouseover", ".meniu .menu-line", function(){
		$(this).parent().find(".menu-list").first().stop().show(500);
	});
	$(document).on("mouseleave", ".meniu", function(){
		$(this).find(".menu-list").first().stop().hide(500);
	});
	$(document).on("click", ".my-button button", function(){
		if ($(".meniu .menu-list").css("display") == "none") {
			$(".meniu").css("z-index", "50");
			$(".meniu .menu-list").stop().slideDown(500);
		}else{
			$(".meniu").css("z-index", "0");
			$(".meniu .menu-list").stop().slideUp(500);
		}
	});

});


$('.apply-textarea').on("input",function () {
	countDescription($(this), $(this).parent().find(".apply-counter").first());
});
$(document).ready(function() {
	preloadCounter();
});

function preloadCounter () {
	for (var i = 0; i < $('.apply-textarea').length; i++) {
		countDescription($('.apply-textarea').eq(i), $('.apply-textarea').eq(i).parent().find(".apply-counter").first());
	};
}

function countDescription(input, counter){
var max = 450;
var len = input.val().length;
counter.text(max + ' characters left');
if (len >= max) {
counter.text(' You have reached the limit');
} else {
var char = max - len;
counter.text(char + ' characters left');
  }
}


$(document).on("change", "#cv", function() {
    var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
    $("#cv_upload").text(fileName);
  });

$(document).on("change", "#participant", function() {
    var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
    $("#participant_upload").text(fileName);
  });

  $("#portfolio").change(function() {
    var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
    $("#portfolio_upload").text(fileName);
  });

  $("#picture").change(function() {
    var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
    $("#picture_upload").text(fileName);
  });


function printPage() {
    window.print();
}
