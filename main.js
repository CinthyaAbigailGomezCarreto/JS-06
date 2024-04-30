/// DOM API
const div1 = document.getElementById("div-1");
console.log(div1);

const divColletion = document.getElementsByName("div")
console.log(divColletion);

const p = document.getElementById("p1");
const usernameInputs = document.getElementsByName("usename");
const usernameInput = usernameInputs[0];

console.log(p, usernameInput);

usernameInput.addEventListener ("input", (event) => {
    console.log(event.target.value)
    p.innerText = event.target.value;
}
)





