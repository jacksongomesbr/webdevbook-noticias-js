var noticias = [];

function atualizarLista(noticia) {
    var lista = $('#noticias-recentes-list');
    var li = $('<li id="noticia-' + noticia.id + '">');
    li.addClass('noticia');
    var p_titulo = $('<p>');
    p_titulo.addClass('titulo');
    p_titulo.attr('onclick', 'mostrarNoticia(' + noticia.id + ')');
    p_titulo.html(noticia.titulo);
    var p_conteudo = $('<p>');
    p_conteudo.addClass('conteudo');
    p_conteudo.html(noticia.conteudo
        + '<br>'
        + '<span>------------------</span>'
        + '<br>'
        + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>');
    li.append(p_titulo, p_conteudo);
    p_conteudo.hide();
    lista.append(li);
}

function salvar(form) {
    var titulo = $('#frm-titulo').val();
    var conteudo = $('#frm-conteudo').val();
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        conteudo: conteudo
    };
    noticias.push(noticia);
    atualizarLista(noticia);
    form.reset();
}

function mostrarNoticia(id) {
    $('.conteudo', '#noticia-' + id).show();
}

function ocultarNoticia(id) {
    $('.conteudo', '#noticia-' + id).hide();
}
