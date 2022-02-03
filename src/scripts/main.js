import { ButtonAndLollipop } from "./ButtonAndLollipop.js";
import { fetchReservations, fetchClowns } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
        .then(fetchClowns)
        .then(
            () => {
                mainContainer.innerHTML = ButtonAndLollipop()
            }
        )
}

render()

mainContainer.addEventListener("stateChanged", () => {
    render()
})

