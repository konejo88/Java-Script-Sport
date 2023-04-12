const input=document.querySelector(".input")
/*input.value=содержимое inputa*/
/*эта функция nunber будет передавать те значения которые нажаты в value (внутри) input*/
/*""-пустые кавычки*/
/*""-пустое поле*/

function number (a) {
	input.value += a;
	dolar.value += a;
}
const perem=eval("10/2")
console.log(perem)
function ravno () {
	input.value=eval(input.value)
}
function reset () {
	input.value=""
}

Math.sqrt(9)
console.log(Math.sqrt(9))
function koren() {
	input.value=Math.sqrt(input.value)
}

const dolar=document.querySelector(".dolar")
const procent=document.querySelector(".procent")
function result () {
const x=dolar.value *procent.value/100
console.log(x)
}

const peremen=["red","blue","green","yellow","black"]
console.log(peremen)
console.log(peremen.slice(0, -1))
function deleteAfter() {
	input.value=input.value.slice(0,-1)
}



// функции
function plus(x,y) {
const z=x+y
console.log(x)
}
plus(10,6)



