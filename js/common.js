<script src="jquery-3.1.1.min.js"></script>
<script> 
    $(document).ready(function(){
    	$(".footer").load('footer.html'); 
      	$(".topNav").load('topNav.html'); 
    });

    $(".arrow_down").click(function(){
    	scrolled=600;
        
				$("body").animate({
				        scrollTop:  scrolled
				   });

    })
</script> 
