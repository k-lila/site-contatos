
let form = document.getElementById('adicioneForm');
let listaContatos = [];
let htmlContato = '';

function armazenaContato() {
    let nome = document.getElementById('nomeContato');
    let tel = document.getElementById('telContato');
    let tipo = document.getElementById('tipoContato');
    let sobre = document.getElementById('sobreContato');
    if (tipo == '') {tipo = '?'};
    if (sobre == '') {sobre = false};
    listaContatos.push([nome.value, tel.value, tipo.value, sobre.value]);
    nome.value = '';
    tel.value = '';
    tipo.value = '';
    sobre.value = '';
};

function adicionaContato() {
    let num = listaContatos.length - 1;
    htmlContato += '<div class="contato"><tr class="info">';
    htmlContato += `<td>${listaContatos[num][0]}</td>`;
    htmlContato += `<td>${listaContatos[num][1]}</td>`;
    htmlContato += `<td>${listaContatos[num][2]}</td>`;
    htmlContato += `<td id="mais${num}"></td>`;
    htmlContato += '<tr class="coment"><td colspan="3">';
    htmlContato += `<p id="coment${num}">${listaContatos[num][3]}</p></td></tr></div>`;
};

function atualizaContatos() {    
    document.querySelector('tbody').innerHTML = htmlContato;
};

function showContato() {
    const table = document.querySelector('#pessoas table');    
    if (listaContatos.length == 0) {
        table.style.display = 'none';
    } else {
        table.style.display = '';
    }
};

function botao() {        
    num = listaContatos.length;
    for (let i = 0; i < num; i++) {
        const botao = document.getElementById(`mais${i}`);
        if (listaContatos[i][3] == false) {
            botao.innerHTML = '<button class="invalido">-</button>';
            document.getElementById(`coment${i}`).style.display = 'none'
        } else {
            botao.innerHTML = '<button class="valido">+</button>';
            document.getElementById(`coment${i}`).style.display = 'none';
            let showComent = true;
            botao.addEventListener('click', function(e) {
                if (showComent) {
                    document.getElementById(`coment${i}`).style.display = '';
                    botao.innerHTML = '<button class="valido">-</button>'
                } else {
                    document.getElementById(`coment${i}`).style.display = 'none';
                    botao.innerHTML = '<button class="valido">+</button>'
                }
                showComent = !showComent;
            })
        }
    }
};

showContato()
form.addEventListener('submit', function(e) {
    e.preventDefault();
    armazenaContato();
    adicionaContato();
    atualizaContatos();
    showContato();
    botao();
});
