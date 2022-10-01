/* Operadores relacionais
> maior
< menor
>= maior igual
<= menor igual
== igual e igualdade
!= nâo igual
=== identidade

Operadores Lógicos
! = negação
&& = conjunção
|| = disjunção

*/

var ex1 = 5 > 2 
var ex2 = 7 < 4
var ex3 = 8>=8
var ex4 = 9<=7
var ex5 = 5==5
var ex6 = 4!=4
var ex7 = 5 =='5'
var ex8 = 5 ==='5'
var ex9 = '5'==='5'
console.log(ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9)


var ex10 = (5-5)
var ex11 = (5+5)
var ex12 = ex10 && ex11
console.log(ex12)
var ex13 = ('gato' && 'cachorro')

console.log(ex13)

if ((5 - 5) && (5 + 5)){
    console.log('Verdadeiro')
} else{
    console.log('False') }

    if ((10<15)&&(15>=15)){
        console.log('verdadeiro')
    }else{
        console.log('false')}

        /*Operador Ternário
        ?
        :*/
        var media = (5.5)
        console.log(media  < 7 ?'Aprovado':'reprovado')

        var ex14 =(8 % 2 == 0 ? 5: 9)
        console.log(ex14)

        var idade = (20)
        console.log(idade >= 21 ? 'Maior':'Menor')
        


