// ==========================================
// BEM-VINDO
// ==========================================

window.addEventListener("load", () => {
    alert("🌎 Bem-vindo ao Conhecendo o Mundo!\n\nExplore os países e divirta-se com os jogos educativos!");
});

// ==========================================
// ITÁLIA - MONTE A PIZZA
// ==========================================

const pizzaBtn = document.getElementById("pizzaBtn");

pizzaBtn.addEventListener("click", () => {

    let pontos = 0;

    let molho = prompt("Qual molho vai na pizza?\n\n1 - Tomate\n2 - Chocolate");

    if(molho === "1"){
        pontos++;
    }

    let queijo = prompt("Qual queijo escolher?\n\n1 - Mussarela\n2 - Cheddar");

    if(queijo === "1"){
        pontos++;
    }

    let manjericao = prompt("Adicionar manjericão?\n\n1 - Sim\n2 - Não");

    if(manjericao === "1"){
        pontos++;
    }

    if(pontos == 3){

        alert("🍕 Parabéns!\nVocê montou uma verdadeira pizza italiana!");

    }

    else{

        alert("Sua pizza ficou diferente da tradicional italiana.\nPontuação: " + pontos + "/3");

    }

});

// ==========================================
// CHINA - QUIZ
// ==========================================

const chinaBtn = document.getElementById("chinaBtn");

chinaBtn.addEventListener("click", () => {

    let score = 0;

    let r1 = prompt("Qual é a capital da China?\n\nA) Pequim\nB) Xangai");

    if(r1.toUpperCase() == "A"){
        score++;
    }

    let r2 = prompt("A Grande Muralha fica em qual país?\n\nA) Japão\nB) China");

    if(r2.toUpperCase() == "B"){
        score++;
    }

    let r3 = prompt("O panda é um símbolo da China?\n\nA) Sim\nB) Não");

    if(r3.toUpperCase() == "A"){
        score++;
    }

    alert("🐉 Você acertou " + score + " de 3 perguntas!");

});

// ==========================================
// CANADÁ
// ==========================================

const canadaBtn = document.getElementById("canadaBtn");

canadaBtn.addEventListener("click", () => {

    let pontos = 0;

    let r1 = confirm("O Canadá possui a maior costa marítima do mundo?");

    if(r1){
        pontos++;
    }

    let r2 = confirm("A capital do Canadá é Toronto?");

    if(!r2){
        pontos++;
    }

    let r3 = confirm("A folha de bordo é um símbolo do Canadá?");

    if(r3){
        pontos++;
    }

    alert("🍁 Você fez " + pontos + " de 3 pontos!");

});

// ==========================================
// TAILÂNDIA
// ==========================================

const thaiBtn = document.getElementById("thaiBtn");

thaiBtn.addEventListener("click", () => {

    let resposta = prompt(

`Qual destes animais é considerado um símbolo da Tailândia?

1 - Elefante

2 - Girafa

3 - Pinguim`

    );

    if(resposta == "1"){

        alert("🐘 Correto!");

    }

    else{

        alert("Resposta incorreta.\nO elefante é um importante símbolo da Tailândia.");

    }

});

// ==========================================
// SUDÃO
// ==========================================

const sudaoBtn = document.getElementById("sudaoBtn");

sudaoBtn.addEventListener("click", () => {

    let score = 0;

    let r1 = prompt("Qual rio passa pelo Sudão?\n\nA) Amazonas\nB) Nilo");

    if(r1.toUpperCase() == "B"){
        score++;
    }

    let r2 = prompt("O Sudão fica em qual continente?\n\nA) África\nB) Europa");

    if(r2.toUpperCase() == "A"){
        score++;
    }

    alert("🧩 Você acertou " + score + " de 2 perguntas!");

});

// ==========================================
// ANIMAÇÃO DOS CARDS
// ==========================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.04)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

const voltar = document.createElement("button");

voltar.innerHTML = "⬆";

voltar.id = "voltarTopo";

document.body.appendChild(voltar);

voltar.style.position = "fixed";
voltar.style.right = "20px";
voltar.style.bottom = "20px";
voltar.style.width = "60px";
voltar.style.height = "60px";
voltar.style.border = "none";
voltar.style.borderRadius = "50%";
voltar.style.background = "#1565C0";
voltar.style.color = "white";
voltar.style.fontSize = "25px";
voltar.style.cursor = "pointer";
voltar.style.display = "none";
voltar.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        voltar.style.display = "block";

    }

    else{

        voltar.style.display = "none";

    }

});

voltar.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
