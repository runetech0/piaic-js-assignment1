

// guests list
var guestsList = [
    "Zia Khan",
    "Daniyal Nagori",
    "Ali Razzaq",
    "Sir Zeeshan",
    "Hira Khan",
    "Arif Alvi"
]


function componseInvitation(guestName) {
    return `
    Invitation Update,
    Hello again ${guestName}, There's a slight change in the dinner invitation for the dinner place.
    I have found a bigger table for the dinner so I there's an increase in the guests list.
    New dinner place would be Pearl Continental Hotel Lahore.
    `
}


// Remove the guests from list until there are only 2 left and send invites
let invitesSent = false
for (let i = 0; i <= guestsList.length + 5; i++) {
    if (guestsList.length == 2 && !invitesSent)  {
        guestsList.map((guestName) => console.log(componseInvitation(guestName)))
        invitesSent = true
    }
    guestsList.shift()
}

console.log(guestsList)