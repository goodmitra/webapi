<?php
$curl = curl_init();
$data = [
"number" => "919001480042",// number sender
"message" => "hello",
"type" => "chat", // type delivery            
"to" => ["917014518593,917665914233"], // number receiver
];

curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_URL, 'http://app.goodmitra.com/send');
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);

curl_setopt($curl, CURLOPT_HTTPHEADER, ['Accept: application/json','Content-Type: application/json']);
$result = curl_exec($curl);
curl_close($curl);

echo "<pre>";
print_r($result);

?>
