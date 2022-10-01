/* O que é Dom
DOCUMENT OBJECT MODEL

Árvore Dom

window (location
     (document-(html-(head-meta title) (body h1 p p div)))
      history)

*/
var corpo = document.body
var p1 = document.getElementsByTagName('p')[0]
p1.style.color = 'red'
corpo.style.backgroundColor = 'black'

var d = document.getElementById('msg')
d.style.color = 'orange'
d.innerText = 'Estou aguardando'

var h = document.querySelector('h1.inicio')
h.style.color = 'blue'


var div = document.querySelector('div#teste')
div.style.color = '#C3E3D4'

var teste = document.getElementById('teste2')
teste.style.color = '#0091EA' 

document.write(window.document.URL)
// Métodos de acesso  para navegar
//     (Marca)
//     (ID)
//POr  (Nome)
//     (Classe) 
//     (Seletor)  
