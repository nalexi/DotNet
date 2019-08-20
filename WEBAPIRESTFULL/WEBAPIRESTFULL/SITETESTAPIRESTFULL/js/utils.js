var urlBaseApi = "http://localhost:59271/Api/"

function buildUrlApi(sendpost, id = '') {
    if (id !== '')
        id = '/' + id;

    return urlBaseApi + sendpost + id;
}


jQuery(document).ready(function () {
    /* Indica que o evento submit do form irá realizar esta ação agora*/
    jQuery('.form-post').submit(function () {
        /* Neste contesto 'this' representa o form deste ID  #myform */
        var id = $($(this)[0][1]).val();
        var dados = $(this).serialize();
        var sendpost = $(this).attr('send-post');
        var callstr = $(this).attr('call');
        method = "POST";

        if (id !== "") {
            method = "PUT";

            id = "/" + id;

        }

        var settings = {
            "crossDomain": true,
            "url": buildUrlApi(sendpost, id),
            "method": method,
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "*/*"
            },
            "data": dados
        }

        $.ajax(settings).done(function (response) {
            window[callstr](response);
        });

        return false;
    });
    SetGridClickEvents();
});
function SetGridClickEvents() {

    $('.btn-delete-event').click(function () {
        var id = $(this).attr('value');
        var sendpost = $(this).attr('send-post');

        var settings = {
            "crossDomain": true,
            "url": buildUrlApi(sendpost, id),
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "*/*"
            }
        }

        $.ajax(settings).done(function (response) {
            GetMethod(null);
        });
    });

    $('.btn-editing-event').click(function () {
        if ($('#collapse-btn')[0].innerHTML.indexOf('fa-plus') > -1)
            $('#collapse-btn').click();

        var id = $(this).attr('value');
        var sendpost = $(this).attr('send-post');

        var settings = {
            "crossDomain": true,
            "url": buildUrlApi(sendpost, id),
            "method": "GET",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "*/*"
            }
        }
        $.ajax(settings).done(function (response) {
            $.each(response, function (index, value) {
                $('input[name="' + index + '"]').val(value);
            });
            $('#bntCancelar').show();
        });

    });

}
