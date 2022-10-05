


let favPlaces = [
    "Palasten",
    "JeruSalem",
    "Egypt",
    "London",
]

// Print array in original order
console.log("Original Array:",favPlaces)

// Sort in alphabetical order
let alphaSortedArray = [...favPlaces].sort();

console.log("Alphabetically sorted array:",alphaSortedArray)
console.log("Original Array:",favPlaces)


// Sort in reverse alphabetical order
let reverseAlphaSortedArray = [...favPlaces].sort().reverse();

console.log("Reverse Alphabetically sorted array:",reverseAlphaSortedArray)
console.log("Original Array:",favPlaces)

// Reverse array
favPlaces.reverse()

console.log("Reversed Array:",favPlaces)

// Let's make it back to original order
favPlaces.reverse()
console.log("Back to original:",favPlaces)


// Alphabeticall array
favPlaces.sort()

console.log("Alphabetical array:", favPlaces)

// Reverse alphabetical sorted
favPlaces.reverse()
console.log("Reverse alhpabetical sorted:",favPlaces)