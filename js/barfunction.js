function main(){
(

function(){
	$(window).bind('scroll',function(){
		var navHeight = $(window).height() - 100;
		if($('#nav1').offset().top > navHeight)
		{$('#nav1').addClass('abc');}
	else{$('#nav1').removeClass('abc');}
	})
          }
  ()
)

}
main();