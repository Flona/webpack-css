import img from "../assets/image/wenhualvyou.png"

const root = document.getElementById('root')

export default function createImg(){
    const newImg = new Image()
    newImg.src = img
    newImg.className = "testMoudles"
    root.appendChild(newImg)
}