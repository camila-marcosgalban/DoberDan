//La idea es hacer el site de una locación de hospedaje en eslovenia, donde te calcula el costo de estadia teniendo en cuenta el tipo de cuarto, tiempo de estadia y servicios adicionales a contratar.

let fechaIngreso = " ";
let fechaSalida = " ";
let cantidadHuespedes = " ";
let cuarto = " ";

class formInfo {

    constructor(cuarto, duracionEstadia, cantidadHuespedes, fechaIngreso, fechaSalida) {
        this.cuarto = $("#Cuarto").val();
        this.cantidadHuespedes = $("#cantidadHuespedes").val();
        this.fechaIngreso = $("#FechaIngreso").val();
        this.fechaSalida = $("#FechaSalida").val();
    }

    guardar() {
        localStorage.setItem('cuarto', this.cuarto);
        localStorage.setItem('cantidadHuespedes', this.cantidadHuespedes);
        localStorage.setItem('fechaIngreso', this.fechaIngreso);
        localStorage.setItem('fechaSalida', this.fechaSalida);
    }

    calcularDias() {
        let dia1 = new Date(this.fechaIngreso);
        let dia2 = new Date(this.fechaSalida);

        let diferencia = dia2.getTime() - dia1.getTime();
        let porDia = 1000 * 3600 * 24;
        let resultado = diferencia / porDia;
        console.log(resultado);
        localStorage.setItem('duración de estadia', resultado);
    }

}

function call_guardar() {
    let form1 = new formInfo(cuarto, cantidadHuespedes, fechaIngreso, fechaSalida);
    form1.guardar();
};


function print() {
    let form2 = new formInfo(cuarto, cantidadHuespedes, fechaIngreso, fechaSalida);
    form2.calcularDias();
};

//onchange
$("#FechaIngreso").change(function () {
    call_guardar();
});
$("#FechaSalida").change(function () {
    call_guardar();
});
$("#cantidadHuespedes").change(function () {
    call_guardar();
});
$("#Cuarto").change(function () {
    call_guardar();
});
$("#buttonForm1").click(function () {
    print();
});

//animaciones
$("#buttonCalcular").click(function () {
    $("#calcularClosed").slideUp(1000);
    $("#calcularOpened").show(1500);
});