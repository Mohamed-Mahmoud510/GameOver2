import { UI } from "./ui.js";
import { detail } from "./details.js";
export class Home  {
constructor() {
    this.ui = new UI()
    this.det = new detail()
    this.getData()
    this.changeLink()
    
}

async changeLink() {
    // ^ Remove & Add Active on Links
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e)=>{
            document.querySelector(".active").classList.remove("active");
            link.classList.add("active")
            this.getData(e.target.id)
        })
    })
}
async getData(category = "MMORPG") {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '347a5c85a7msh4d1e994e0f424e4p13baecjsn482c1fc75cac',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }
let Api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
let response = await Api.json() 
this.ui.displaygame(response)    

$(".main-card").on("click",(e)=> {
        $("#All-Data").addClass("d-none")
        $("#Details").removeClass("d-none")
        this.det.getDetaols(e.currentTarget.id)
})
}


}
