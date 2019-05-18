$(document).ready(function(){
    //var x = $(location).attr('href');

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    l = getUrlParameter('l');
    $("li[title='"+l+"']").trigger('click');
    s = getUrlParameter('s');
    $("li[title='"+s+"']").trigger('click');

});

