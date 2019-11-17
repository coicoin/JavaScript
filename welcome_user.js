/*создаем часы*/
function showTime() {
	var t = document.getElementById("time"); //получаем данные по id которые заменим
	var d = new Date(); //подключаем объект Date
	var hours = d.getHours(); //метод час
	hours = (hours<10) ? ("0" + hours) : hours; //тернарное условие для подстановки нулей
	var mins = d.getMinutes(); //метод минут
	mins = (mins<10) ? ("0" + mins) : mins;
	var secs = d.getSeconds(); //метод секунд
	secs = (secs<10) ? ("0" + secs) : secs;
	t.innerHTML = hours + ":" + mins + ":" + secs; //вывод.innerHTML меняет содержимое
}
setInterval(showTime, 1000); //установить интервал в 1 секунду