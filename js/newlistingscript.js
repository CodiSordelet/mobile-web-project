$(document).ready(function(){


  var compilation = function (url, tplId, anchor) {
       $.getJSON(url, function(data) {


                var template = $(tplId).html();
                var stone = Handlebars.compile(template)(data);
                $(anchor).append(stone);




       });
    }
      //4b.function firing
      compilation('../newjobs.json', '#listing-template', '#listing-container'); // since url = 'data.json' , we can use both notations.



      $(document).on('click','[data-trigger="view-more"]', function(evt){
        var index =$(this).data("index");

         $('div[data-tog='+ index +']').toggle();
      });








}); // end ready
