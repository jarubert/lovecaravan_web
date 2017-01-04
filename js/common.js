<script src="jquery-3.1.1.min.js"></script>
<script> 
    $(document).ready(function(){
    	var pathname = window.location.pathname;
    	if((pathname.match(/lovecaravan_web\/$/) == null) || (pathname == "//")){
    		$(".footer").load('../footer.html'); 
      		$(".topNav").load('../topNav.html'); 		
    	}else{
    		$(".footer").load('footer.html'); 
      		$(".topNav").load('topNav.html'); 
    	}
      
    });
    </script> 

