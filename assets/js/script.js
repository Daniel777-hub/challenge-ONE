const encryptButton = document.getElementById("button__encrypt");
const decryptButton = document.getElementById("button__decrypt");
const copyButton = document.getElementById("button__copy");
const textInput = document.getElementById("textInput");
const textFinal = document.getElementById("textFinal");
const doll = document.getElementById("doll");
const textInfo = document.getElementById("textInfo");
const right = document.getElementById("right");

const replaceRules = [
    ["e", "entrar"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

const replaceText = (newText) => {
    textFinal.innerHTML = newText;
    textFinal.classList.add("adjust");
    right.classList.add("adjustment");
    textInput.value = "";
    textInput.style.height = "auto";
    textInput.placeholder = "Digite o texto aqui";
    doll.classList.add("hide");
    textInfo.classList.add("hide");
    copyButton.classList.remove("bn_hide");
};

const resetText = () => {
    textInput.value = "";
    textInput.style.height = "auto";
    textFinal.innerHTML = "";
    right.classList.remove("adjustment");
    textFinal.classList.remove("adjust");
    doll.classList.remove("hide");
    textFinal.placeholder = "Nenhuma mensagem encontrada";
    textInfo.classList.remove("hide");
    copyButton.classList.add("bn_hide");
    textInput.focus();
};

encryptButton.addEventListener('click', () => {
    const text = textInput.value.toLowerCase();

    if (text !== "") {
        function encrypt(newText) {
            for (let i = 0; i < replaceRules.length; i++) {
                if (newText.includes(replaceRules[i][0])) {
                    newText = newText.replaceAll(replaceRules[i][0], replaceRules[i][1]);
                }
            }
            return newText;
        }
        replaceText(encrypt(text));
    } else {
        alert("Digite o texto para encriptar");
        resetText();
    }
});

decryptButton.addEventListener('click', () => {
    const text = textInput.value.toLowerCase();

    if (text !== "") {
        function decrypt(newText) {
            for (let i = 0; i < replaceRules.length; i++) {
                if (newText.includes(replaceRules[i][1])) {
                    newText = newText.replaceAll(replaceRules[i][1], replaceRules[i][0]);
                }
            }
            return newText;
        }
        replaceText(decrypt(text));
    } else {
        alert("Digite o texto para descriptografar");
        resetText();
    }
});

copyButton.addEventListener("click", () => {
    let text = textFinal;
    text.select();
    document.execCommand('copy');
    alert("Texto Copiado");
    resetText();
});

// Autoajuste da área de texto
textInput.addEventListener("change", e => {
    textInput.style.height = "auto";
    let scrollHeight = e.target.scrollHeight;
    textInput.style.height = `${scrollHeight}px`;
});

textInput.addEventListener("keyup", e => {
    textInput.style.height = "auto";
    let scrollHeight = e.target.scrollHeight;
    textInput.style.height = `${scrollHeight}px`;
});
