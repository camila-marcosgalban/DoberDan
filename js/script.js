//cards servicios
const newCard = new buildCards();

function buildImg(servicio) {
    const divServicios = $("<p></p>");
    $(divServicios).addClass("col-4");
    const imgServicios = newCard.img(servicio.img);
    divServicios.append(imgServicios);
    return divServicios;
}

function buildp(servicio) {
    const pServicios = newCard.p(servicio.name);
    $(pServicios).addClass("col-4");
    return pServicios;
}

//cards cuartos


$(document).ready(function () {
    //servicios
    const serviciosContainer = $("#serviciosRow");

    //separacion de loops para mantener estetica bootstrap
    $(servicios_opciones).each(function (name, data) {
        if (data.id === "S1" || data.id === "S2" || data.id === "S3") {
            let imgServicios = buildImg(data);
            serviciosContainer.append(imgServicios);
        }
    });

    $(servicios_opciones).each(function (name, data) {
        if (data.id === "S1" || data.id === "S2" || data.id === "S3") {
            let pServicios = buildp(data);
            serviciosContainer.append(pServicios);
        }
    });

    $(servicios_opciones).each(function (name, data) {
        if (data.id === "S4" || data.id === "S5" || data.id === "S6") {
            let imgServicios = buildImg(data);
            serviciosContainer.append(imgServicios);
        }
    });

    $(servicios_opciones).each(function (name, data) {
        if (data.id === "S4" || data.id === "S5" || data.id === "S6") {
            let pServicios = buildp(data);
            serviciosContainer.append(pServicios);
        }
    });

    //cuartos
    let RoomCard = " ";
    let contenidoRooms = [];

    function cargarRooms() {
        $.ajax({
            url: "cuartos.json",
            dataType: "json",
            success: function (data) {
                contenidoRooms = data
                $.each(contenidoRooms, function (i) {
                    RoomCard += `
        <div class="card">               
        <div id="${contenidoRooms[i].carousel_id}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousels" class="carousel-inner">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${contenidoRooms[i].imgPrincipal}" class="d-block w-100 card-img-top" alt="room1">
            </div>
            <div class="carousel-item">
                <img src="${contenidoRooms[i].img1}" class="d-block w-100" alt="room1">
            </div>
            <div class="carousel-item">
                <img src="${contenidoRooms[i].img2}" class="d-block w-100" alt="room1">
            </div>
            <div class="carousel-item">
                <img src="${contenidoRooms[i].img3}" class="d-block w-100" alt="room1">
            </div>
            <div class="carousel-item">
                <img src="${contenidoRooms[i].img4}" class="d-block w-100" alt="room1">
            </div>
        </div>
            </div>
            <a class="carousel-control-prev" href="#${contenidoRooms[i].carousel_id}" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#${contenidoRooms[i].carousel_id}" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
        <div class="card-body infoRoom">
        <h3 class="card-title">${contenidoRooms[i].name}</h3>
        <p class="card-text"><b>Costo:</b>${contenidoRooms[i].price}</p>
        <p>*El máximo de huéspedes por habitación es de 4</p>
    </div>             
    </div>
        `
                })
                $("#infoRooms").html(RoomCard);
            },
            error: function () {
                console.error(`Ocurrió un error`)
                RoomCard = `<div> 
                     <p class="ms-5">Ocurrio un error.</p> 
                  </div>`
                $("#infoRooms").html(RoomCard);
            }
        })
    }
    cargarRooms();


})