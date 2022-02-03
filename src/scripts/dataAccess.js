const applicationState = {
    reservations: [],
    clowns: [],
    completions: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

// fetch json data
export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservationData) => {
                applicationState.reservations = reservationData
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (clownData) => {
                applicationState.clowns = clownData
            }
        )
}

// create copied array of reservations, sort by dateOfReservation
export const getReservations = () => {
    applicationState.reservations.sort(
        (a, b) => {
            var dateA = new Date(a.dateOfReservation)
            var dateB = new Date(b.dateOfReservation)
            return dateA - dateB
        }
    )

    return applicationState.reservations.map(reservation => ({...reservation}))
}

// create copied array of clowns
export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

// add a new reservation
export const sendReservation = (reservationToSend) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservationToSend)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// delete a reservation
export const deleteReservation = (id) => {
    return  fetch(`${API}/reservations/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
}

// save completion
export const saveCompletion = (completion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }

    return fetch(`${API}/completions`, fetchOptions)
        .then(res => res.json())
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}