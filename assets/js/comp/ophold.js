import { fetchStays } from "../fetch.js";
const ophold = document.querySelector(".ophold")

const opholdData = await (fetchStays)

const opholdListTmpl = (opholdData) => {
    
    let imageUrl = ""
    
    if(opholdData.image.startsWith("http")) {
        
        imageUrl = opholdData.image   

    } else {

        imageUrl = `https://${opholdData.image}`

    }
    

   return `
<article>
    <h3></h3>
    <p></p>
    <p></p>
    <img src="" alt="">
    <button></button>
</article>
    `
} 