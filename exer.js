// Captura os elementos
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.getElementById('lista-nao-ordenada');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adiciona conteúdo ao elemento 'h1'
titulo.innerText = 'Bem-vindo ao Meu Projeto';

// Adiciona conteúdo ao elemento 'a'
link.innerText = 'Visite Prozeducacao';

// Adiciona três itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adiciona três itens com links para outros sites na lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
    <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
`;