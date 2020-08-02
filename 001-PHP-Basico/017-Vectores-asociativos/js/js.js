jQuery(document).ready(function($) {

    console.log("OK");

    var input = document.querySelectorAll("input");

    input[5].addEventListener("click", function(argument) {

        argument.preventDefault();

        var datos = {

            valor1: input[0].value,
            valor2: input[1].value,
            valor3: input[2].value,
            valor4: input[3].value,
            valor5: input[4].value

        };

        var dataString = JSON.stringify(datos);

        console.log(datos);

        $.post("php/vector.php", {

            datos: dataString

        }).done(function(data) {

            var obj = JSON.parse(data);
            console.log(obj);

        });
    });

});