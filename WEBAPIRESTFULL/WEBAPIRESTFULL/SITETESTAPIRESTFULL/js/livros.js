
var generosList;
var editorasList;

/* Ao carregar o documento o mesmo inicia o conteudo desde script*/
jQuery(document).ready(function () {
    var settings = {
        
        "crossDomain": true,
        "url": "http://localhost:59271/Api/Generos",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    }
    $.ajax(settings).done(function (response) {
        generosList = response;
        $.each(response, function (index, value) {
            $('#Genero')[0].innerHTML += '<option value=\'' + value.Id + '\'>' + value.Tipo + '<\option>';

        });
    });

    var settings = {
        
        "crossDomain": true,
        "url": "http://localhost:59271/Api/Editoras",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    }
    $.ajax(settings).done(function (response) {
        editorasList = response;
        $.each(response, function (index, value) {
            $('#Editora')[0].innerHTML += '<option value=\'' + value.Id + '\'>' + value.Nome + '<\option>';

        });
        GetMethod(null);
    });

});

function GetMethod(object) {
    var settings = {
        
        "crossDomain": true,
        "url": "http://localhost:59271/Api/Livros",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    }

    $.ajax(settings).done(function (response) {
        RefreshGrid(response);
    });

    return false;
}

function translateField(fieldValue, listTranslate, toValue) {
    var retorno;
    $.each(listTranslate, function (index, value) {
        if (value.Id == fieldValue)
            retorno = value[toValue];
    });
    return retorno;
}

function RefreshGrid(contentValue) {
    $('#tDataGrid').empty();
    $('#tDataGrid').html('<tbody>'
        + '<tr>'
        + '<th>ID</th>'
        + '<th>Título</th>'
        + '<th>Editora</th>'
        + '<th>Gênero</th>'
        + '<th>Observações</th>'
        + '<th>Opções</th>'
        + '</tr>'
        + '</tbody>');

    $.each(contentValue, function (index, value) {
        var row = '<tr>'
            + '<td>' + value.Id + '</td>'
            + '<td>' + value.Titulo + '</td>'
            + '<td>' + translateField(value.Editora, editorasList, 'Nome') + '</td>'
            + '<td>' + translateField(value.Genero, generosList, 'Tipo') + '</td>'
            + '<td>' + value.Observacoes + '</td>'
            + '<td>'
            + '<div    class=\'col-md-12\' style=\'float: right;\'>'
            + '<div    class=\'col-md-6\'>'
            + '<button class=\'btn btn-block btn-danger col-md-3 btn-delete-event\' type=\'button\' send-post=\'Livros\' value=\'' + value.Id + '\'>Remover</button>'
            + '</div>'
            + '<div     class=\'col-md-6\'>'
            + '<button  class=\'btn btn-block btn-success col-md-3 btn-editing-event\' send-post=\'Livros\' value=\'' + value.Id + '\' type=\'button\' \>Editar</button>'
            + '</div>'
            + '</div>'
            + '</td>'
            + '</tr>';
        $('#tDataGrid').append(row);
    });
    SetGridClickEvents();
}



