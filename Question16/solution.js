


// Previous guests list
let guestsList = [
    "Zia Khan",
    "Daniyal Nagori",
    "Ali Razzaq",
    "Sir Zeeshan"
]

// New guests list
let newGuestsList = [
    "Hira Khan",
    "Ali Arif Alvi"
]

// Add new guests to the list
newGuestsList.map((guestName) => guestsList.push(guestName))


function componseInvitation(guestName) {
    return `
    Invitation Update,
    Hello again ${guestName}, There's a slight change in the dinner invitation for the dinner place.
    I have found a bigger table for the dinner so I there's an increase in the guests list.
    New dinner place would be Pearl Continental Hotel Lahore.
    `
}


guestsList.map((guestName) => console.log(componseInvitation(guestName)))