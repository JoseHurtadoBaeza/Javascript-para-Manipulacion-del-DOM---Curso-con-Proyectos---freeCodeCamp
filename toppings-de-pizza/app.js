const toppings = document.getElementsByClassName("topping");

// function mostrarClic(e){
//     console.log(e.target.innerText);
// }

for (const topping of toppings){
    topping.addEventListener("click", (e) => {
        console.log(e.target.innerText);
    });
}

