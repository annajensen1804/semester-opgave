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
    <h3>${opholdData.title}</h3>
    <p>${opholdData.numberOfPersons}</p>
    <p>${opholdData.price}</p>
    </article>
    <img src="${opholdData.image}" alt="">
    <button></button>
    `
} 