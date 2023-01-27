const shortenInput = document.getElementById("shortenInput")
const shortenBtn = document.getElementById("shortenBtn")
//const short = document.getElementById("short")
//const original = document.getElementById("original")
const copy = document.getElementById("copy")
const linksElement = document.querySelector("#linksElement")
const mobileMenu = document.getElementById("mobileMenu")
const navig = document.getElementById("navig")
const api = "https://api.shrtco.de/v2/shorten?url="


const getData = async () => {
    const response = await fetch(api + shortenInput.value)
    const data = await response.json()

    //console.log(data.result.short_link);
    //console.log(data.result.original_link);
    console.log(data);

    linksElement.innerHTML += `
            <li>
                <div class='linkShortened'>
                    <a href='${data.result.original_link}' target='_blank' id='original'>${data.result.original_link}</a>
                    <a href='https://${data.result.short_link}' target="_blank" id='short'>${data.result.short_link}</a>
                    <button type='submit' id='copy' onclick='myFunction()'>Copy</button>
                </div>
            </li>
            `;
            
}

shortenBtn.addEventListener("click", () => {
    getData()
})



const myFunction = () => {

    
    const short = document.getElementById("short")
    navigator.clipboard.writeText(short.innerHTML)
    console.log("copied!");
       
    
    
}


mobileMenu.addEventListener("click", () => {
    navig.classList.toggle("responsive")
})