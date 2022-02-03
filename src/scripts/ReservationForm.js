import { sendReservation } from "./dataAccess.js"

export const ReservationForm = () => {
    let html = `
    <h2>Reservation Form</h2>
    <div class="field">
        <label class="label" for="parentName">Parent Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="numOfChild">Number of Children</label>
        <input type="number" name="numOfChild" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="dateOfReservation">Date of reservation</label>
        <input type="date" name="dateOfReservation" class="input" />
    </div>
    <div class="field">
        <label class="label" for="numOfHour">Number of Hours</label>
        <input type="number" name="numOfHour" class="input" />
    </div>

    <button class="button" id="reserveButton">Make Reservation</button>
    `
    
    return html

}

// click event for reservation button
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click", clickEvent => {
        const clickItem = clickEvent.target
        if (clickItem.id === "reserveButton") {
            const userParentName = document.querySelector("input[name='parentName']").value
            const userChildName = document.querySelector("input[name='childName']").value
            const userNumOfChild = document.querySelector("input[name='numOfChild']").value
            const userAddress = document.querySelector("input[name='address']").value
            const userDateOfReservation = document.querySelector("input[name='dateOfReservation']").value
            const userNumOfHour = document.querySelector("input[name='numOfHour']").value

            const reservationToSendToAPI = {
                parentName: userParentName,
                childName:  userChildName,
                numOfChild: userNumOfChild,
                address: userAddress,
                dateOfReservation: userDateOfReservation,
                numOfHour: userNumOfHour
            }

            sendReservation(reservationToSendToAPI)
        }
    }
)