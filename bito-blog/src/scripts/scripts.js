// *********************************************************
// targets class and adds new text to the dom
// *********************************************************
const sectionEl = document.querySelector(".article__header")
sectionEl.textContent = "Welcome to the Bito blog"
console.log("WORKS?", sectionEl);

// *********************************************************
// targets all classes with name of article__header. Loops
// through and adds "important to end of class name."
// *********************************************************
const articleHeaderChange = document.querySelectorAll(".article__header")
for (let i = 0; i < articleHeaderChange.length; i++) {
    articleHeaderChange[i].classList.add("important")
    console.log("WORKS?", articleHeaderChange)
}

// *********************************************************
// removes "dashed" from the class of <aside>.
// *********************************************************

const deleteDashed = document.querySelector(".dashed")
deleteDashed.classList.remove("dashed")
console.log("WORKS?", deleteDashed)


// *********************************************************
// added GOLDENROD to the class ".article__footer"
// *********************************************************

const GoldenRod = document.querySelector(".article__footer")
GoldenRod.classList.add("goldenrod")
console.log("goldenrod", GoldenRod)