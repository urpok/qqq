function funcInData() {
var ex = document.getElementById("innerData").value;
var pic = document.createElement('img');
pic.src = ex;
list.appendChild(pic);
pic.className('smallImg');
};