<script type="text/javascript" charset="utf-8">
			$(function() {
  				$('.cbp-af-header').hide();
			});
		 </script>

        <script type="text/javascript" charset="utf-8">
			$(window).scroll(function(){
        		posScroll = $(document).scrollTop();
        		if(posScroll >=69)
            $('.cbp-af-header').slideDown(450);
        	else
            $('.cbp-af-header').slideUp(450);
    		});
		</script>
