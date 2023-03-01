<?php
require_once("class.phpmailer.php");
    
	$result = array("errorCode" => 0);
	
	if (isset($_POST['name']) && strlen(trim($_POST['name'])) > 0)
		$name = stripslashes(strip_tags($_POST['name']));
	else
		$name = null;
	if (isset($_POST['email']) && strlen(trim($_POST['email'])) > 0)
		$email = stripslashes(strip_tags($_POST['email']));			
	else	
		$email = null;
	if (isset($_POST['message']) && strlen(trim($_POST['message'])) > 0)
		$message = stripslashes(strip_tags($_POST['message']));			
	else	
		$message = null;
	
	
	if (!$name || !$email || !$message)
	{
		echo json_encode(array("errorCode" => 1, "errorText" => "Please fill in all fields."));		
	} 			
	elseif (!isValidEmail($email))
	{
		echo json_encode(array("errorCode" => 2, "errorText" => "Please provide a valid email address."));
	}				
	else
	{
		
		//poslat newsleter na dany email
		$mail = new PHPMailer(); //		  							
		$mail->SetFrom($email, $name);							
		$mail->AddAddress("radekpleskac@gmail.com", "Radek Pleskac");		
		$mail->Subject = "Message sent from www.radekpleskac.com";	
		$mail->AltBody = "From:" . $name . " | " . $message; 		
		$mail->MsgHTML("From:" . $name . "<br />____________________________________________________<br />Message: <br />" . $message);		
		
		if(!$mail->Send()) {
		  $result = array("errorCode" => 2, "errorText" => "Error occured while sending the message.");		  		  
		}
												
		echo json_encode($result);		
	}	
	
	//pomocne funkce
	function isValidEmail($email)
	{
		if (preg_match("/^[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(\.[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+([a-z]{2}|aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/", $email))
		{
			list($username, $domain) = explode('@', $email);
			if (!checkdnsrr($domain, 'MX') && !checkdnsrr($domain, 'A')) 
			{
				return false;
			}
			return true;
		}
		return false; 
	}
		
?>