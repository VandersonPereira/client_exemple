function myFunction(item,index,arr) {
    console.log(item.name);
}

// Lendo DOM
$(document).ready(function(){

    // Evento ao clicar no botão para POST
    $("#post").click(function(){

        // Cria objeto para armazenar os valores preenchidos na página
        var person = new Object();
        person.name = $('#person_name').val();
        person.last_name = $('#person_last_name').val();
        person.of_age = $('#of_age_yes').is(':checked') ? true : false; 

        // Função Ajax responsável por enviar as informações para o back-end
        $.ajax ({
            type: 'POST',
            url: 'http://localhost:5000/api/todo/',
            cache: false,
            data: JSON.stringify(person),
            dataType: 'JSON',
            contentType: "application/json; charset=utf-8",
            success: function(result, status, xhr){
              alert('Seja bem vindo ' + result.name + ' ' + result.lastName + '. Você é ' + (result.isOfAge ? 'maior de idade.': 'menor de idade.'));
            },
            error: function(xhr, status, error){
                alert('Erro:' + xhr + ' > ' + status + ' > ' + error);
            }
        });

        // Limpa os campos na página volta o check-box para 'Sim' para uma nova inserção
        $('#person_name').val('');
        $('#person_last_name').val('');
        $('#of_age_yes').prop('checked', true);

    });

    // Evento ao clicar no botão para GET
    $("#get").click(function(){

        $.ajax ({
            type: 'GET',
            url: 'http://localhost:5000/api/todo/',
            cache: false,
            dataType: 'JSON',
            contentType: "application/json; charset=utf-8",
            success: function(result, status, xhr){
                result.forEach(myFunction);
            },
            error: function(xhr, status, error){
                console.log('Erro:' + xhr + ' > ' + status + ' > ' + error);
            }
        });
    });
});
