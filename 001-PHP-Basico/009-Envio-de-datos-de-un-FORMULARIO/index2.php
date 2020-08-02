<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
	<title>Documento</title>
</head>
<body>
<?php
//  Uso de la variable global $_REQUEST esta desaconsejado por peligros de seguridad
echo "El nombre ingresado es:";
echo $_POST['nombre'];
?>
</body>
</html>
