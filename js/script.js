$(document).ready(function(){
    $("#enviar").click(function(){
        
        //Create object
        var item = new Object();
        item.name = $('#name').val();
        item.ativo = true;

        $ajax({
            url: 'http://localhost:5000/api/todo/',
            type: 'POST',
            dataType: 'json',
            data: item,
            success: function(data, textStatus, xhr){
                alert(data);
            },
            error: function(xhr, textStatus, errorThrown){
                alert('Error in Operation');
            }
        });
    });
});