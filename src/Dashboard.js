function viewProducts() {
    const bntViewProducts = document.getElementById('bnt-view-products')
    bntViewProducts.addEventListener('click', () => {
        window.location.href = 'Products.html';
    });
}
viewProducts();


function card(){
const inputNome = document.getElementById('inputNome');
const inputProcedimento = document.getElementById('inputProcedimento');
const inputTipoCabelo = document.getElementById('inputTipoCabelo');
const addCard = document.getElementById('btn-add');
const verCards = document.getElementById('bnt-view-products');
const listaUl = document.getElementById('listaUl');

const listaCards = [];

class Card {
    constructor(nome, procedimento, tipo) {
        this.nome = nome;
        this.procedimento = procedimento;
        this.tipo = tipo;
    }

    criarCard = () => {
        const paragrafo = document.createElement('p');
        const paragrafo2 = document.createElement('p');
        const paragrafo3 = document.createElement('p');

        listaUl.appendChild(paragrafo);
        listaUl.appendChild(paragrafo2);
        listaUl.appendChild(paragrafo3);

        paragrafo.innerText = this.nome
        paragrafo2.innerText = this.procedimento
        paragrafo3.innerText = this.tipo

        listaUl.classList.add('card');
    }
}

addCard.addEventListener('click', () => {
    const card = new Card(inputNome.value, inputProcedimento.value, inputTipoCabelo.value);
    card.criarCard();
    listaCards.push(card);
});
}
card();
