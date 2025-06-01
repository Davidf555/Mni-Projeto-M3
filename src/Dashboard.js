function viewProducts() {
    const bntViewProducts = document.getElementById('bnt-view-products')
    bntViewProducts.addEventListener('click', () => {
        window.location.href = 'Products.html';
    });
}
viewProducts();

let listaCards = [];

const inputNome = document.getElementById('inputNome');
const inputProcedimento = document.getElementById('inputProcedimento');
const inputTipoCabelo = document.getElementById('inputTipoCabelo');
const addCard = document.getElementById('btn-add');
const listaUl = document.getElementById('listaUl');

function card() {
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
                salvarNoLocalStorage();
            };

            const btnAlterar = document.createElement("button");
            btnAlterar.innerText = "Alterar";
            btnAlterar.onclick = () => {
                const novoNome = prompt("Altere o nome:", this.nome);
                const novoProcedimento = prompt("Altere o procedimento: Hidratação, Tintura, Matização da cor ou Brilho", this.procedimento);
                const novoTipo = prompt("Altere o tipo de cabelo: Liso, Ondulado, Cacheado ou Crespo", this.tipo);

                if (novoNome !== null && novoProcedimento !== null && novoTipo !== null) {
                    this.nome = novoNome;
                    this.procedimento = novoProcedimento;
                    this.tipo = novoTipo;

                    salvarNoLocalStorage();
                    renderCards();
                }
            };

            divCard.appendChild(btnAlterar);
            divCard.appendChild(btnExcluir);
        }
    }

    const renderCards = () => {
        listaUl.innerHTML = "";
        listaCards.forEach((card, index) => {
            card.criarCard(index);
        });
    };

    const img2 = "images/cabelos/cabelo-ondulado.jpg";

    addCard.addEventListener('click', () => {
        if (inputNome.value === "" || inputProcedimento.value === "" || inputTipoCabelo.value === "") {
            alert("Por favor preencha todos os campos");
        } else {
            const card = new Card(img2, inputNome.value, inputProcedimento.value, inputTipoCabelo.value);
            listaCards.push(card);
            salvarNoLocalStorage();
            renderCards();

            inputNome.value = "";
            inputProcedimento.value = "";
            inputTipoCabelo.value = "";
            console.log(listaCards)
        }

    });
}
card();

function salvarNoLocalStorage() {
    localStorage.setItem("cards", JSON.stringify(listaCards));
}

// window.addEventListener('beforeunload', () => {
//     localStorage.clear();
// });