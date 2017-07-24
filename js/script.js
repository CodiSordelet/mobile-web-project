$(document).ready(function(){



  var compilation = function (url, tplId, anchor) {

       $.getJSON(url, function(data) {

                var template = $(tplId).html();
                var stone = Handlebars.compile(template)(data);
                $(anchor).append(stone);

       });
    }

      compilation('../jobs.json', '#listing-template', '#listing-container');

 $(document).on('click','[data-trigger="view-more"]', function(evt){
   var index =$(this).data("index");

    $('div[data-tog='+ index +']').toggle();
 });








});
