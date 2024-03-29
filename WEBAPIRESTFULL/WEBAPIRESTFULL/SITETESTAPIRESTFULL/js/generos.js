
jQuery(document).ready(function () {


    GetMethod(null);
});

function GetByID(id) {
    //$('#bntSubmit').hide();
    //$('#bntSalvar').show();
    $('#bntCancelar').show();

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:59271/Api/Generos/" + id,
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    }

    $.ajax(settings).done(function (response) {
        $('#Id').val(response.Id);
        $('#Tipo').val(response.Tipo);
        $('#Descricao').val(response.Descricao);
		$('#Editora').val(response.Descricao);
        $('#Ativo select').val(response.Ativo);
    });

}


function Deleting(id) {
    var settings = {
        "crossDomain": true,
        "url": "http://localhost:59271/Api/Generos/" + id,
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*"
        }
    }

    $.ajax(settings).done(function (response) {
        GetMethod(null);
    });
}

function GetMethod(object) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "url": "http://localhost:59271/Api/Generos",
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
			+ '<td>' + value.Tipo + '</td>'
			+ '<td>' + value.Descricao + '</td>'

            + '<td>'
            + '<div    class=\'col-md-12\' style=\'float: right;\'>'
            + '<div    class=\'col-md-6\'>'
            + '<button class=\'btn btn-block btn-danger col-md-3 ajax btn-delete-event\' send-post=\'Generos\' type=\'button\'  value=\''+ value.Id + '\' >Remover</button>'
            + '</div>'
            + '<div     class=\'col-md-6\'>'
            + '<button  class=\'btn btn-block btn-success col-md-3 btn-editing-event\' send-post=\'Generos\' type=\'button\'  value=\'' + value.Id + '\' >Editar</button>'
            + '</div>'
            + '</div>'
            + '</td>'
            + '</tr>';
        $('#tDataGrid').append(row);
    });
}



