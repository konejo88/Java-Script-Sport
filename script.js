/*проверка работы файла Джава*/
console.log('proverka')

/*выбрали элементы с классом buttonsport и храним их в константе buttonsport*/
const buttonsport=document.querySelectorAll(".buttonsport")
const ioga=document.querySelectorAll(".ioga")
console.log(buttonsport)
/*если мы хотим изменить список элементов , обращаемся к ForEach*/
/*Параметры находятся в круглых скобках, максимальное клд-во параметров-3*/
/*1-ый параметр выведет все элементы которые хотим изменить*/
/*2-ой параметр*/ /*выведет его порядковый номер*/
/*3-ий параметр выведет столько элементов сколько в нем находится*/
buttonsport.forEach((x,y)=>{
console.log(y)
x.addEventListener("click",()=>{
	ioga.forEach((z)=>{
z.classList.remove("activ")
	})
	buttonsport.forEach((x)=>{
		x.classList.remove("activ")
	})
buttonsport[y].classList.add("activ")
ioga[y].classList.add("activ")
})
})



const x=8
const y=5
if (x!=y) {
	console.log('hello')
}else {
	console.log('goodbuy')
	
}



function hover(){
	const okno=document.querySelector('.okno')
	if (okno.style.display = 'block') {
		okno.style.display = 'none'
	}
}
// _______________
// переменные
let name=505
// объекты
let kniga={
	name: "azbuka",
	pages: 36,
	desc: "bukvi"
}
console.log(kniga)
console.log(kniga[name])
console.log(kniga[1])
// масивы arays
let football=["chelsea","milan","barca"]
console.log(football)
console.log(football[1])
let mmm={
	persons:["igor","kolya"],
	old:[20,30]
}
console.log(mmm)