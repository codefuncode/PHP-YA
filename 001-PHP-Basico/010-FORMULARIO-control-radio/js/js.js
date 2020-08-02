jQuery(document).ready(function($) {
    var valor = document.querySelectorAll('[type="text"]');
    var radio = document.querySelectorAll('[type="radio"]');
    var ecuacion = '';
    $("[type='button']").click(
        function(event) {
            event.stopPropagation();

            // var myForm = document.getElementById('myForm');
            // var formData = new FormData(myForm);

            // console.log(formData);
            var formData = new FormData();
            formData.append('key1', 'value1');
            formData.append('key2', 'value2');

            // Display the key/value pairs
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
        });

    function envia() {

        $.post(
            "test.php", {
                name: "John",
                time: "2pm"
            }).done(function(data) {
            // alert("Data Loaded: " + data);
        });
    }
});