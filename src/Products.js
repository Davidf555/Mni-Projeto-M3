const listaUl2 = document.getElementById('listaUl2');

class Card {
    constructor(img, nome, procedimento, tipo) {
        this.nome = nome;
        this.procedimento = procedimento;
        this.tipo = tipo;
        this.img = img;
    }

    criarCard() {
        const divCard = document.createElement('div');
        divCard.classList.add('card');

        const imgEl = document.createElement('img');
        imgEl.src = this.img;

        const p1 = document.createElement('p');
        p1.innerText = `Nome: ${this.nome}`;

        const p2 = document.createElement('p');
        p2.innerText = `Procedimento: ${this.procedimento}`;

        const p3 = document.createElement('p');
        p3.innerText = `Tipo de Cabelo: ${this.tipo}`;

        divCard.appendChild(imgEl);
        divCard.appendChild(p1);
        divCard.appendChild(p2);
        divCard.appendChild(p3);

        return divCard;
    }
}

function carregarCards() {
    const container = document.getElementById('listaUl2');
    const dados = JSON.parse(localStorage.getItem('cards')) || [];

    dados.forEach(item => {
        const card = new Card(item.img, item.nome, item.procedimento, item.tipo);
        container.appendChild(card.criarCard());
    });
}

carregarCards();

const btnLimpar = document.getElementById('btn-limpar')
btnLimpar.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});
