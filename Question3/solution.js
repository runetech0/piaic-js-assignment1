


let personName = "RehMAN AlI"
// Have stored in random cases so we may display the correct cases

let upperCase = personName.toUpperCase()
let lowerCase = personName.toLowerCase()


// We don't have a builtin method for string to convert to  Title Case. Let's create ours.

function toTitleCase(str) {

    // We first create a list of all words of the input phrase/name by splitting at spaces
    let words = str.split(" ")
    let titleCasedWords = words.map((word) => {
        // We convert the first letter of word to 
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    // Now join all the title cased words back using space
    titleCasedWords.join(" ")


  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

// Convert the name to title case
let titleCase = toTitleCase(personName)

console.log(`Upper Case: ${upperCase}`);
console.log(`Lower Case: ${lowerCase}`);
console.log(`Title Case: ${titleCase}`);

