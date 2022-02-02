import { ButtonAndLollipop } from "./ButtonAndLollipop.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = ButtonAndLollipop()
}

render()

