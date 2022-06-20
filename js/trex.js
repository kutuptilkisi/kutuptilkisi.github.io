const trex=document.querySelector("#trex");
const kaktus=document.querySelector("#kaktus");
 
function zipla(){
   
    if(kaktus.classList!="kaktus-animate")
    {
        kaktus.classList.add("kaktus-animate");
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
 
        var kaktusLeft =parseInt(window
                .getComputedStyle(kaktus)
                .getPropertyValue("left"));
        
        if(kaktusLeft > 0 && kaktusLeft < 40 && trexBottom < 40){
            
            kaktus.classList.remove("kaktus-animate");
            kaktus.style.display="none";
            alert("oyun bitti");
        }
},10);