export class UI {
constructor() {

}
displaygame(data) {
    let cartona = ``
for (let i = 0; i < data.length; i++) {
    cartona += `
     <div class="col-md-4 mt-3">
                            <div class="main-card" id="${data[i].id}">
                                <figure class="border border-1 border-black rounded-2 p-3">
                                    <img src="${data[i].thumbnail}" class="w-100" alt="">                                    
                                    <figcaption>
                                        <div class="fig-head d-flex justify-content-between align-items-center mt-2">
                                            <h2>${data[i].title}</h2>
                                            <span class="btn btn-primary p-1 rounded-2">Free</span>
                                        </div>
                                        <p class="text-center">${data[i].short_description}</p>
                                        <div class="fig-footer d-flex justify-content-between align-items-center border-1 border-top border-black ">
                                            <span class="btn btn-secondary mt-2 fs-6">${data[i].genre}</span>
                                            <span class="btn btn-secondary mt-2 fs-6">${data[i].platform}</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>`
    
}
document.getElementById('myData').innerHTML = cartona;

}
displayDetails(detailsData) {
let cartona=` <div class="details-head d-flex justify-content-between align-items-center">
                        <h2>Details Game</h2>
                         <span class="btn btn-outline-primary close-Letter">X</span>   
                    </div>
                    <div class="col-md-4">
                        <img src="${detailsData.thumbnail}" class="w-100" alt="">
                    </div>
                    <div class="col-md-8">
                        <h3>${detailsData.title}</h3>
                        <h4>Category : <span class="btn btn-primary">${detailsData.genre}</span></h4>
                        <h4>Platform : <span class="btn btn-primary">${detailsData.platform}</span></h4>
                        <h4>Status : <span class="btn btn-primary">${detailsData.status}</span></h4>
                         <p>${detailsData.description}</p>   
                        <a href="${detailsData.game_url}" class="btn btn-secondary">${detailsData.developer}</a>
                        
                    </div>`
document.getElementById("DetaData").innerHTML = cartona
}

}