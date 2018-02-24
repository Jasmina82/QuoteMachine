$(document).ready(function(){
	
	var index=0;
	var quotes=[];
	var colors=["#cc0052","#003399","#ff8000","#00cc44","#b3b300","#999966","#77b300","#661aff","#ff33ff","#ffcc00","#009999"];
	
	$.getJSON("https://talaikis.com/api/quotes/",function(package){
		
		quotes=package;
		display();

	});
	
	$(".next").click(function(){
		
		if(index===quotes.length-1){
			index=0;
			display();
		}
		else{
			
			index++;
			display();
			
		}
		
	});
	function display(){
		
	
		let colorIndex=Math.floor(Math.random()*colors.length);
		
		$(".card-body").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
			
         
       
		$(".card-text").html(quotes[index].quote);
		$(".author").html(quotes[index].author);
			
		
			
			 });
		
		$("body").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
			
	$("body").css("color",colors[colorIndex]);
	$("body").css("backgroundColor",colors[colorIndex]);
			
			 });
	};
	
	$("#twitter").on("click",function(){
		
		let postQuote=$(".card-text").text();
		let postAuthor=$(".author").text();
		
		window.open('https://twitter.com/intent/tweet?text="' + postQuote + "    " + postAuthor +  '"', '_blank');
		
	});
	
	
	
});