let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let play = document.querySelector(".play");
let h1 = document.querySelector("h1");

let [hours, minutes, secounds] = [0, 0, 0];

play.addEventListener("click", () => {
	let time = setInterval((val) => {
		secounds++;

		if(secounds == 60) {
			secounds = 0;
			minutes++;
			if(minutes == 60) {
				minutes = 0;
				hours++;
			}
		}
		let h, m, s;
		if(hours < 10) {
			h = "0" + hours;
		}else{
			h = hours;
		}

		if(minutes < 10) {
			m = "0" + minutes;
		}else{
			m = minutes;
		}

		if(secounds < 10) {
			s = "0" + secounds;
		}else{
			s = secounds;
		}

		h1.innerText = h + ":" + m + ":" + s;

		stop.addEventListener("click", () => {
			clearInterval(time);
		})

		reset.addEventListener("click", () => {
			clearInterval(time);
			[hours, minutes, secounds] = [0, 0, 0];
			h1.innerText =  "0" + hours + ":" + "0" + minutes + ":" + "0" + secounds;
		})
 	}, 1000);
})