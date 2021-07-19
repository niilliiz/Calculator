const btn = document.querySelectorAll(".btn");
const equalBtn = document.getElementsByClassName("equal")[0];
const lastOperation = document.getElementsByClassName("operatorSection")[0];
const showCase = document.getElementsByClassName("showCase")[0];
const clearBtn = document.getElementsByClassName("clear")[0];

let currentOperation = "";
let result;


btn.forEach(item => item.addEventListener("click", (e) => {
    e.preventDefault();

    let show = document.createElement("p");
    if (item.value !== "=" && item.value !== "C" && item.value !== "undo" && item.value !== "&#8730") {
        if (item.value !== "^") {
            // currentOperation = currentOperation + item.value;
            currentOperation = `${currentOperation}${item.value}`;

        } else {
            // currentOperation = currentOperation + "**";
            currentOperation = `${currentOperation}**`;
        }
        show.innerHTML = item.value;
        show.className = "lastOperation";
        show.style.paddingLeft = "2.5px";
        show.style.display = "inline-block";
        lastOperation.append(show);
        console.log(currentOperation);
    }


    if (item.value == "=") {
        result = eval(currentOperation);
        // currentOperation = currentOperation.replace("**", "^");
        currentOperation = `${currentOperation.replace("**", "^")}`;
        show.innerHTML = `${currentOperation} <span>=</span> ${result}`;
        show.style.color = "white";
        showCase.append(show);
        lastOperation.innerHTML = "";
        currentOperation = "";

    }

    if (item.value == "C") {
        lastOperation.innerHTML = "";
        currentOperation = "";
    }
    if (item.value === "undo") {
        currentOperation = `${currentOperation.replace("**", "^")}`;
        currentOperation = `${currentOperation.slice(0, -1)}`;
        lastOperation.innerHTML = "";
        // console.log(currentOperation);
        show.innerHTML = `${currentOperation}`;
        show.style.display = "inline";
        lastOperation.append(show);
    }

}));

let str = `1234${Math.sqrt(5)}6789`;
console.log(eval(str));

let str2 = `djkfkdfdjsqrtdfkfjkd`;
if (str2.includes("sqrt")) {
    str2 = str2.replace("sqrt", "math()")
    console.log(str2);
    let i = 1;
    console.log(str2[i]);
}






// equalBtn.addEventListener("click", function(e) {
//     e.preventDefault();
//     let show = document.createElement("p");


// })

// clearBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     let clear = document.createElement("p");



//     currentOperation = ""

// })