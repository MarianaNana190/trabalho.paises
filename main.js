const elementos = document.querySelectorAll(
".country-section, .feature-card, .country-card, .monument-card"
);



elementos.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="1s";

});



function animar(){

elementos.forEach(el=>{


let topo = el.getBoundingClientRect().top;


if(topo < window.innerHeight - 100){

el.style.opacity="1";

el.style.transform="translateY(0)";

}


});


}


window.addEventListener(
"scroll",
animar
);


animar();







// ===============================
// QUIZ FUNCIONANDO
// ===============================



const quizzes = {


china:{
resposta:"Grande Muralha da China",
pontos:0
},


japao:{
resposta:"Monte Fuji",
pontos:0
},


caboverde:{
resposta:"Oceano Atlântico",
pontos:0
},


italia:{
resposta:"Roma",
pontos:0
},


tailandia:{
resposta:"Bangkok",
pontos:0
}


};





Object.keys(quizzes).forEach(pais=>{


const botoes = document.querySelectorAll(
`.answers-${pais} button`
);



botoes.forEach(botao=>{


botao.addEventListener(
"click",
function(){



// impede nova resposta

if(this.dataset.respondido){

return;

}



botoes.forEach(btn=>{

btn.dataset.respondido=true;

});





let resposta =
this.innerText.trim();





if(resposta === quizzes[pais].resposta){



this.style.background="#16a34a";

this.style.color="white";


quizzes[pais].pontos++;



}

else{


this.style.background="#dc2626";

this.style.color="white";


}






const resultado =
document.querySelector(
`#score-${pais}`
);



if(resultado){


resultado.innerHTML =
`Pontuação: ${quizzes[pais].pontos}/1`;

}



}

);



});


});









// ===============================
// CARROSSEL AUTOMÁTICO
// ===============================



document.querySelectorAll(".carousel")
.forEach(carrossel=>{


let posicao=0;


setInterval(()=>{


posicao += 330;



if(posicao >= carrossel.scrollWidth){

posicao=0;

}



carrossel.scrollTo({

left:posicao,

behavior:"smooth"

});


},3500);



});








// ===============================
// CORRIGIR IMAGENS QUEBRADAS
// ===============================



document.querySelectorAll("img")
.forEach(img=>{


img.onerror=function(){


this.src =
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png";


};


});


// ===============================
// MENU SUAVE
// ===============================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.onclick=function(e){


let destino =
document.querySelector(
this.getAttribute("href")
);


if(destino){

e.preventDefault();


destino.scrollIntoView({

behavior:"smooth"

});

}


};


});
