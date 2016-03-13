var counter=1;
var coun=1;
var w = window.innerWidth;													//определяем ширину экрана
var h = window.innerHeight;													//* высоту экрана
document.getElementById("maxList").style.width = w + "px";					//назначаем макс размеры робочего окна
document.getElementById("maxList").style.height = h + "px";
document.getElementById("viewPic").style.width = w + "px";
document.getElementById("viewPic").style.height = h + "px";
console.log(w+" "+h);														//отладочная инфа (удалить)

function funcInData() {														//при нажатии кнопки вызываеться фукция
	var wideCount = counter*310;											//счетчик задает ширину для div - отображения рисунка
if ((wideCount+310)<w){														//проверяем ширину экрана и задаем счетчик
	counter++;																//если ширина div'а+1елемент больше ширины экрана то 
} else {																	//добавить высоту
	document.getElementById("list").style.height = 610 + "px";				
}
	var ex = document.getElementById("innerData").value;					//записываем значение формы ввода в переменную	
	document.getElementById("list").style.width = wideCount + "px";			//задаем ширину div для отображения картинки
	var pic = document.createElement('img');								//создаем елемент отображения картинки
	
	pic.src = ex;															//задаем значение формы
	list.appendChild(pic);													//вставляем в div(id='list') нашу картинку
	pic.className = 'smallImg';												//задаем класс для css свойств
	pic.setAttribute('ondblclick', 'clickTwo()');
	pic.setAttribute('onclick', 'clickOne()');
	pic.setAttribute('id', coun);
	coun++;
};


var timer;																	//таймер на обработку одинарного или двойного

function clickOne() {
	timer = setTimeout(function() {
		list.onclick = function() { 
      		var mo= event.target.src;
      		var pic1 = document.createElement('img');
      		pic1.src = mo;
      		viewPic2.appendChild(pic1);
      		pic1.className = 'bigImg';
      		pic1.setAttribute('id', 'bigImgId');
      		pic1.setAttribute('max-width', (w-100));
      		pic1.setAttribute('max-height', (h-100));
      		pic1.setAttribute('onclick', 'turnOff()');
      		document.getElementById("viewPic").style.display = "inline-block";
      		var realH = document.getElementById('bigImgId').naturalHeight;
      		var realW = document.getElementById('bigImgId').naturalWidth;
      		document.getElementById("viewPic2").style.width = realW + "px";
			document.getElementById("viewPic2").style.height = realH + "px";
      	} 
	}, 400);
	return;
}
function clickTwo() {
    clearTimeout(timer);
    list.ondblclick = function() { 
    var mo= event.target.id;
    var card1 = document.getElementById(mo);
	card1.parentNode.removeChild(card1);
    console.log(mo);
    return;
};
};
function turnOff(){
	document.getElementById("viewPic").style.display = "none";
	var card = document.getElementById("bigImgId");
	card.parentNode.removeChild(card);
	return;
};