let btn = document.getElementById('btn-comentar');
let comentariosDiv = document.getElementById('comentarios');
let mensagensErro = [];

let comentarios = [];

btn.addEventListener('click', function() {
    mensagensErro = [];

    let nome = document.getElementById('nome').value.trim();
    let comentario = document.getElementById('comentario').value.trim();

    if (nome === '') {
        mensagensErro.push("Por favor, preencha o campo 'Seu nome'.");
    }
    if (comentario === '') {
        mensagensErro.push("Por favor, preencha o campo 'Deixe seu comentário'.");
    }

    if (mensagensErro.length > 0) {
        exibirMensagensErro();
        return;
    }

    let novoComentario = {
        nome: nome,
        comentario: comentario
    };

    comentarios.push(novoComentario);

    imprimirComentarios();
    document.getElementById('nome').value = '';
    document.getElementById('comentario').value = '';
});

function exibirMensagensErro() {
    let mensagensErroDiv = document.getElementById('mensagens-erro');
    mensagensErroDiv.innerHTML = '';

    mensagensErro.forEach(function(mensagem) {
        let mensagemErro = document.createElement('p');
        mensagemErro.textContent = mensagem;
        mensagemErro.style.color = "red";
        mensagensErroDiv.appendChild(mensagemErro);
    });
}

function imprimirComentarios() {
    comentariosDiv.innerHTML = '';
    comentarios.forEach(function(comentario) {
        comentariosDiv.innerHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${comentario.nome}</h5>
                    <p class="card-text">${comentario.comentario}</p>
                </div>
            </div>
        `;
    });
}

