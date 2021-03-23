
                //$.post("<?php echo 'nashe' ?>");
                
                
                var audio = document.getElementById("audio");

                var comenzar = document.getElementById("Comenzar");

                var num1 = document.getElementById("num1");
                
                var num2 = document.getElementById("num2");
                
                var num3 = document.getElementById("num3");
                
                var num4 = document.getElementById("num4");
                
                var num5 = document.getElementById("num5");
                
                var num6 = document.getElementById("num6");
                
                var num7 = document.getElementById("num7");
                
                var num8 = document.getElementById("num8");
              
                var pnivel1 = document.getElementById("pnivel1");

                pnivel1.innerHTML = "Nivel 1";

              var probar = document.querySelector('#probar');

              

var perfecto = 0;
var perfecto2 = 0;

var elemento = document.createElement('p');
var texto = "";


var sonido = function() {
    audio.play();
    num1.className = "num1Activado";
    num2.className = "num2";
    num3.className = "num3";
    num4.className = "num4";
    num5.className = "num5";
    num6.className = "num6";
    num7.className = "num7";
    num8.className = "num8";
    
    perfecto = perfecto + 1;
    perfecto2 = perfecto2 + 1;
    }
    
    
    var sonido2 = function()
    
    {
    audio.play();
    num2.className = "num2Activado";
    num1.className = "num1";
    
    num3.className = "num3";
    num4.className = "num4";
    num5.className = "num5";
    num6.className = "num6";
    num7.className = "num7";
    num8.className = "num8";

    perfecto = perfecto + 1;
    perfecto2 = perfecto2 + 1;
    }
    
    var sonido3 = function()
    
    {
    audio.play();
    num3.className = "num3Activado";
    num1.className = "num1";
    num2.className = "num2";
    
    num4.className = "num4";
    num5.className = "num5";
    num6.className = "num6";
    num7.className = "num7";
    num8.className = "num8";

    perfecto2 = perfecto2 + 1;
    
    }
    
    var sonido4 = function()
    
    {
    audio.play();
    num4.className = "num4Activado";
    num1.className = "num1";
    num2.className = "num2";
    num3.className = "num3";
    
    num5.className = "num5";
    num6.className = "num6";
    num7.className = "num7";
    num8.className = "num8";

    perfecto = perfecto + 1;
    
    }
    
    var sonido5 = function()
    
    {
    audio.play();
    num5.className = "num5Activado";
    num1.className = "num1";
    num2.className = "num2";
    num3.className = "num3";
    num4.className = "num4";
   
    num6.className = "num6";
    num7.className = "num7";
    num8.className = "num8";
    
    }
    
    var sonido6 = function()
    
    {
    audio.play();
    num6.className = "num6Activado";
    num1.className = "num1";
    num2.className = "num2";
    num3.className = "num3";
    num4.className = "num4";
    num5.className = "num5";
    num7.className = "num7";
    num8.className = "num8";

    perfecto = perfecto + 1;
    perfecto2 = perfecto2 + 1;
    }
    
    var sonido7 = function()
    
    {
    audio.play();
    num7.className = "num7Activado";
    num1.className = "num1";
    num2.className = "num2";
    num3.className = "num3";
    num4.className = "num4";
    num5.className = "num5";
    num6.className = "num6";
    
    num8.className = "num8";
    
    }
    
    var sonido8 = function()
    
    {
    audio.play();
    
    num8.className = "num8Activado";
    num1.className = "num1";
    num2.className = "num2";
    num3.className = "num3";
    num4.className = "num4";
    num5.className = "num5";
    num6.className = "num6";
    num7.className = "num7";
    
    perfecto2 = perfecto2 + 1;
    
    }
      
      var chapa = 0;
      var chapa2 = 0;

      var nivel1 = function() {
      if(chapa==0 && pnivel1.innerHTML=="Nivel 1"){

         audio.play();
          num1.className = "num1Activado";
          chapa = chapa + 1;
      }
      else if(chapa==1){
        num1.className = "num1";
        audio.play();
        num2.className = "num2Activado";
        chapa = chapa + 1;
      }

     
    else if (chapa==2) {
        num2.className = "num2";
        audio.play();
        num6.className = "num6Activado";
        chapa = chapa + 1;
    }
    else if (chapa==3) {
            num6.className = "num6";
            audio.play();
            num4.className = "num4Activado";
            chapa = chapa + 1;
    }
    else if(chapa == 4) {
      num4.className="num4"
      
      chapa = chapa + 1;
    }


    
    else if (chapa== 5) {
      
      texto = document.createTextNode("Tu turno!");
      elemento.setAttribute("class", "tuTurno");
      elemento.appendChild(texto);
      document.body.appendChild(elemento);
        chapa = chapa + 1;
        
    
      }

      else if (chapa == 6) {
        
        elemento.removeChild(texto);
        chapa = chapa + 1;
        clearInterval(tini);
      }

     
            // NIVEL 2

    else if (pnivel1.innerHTML=="Nivel 2" && chapa2 == 0)
    { 
      audio.play();
      num8.className = "num8Activado";
      chapa2 = chapa2 + 1;

    }
         
    else if (pnivel1.innerHTML=="Nivel 2" && chapa2 == 1)
    { 
      num8.className="num8";
      audio.play();
      num2.className = "num2Activado";
      chapa2 = chapa2 + 1;
            
    }
    
    else if (pnivel1.innerHTML=="Nivel 2" && chapa2 == 2)
    { 
      num2.className = "num2";
      audio.play();
      num4.className = "num4Activado";
      chapa2 = chapa2 + 1;
            
    }

    else if (pnivel1.innerHTML=="Nivel 2" && chapa2 == 3)
    { 
      num4.className = "num4";
      audio.play();
      num1.className = "num1Activado";
      chapa2 = chapa2 + 1;
            
    }

    else if (pnivel1.innerHTML=="Nivel 2" && chapa2 == 4)
    { 
      num1.className = "num1";
      audio.play();
      num6.className = "num6Activado";
      chapa2 = chapa2 + 1;
            
    }

    else if (pnivel1.innerHTML=="Nivel 2" && chapa2 == 5)
    { 
      num6.className = "num6";
      audio.play();
      num3.className = "num3Activado";
      chapa2 = chapa2 + 1;
            
    }
    
    
    
    else if (pnivel1.innerHTML=="Nivel 2" && chapa2 == 6)
    { 
          num3.className = "num3";
          
          clearInterval(tini);
            
    }
    
    
  }
  var todo = document.getElementById("todo");
        
  var todos = function() {

    num1.className = "num1";
    num2.className = "num2";
    num3.className = "num3";
    num4.className = "num4";
    num5.className = "num5";
    num6.className = "num6";
    num7.className = "num7";
    num8.className = "num8";

   


        }
        todo.addEventListener("click", todos);
    
    // console.log(chapa);    
    
      //let tini;
      var tini = "";
          var nivel1Interval = function() {

             tini = setInterval(
              nivel1, 2000
            )
          
          };


    /*var frenar = function() {
      clearInterval(tini);
    }*/
        
        
      comenzar.addEventListener("click", nivel1Interval);
    
        //probar.addEventListener("click", frenar);


      var superoNivel1 = function() {
                  
          if(perfecto == 4){

            pnivel1.innerHTML = "Nivel 2";
            
            

            
          }
        }

        
                  var superoNivel2 = function() {
                      if(perfecto2 == 5){
                   
                    pnivel1.innerHTML = "Ganaste!";
                  }
                }
          
        


        

            var frenaSupero = setInterval (superoNivel1, 2000);
            var frenaSupero2 = setInterval (superoNivel2, 2000);



       var barco = 0;

var dalequesi = function () {

  //document.write(barco);
  barco ++;
  console.log(barco);
}

            /*var probemos2 = setInterval (
              function () {

                document.write(barco);
                barco ++;
                console.log(barco);
              }, 
              
              1500
              );*/

            
              /*var probemos2 = setInterval (
                dalequesi, 
                
                1500
                );

                var probemos3 = function()
                {
                  clearInterval(probemos2);
                }*/
  
                /*var probemos2 = function () {
                      setInterval (
                  dalequesi, 
                  
                  1500
                  )};*/
            //probar.addEventListener("click", probemos3);

                //probar.addEventListener("click", probemos2 );
            
            //probemos2();
          //dalequesi();

            