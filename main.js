const form = document.getElementById('formAtividade');
const nomes = []; /* cria uma string "[]" para registrar os nomes */
const numeros = []; /* cria uma string "[]" para registrar os numeros */

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nomeContato');
    const inputNumero = document.getElementById('numeroContato');

    if (nomes.includes(inputNome.value)) { /* Verifica se o nome ja foi incluido anteriormente */
        alert(`O contato ${inputNome.value} já existe!`);
    }

    else if (numeros.includes(inputNumero.value)) { /* Verifica se o numero ja foi incluido anteriormente */
        alert(`O numero ${inputNumero.value} já existe!`);
    }

    else { /* Se não foi inserida, a função segue normalmente */
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);
    
        let linha = '<tr>';
        linha += `<td id="tNome">${inputNome.value}</td>`;
        linha += `<td id="tNumero">${inputNumero.value}</td>`;
    
        linhas += linha;
    
        inputNome.value = '';
        inputNumero.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
