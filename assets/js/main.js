const submit = document.querySelector('#calc');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const res = document.querySelector('#res');
const form = document.querySelector('#form');
const back = document.querySelector('#back');
const tagimc = document.querySelector('#imc');
const state = document.querySelector('#estado');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!altura.value) {
        return
    } else if (!peso.value) {
        return
    }
    res.style.display = 'flex';
    form.style.display = 'none';
    const imc = Number((Number(peso.value) / (Number(altura.value)**2)).toFixed(1));
    // < 18,5 - abaixo do peso
    // entre 18,5 e 24,9 - peso normal
    // entre 25 e 29,9 - acima do peso
    // entre 30 e 34,9 - obesidade grau I
    // entre 35 e 39,9 - obesidade grau II
    // > 39,9 - obesidade grau II
    tagimc.classList = '';
    state.classList = '';
    if (imc < 18.5) {
        var estado = 'abaixo do peso'
        tagimc.innerHTML = imc;
        state.innerHTML = estado;
        tagimc.classList.add('abaixo');
        state.classList.add('abaixo');
    } else if (imc < 24.9) {
        var estado = 'peso ideal';
        tagimc.innerHTML = imc;
        state.innerHTML = estado;
        tagimc.classList.add('ideal');
        state.classList.add('ideal');
    } else if (imc < 29.9) {
        var estado = 'acima do peso';
        tagimc.innerHTML = imc;
        state.innerHTML = estado;
        tagimc.classList.add('acima');
        state.classList.add('acima');
    } else if (imc < 34.9) {
        var estado = 'obesidade grau I';
        tagimc.innerHTML = imc;
        state.innerHTML = estado;
        tagimc.classList.add('o1');
        state.classList.add('o1');
    } else if (imc < 39.9) {
        var estado = 'obesidade grau II';
        tagimc.innerHTML = imc;
        state.innerHTML = estado;
        tagimc.classList.add('o2');
        state.classList.add('o2');
    } else {
        var estado = 'obesidade grau III';
        tagimc.innerHTML = imc;
        state.innerHTML = estado;
        tagimc.classList.add('o3');
        state.classList.add('o3');
    }
})

back.addEventListener('click', () => {
    res.style.display = 'none';
    form.style.display = 'flex';
    peso.value = '';
    altura.value = '';
})