import React from "react";

function Roaring (){

return(

  function sound(){
    var snd=new Audio('car-sound.mp3')
    snd.play()
    },
    
    function start(){
        var snd=new Audio('engine-start.mp3')
        snd.play()
        }

);

}
export default Roaring;