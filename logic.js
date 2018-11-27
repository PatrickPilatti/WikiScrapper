//VARIABLES
//======================================


//SEARCH PARAMETERS
//======================================


//BASE URL
//======================================


//FUNCTIONS
//======================================
$(document).ready(function () {
    //Enter button fix to stop refreshing the page
        $("#searchTerm").keyup(function (event) {
            if (event.keyCode == 13) {
                $("#submit").click();
            }
        });
    });

    function Search (){

        var search = document.getElementById("searchTerm").value;

        var wikiApi = 'https://en.wikipedia.org/w/api.php';

        var api = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch=";

        var wikilink = 'http://en.wikipedia.org/?curid=';

        var link = api + search;
        var html = "";

        $.ajax({
            url: link,
            type: "get",
            dataType: "JSONP",
            success: function (data) {
                var results = data.query.pages;
                var pgs = Object.keys(results);
                pgs.forEach(function (page) {
                    var title = results[page].title;
                    var text = results[page].extract;
                    var pagelink = wikilink + results[page].pageid;
    
                    html += '<a href="' + pagelink + '" >' + '<div class="item">' + title + '<br>' + '<p class="description-text" >' + text + '</p>' + '</div></a>  <br> ';
                });
                
                 $('#display').html(html);
            }
        });
    }

//MAIN PROCESSES
//======================================

console.log("test");