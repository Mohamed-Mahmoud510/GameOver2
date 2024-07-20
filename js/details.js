import { UI } from "./ui.js";
export class detail  {
    constructor() {
        this.ui = new UI()
    }
    async getDetaols(sku) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '347a5c85a7msh4d1e994e0f424e4p13baecjsn482c1fc75cac',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
    let Api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${sku}`,options)
    let response = await Api.json() 
    this.ui.displayDetails(response)    
    
    $(".close-Letter").on("click",()=>{
        $("#All-Data").removeClass("d-none")
        $("#Details").addClass("d-none")
        })
    }


}