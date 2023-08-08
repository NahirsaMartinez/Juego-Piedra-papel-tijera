const selectOpcJuego = document.querySelector ("#opcion-juego");
const h1Resultado = document.querySelector ("#resultado-juego");
const imgMaquina = document.querySelector ("#img-maquina");
const imgJugador = document.querySelector ("#img-jugador");

const IMG_1 = "https://images.vexels.com/media/users/3/145833/isolated/preview/39fd89ecfad842b527ec2278ad363fa7-ilustracion-de-piedra-de-escombros.png" ;
const IMG_2 = "https://enhttps://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/rec_0010.jpg?itok=hmaYENOPcrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc7mXdDrp8B18rj4A9BQn3eRdAd89SanEai6R17X4ZMNc2LTA8HNv5q4t6IP13fmjxyo&usqp=CAU" ;
const IMG_3 = "https://img.freepik.com/vector-premium/icono-tijeras-corte-concepto-tijeras-abiertas_74669-470.jpg" ;

function piedraPapelTijera() {
    switch (selectOpcJuego.value) {
        case "piedra":
        imgJugador.src =IMG_1;
        imgMaquina.src =IMG_1;
        h1Resultado.innerHTML = 'empate';
        console.log("empate");

            break;
    
        case "papel":
            imgJugador.src =IMG_1;
            imgMaquina.src = IMG_3;
            h1Resultado.innerHTML = 'ganaste';
            console.log("ganaste");
            break;
        case "tijera":
            imgJugador.src =IMG_3;
            imgMaquina.src = IMG_1;
            h1Resultado.innerHTML = 'perdiste';
            console.log("perdiste");
            break;
    }
}