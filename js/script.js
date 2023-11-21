/* Inizializzare una variabile per il bottone; */
const button = document.querySelector(".btn-generator"); 

/* Dare una funzione al bottone */
button.addEventListener("click", function(){
    let name_surname = document.getElementById("name_surname").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;

    console.log(name_surname);
    console.log(km);
    console.log(age);
    
    let new_ticket = km * 0.21;
    let discount;

    /* Creare una condizione "if" per lo sconto del 20% sui minorenni; */
    if(age == "minors"){
        discount = new_ticket * 20 / 100;
        new_ticket -= discount;
    }
    /* Creare una condizione "else if" per lo sconto del 40% sugl'over 65; */
    else if(age == "over65"){
        discount = new_ticket * 40 / 100;
        new_ticket -= discount;
    }

    /* Creare un console.log per l'output finale del prezzo; */
    console.log(new_ticket.toFixed(2));
})