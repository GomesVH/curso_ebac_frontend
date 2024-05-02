document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();

        let numMax = document.getElementById('numero-max').value;
        numMax = parseInt(numMax);

        let numAleatorio = Math.random() * numMax;
        numAleatorio = Math.floor(numAleatorio + 1);

        document.getElementById('result-value').innerText = numAleatorio;

        document.querySelector('.result').style.display = 'block';
    })
})