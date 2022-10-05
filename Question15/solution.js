






let guestsList = [
    "Zia Khan",
    "Daniyal Nagori",
    "Ali Razzaq",
    "Sir Zeeshan"
]

let unavailableGuest = "Sir Zeeshan"
let newGuestOnList = "Arif Alvi"

let newList = guestsList.map((guestName, index) => {
    if (guestName === unavailableGuest) {
        guestsList[index] = newGuestOnList
    }
})

function componseInvitation(guestName, unavailableGuest) {
    return `
    Invitation Update,
    Hello again ${guestName}, I would like to inform you that a great friend of ours named ${unavailableGuest} would not be able to join us on the dinner.
    `
}


guestsList.map((guestName) => console.log(componseInvitation(guestName, unavailableGuest)))