function convertirTemperatura()  {
     let cantCel = prompt("ingrese la temperatura °C: ");


    while (isNaN(cantCel)) {
    alert("el numero no es valido. ");
    cantCel = prompt("ingrese la temperatura °C: ");
    }   


    let celcius = parseFloat(cantCel);
    let kelvin = (celcius + 273.15);
    let farenheit = (celcius * 9/5) + 32;


    console.log("Grados Farenheit: " + farenheit);
    console.log("Grados Kelvin: " + kelvin);


    document.write("Grados farenheit: " + farenheit);
    document.write("Grados kelvin: " + kelvin);


    let resultado = document.getElementById('resultados');
    resultado.innerHTML = `
        <p>Grados farenheit: ${farenheit}</p>
        <p>Grados Kelvin: ${kelvin}</p>
    `;
}
convertirTemperatura();
