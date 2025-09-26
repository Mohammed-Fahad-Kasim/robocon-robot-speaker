function blink() {
  let pupils = document.querySelectorAll(".pupil")
  pupils.forEach(p => {
    p.style.top = "50px"
  })
  setTimeout(() => {
    pupils.forEach(p => {
      p.style.top = "12px"
    })
  }, 300)
}

function talk() {
  let phrases = [
    "Hello human!",
    "I am your robot friend.",
    "Beep boop!",
    "Robocon forever!",
    "Ready for action."
  ]
  let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]

  let mouth = document.querySelector(".mouth")
  mouth.style.height = "60px"
  mouth.style.background = "#f00"

  let utterance = new SpeechSynthesisUtterance(randomPhrase)
  utterance.pitch = 1.2
  utterance.rate = 1
  speechSynthesis.speak(utterance)

  setTimeout(() => {
    mouth.style.height = "20px"
    mouth.style.background = "#000"
  }, 1500)
}
