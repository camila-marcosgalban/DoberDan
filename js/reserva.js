//form index
let room = localStorage.getItem('cuarto');
let huespedes = localStorage.getItem('cantidadHuespedes');
let duracion = localStorage.getItem('duración de estadia');
let printForm = `
<p class="mb-3 mt-3">Estadia: <b>${duracion} días</b></p>
<p class="mb-3">Cantidad de huéspedes: <b>${huespedes}</b></p>
       <p class="mb-3">Cuarto: <b>${room}</b></p>
`;

//servicios
let standard = " ";
let premium = " ";
let pensión = " ";
let tour = " ";
let sauna = " ";
let conferencias = " ";
let cama = " ";

//valores
let opcion_val = 0;
let pensión_val = 0;
let tour_val = 0;
let sauna_val = 0;
let conferencias_val = 0;
let cama_val = 0;

class formInfo2 {
    constructor(pensión, tour, sauna, conferencias, cama) {
        this.pensión = $("#pension").prop("checked");
        this.tour = $("#tour").prop("checked");
        this.sauna = $("#sauna").prop("checked");
        this.conferencias = $("#conferencias").prop("checked");
        this.cama = $("#cama").prop("checked");
    }

    guardar() {
        localStorage.setItem('pension', this.pensión);
        localStorage.setItem('tour', this.tour);
        localStorage.setItem('sauna', this.sauna);
        localStorage.setItem('conferencias', this.conferencias);
        localStorage.setItem('cama', this.cama);
    }

    mostrarFinal() {
        if (localStorage.getItem('cuarto') == 'Opción Standard') {
            opcion_val += 75;
        } else if (localStorage.getItem('cuarto') == 'Opción Premium') {
            opcion_val += 115;
        };
        if (localStorage.getItem('pension') == 'true') {
            pensión_val += 30;
        };
        if (localStorage.getItem('sauna') == 'true') {
            sauna_val += 30;
        };
        if (localStorage.getItem('cama') == 'true') {
            cama_val += 15;
        };
        if (localStorage.getItem('conferencias') == 'true') {
            conferencias_val += 60;
        };
        if (localStorage.getItem('tour') == 'true') {
            tour_val += 35;
        };
        let suma = opcion_val + pensión_val + cama_val;
        let multi = suma * duracion;
        let calcularTotal = tour_val + sauna_val + conferencias_val + multi;
        let total = calcularTotal.toFixed(2);
        console.log("costo total: $" + total);


        let printTotal = `
<p>El costo total de su estadía (incluyendo servicios) es de: $${total}.</p>
`;
        const containerTotal = $("#total");
        containerTotal.html(printTotal);
    }

};


$(document).ready(function () {
    const containerInfoForm1 = $("#infoForm1");
    containerInfoForm1.html(printForm);
})

function call_guardar2() {
    let form1 = new formInfo2(pensión, tour, sauna, conferencias, cama);
    form1.guardar();
    form1.mostrarFinal();
};

$("#buttonForm2").click(function () {
    call_guardar2();
});