function del(id) {
    $.ajax({
        url: '/user/'+id,
        method: 'DELETE',
        data: []
    }).done(function( data ) {
        console.log(data);
    });
}
