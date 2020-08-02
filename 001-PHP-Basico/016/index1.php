<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<title>Document</title>
</head>
<body>
	  <?php
$ar = fopen("../015/datos.txt", "r") or die("No se pudo abrir el archivo");
while (!feof($ar)) {
    $linea = fgets($ar);
    // $lineasalto = nl2br($linea);
    // echo $lineasalto;
    echo $linea;
}
fclose($ar);
?>

</body>
</html>
