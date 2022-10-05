


let existingUsers = [
    "admin",
    "rehman",
    "ali",
    "raza",
    "rafique"
]

let newUsers = [
    "REHMAN",
    "rizz",
    "ali",
    "john",
    "hamza"
]

newUsers.forEach((user) => {
    if (existingUsers.includes(user.toLowerCase()) ) {
        console.log(`${user} is not available.`)
    }
    else {
        console.log(`${user} is available.`)
    }
})
