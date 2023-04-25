const capturaTexto = document.getElementById('paragrafo');
const capturaInput = document.getElementById('texto');

console.log(capturaTexto.innerHTML);

const imprimirDigitacao = () => {
    console.log(capturaInput.value);
};

const substituirTag = () => {
    capturaTexto.innerHTML = capturaInput.value;
};
