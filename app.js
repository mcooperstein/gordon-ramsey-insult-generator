$(document).ready(function () {
    $("p").hide();
    $("#reset").hide();
    $("#image2").hide();
    var a = ["Piss off,", "Get out,", "WTF are you doing?", "Wake up!", "Move Your Ass,", "Get out of my bloody way,", "You're an insult to the human race,"];
    var b = ["you stupid", "you lazy", "you pathetic", "you useless", "you hopeless", "you brainless", "you worthless", "you fat-mouthed", "you sad sack"];
    var c = ["wanker", "idiot", "pig", "imbecile", "gremlin", "cry baby", "donut", "piece of shit", "bitch"];

    var first = a[Math.floor(Math.random() * 7)];
    var second = b[Math.floor(Math.random() * 9)];
    var third = c[Math.floor(Math.random() * 9)];

    var insult = first + " " + second + " " + third + " !!!";

    function getInsult() {
        return insult;
    }

    $("#submit").click(function () {
        getInsult();
        $("p").show();
        $("p").text(insult);
        $("#image2").show();
        $("#image1").hide();
        $("#reset").show();
        $("#submit").hide();
    });

    $("#reset").click(function () {
        location.reload();
    });
});
