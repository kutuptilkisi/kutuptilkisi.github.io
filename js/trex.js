const trex=document.querySelector("#trex");
const blok=document.querySelector("#blok");
 
function zipla(){
   
    if(blok.classList!="blok-animate")
    {
        blok.classList.add("blok-animate");
    }
 
    if(trex.classList!="trex-animate")
    {
        trex.classList.add("trex-animate");
        setTimeout(function(){
            trex.classList.remove("trex-animate");
        },500);
    }
}
 
var carpismaKOntrol =setInterval(function(){
 
        var trexBottom =parseInt(window
                .getComputedStyle(trex)
                .getPropertyValue("bottom"));
 
        var blokLeft =parseInt(window
                .getComputedStyle(blok)
                .getPropertyValue("left"));
        
        if(blokLeft > 0 && blokLeft < 40 && trexBottom < 40){
            
            kaktus.classList.remove("blok-animate");
            kaktus.style.display="none";
            alert("oyun bitti");
        }
},10);
