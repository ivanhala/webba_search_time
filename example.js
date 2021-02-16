var offset = new Date().getTimezoneOffset();
var data = {
		'action' : 'wbk_search_time',
		'days': '',
		'times': '',
		'service': 5,
		'date': '2021/02/26',
 		'offset': offset
};
jQuery.post( wbkl10n.ajaxurl, data, function(response) {
    if ( response == 0 || response == -1 || response == -2 || response == -3 || response == -4 || response == -4 || response == -6 || response == -7){
        console.log('error');
    } else {
        response_obj = jQuery.parseJSON( response );
    }
    var time_slots = response_obj.data;
});
