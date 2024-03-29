
jQuery(document).ready(function () {

    jQuery('#bntCancelar').click(function () {
        //$('#bntSubmit').show();
        //$('#bntSalvar').hide();
        $('#bntCancelar').hide();
        $('#Id').val("");
        $('#Nome').val("");
        $('#Descricao').val("");

        $('#Ativo select').val("true");
    });

    GetMethod(null);
});

function GetByID(id) {
    //$('#bntSubmit').hide();
    //$('#bntSalvar').show();
    $('#bntCancelar').show();

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:59271/Api/Autores/" + id,
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    }

    $.ajax(settings).done(function (response) {
        $('#Id').val(response.Id);
        $('#Nome').val(response.Nome);
        $('#Descricao').val(response.Descricao);

        $('#Ativo select').val(response.Ativo);
    });

}

function GetMethod(object) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:59271/Api/Autores",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    }

    $.ajax(settings).done(function (response) {
        RefrestGrid(response);
    });

    return false;
}

function RefrestGrid(contentValue) {
    $('#tDataGrid').empty();
    $('#tDataGrid').html('<tbody>'
        + '<tr>'
        + '<th>ID</th>'
        + '<th>Nome</th>'
        + '<th>Descrição</th>'
        + '<th>Opções</th>'
        + '</tr>'
        + '</tbody>');

    $.each(contentValue, function (index, value) {
        var row = '<tr>'
            + '<td>' + value.Id + '</td>'
            + '<td>' + value.Nome + '</td>'
            + '<td>' + value.Descricao + '</td>'
            + '<td>'
            + '<div    class=\'col-md-12\' style=\'float: right;\'>'
            + '<div    class=\'col-md-6\'>'
            + '<button class=\'btn btn-block btn-danger col-md-3 ajax btn-delete-event\' send-post=\'Autores\' type=\'button\'  value=\''+ value.Id + '\' >Remover</button>'
            + '</div>'
            + '<div     class=\'col-md-6\'>'
            + '<button  class=\'btn btn-block btn-success col-md-3 btn-editing-event\' send-post=\'Autores\' type=\'button\'  value=\'' + value.Id + '\' >Editar</button>'
            + '</div>'
            + '</div>'
            + '</td>'
            + '</tr>';
        $('#tDataGrid').append(row);
    });
    SetGridClickEvents();
}



