$(document).ready(function(){

    var streamersArray = ["nervarien","eclypsiatv", "pago3", "ESL_SC2", "OgamingSC2", "cretetion",
        "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

    streamersArray.forEach(function(name){
        $.ajax("https://api.twitch.tv/kraken/streams/"+ name, {
            headers: {
                'Client-ID': '7e249w4zitk88gx2cilqn3yqlgiaszl'
            },
            success: function(data){
                if (data.stream) {
                    $("#online ul").append("<li><a href=" + data.stream.channel.url + " target='_blank'>" + data.stream.channel.display_name+ "</a><p>playing: "+data.stream.game+"</p></li>");
                } else {
                    $("#offline ul").append("<li><a href='https://www.twitch.tv/" + name + "' target='_blank'>" + name + "</a></li>");
                }
            },
            error: function(data) {
                var obj = jQuery.parseJSON(data.responseText);
                console.log(obj.message);
                $("#offline ul").append("<li><p>"+ obj.message +"</p></li>");
            }
        });
    });

    var myTimeout = 1000;

    $("#off").on("click", function(){
        if ($(".container").hasClass("to-online")) {
            $(".container").removeClass("to-online");
            setTimeout(function(){
                $(".container").addClass("to-offline");
            }, myTimeout);
        } else {
            $(".container").addClass("to-offline");
        }
    });

    $("#on").on("click", function(){
        if ($(".container").hasClass("to-offline")) {
            $(".container").removeClass("to-offline");
            setTimeout(function(){
                $(".container").addClass("to-online");
            }, myTimeout);
        } else {
            $(".container").addClass("to-online");
        }
    });

    $("#all").on("click", function(){
        $(".container").removeClass("to-online to-offline");
    });
});
