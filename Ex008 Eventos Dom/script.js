var corpo = document.body
corpo.style.background = '#EDEEF0'

var h = document.querySelector('.principal')
h.style.color = 'white'
h.style.background = 'black'

var area = document.getElementById("area");
area.addEventListener("click", clicar);
area.addEventListener("mouseenter", entrar);
area.addEventListener("mouseout", sair);

function clicar() {
  area.innerText = "Clicou!";
  area.style.background = "red";
}
function entrar() {
  area.innerText = "Entrou!";
  area.style.color = "white";
  area.style.background = "black";
}
function sair() {
  area.innerText = "Sair!";
  area.style.background = "blue";
  area.style.color = "white";
}

//Exercicio1

var area1 = document.getElementById("area1");
area1.addEventListener("click", clicar1);
area1.addEventListener("mouseenter", entrar1);
area1.addEventListener("mouseout", sair1);
function clicar1() {
  area1.innerText = "Clicou!";
  area1.style.background = "black";
}
function entrar1() {
  area1.innerText = "Entrou!";
  area1.style.background = "yellow";
  area1.style.color = "red";
}
function sair1() {
  area1.innerText = "Sair!";
}

//Exercicio2
function somar() {
  var tn1 = document.getElementById("txnt1")
  var tn2 = document.getElementById("txnt2")
  var res = document.getElementById("res")
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 + n2
  res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`;
}

//Exercicio3//
function soma(){
    var tn3 = document.getElementById('txn1')
    var tn4 = document.getElementById('txn2')
    var res1 = document.getElementById('res1')
    var n1 = Number(tn3.value)
    var n2 = Number(tn4.value)
    var s = n1 + n2
    res1.innerHTML = `A soma entre ${n1} e ${n2} é igual ${s}`
}
var area3 = document.getElementById('area3')
area3.addEventListener('click',clicar2)
area3.addEventListener('mouseenter',entrar2)
area3.addEventListener('mouseout',sair2)

function clicar2(){
    area3.innerText = ('clicou')
    area3.style.background = '#003D3C'
}

function entrar2(){
    area3.innerText = ('Entrou')
    area3.style.background = '#FF5C0E'
}

function sair2(){
    area3.innerText = ('Saiu')
    area3.style.background = '#F7EEDD'
}

//Exercicio4
var area4 = document.getElementById('area4')
area4.addEventListener('click',acessar)
area4.addEventListener('mouseenter',acessou)
area4.addEventListener('mouseout',saiu)

    

function total(){

    var xn1 = document.getElementById('vl1')
    var xn2 = document.getElementById('vl2')
    var res4 = document.getElementById('res4')
    var x1 = Number (xn1.value)
    var x2 = Number (xn2.value)
    var s = x1 + x2
    res4.innerHTML = `A soma entre ${x1} e ${x2} é igual a ${s}`
}

function acessar(){
    area4.innerText = ('Acessou')
    area4.style.background = 'blue'
}
function acessou(){
    area4.innerText = ('Conectou')
    area4.style.background = 'red'
}
function saiu(){
    area4.innerText = ('Saiu')
    area4.style.background = '#563D7C'
}

