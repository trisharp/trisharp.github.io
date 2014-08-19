$(document).ready(function(){

	$window = $(window);

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '70% '+ yPos + 'px';
            console.log('yPos  ' + yPos);

            console.log('coords  ' + coords);
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
}); 

	// Create HTML5 elements for IE
  
	document.createElement("article");
	document.createElement("section");
