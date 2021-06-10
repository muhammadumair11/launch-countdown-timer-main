const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function counter() {
	let time = new Date();
	let target = new Date("Dec 31, 2021 23:59:59");
	let now = {
        day: time.getDate(),
        month: time.getMonth(),
        hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds(),
	};
	let targetTime = {
        day: target.getDate(),
        month: target.getMonth(),
		hour: target.getHours(),
		minute: target.getMinutes(),
		second: target.getSeconds(),
    };

    days.innerText = ((targetTime.month - now.month) * 30) + (targetTime.day - now.day) + 3;

    hours.innerText = (targetTime.hour - now.hour) - parseInt(now.day / 24);
    minutes.innerText = (targetTime.minute - now.minute);
    seconds.innerText = (targetTime.second - now.second);
	

}
setInterval(() => {
    counter();
}, 1000);
