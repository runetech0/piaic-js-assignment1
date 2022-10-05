

// Test 1

let language = "python"
console.log("language === 'python', I predict true because the language variable contains 'python'")
console.log("Test1 result:", language === "python")
console.log("language === 'Python', I predict false because the language variable contains 'python' not 'Python'")
console.log("Test2 result:", language === "Python")

let hours = 3
console.log("hours === 3, I predict true because the hours variable contains value of  3")
console.log("Test3 result:", hours === 3)
console.log("hours === '3', I predict false because the hours variable contains value of 3 (integer) and not '3' (String)")
console.log("Test4 result:", hours === '3')


let classesCity = "lahore"
console.log("classesCity === 'lahore', I predict true because the classesCity variable contains 'lahore'")
console.log("Test5 result:", classesCity === "lahore")
console.log("classesCity === 'lahore', I predict false because the classesCity variable contains 'lahore' but we checking 'lahore ' (Note the space)")
console.log("Test6 result:", classesCity === "lahore ")



let marks = 20
console.log("marks === 20, I predict true because the marks variable contains 20")
console.log("Test7 result:", marks === 20)
console.log("marks === '20', I predict false because the marks variable contains 20 but we are checking '20' (String)")
console.log("Test8 result:", marks === '20')

let examDone = true
console.log("examDone === true, I predict true because the examDone variable contains true")
console.log("Test9 result:", examDone === true)
console.log("examDone === 0, I predict false becuase 0 will evaluate to false and examDone contains true")
console.log("Test10 result:", examDone === 0)