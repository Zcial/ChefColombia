$(document).ready(function(){
	logo();
	slides();
	fancyboxLi();
	alerts();

	$(window).resize(function(){
		resizeWindow();
		slides();
		fancyboxLi();
		alerts();

		$('.main').css({
			height: $('.showed').outerHeight() - $('.logo').outerHeight() - 20,
		});
	});

	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
		return function( elem ) {
			return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var swiffy = $('#swiffycontainer');

	$('#swiffycontainer .splash').attr('src', 'img/pres'+getRandomInt(1,3)+'.png');

	$('#swiffycontainer .splash').css({
		maxWidth:$(window).width()
	});

	$('.superbody').css({
		height:$(window).height(),
		overflow:'hidden',
	});

	setTimeout(function(){
		$('#swiffycontainer').css({
			display:'none',
		});
		$('.superbody').css({
			height:'auto',
			overflow:'visible',
		});
	},5000);

	$('.modal-1').colorbox({ rel:'modal-1', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-2').colorbox({ rel:'modal-2', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-3').colorbox({ rel:'modal-3', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-4').colorbox({ rel:'modal-4', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-5').colorbox({ rel:'modal-5', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-6').colorbox({ rel:'modal-6', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-7').colorbox({ rel:'modal-7', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-8').colorbox({ rel:'modal-8', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-9').colorbox({ rel:'modal-8', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-10').colorbox({ rel:'modal-9', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-11').colorbox({ rel:'modal-10', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-12').colorbox({ rel:'modal-11', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });
	$('.modal-13').colorbox({ rel:'modal-12', width:'100%', onComplete:(function(){ $('.cboxPhoto').unbind().click($.colorbox.close); }) });

	$('.home').click(function(){
		window.location.href = 'index.html';
	});

	$('.listado').click(function(e){
		e.preventDefault();
		$('.slide').animate({
			right:-$(window).width(),
		},300, function(){
			$('.slide').css({
				display:'none'
			});
		});
		$('.main').css({
			height:'auto',
		});
	});

	$('.info-alert').click(function(){
		$('.info').css({
			visibility:'visible',
		});
	});

	$('.info').click(function(){
		$(this).css({
			visibility:'hidden',
		});
	});

	$('.news-alert').click(function(){
		$('.news').css({
			visibility:'visible',
		});
	});

	$('.onoffswitch').click(function(e){
		e.stopPropagation();
	});

	$('.news').click(function(){
		$(this).css({
			visibility:'hidden',
		});
	});

	$('.menu-container').click(function(e){
		e.preventDefault();
		$('.menu ul', this).slideToggle(function(){
			$('.menu li').css({
				background:'none',
			});
		});
	});

	$('.menu li').click(function(e){
		e.preventDefault();
		$(this).css({
			background:'rgba(0,0,0,0.5)'
		});
	});

	$('.share-container').click(function(e){
		e.stopPropagation();
		$('.share ul', this).slideToggle(function(){
			$('.share li', this).css({
				background:'none',
			});
		});
	});

	$('.search-container').click(function(e){
		e.preventDefault();
		$(this).animate({backgroundColor: '#909090'}, function(){
			$(this).animate({backgroundColor: '#fff'});
		});
		$('.search-input').slideToggle();
	});

	$('.search-input input').keyup(function(){
		var search = $(this).val();
		var results = $('.recetas li:contains("'+ search +'")');
		$('.recetas li').hide();
		results.show();
	});

	/*recetas*/
	$('.recetas li, .siguiente').click(function(e){
		e.preventDefault();
		slide = $(this).attr('data-goto');
		showSlide(slide);
	});

	$('.anterior').click(function(e){
		e.preventDefault();
		slide = $(this).attr('data-slide');
		hideSlide(slide);
	});

	$('section > button').click(function(e){
		e.preventDefault();
		pdf = $(this).attr('data-goto');
		showPdf(pdf);
	});

	$('.pdfprev').click(function(e){
		e.preventDefault();
		pdf = $(this).attr('data-pdf');
		hidePdf(pdf);
	});

	function alerts(){
		var width = $('.info').outerWidth();
		$('.info').css({
			marginLeft:-width/2,
		});
		var widthNews = $('.news').outerWidth();
		$('.news').css({
			marginLeft:-widthNews/2,
		});
	}

	function fancyboxLi(){
		var fancybox = $('.showed .fancybox li');
		var width = fancybox.width();
		fancybox.css({
			height:width,
		});
	}

	function logo(){
		$(window).load(function(){
			$('.logo').css({
				width:$(window).width() - $('.search-container').outerWidth() - $('.menu-container').outerWidth() - 30,
			});
		});
	}

	function resizeWindow(){
		$('.logo').css({
			width:$(window).width() - $('.search-container').outerWidth() - $('.menu-container').outerWidth() - 25,
		});
	}

	function slides(){
		$('.slide').each(function(){
			if( !$(this).hasClass('showed') ){
				$(this).css({
					width:$(window).width(),
					right:-$(window).width(),
					display:'none',
				});
			}else{
				$(this).css({
					width:$(window).width(),
				});
			}
		});

		$('.pdf').css({
			width:$(window).width(),
			right:-$(window).width(),
			display:'none',
		});

		$('.loadpdf').css({
			width:'100%',
		});
	}

	function showSlide(slide){
		$('.menu ul, .share ul').hide();
		var slider = $('section[data-slide="'+slide+'"]');
		slider.width( $(window).width() );
		slider.animate({
			right:0,
		},300).addClass('showed').css({
			display:'block',
		});
		$('.main').css({
			display:'block',
			height: slider.outerHeight() - $('.logo').outerHeight() - 20,
			overflow:'hidden',
		});
		//set video
		video = $('.video-container', slider).attr('data-video');
		videoContainer = $('.video-container', slider);
		videoContainer.html(
			//'<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video + '?rel=0&autoplay=1&wmode=opaque" frameborder="0" allowfullscreen></iframe>'
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video + '?rel=0&wmode=opaque" frameborder="0" allowfullscreen></iframe>'
		);
		var fancyboxImg = $('[data-slide="'+slide+'"] .fancybox li .img');
		var fancybox = $('[data-slide="'+slide+'"] .fancybox li');
		var widthF = fancybox.width();
		fancybox.css({
			height:widthF,
		});
	}

	function hideSlide(slide){
		$('.menu ul, .share ul').hide();
		$('section[data-slide="'+slide+'"]').animate({
			right:-$(window).width(),
		},300, function(){
			$(this).css({
				display:'none',
			});
		}).removeClass('showed');
		if( $('.showed').length == 0 ){
			$('.main').css({
				height:'auto',
			});
		}
	}

	function showPdf(pdf){
		$('.menu ul, .share ul').hide();
		$('html, body').animate({ scrollTop: 0 }, 200);
		var docpdf = $('section[data-pdf="'+pdf+'"]');
		//alert($('.showed').height());
		docpdf.width( $(window).width() );
		docpdf.animate({
			right:0,
		},300).css({
			display:'block',
		});
		$('.loadpdf').css({
			height:$('.showed').height() - $('footer').outerHeight() + 38,
		});
	}

	function hidePdf(slide){
		$('.menu ul, .share ul').hide();
		$('section[data-pdf="'+pdf+'"]').animate({
			right:-$(window).width(),
		},300,function(){
			$(this).css({
				display:'none',
			});
		});
	}
});
