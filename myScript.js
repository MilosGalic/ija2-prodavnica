function proveraKljuca(){
    var kljuc = document.getElementById("provera").value;

    if(ispravnost(kljuc)) {
        document.getElementById("ispisIspravnosti").textContent = "Kljuc je validan"; 
    } else {
        document.getElementById("ispisIspravnosti").textContent = "Kljuc nije validan. Molimo pokusajte opet!"
    }

}

function ispravnost(kljuc) {
    return kljuc.length === 15;
}

function istorijaPromena (){
    alert("Ukoliko kliknete na ovo dugme slova ce se povecati i promeniti boju!");
    document.getElementById("kofer").style.fontSize="20px";
    document.getElementById("kofer").style.color="blue";
}

function popusti(vreme) {
    
    let letnjiNiz = ['World of Warcraft' , 'Terraria' , 'Divinity' , 'Age of Mythology' , 'Call of Duty'];
    let zimskiNiz = ['Supermen' , 'PUBG' , 'LoL' , 'Dota' , 'CS2'];
    let prikaz = "";
    
    if(vreme === 0){
        console.log("Ove igrice ce biti na popustu u Letnjim mesecima: ");
        for(let i=0; i<letnjiNiz.length;i++){
            prikaz += letnjiNiz[i] + "<br>";
        }
    }else{
        console.log("Ove igrice ce biti na popustu u Zimskim mesecima: ");
        for(let i=0; i<zimskiNiz.length;i++){
            prikaz += zimskiNiz[i] + "<br>";
        }
    }
    
    let prikaziDiv = document.getElementById("doba");
    prikaziDiv.innerHTML = prikaz;
    
}

function popust() {
    let cena = parseFloat(document.getElementById("cena").value);
    let procenat = parseFloat(document.getElementById("procenat").value);

    let iznos = (cena * procenat) /100;

    let rezDiv = document.getElementById("rezultat");
    rezDiv.textContent = "Iznos popusta je: " + iznos;
}

function prikaziTop(){
    
    var topIgrice = ["World of Warcraft" , "Lethal Company" , "PUBG" ,"Lol" , "Dota" , "ARC"];
    topIgrice.pop();
    topIgrice.unshift("Dont Starve");
    topIgrice.pop();
    var prikazTopIgrica = document.getElementById("topIgre");
    prikazTopIgrica.textContent = topIgrice.join(",");

}

function ostaviUtisakN() {
    var ostavljeniUtisak = document.getElementById("ostaviUtisak");
    var utisakTekst = document.getElementById("unesiUtisak").value;
    var par = document.createElement("p");
    par.textContent = utisakTekst;

    ostavljeniUtisak.appendChild(par);

    var hvala = document.createElement("p");
    hvala.textContent = "Hvala sto ste ostavili utisak";
    ostavljeniUtisak.appendChild(hvala);
}

let f = forma;
let ime = f.ime;
let prezime = f.prezime;
let email = f.email;

function proslediFormu(event){
    event.preventDefault();
    console.log("Ime: " + ime.value);
    console.log("Prezime: " + prezime.value);
    console.log("Email: " + email.value);
}

