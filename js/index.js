
let btnRegistrarNota=document.getElementById('btn');
btnRegistrarNota.addEventListener("click",(event)=>{
  ensenarNota(event)
});

let notaUno=document.getElementById("uno");
let notaDos=document.getElementById("dos");
let notaTres=document.getElementById("tres");
let notaCuatro=document.getElementById("cuatro");
let notaCinco=document.getElementById("cinco");
let notaFinal=document.getElementById("nota")

function ensenarNota(event){
    document.getElementById('modal-thankyou').style.display="flex";
    document.getElementById('modal-principal').style.display="none";
}



notaUno.addEventListener("click",(event)=>{
    notaUno.style.cssText='background-color: hsl(216, 12%, 54%); color: white;';
    notaDos.style.cssText='background-color: "null"; color: "null";';
    notaTres.style.cssText='background-color: "null"; color: "null";';
    notaCuatro.style.cssText='background-color: "null"; color: "null";';
    notaCinco.style.cssText='background-color: "null"; color: "null";';
    notaFinal.innerHTML="You selected 1 out of 5"
    
});

notaDos.addEventListener("click",(event)=>{
    notaUno.style.cssText='background-color: "null"; color: "null";';
    notaDos.style.cssText='background-color: hsl(216, 12%, 54%); color: white;';
    notaTres.style.cssText='background-color: "null"; color: "null";';
    notaCuatro.style.cssText='background-color: "null"; color: "null";';
    notaCinco.style.cssText='background-color: "null"; color: "null";';
    notaFinal.innerHTML="You selected 2 out of 5"
   
});

notaTres.addEventListener("click",(event)=>{
    notaUno.style.cssText='background-color: "null"; color: "null";';
    notaDos.style.cssText='background-color: "null"; color: "null";';
    notaTres.style.cssText='background-color: hsl(216, 12%, 54%); color: white;';
    notaCuatro.style.cssText='background-color: "null"; color: "null";';
    notaCinco.style.cssText='background-color: "null"; color: "null";';
    notaFinal.innerHTML="You selected 3 out of 5"
});
notaCuatro.addEventListener("click",(event)=>{
    notaUno.style.cssText='background-color: "null"; color: "null";';
    notaDos.style.cssText='background-color: "null"; color: "null";';
    notaTres.style.cssText='background-color: "null"; color: "null";';
    notaCuatro.style.cssText='background-color: hsl(216, 12%, 54%); color: white;';
    notaCinco.style.cssText='background-color: "null"; color: "null";';
    notaFinal.innerHTML="You selected 4 out of 5"

});
notaCinco.addEventListener("click",(event)=>{
    notaUno.style.cssText='background-color: "null"; color: "null";';
    notaDos.style.cssText='background-color: "null"; color: "null";';
    notaTres.style.cssText='background-color: "null"; color: "null";';
    notaCuatro.style.cssText='background-color: "null"; color: "null";';
    notaCinco.style.cssText='background-color: hsl(216, 12%, 54%); color: white;';
    notaFinal.innerHTML="You selected 5 out of 5"

});


let volver=document.getElementById('volverInicio')
volver.addEventListener("click",(event)=>{
   volverInicio()
});

function volverInicio(event){
    if(volver){
        location.reload();
    }
    
}

