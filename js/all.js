$(document).ready(function() {
	$('#beginFontAction1').addClass('active');
	$('#beginFontAction2').addClass('active');
	$(function () {
		 $(window).scroll(function () {
		 	//Y軸
		 	var scrollVal = $(this).scrollTop();
		 	// console.log(scrollVal);
		 	//welcomePage的高
			var welcomePageH = $('.welcomePage').position().top; 
			//ourStory的高
			var ourStoryH = $('.ourStory').position().top;
			//weddingDesign的高
			var weddingDesignH = $('.weddingDesign').position().top;
			//photoPage的高
			var photoPageH = $('.photoPage').position().top;
				//動畫
			if(  scrollVal > ourStoryH-100){
				$('.ourStory .slideln').addClass('active');
				$('.ourStory .slidelnDelay').addClass('active');
				$('.ourStory .slidelnDelay2').addClass('active');

			}
			if(  scrollVal > weddingDesignH-100){
				$('.weddingDesign .slideln').addClass('active');
				$('.weddingDesign .slidelnDelay').addClass('active');
				$('.weddingDesign .slidelnDelay2').addClass('active');

			}


		 });
	});

});

