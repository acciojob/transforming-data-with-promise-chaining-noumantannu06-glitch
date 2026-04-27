//your JS code here. If required.
const ip = document.getElementById("ip");
const btn = document.getElementByid("btn");
const output = document.getElementById("output");

function delayedValue (value, time) {
	return new promise ((resolve) => {
		setTimeout(() => resolve(value). time);
	});
}

btn.onelick = function () {
	output.innerText = "";

	const num = Number(ip.value);

	delayedValue(num, 2000)
	.then((result) => {
		output.innerText = `Result: ${result}`;
		return delayedValue(result * 2, 2000);
	})
	.then((result) =>{
		output.innerText = `Result: ${result}`;
		 return delayedValue(result - 3, 1000);
	})
	.then((result) => {
		output.innerText = `Result: ${result}`;
		return delayedValue(result / 2, 1000);
	})
	.then((result) => {
		output.innerText = `Result: ${result}`;
		return delayedValue(result + 10, 1000);
	})
	.then((result) => {
		output.innerText = `Final Result: ${result}`;
	});
	
};
