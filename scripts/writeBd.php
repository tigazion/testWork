<? 

$user = "root";
$pass = "";
$host = "localhost";
$dbname = "testform";
try {  
$DBH = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass); 
$DBH->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

$STH = $DBH->prepare("INSERT INTO client (name,surname,contract,number,typeClient) values (:name, :surname, :contract,:number,:typeClient)"); 

$STH->bindParam(':name', $name);
$STH->bindParam(':surname', $surname);
$STH->bindParam(':contract', $contract);
$STH->bindParam(':number', $number);
$STH->bindParam(':typeClient', $typeClient);

$name = $_POST["name"];
$surname = $_POST["surname"];
$contract = $_POST["contract"];
$number = $_POST["number"];
if(empty($contract)){
    $typeClient = "Физ лицо";
    $contract = "0";
}else{
    $typeClient = "Юр лицо";
}

$STH->execute();
}  
catch(PDOException $e) {  
    echo "Хьюстон, у нас проблемы.";  
    file_put_contents('PDOErrors.txt', $e->getMessage(), FILE_APPEND);  
}
?>