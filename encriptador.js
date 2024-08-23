const d = document;
const textArea = d.querySelector(".form_input")
const imagenMuneco = d.querySelector(".result_img");
const loaderBatman = d.querySelector(".loader")
const resultadoTitulo = d.querySelector(".result_title");
const resultadoText = d.querySelector(".result_text");
const botonEncriptar = d.querySelector(".form_btn");
const botonDesencriptar = d.querySelectorAll(".form_btn");
const botonCopiar = d.querySelector(".result__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

//Funcion para encriptar
function ecriptarmensaje(mensaje){
    let mensajeEncriptado = "";
  for(let i = 0; i < mensaje.length; i++){
    let letra = mensaje[i];
    let encriptada = letra;
    for(let j = 0; j < llaves.length; j++){
        if (letra === llaves[j][0]) {
            encriptada = llaves[j][1];
            break;
        }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}

//Funcion para desencriptar
function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
// Ocultar elementos dinámicamente
textArea.addEventListener("input", (e) => {
    imagenMuneco.style.display = "none";
    loaderBatman.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando mensaje."
    resultadoText.textContent = "";
});
//Funcion del boton encriptar
botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = ecriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:"
});

botonDesencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
});

botonCopiar.addEventListener('click', () => {
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
    })
});

