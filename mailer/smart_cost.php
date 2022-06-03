<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$companyName = $_POST['company_name'];
$city = $_POST['city'];
$direction = $_POST['direction'];
$website = $_POST['website'];
$address = $_POST['address'];
$vacancy = $_POST['vacancy'];
$employeesNumber = $_POST['employees_number'];
$requirements = $_POST['requirements'];
$salary = $_POST['salary'];
$schedule = $_POST['schedule'];
$description = $_POST['description'];
$conditions = $_POST['conditions'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'd.boytsov.aroundgroup@gmail.com';                 // Наш логин
$mail->Password = 'hvstgrcnishhihhu';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('d.boytsov.aroundgroup@gmail.com', 'HR');   // От кого письмо 
$mail->addAddress('altmake48@gmail.com');     // Add a recipient


//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Запрос на стоимость от ' . $name . '';
$mail->Body    = '
		Пользователь оставил данные <br> 
		Контактное лицо: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '<br>
	Комментарий: ' . $comment . '<br>
	Название компании: ' . $companyName . '<br>
	Город: ' . $city . '<br>
	Род деятельности: ' . $direction . '<br>
	Сайт: ' . $website . '<br>
	Адрес: ' . $address . '<br>
	Название вакансии: ' . $vacancy . '<br>
	Необходимое кол-во сотрудников: ' . $employeesNumber . '<br>
	Требование к вакансии: ' . $requirements . '<br>
	Заработная плата или система мотивации: ' . $salary . '<br>
	График работы: ' . $schedule . '<br>
	Описание деятельности: ' . $description . '<br>
	Условия работы: ' . $conditions . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>