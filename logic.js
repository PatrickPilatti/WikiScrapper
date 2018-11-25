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

//MAIN PROCESSES
//======================================
// $(document).ready(function() {

//     $('#search').click(function(){
        
//         var searchTerm = $('searchTerm').val();

//         var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

//         $.ajax({
//             type:"GET",
//             url:url,
//             async: false,
//             dataType: "json",
//             success:function(data){
//                 console.log(data[1][0]);
//                 console.log(data[2][0]);
//                 console.log(data[3][0])
//             },
//             error: function(errorMessage){
//             alert("Error");
//             }
//         })
//     });

// });

console.log("test");