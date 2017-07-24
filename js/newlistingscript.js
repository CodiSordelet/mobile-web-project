$(document).ready(function(){


  var compilation = function (url, tplId, anchor) {
       $.getJSON(url, function(data) {


                var template = $(tplId).html();
                var stone = Handlebars.compile(template)(data);
                $(anchor).append(stone);




       });
    }
      //4b.function firing
      compilation('https://jsninja1994.github.io/mobile-web-project/newjobs.json', '#listing-template', '#newlisting-container'); // since url = 'data.json' , we can use both notations.



      $(document).on('click','[data-trigger="view-more"]', function(evt){
        var index =$(this).data("index");

        $('div[data-tog='+ index +']').toggle();
        // if()
        var dataIndex = $('[data-index='+ index +']');
        var temp = $('div').find(dataIndex);
        if(temp[0].innerHTML === 'View More') {

          temp[0].innerHTML = 'Close';

        } else if(temp[0].innerHTML === 'Close'){

          temp[0].innerHTML ='View More';

        }




      });








}); // end ready
