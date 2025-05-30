function viewProducts() {
    const bntViewProducts = document.getElementById('bnt-view-products')
    bntViewProducts.addEventListener('click', () => {
        window.location.href = 'Products.html';
    });
}
viewProducts();

const listaCards = [];

function card() {
    const inputNome = document.getElementById('inputNome');
    const inputProcedimento = document.getElementById('inputProcedimento');
    const inputTipoCabelo = document.getElementById('inputTipoCabelo');
    const addCard = document.getElementById('btn-add');
    const listaUl = document.getElementById('listaUl');

    class Card {
        constructor(img, nome, procedimento, tipo) {
            this.nome = nome;
            this.procedimento = procedimento;
            this.tipo = tipo;
            this.img = img;
        }

        criarCard = (index) => {
            const divCard = document.createElement('div');
            const paragrafo = document.createElement('p');
            const paragrafo2 = document.createElement('p');
            const paragrafo3 = document.createElement('p');
            const imgCards = document.createElement('img');

            divCard.classList.add('card');

            imgCards.src = this.img;
            paragrafo.innerText = `Nome: ${this.nome}`;
            paragrafo2.innerText = `Procedimento: ${this.procedimento}`;
            paragrafo3.innerText = `Tipo de Cabelo: ${this.tipo}`;

            divCard.appendChild(imgCards);
            divCard.appendChild(paragrafo);
            divCard.appendChild(paragrafo2);
            divCard.appendChild(paragrafo3);
            listaUl.appendChild(divCard);

            const btnExcluir = document.createElement("button");
            btnExcluir.innerText = "Excluir";
            btnExcluir.onclick = () => {
                listaCards.splice(index, 1);
                renderCards();
                console.log(listaCards)
            };

            divCard.appendChild(btnExcluir);
        }
    }

    const renderCards = () => {
        listaUl.innerHTML = "";
        listaCards.forEach((card, index) => {
            card.criarCard(index);
        });
    };

    // const imgCard = () => {
    //     const tipo = inputTipoCabelo.value.trim();

    //     if (tipo === "Liso") {
    //         return "images/cabelos/Cabelo-liso.jpeg";
    //     } else if (tipo === "Cacheado") {
    //         return "images/cabelos/Cabelo-cacheado.jpg";
    //     } else if (tipo === "Crespo") {
    //         return "images/cabelos/cabelo-crespo.jpg";
    //     } else if (tipo === "Ondulado") {
    //         return "images/cabelos/cabelo-ondulado.jpg";
    //     } else {
    //         alert("Tipo de cabelo não reconhecido.");
    //     }
    // }

    const img2 = src = "images/cabelos/cabelo-ondulado.jpg";

    addCard.addEventListener('click', () => {
        // if (inputNome.value === "" || inputProcedimento.value === "" || inputTipoCabelo.value === "") {
        //     alert("Por favor preencha todos os campos");
        // } else {
        //     const card = new Card(img2, inputNome.value, inputProcedimento.value, inputTipoCabelo.value);
        //     card.criarCard();
        //     listaCards.push(card);

        //     inputNome.value = "";
        //     inputProcedimento.value = "";
        //     inputTipoCabelo.value = "";
        //     console.log(listaCards)
        // }

        const card = new Card(img2, inputNome.value, inputProcedimento.value, inputTipoCabelo.value);
        card.criarCard();
        listaCards.push(card);
        console.log(listaCards)
    });
}
card();
