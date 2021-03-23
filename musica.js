





var audioEnplay=0;



    var playAudio = function ()

{
    


var audio = document.getElementById("audio");

if(audioEnplay==0) {

audio.play();


 audioEnplay=1;}


    else if(audioEnplay==1)

{ audio.pause();

    audioEnplay=0;
}


};

var segundaFase= function ()

{
var div1 = document.getElementById("div1");

/*div1.classList.add("invisible");*/
div1.className= "invisible";

var div2 = document.getElementById("div2");

div2.classList.replace("invisible", "musica");

}
