import { getReservations, getClowns } from "./dataAccess.js"
import { deleteReservation, saveCompletion } from "./dataAccess.js"

// display all reservations in the list
export const ReservationList = () => {
    const reservations = getReservations()
    const clowns = getClowns()

    let html = `
        <h2>Reservation List</h2>
        <ul class="reservations">`

    for (const reservation of reservations) {
        html += `
            <li class="li-reservation" id=${reservation.id}>
                <div class="reservation">
                    Reservation of ${reservation.parentName} for ${reservation.childName} on ${reservation.dateOfReservation}
                </div>
                
                <button class="deleteButton" id="delete--${reservation.id}">Delete</button>

                <select class="clowns" id="clowns">
                    <option>Choose</option>
                    ${clowns.map(clown => {
                        return `<option value="${reservation.id}--${clown.id}">${clown.clownName}</option>`
                    }).join("")
                    }
                </select>
            </li>
            `
    }

    html += `</ul>`

    return html
}

// click event for delete button
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete")) {
        const [,reservationId] = clickEvent.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

// change event for completion (dropdown list)
mainContainer.addEventListener("change", event => {
    if (event.target.id === "clowns") {
        const [reservationId, clownId] = event.target.value.split("--")

        const completion = {
            reservationId: reservationId,
            clownId: clownId
        }

        saveCompletion(completion)
    }
})