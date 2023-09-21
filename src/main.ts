// @ts-ignore
import Toastify from "toastify-js"

import { sound } from "./assets/sound"

const main = () => {
  const depositBtn = document.querySelector("#deposit")!
  var snd = new Audio("data:audio/wav;base64," + sound)

  depositBtn.addEventListener("click", () => {
    toast("Зачислено!")

    snd.currentTime = 0
    snd.play()
  })
}

const toast = (text: string) => {
  Toastify({
    text,
    duration: 3000,
    gravity: "bottom",
    position: "center",
  }).showToast()
}

main()
