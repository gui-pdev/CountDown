function secao1() {
    const um = document.getElementById('cup');
    const dois = document.getElementById('before-edits');
    const tres = document.getElementById('stats');
    
    um.style.display = "block"; // Mostra a seção
    dois.style.display = "none"; // Esconde a seção
    tres.style.display = "none"; // Esconde a seção
}

function secao2() {
    const um = document.getElementById('cup');
    const dois = document.getElementById('before-edits');
    const tres = document.getElementById('stats');
    
    um.style.display = "none";
    dois.style.display = "block";
    tres.style.display = "none";
}

function secao3() {
    const um = document.getElementById('cup');
    const dois = document.getElementById('before-edits');
    const tres = document.getElementById('stats');
    
    um.style.display = "none";
    dois.style.display = "none";
    tres.style.display = "block";
}