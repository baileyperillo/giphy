// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
     var search = $("#search-term").val();
     var random = Math.floor(Math.random()*9)
  $.ajax({
      url:"https://api.giphy.com/v1/gifs/search?q=" + search + "&rating=pg&api_key=dc6zaTOxFJmzC",
      method:"GET",
      success: function(response) {
                console.log(response.data[0]);   
               
              
              $(".gallery").html("<img src='"+response.data[random].images.original.url +"'>");          
              
         
      }

  })
  
  
});

