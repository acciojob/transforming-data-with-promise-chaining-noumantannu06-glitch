const ip = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function delayedValue(value, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

btn.addEventListener("click", () => {
  output.innerText = "";
  const num = Number(ip.value);

  delayedValue(num, 2000)
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayedValue(result * 2, 2000);
    })
    .then((result) => {
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
});