const words = [
    "Full-Stack Developer",
    "System Architect", 
    "Django Developer",
    "Software Engineer",
    "Problem Solver"
]

let i = 0
let j = 0
let current = ""
let isDeleting = false

function type() {
    let element = document.getElementById("typing")
    
    if (i < words.length) {
        if (!isDeleting) {
            // Typing phase
            current = words[i].substring(0, j++)
            element.innerHTML = current + "|"
            
            if (j === words[i].length + 1) {
                isDeleting = true
                setTimeout(type, 2000) // Pause at complete word
                return
            }
        } else {
            // Deleting phase
            current = words[i].substring(0, j--)
            element.innerHTML = current + "|"
            
            if (j === 0) {
                isDeleting = false
                i = (i + 1) % words.length // Loop back to first word
            }
        }
    }
    
    const typingSpeed = isDeleting ? 50 : 100
    setTimeout(type, typingSpeed)
}

type()
