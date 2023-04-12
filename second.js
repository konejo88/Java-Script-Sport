// Создание элемента
const name=document.createElement("div");
name.classList.add("conteiner")
const contenier=document.querySelector(".contenier")

const two=document.body
two.appendChild(name)


const primer1=document.createElement("h1");
primer1.textContent="Privet"
primer1.classList.add("classs")

const primer2=document.querySelector(".primer");
primer2.appendChild(primer1)


const parag=document.createElement("p");
parag.textContent="хорошая погода"
two.appendChild(parag)

// contenier.insertAdjacentElement('beforebegin',parag);
primer1.insertAdjacentElement("beforebegin",parag)

// Создание Разметки
const razmet=`
<ul class="okok">
	<li>First</li>
	<li>Second</li>
</ul>
`
// razmet.classList.add("okok");
console.log(razmet);
name.innerHTML=razmet

const img=document.createElement("img");
img.src="1.jpg"
img.classList.add("sport")
parag.insertAdjacentElement("beforebegin",img)