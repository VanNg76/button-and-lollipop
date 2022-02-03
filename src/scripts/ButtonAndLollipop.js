import { ReservationList } from "./ReservationList.js"
import { ReservationForm } from "./ReservationForm.js"


export const ButtonAndLollipop = () => {
    return `
    <h1>Button And Lollipop Reservation</h1>
    <hr>
    <br>
    <section class="reservationForm">
        ${ReservationForm()}
    </section>

    <section class="reservationList">
        ${ReservationList()}
    </section>
    `
}